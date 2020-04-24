
const smartquery = require('../smartyquerys/Smartquerys');
module.exports ={

    async index(req,res){
        const {op,namecat,id,order,brand} = req.query;
        const iam = await smartquery.selectsProducts(op,namecat,id,order,brand);
        return res.json(iam[0]);
    }



}