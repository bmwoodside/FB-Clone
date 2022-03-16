const { response, request } = require('express');
const { User } = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// cookie is names "usertoken" (all lower case - definitely will forget this).

// Create new User
module.exports.register = (req, res) => {
    User.find({ userEmail: req.body.userEmail })
        .then(usersWithMatchingEmail => {
            // if no users already exist in the DB, then register the user info.
            if (usersWithMatchingEmail.length === 0) {
                User.create(req.body)
                .then(user => {
                    const userToken = jwt.sign({
                        id: user._id
                    }, process.env.SECRET_KEY);
        
                    res
                        .cookie("usertoken", userToken, process.env.SECRET_KEY, {
                            httpOnly: true
                        })
                        .json({ msg: "success!", user: user });
                })
                .catch(err => res.json(err));
            } else {
                res.json({ errors: {matchingEmail: { message: "This email is already in use." }} });
                console.log("This email address is already in use.")
            }
        })
        .catch(err => console.log("error:", err));
}

// Login
module.exports.login = async (req, res) => {
    const user = await User.findOne({ userEmail: req.body.userEmail });

    if (user === null) {
        // only true when user email not registered in database
        console.log("user does not exist")
        console.log("user:", user)
        return res.json({ msg: "User Login does not exist. Please try again, or Create an Account." });
    }

    //only makes it here if we found a user by their email
    const correctPassword = await bcrypt.compare(req.body.userPassword, user.userPassword);

    if (!correctPassword) {
        // password doesn't match database
        console.log("bad password error")
        return res.json({ msg: "Password is incorrect" });
    }

    // if passwords matched, create user token
    const userToken = jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY);

    res
        .cookie("usertoken", userToken, process.env.SECRET_KEY, {
            httpOnly: true
        })
        .json({ msg: "success!"});
}

//Logout
module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
}

// get all users
module.exports.getAllUsers = (req, res) => {
    User.find().sort([[ 'userEmail', -1]])
        .then(users => res.json(users))
        .catch(err => res.json(err));
}

// get single user
module.exports.getUser = (req, res) => {
    User.findOne({ _id: req.params._id })
        .then(user => res.json(user))
        .catch(err => res.json(err));
}

// update one user
module.exports.updateUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params._id }, req.body, {new: true})
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.json(err))
}

// delete user
module.exports.deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params._id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err));
}

// temporary delete-all for cleaning up all my test entries
module.exports.deleteAllUsers = (req, res) => {
    User.deleteMany({})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err));
}