const usersRoute = require('express').Router();
const { signUp } = require('../../handlers/usersHandler/usersHandler');

usersRoute.post('/users/signUp', signUp)

module.exports = usersRoute;