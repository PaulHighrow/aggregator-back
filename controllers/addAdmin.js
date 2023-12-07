const { newAdmin } = require("../services/adminsServices");

const addAdmin = async (req, res) => res.status(201).json(await newAdmin(req.body));

module.exports = addAdmin;