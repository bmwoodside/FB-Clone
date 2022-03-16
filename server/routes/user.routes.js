const UserController = require('../controllers/user.controller');

module.exports = function(app) {
    // delete this route before production build
    // route is to Get All Users - testing purposes only!
    app.get('/api/users/getall', UserController.getAllUsers)

    app.post('/api/users/register', UserController.register);
    app.put('/api/users/:_id', UserController.updateUser);
    app.delete('/api/users/:_id/delete', UserController.deleteUser);
    app.get('/api/users/login', UserController.login)
    app.get('/api/users/:_id', UserController.getUser)

    
}