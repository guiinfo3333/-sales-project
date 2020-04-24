
const smartquery = require('../smartyquerys/Smartquerys');
module.exports ={

    async index(req,res){
        const iam = await smartquery.selectsProducts("totalporcat",null,"celulares",null);
        return res.json(iam[0]);
    }



}