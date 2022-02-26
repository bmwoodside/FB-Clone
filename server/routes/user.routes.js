const UserController = require('../controllers/user.controller');

module.exports = function(app) {
    app.post('/api/users/create', UserController.createUser);
    app.put('api/users/:_id', UserController.updateUser);
    app.delete('/api/users/:_id/delete', UserController.deleteUser);
}