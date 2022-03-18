const UserController = require('../controllers/user.controller');

module.exports = function(app) {
    // delete this route before production build
    // route is to Get All Users - testing purposes only!
    app.get('/api/users/getall', UserController.getAllUsers)

    // delete this route before production build
    // route is to DELETE ALL Users - testing purposes only (DB cleanup)
    app.delete('/api/users/deleteAll', UserController.deleteAllUsers)

    app.post('/api/users/register', UserController.register);
    app.post('/api/users/login', UserController.login)
    app.get('/api/users/getLoggedInUser', UserController.getLoggedInUser)
    
    // app.put('/api/users/:_id', UserController.updateUser);
    // app.delete('/api/users/:_id/delete', UserController.deleteUser);
    // app.get('/api/users/:_id', UserController.getUser)

    
}