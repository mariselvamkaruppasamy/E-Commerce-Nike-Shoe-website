const express = require("express")
const router = express.Router()
const userSignRoute = require("../Controllers/UserSignController")


router.post("/userdata/userinsert", userSignRoute.insertUser)
router.get("/userdata/userlist", userSignRoute.listUser)
router.post("/userdata/userlogin",userSignRoute.userLogin)
router.post('/userdata/updateUser/:id', userSignRoute.updateUser)
router.post('/userdata/remove/:id', userSignRoute.remove)
router.delete('/userdata/userdelete/:id', userSignRoute.deleteUser)
router.post('/userdata/addcart/:id', userSignRoute.addCart)

module.exports = router