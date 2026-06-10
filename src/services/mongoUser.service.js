const userRepo = require("../repositories/mongoUser.repo");

const createUser = async (data) => {
  return userRepo.create(data);
};

const getUsers = async () => {
  return userRepo.findAll();
};

const getUser = async (id) => {
  return userRepo.findById(id);
};

const updateUser = async (id, data) => {
  return userRepo.update(id, data);
};

const deleteUser = async (id) => {
  return userRepo.remove(id);
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};