const mongoose = require('mongoose');

const UserPostsSchema = new mongoose.Schema ({
    userPostedBy: {
        type: String,
        required: [true, "ID posted_by requried."],
    },
    userPostContent: {
        type: String,
        required: [true, "Post must have content."],
        minlength: [1, "Post must contain at least 1 character"],
    },
    // userPostMediaContent is if user wants to add an image/upload a video...
    userPostMediaContent: {
        type: Mixed
    },
    userPostLikedUsers: {
        type: Array
    },
    // userPostUserComments might need to be a nested document/schema...?
    userPostUserComments: {
        type: Array
    }
}, { timestamps: true });

module.exports.UserPost = mongoose.model('UserPost', UserPostsSchema);