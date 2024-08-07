const express = require("express")
const router = express.Router()

const adminRoute = require('../Controllers/AdminController')
router.post('/admindata/insert',adminRoute.insertAdminData)
router.post('/admindata/login', adminRoute.adminLogin)
router.get('/admindata/list',adminRoute.adminList)

module.exports = router



