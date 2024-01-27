const mongoose = require('mongoose');

// Connect to MongoDB
const connectDb = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.log(error);
    }
  };

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 4,
      required: true,
    },
    publishedCourses: {
      type: Array,
      default: [],
    },
  });
  
  const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 4,
      required: true,
    },
    purchasedCourses: {
      type: Array,
      default: [],
    },
  });
  
  const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "No description provided",
    },
    price: {
      type: String,
      default: "0",
    },
    imageLink: {
      type: String,
      default: "https://unsplash.com/photos/person-holding-pencil-and-stick-note-beside-table-rH8O0FHFpfw",
    },
  });

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
    Admin,
    User,
    Course,
    connectDb,
}