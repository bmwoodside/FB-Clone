const UserPostController = require('../controllers/userPost.controller')

module.exports = function(app) {
    app.post('/api/posts/create', UserPostController.createPost);
    app.put('/api/posts/:_id', UserPostController.updateSinglePost);
    app.delete('/api/posts/:_id/delete', UserPostController.deletePost);
    app.get('/api/posts/getSinglePost/:_id', UserPostController.getSinglePost);
    app.get('/api/posts/getall', UserPostController.getAllPosts);
}