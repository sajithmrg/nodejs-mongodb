const incomeModel = require('../models/income.models')


exports.calProfit = async(req,res) =>{
        try {
            const totalIncome = req.body.totalIncome;
            const totalCost = req.body.totalCost;
            const profit = req.body.profit;
            
        
            if (
              !totalIncome ||
              !totalCost 
              
            ) {
              return res.status(200).json({
                code: 200,
                success: false,
                status: "Bad request",
                message: "Please fill all fields",
              });
            }
            const newProfit = new incomeModel({
                totalIncome:parseInt(req.body.totalIncome),
                totalCost:parseInt(req.body.totalCost),
                profit:Number(totalIncome-totalCost)
                
                });
                await newProfit.save()
                console.log(profit);
                return res.status(200).json({
                  code: 200,
                  success: true,
                  status: "OK",
                  message: "state created successfuly",
                  data: newProfit,
                });
                
        } catch (error) {
            return res.status(500).json({
                code: 500,
                success: false,
                status: "Internal server error",
                message: error.message,
              });
        }
}