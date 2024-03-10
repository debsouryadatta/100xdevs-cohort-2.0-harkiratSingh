const express = require("express");
const router = express.Router();
const zod = require("zod");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");

const signupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
})

const signinSchema = zod.object({
    username: zod.string(),
    password: zod.string()
})

const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.get("/ding", async (req, res)=> {
    res.send("dong");
})

router.post("/signup", async (req, res)=> {
    const body = req.body;
    const {success} = signupSchema.safeParse(body);

    if(!success){
        res.status(411).json({message: "Email already taken / Incorrect inputs"});
    }
    const user = await User.findOne({username: body.username});
    if(user){
        res.status(411).json({message: "Email already taken / Incorrect inputs"});
    }
    const dbUser = await User.create(body);

    /// ----- Create new account ------
    await Account.create({
        userId: dbUser._id,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({userId: dbUser._id}, JWT_SECRET);
    
    res.status(200).json({message: "User created successfully", token: token});
});

router.post("/signin", async(req,res)=> {
    const body = req.body;
    const {success} = signinSchema.safeParse(body);

    if(!success){
        res.status(411).json({message: "Error while logging in"});
    }
    const dbUser = await User.findOne({username: body.username, password: body.password});
    if(dbUser){
        const token = jwt.sign({userId: dbUser._id}, JWT_SECRET);
        res.status(200).json({token: token});
        return;
    }

    res.status(411).json({
        message: "Error while logging in"
    })

})

router.put("/", authMiddleware, async(req, res)=> {
    const body = req.body;
    const {userId} = req.user;
    const {success} = updateBody.safeParse(body);

    if (!success) {
        res.status(411).json({message: "Error while updating information"})
    }
    
    const user = await User.findOneAndUpdate({_id: userId}, body);
    res.status(200).json({message: "Updated successfully"});
})


router.get("/bulk", async(req, res)=> {
    const filter = req.params.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = router;

