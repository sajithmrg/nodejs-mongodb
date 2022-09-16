const routes = require('express').Router();
const userController = require('../../controllers/user.controler')

routes.post("/createUser",userController.createUser)
routes.get("/loginUser",userController.loginUser)
routes.get("/getAllUsers",userController.getAllUsers)
routes.put("/updateUser/:id",userController.updateUser)
routes.delete("/userDelete/:id",userController.deleteUser)
routes.get("/findUserById/:id",userController.findUserById)
module.exports = routes;
