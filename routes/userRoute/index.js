const routes = require('express').Router();
const userController = require('../../controllers/user.controler')
const stateController = require('../../controllers/state.controler')

routes.post("/createUser",userController.createUser)
routes.get("/loginUser",userController.loginUser)
routes.get("/getAllUsers",userController.getAllUsers)
routes.put("/updateUser/:id",userController.updateUser)
routes.delete("/userDelete/:id",userController.deleteUser)
routes.get("/findUserById/:id",userController.findUserById)

// state fuction
routes.post("/createState",stateController.createState)
routes.get("/stateLogin",stateController.stateLogin) 
routes.get("/stateAll",stateController.stateAll)
module.exports = routes;
