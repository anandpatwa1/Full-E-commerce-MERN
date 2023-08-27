const User = require('../Modals/userModal');
const asynchandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const getAllUser = asynchandler(async (req, res) => {
  res.send('get all products');
});

const register = asynchandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(401);
    throw new Error('please add All details');
  }

  // Password Hashing
  const salt = bcrypt.genSaltSync(12);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const user = await User.create({ name, email, password: hashedPassword });

  res.status(201).json({
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
  });
  res.send('User Registred');
});

const login = asynchandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.send('enter all field');
  }
  const userLogin = await User.findOne({ email: email });

  if (userLogin && (await bcrypt.compare(password, userLogin.password))) {
    res.status(201).json({
      _id: userLogin._id,
      name: userLogin.name,
      email: userLogin.email,
      token: generateToken(userLogin._id),
    });
  } else {
    res.status(401);
    throw new Error('invalid credentials');
  }
});

const getin = (req, res) => {
  res.status(200);
  const user = {
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };
  res.send(user);
};

const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
  return token;
};

module.exports = { getAllUser, register, login, getin };
