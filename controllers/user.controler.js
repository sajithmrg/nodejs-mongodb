const UserModel = require("../models/user.models");

exports.createUser = async (req, res) => {
  try {
    console.log(req.body);
    const newUser = new UserModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });
    await newUser.save();
    console.log("success");
    return res.status(200).json({
      code: 200,
      success: true,
      status: "OK",
      message: "user created successfuly",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      success: false,
      status: "Internal server error",
      message: error.message,
    });
  }
};

exports.loginUser = async (req, res) => {
  console.log("login");
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await UserModel.findOne({
      email,
      password,
    });
    if (!user) {
      return res.status(200).json({
        code: 200,
        success: false,
        status: "bad request",
        message: "not valied user",
      });
    } else {
      return res.status(200).json({
        code: 200,
        success: true,
        status: "OK",
        message: "user found",
        data: user,
      });
    }
  } catch (error) {
    return res.status(500).json({
      code: 500,
      success: false,
      status: "Internal server error",
      message: error.message,
    });
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    if (!users) {
      return res.status(200).json({
        code: 200,
        success: false,
        status: "bad request",
        message: "not valied user",
      });
    } else {
      return res.status(200).json({
        code: 200,
        success: true,
        status: "OK",
        message: "user found",
        data: users,
      });
    }
  } catch (error) {
    return res.status(500).json({
      code: 500,
      success: flase,
      status: "internal server error",
      message: error.message,
    });
  }
};

exports.updateUser = async (req,res) =>{
    try {
        const id = req.params.id
        console.log(id)
    const newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      };
      const user = await UserModel.findByIdAndUpdate(id,newUser,{new:true})
      if(user){
        return res.status(200).json({
            code: 200,
            success: true,
            status: "OK",
            message: "User Updated",
            data: user,
          });
      }else{
        return res.status(200).json({
            code: 200,
            success: false,
            status: "bad request",
            message: "Invalied user id",
          }); 
      }
    } catch (error) {
        return res.status(500).json({
            code: 500,
            success: false,
            status: "internal server error",
            message: error.message,
          });
    }
      
}

exports.deleteUser = async(req,res) =>{
    try {
       const id = req.params.id 
       console.log(id)
       const user = await UserModel.findByIdAndDelete(id)
       if(user){
        return res.status(200).json({
            code: 200,
            success: true,
            status: "OK",
            message: "User deleted"
            
          });
      }else{
        return res.status(200).json({
            code: 200,
            success: false,
            status: "bad request",
            message: "Invalied user id",
          }); 
      }
    } catch (error) {
        return res.status(500).json({
            code: 500,
            success: false,
            status: "internal server error",
            message: error.message,
          });
    }
}

exports.findUserById = async(req,res) =>{
        try {
            const id = req.params.id 
            console.log(id)
            const user = await UserModel.findById(id)
            if (!user) {
                return res.status(200).json({
                  code: 200,
                  success: false,
                  status: "bad request",
                  message: "not valied user",
                });
              } else {
                return res.status(200).json({
                  code: 200,
                  success: true,
                  status: "OK",
                  message: "user found",
                  data: user,
                });
              }

        } catch (error) {
            return res.status(500).json({
                code: 500,
                success: false,
                status: "internal server error",
                message: error.message,
              });
        }
}
