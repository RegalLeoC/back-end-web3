const User = require('../entities/users');

async function createUser(data) {
  return await User.create(data);
}

async function getAllUsers() {
  return await User.findAll();
}

async function getUserById(id) {
  return await User.findByPk(id);
}

async function updateUser(id, data) {
  const user = await User.findByPk(id);
  if (user) {
    await user.update(data);
    return user;
  }
  return null;
}

async function deleteUser(id) {
  const user = await User.findByPk(id);
  if (user) {
    await user.destroy();
    return user;
  }
  return null;
}

module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser };
