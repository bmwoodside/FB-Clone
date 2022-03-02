const { response, request } = require('express');
const { User } = require('../models/user.model');

// Create new User
module.exports.createUser = (req, res) => {
    const { userEmail, userPassword, userBirthday } = req.body;
    User.create({
        userEmail,
        userPassword,
        userBirthday
    })
        .then(user => res.json(user))
        .catch(err => res.json(err));
}

// get all users
module.exports.getAllUsers = (req, res) => {
    User.find({}).sort([[ 'userEmail', -1]])
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