const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('DB connected');
}

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
})

const User = mongoose.model('User', UserSchema);

const AccountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    balance: {
        type: Number,
        default: 0,
        required: true,
    }
})

const Account = mongoose.model('Account', AccountSchema);


module.exports = {
    connectDB, User, Account
};