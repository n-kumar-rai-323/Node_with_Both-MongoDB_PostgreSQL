const User =require("../models/mongoUser.model")
const create = (data) => User.create(data);

const findAll = () => User.find();

const findById = (id) => User.findById(id);

const update = (id, data) =>
  User.findByIdAndUpdate(id, data, { new: true });

const remove = (id) => User.findByIdAndDelete(id);

module.exports = {
  create,
  findAll,
  findById,
  update,
  remove,
};