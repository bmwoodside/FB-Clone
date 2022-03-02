const { response, request } = require('express');
const { UserPost } = require('../models/userPost.model');

// Create a new Post
module.exports.createPost = (req, res) => {
    const { userPostedBy, userPostContent, userPostMediaContent, userPostLikedUsers, userPostUserComments } = req.body;
    UserPost.create({
        userPostedBy,
        userPostContent,
        userPostMediaContent,
        userPostLikedUsers,
        userPostUserComments
    })
        .then(userPost => res.json(userPost))
        .catch(err => res.json(err));
}

// get all posts
module.exports.getAllPosts = (req, res) => {
    UserPost.find({})
        .then(userPost => res.json(userPost))
        .catch(err => res.json(err));
}

// get single post
module.exports.getSinglePost = (req, res) => {
    UserPost.findOne({ _id: req.params._id })
        .then(userPost => res.json(userPost))
        .catch(err => res.json(err));
}

// update single post
module.exports.updateSinglePost = (req, res) => {
    UserPost.findOneAndUpdate({ _id: req.params._id }, req.body, {new: true})
        .then(updatedPost => res.json(updatedPost))
        .catch(err => res.json(err))
}

// delete single post
module.exports.deletePost = (req, res) => {
    UserPost.deleteOne({ _id: req.params._id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err));
}