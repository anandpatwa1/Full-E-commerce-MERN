const express = require('express')
const { getAllAdmin , register, login, getin } = require('../Controllers/AdminController')
const protectAdmin = require('../middleWere/authAdminMiddlewere')
const route = express.Router()

route.get('/get' , getAllAdmin)
route.post('/register' , register)
route.post('/login' , login)
route.post('/getin' , protectAdmin , getin)

module.exports = route