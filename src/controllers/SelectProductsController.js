
const Smartquery = require('../smartyquerys/Smartquerys');

module.exports ={

    async index(req,res){
        const {op,namecat,id,order,brand,value1,value2,pag} = req.query;
        const product = await Smartquery.selectsProducts(op,namecat,id,order,brand,value1,value2,pag);
        //var qtd = product[0].length;
     
        
        return res.json(product[0]);
    },
    async select(req,res){
        const{pag} = req.query;
        const{nameproduct} =req.body;
        const product = await Smartquery.seachlikeproduct(nameproduct,pag);
        return res.json(product[0]);
    }

}