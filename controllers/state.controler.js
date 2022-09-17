//const stateModels = require("../models/state.models");
const stateModel = require("../models/state.models");
//const userModels = require("../models/user.models");

exports.createState = async (req, res) => {
  try {
    const stateName = req.body.stateName;
    const stateAddress = req.body.stateAddress;
    const stateCatogery = req.body.stateCatogery;
    const stateAcre = req.body.stateAcre;
    const statePlants = req.body.statePlants;

    if (
      !stateName ||
      !stateAddress ||
      !stateCatogery ||
      !stateAcre ||
      !statePlants
    ) {
      return res.status(200).json({
        code: 200,
        success: false,
        status: "Bad request",
        message: "Please fill all fields",
      });
    }
    console.log(req.body);

    const newState = new stateModel({
      stateName: req.body.stateName,
      stateAddress: req.body.stateAddress,
      stateCatogery: req.body.stateCatogery,
      stateAcre: req.body.stateAcre,
      statePlants: req.body.statePlants,
    });
    await newState.save();
    console.log("success");
    return res.status(200).json({
      code: 200,
      success: true,
      status: "OK",
      message: "state created successfuly",
      data: newState,
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

exports.stateLogin = async (req, res) => {
  try {
    const stateName = req.body.stateName;
    const stateAddress = req.body.stateAddress;
    const state = await stateModel.findOne({
      stateName,
      stateAddress,
    });

    if (!state) {
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
        message: "state found",
        data: state,
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

exports.stateAll = async (req,res) =>{
    try {
        const stateAll = await stateModel.find()
        if(!stateAll){
            return res.status(200).json({
                code: 200,
                success: false,
                status: "bad request",
                message: "not valied state",
              });
        }else{
            return res.status(200).json({
                code: 200,
                success: true,
                status: "OK",
                message: "state found",
                data: stateAll,
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
}