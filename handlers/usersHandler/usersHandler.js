const User = require("../../models/User");
const { readFile, writeFile } = require('../../utils/utils');

const createUser = async (req, res, _next) => {
    const { name, username, password } = req.body;
    const user = new User(name, username, password);

    const users = await readFile();
    users.push(user);

    await writeFile(users);

    res.status(200).send(user);
};

const getUsers = async (_req, res, _next) => {
    const users = await readFile();
    res.status(201).send(users);
}

module.exports = { createUser, getUsers };