const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const z = require("zod");
const { Admin, Course } = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const adminSchema = z.object({
  username: z.string(),
  password: z.string().min(4).max(100),
});

const courseSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.string(),
  imageLink: z.string(),
});

// Admin Routes
router.post("/signup", async (req, res, next) => {
  // Implement admin signup logic
  const zodResponse = adminSchema.safeParse(req.body);
  if (zodResponse.data) {
    let { username, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    try {
      const response = await Admin.create({ username, password});
      const token = jwt.sign(
        { id: response.id, username: response.username },
        process.env.JWT_SECRET,
        { expiresIn: "365d" }
      );
      res.status(201).json({ message: "Admin created successfully", token });
    } catch (err) {
      next(err);
    }
  } else {
    res.status(400).send("Invalid input");
  }
});

// Ma'am Asha token - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGQyM2IwYTI4NmFiZTc4ZmQwZjdlOCIsInVzZXJuYW1lIjoiTWEnYW0gQXNoYSIsImlhdCI6MTcwMzc1MDc2OCwiZXhwIjoxNzM1Mjg2NzY4fQ.eb1Y3KtvX8yz75u2fZFrWGQhiUS5HxcEnjjVzfz098s

router.post("/signin", async (req, res, next) => {
  // Implement admin signin logic
  const zodResponse = adminSchema.safeParse(req.body);
  if (zodResponse.data) {
    let { username, password } = req.body;
    try {
      const admin = await Admin.findOne({ username });
      const isPasswordCorrect = await bcrypt.compare(password, admin.password);
      if(isPasswordCorrect){
        const token = jwt.sign(
          { id: admin.id, username: admin.username },
          process.env.JWT_SECRET,
          { expiresIn: "365d" }
        );
        res.status(201).json({ message: "Admin signed in successfully", token });
      } else res.status(400).send("Wrong credentials");
    } catch (err) {
      next(err);
    }
  } else {
    res.status(400).send("Invalid input");
  }

});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const zodResponse = courseSchema.safeParse(req.body);
  if(zodResponse.data){
    try {
        const response = await Course.create(req.body);
        const response2 = await Admin.findOneAndUpdate({username: req.user.username}, {$push: {publishedCourses: response}})
        res.status(201).json({ message: 'Course created successfully', response })
    } catch (error) {
        next(error);
    }
  } else{
    res.status(400).send("Invalid input");
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const courses = await Admin.findOne({username: req.user.username})
    res.status(200).json({courses: courses.publishedCourses}); 
  } catch (error) {
    next(error);
  }
});

module.exports = router;
