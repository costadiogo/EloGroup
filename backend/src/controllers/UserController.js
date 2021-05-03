/* eslint-disable no-undef */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../config/auth.json');

const User = require('../models/UserModel');

module.exports = {
  async index(req, res) {
    const user = await User.find();

    res.json(user);
  },

  async register(req, res) {
    const {
      name, email, password, passwordConfirm,
    } = req.body;

    if (!email || !password) {
      return res.status(400).send({ error: 'Email and password is required' });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).send({ error: 'This email already in used' });
    }
    if (password !== passwordConfirm) {
      return res.status(400).send({ error: 'Password is Invalid' });
    }

    const user = await User.create({
      name,
      email,
      password,
      passwordConfirm,
    });

    user.password = undefined;

    return res.status(200).send({ user });
  },

  async authenticate(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(400).send({ error: 'User not found' });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).send({ error: 'Invalid password' });
    }

    user.password = undefined;

    const token = jwt.sign({ id: user.id }, auth.secret, {
      expiresIn: 172800,
    });

    return res.send({ user, token });
  },

  async delete(req, res) {
    const { id } = req.params;

    const user = await User.findOneAndDelete({ _id: id });

    return res.json(user);
  },

  async update(req, res) {
    const {
      id, name, email, password, confirmPassword,
    } = req.body;

    const data = {
      name, email, password, confirmPassword,
    };

    const user = await User.findOneAndUpdate({ _id: id }, data, { new: true, upsert: true });

    res.json({ new: user });
  },
};
