const Admin = require('../Modals/adminModal');
const asynchandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const getAllAdmin = asynchandler(async (req, res) => {
  res.send('get all products');
});

const register = asynchandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(401);
    throw new Error('please fill All details');
  }

  // Password Hashing
  const salt = bcrypt.genSaltSync(12);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const admin = await Admin.create({ name, email, password: hashedPassword });

  res.status(201).json({
    name: admin.name,
    email: admin.email,
    token: generateToken(admin._id),
  });
  res.send('Admin Registred');
});

const login = asynchandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.send('enter all field');
  }
  const adminLogin = await Admin.findOne({ email: email });

  if (adminLogin && (await bcrypt.compare(password, adminLogin.password))) {
    res.status(201).json({
      _id: adminLogin._id,
      name: adminLogin.name,
      email: adminLogin.email,
      token: generateToken(adminLogin._id),
    });
  } else {
    res.status(401);
    throw new Error('invalid credentials');
  }
});

const getin = (req, res) => {
  res.status(200);
  const admin = {
    id: req.admin._id,
    name: req.admin.name,
    email: req.admin.email,
  };
  res.send(admin);
};

const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
  return token;
};

module.exports = { getAllAdmin, register, login, getin };
