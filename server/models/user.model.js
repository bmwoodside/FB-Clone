const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    userEmail: {
        type: String,
        required: [true, "Email is required."],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    userPassword: { // oh god how do I implement BCrypt here?
        type: String,
        required: [true, "Password is required."],
        minlength: [3, "Password must be at least 3 characters long."]
    }
}, { timestamps: true });

UserSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );

UserSchema.pre('validate', function(next) {
    if (this.userPassword !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match Confirm Password');
    }
    next();
});

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.userPassword, 10)
        .then(hash => {
            this.userPassword = hash;
            next();
        });
});

module.exports.User = mongoose.model('User', UserSchema);