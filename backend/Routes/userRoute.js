const express = require('express')
const { getAllUser, register, login, getin } = require('../Controllers/UserController')
const protectUser = require('../middleWere/authUserMiddlewere')
const route = express.Router()

route.get('/get' , getAllUser)
route.post('/register' , register)
route.post('/login' , login)
route.post('/getin' , protectUser , getin)

module.exports = route