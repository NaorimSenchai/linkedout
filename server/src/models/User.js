const mongoose = require('../config/db');

const userSchema = mongoose.model('User', new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  avatar: { type: String },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}));

userSchema.methods.findAll = async () => {
  const users = await this.find();
  return users;
};

userSchema.methods.findById = async (id) => {
  const user = await this.findOne({ _id: id });
  return user;
};

userSchema.methods.create = async (data) => {
  const user = new this(data);
  await user.save();
  return user;
};

userSchema.methods.update = async (id, data) => {
  const user = await this.findById(id);
  if (!user) {
    return null;
  }
  Object.assign(user, data);
  await user.save();
  return user;
};

userSchema.methods.destroy = async (id) => {
  const user = await this.findById(id);
  if (!user) {
    return null;
  }
  await user.remove();
  return user;
};

module.exports = userSchema;