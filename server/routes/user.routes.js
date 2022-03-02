const UserController = require('../controllers/user.controller');

module.exports = function(app) {
    app.post('/api/users/create', UserController.createUser);
    app.put('/api/users/:_id', UserController.updateUser);
    app.delete('/api/users/:_id/delete', UserController.deleteUser);
    app.get('/api/users/:_id', UserController.getUser)

    // delete this route before production build
    // route is to Get All Users - testing purposes only!
    app.get('/api/users/getall', UserController.getAllUsers)
}