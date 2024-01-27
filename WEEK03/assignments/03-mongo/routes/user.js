const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const z = require("zod");

const userSchema = z.object({
    username: z.string(),
    password: z.string().min(4).max(100),
  });

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const zodResponse = userSchema.safeParse(req.body);
    if (zodResponse.data) {
      try {
        const response = await User.create(req.body);
        res.status(201).json({ message: 'User created successfully', response })
      } catch (error) {
        throw new Error(error);
      }
    } else {
      res.status(400).send("Invalid input");
    }

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try {
        const response = await Course.find();
        res.status(200).json({ message: 'Courses fetched successfully', response })
      } catch (error) {
        throw new Error(error);
      }
});


// courId: 658bfdd1fb1bbb7032458d9b
router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const { courseId } = req.params;
    console.log(courseId);
    try {
        const response = await Course.findById(courseId);
        res.status(200).json({ message: `Course found with id-${courseId}`, response })
    } catch (error) {
        throw new Error(error);
    }
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router