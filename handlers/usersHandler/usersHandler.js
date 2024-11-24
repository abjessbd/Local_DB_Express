const User = require("../../models/User");
const { readFile, writeFile } = require('../../utils/utils');
const shortid = require('shortid');

const deleteUser = async (req, res, _next) => {
    const id = req.params.id;
    const users = await readFile();

    const usersAfterDeleted = users.filter(user => user.id !== id);

    await writeFile(usersAfterDeleted);

    res.status(201).json({ message: "User is deleted successfully!!!" })
};

const updateUserByPut = async (req, res, _next) => {
    const id = req.params.id;
    const users = await readFile();

    let user = users.find(user => user.id === id);

    if (!user) {
        user = {
            id: shortid.generate(),
            ...req.body,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        users.push(user);
    }

    user.name = req.body.name;
    user.username = req.body.username;
    user.password = req.body.password;

    await writeFile(users);
    res.status(201).send(user);
};

const updateUserByPatch = async (req, res, _next) => {
    const id = req.params.id;
    const users = await readFile();

    const user = users.find(user => user.id === id);

    if (!user) {
        res.status(404).json({ message: "User not found!!!" })
    }

    user.name = req.body.name || user.name;
    user.username = req.body.username || user.username;
    user.password = req.body.password || user.password;

    await writeFile(users);

    res.status(201).send(user);
};

const findOneUser = async (req, res, _next) => {
    const id = req.params.id;
    const users = await readFile();

    const user = users.find(user => user.id === id);

    if (!user) {
        res.status(404).json({ message: "User not found!!!" })
    }

    res.status(201).send(user);
};

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
};

module.exports = { createUser, getUsers, findOneUser, updateUserByPatch, updateUserByPut, deleteUser };