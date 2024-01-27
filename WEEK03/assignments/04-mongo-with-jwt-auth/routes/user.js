const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");
const z = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Course } = require("../db");

const userSchema = z.object({
  username: z.string(),
  password: z.string().min(4).max(100),
});


// Asha Token - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGQ3YzZkZTdiMWFjOWJlMDJmZmY5NiIsInVzZXJuYW1lIjoiQXNoYSIsImlhdCI6MTcwMzc3MTI0NSwiZXhwIjoxNzM1MzA3MjQ1fQ.ef9inxpQkUPE_7u4V87sygo59PAreiPVWcWTK9U2q3E
// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const zodResponse = userSchema.safeParse(req.body);
  if (zodResponse.data) {
    let { username, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    try {
      const response = await User.create({ username, password });
      const token = jwt.sign(
        { id: response.id, username: response.username },
        process.env.JWT_SECRET,
        { expiresIn: "365d" }
      );
      res.status(201).json({ message: "User created successfully", token });
    } catch (err) {
      next(err);
    }
  } else {
    res.status(400).send("Invalid input");
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signin logic
  const zodResponse = userSchema.safeParse(req.body);
  if (zodResponse.data) {
    let { username, password } = req.body;
    try {
      const admin = await User.findOne({ username });
      const isPasswordCorrect = await bcrypt.compare(password, admin.password);
      if (isPasswordCorrect) {
        const token = jwt.sign(
          { id: admin.id, username: admin.username },
          process.env.JWT_SECRET,
          { expiresIn: "365d" }
        );
        res
          .status(201)
          .json({ message: "Admin signed in successfully", token });
      } else res.status(400).send("Wrong credentials");
    } catch (err) {
      next(err);
    }
  } else {
    res.status(400).send("Invalid input");
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const response = await Course.find();
    res.status(200).json({ message: "Courses fetched successfully", response });
  } catch (error) {
    throw new Error(error);
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res, next) => {
  // Implement course purchase logic
  const {courseId} = req.params;
  try {
      const course = await Course.findById(courseId);
      console.log();
      const user = await User.findOneAndUpdate({username: req.user.username}, {$push: {purchasedCourses: course}});
      res.status(200).json({ message: `Course purchased with id-${courseId}`, course })
  } catch (error) {
    next(error);
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res, next) => {
  // Implement fetching purchased courses logic
  try {
    const user = await User.findOne({username: req.user.username});
    res.status(200).json({purchasedCourses: user.purchasedCourses});
  } catch (error) {
    next(error);
  }
});

module.exports = router;


