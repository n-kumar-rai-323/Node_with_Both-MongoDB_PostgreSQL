const userService = require("../services/mongoUser.service");

exports.createUser = async (req, res) => {
  const user = await userService.createUser(req.body);

  res.status(201).json({
    success: true,
    data: user,
  });
};

exports.getUsers = async (req, res) => {
  const users = await userService.getUsers();

  res.json({
    success: true,
    data: users,
  });
};

exports.getUser = async (req, res) => {
  const user = await userService.getUser(
    req.params.id
  );

  res.json({
    success: true,
    data: user,
  });
};

exports.updateUser = async (req, res) => {
  const user = await userService.updateUser(
    req.params.id,
    req.body
  );

  res.json({
    success: true,
    data: user,
  });
};

exports.deleteUser = async (req, res) => {
  await userService.deleteUser(req.params.id);

  res.json({
    success: true,
    message: "Deleted Successfully",
  });
};