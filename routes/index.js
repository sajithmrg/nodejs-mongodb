const routes = require('express').Router();
const userRoutes = require('./userRoute/index')
const stateRoutes = require('./stateRoute/index')
const incomeRoutes =require('./incomeRoute/index')

routes.use("/user",userRoutes)
routes.use("/user",stateRoutes)
routes.use("/user",incomeRoutes)

module.exports = routes;
