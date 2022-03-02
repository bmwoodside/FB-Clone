const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: [true, "Email is required."], // this probably goes away with RegEX
        minlength: [3, "Email requires at least 3 characters."], // this needs RegEX
    },
    userPassword: { // oh god how do I implement BCrypt here?
        type: String,
        required: [true, "Password is required."],
        minlength: [3, "Password must be at least 3 characters long."],
    },
    // Implement minimum age requirement using their birthday
    // for now we're just storing the info - need to implement age checking
    userBirthday: {
        type: Date, // this type expected syntax is 'yyyy-mm-dd'
    },
    userDisplayName: {
        type: String
    }
}, { timestamps: true });

module.exports.User = mongoose.model('User', UserSchema);