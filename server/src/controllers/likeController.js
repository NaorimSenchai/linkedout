const Like = require('../models/Like');

async function findAll(req, res, next) {
  try {
    const response = await Like.find();
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
}

async function findById(req, res, next) {
  const id = req.params.id;
  try {
    const response = await Like.findById(id);
    if (!response) {
      return res.status(404).json({ message: 'Like not found' });
    }
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  const data = req.body;
  try {
    const response = await Like.create(data);
    res.status(201).json(response);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  const id = req.params.id;
  const data = req.body;
  try {
    const response = await Like.update(id, data, {
      new: true,
    });
    if (!response) {
      return res.status(404).json({ message: 'Like not found' });
    }
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
}

async function destroy(req, res, next) {
  const id = req.params.id;
  try {
    const response = await Like.destroy(id);
    if (!response) {
      return res.status(404).json({ message: 'Like not found' });
    }
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  destroy,
};