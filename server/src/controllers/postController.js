const Post = require('../models/Post');

async function findAll(req, res, next) {
  try {
    const response = await Post.find();
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
}

async function findById(req, res, next) {
  const id = req.params.id;
  try {
    const response = await Post.findById(id);
    if (!response) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  const data = req.body;
  try {
    const response = await Post.create(data);
    res.status(201).json(response);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  const id = req.params.id;
  const data = req.body;
  try {
    const response = await Post.update(id, data, {
      new: true,
    });
    if (!response) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
}

async function destroy(req, res, next) {
  const id = req.params.id;
  try {
    const response = await Post.destroy(id);
    if (!response) {
      return res.status(404).json({ message: 'Post not found' });
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