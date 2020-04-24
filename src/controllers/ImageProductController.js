const ImageProduct = require('../models/ImageProduct');



module.exports ={

    async index(req,res){
        const {id} = req.params;
        const imageproduct = await ImageProduct.findAll({
            where: {
                product_id: id
              }
        });
        return res.json(imageproduct);
    },
    async store(req,res){
        const {nameimageproduct,size,key,url,product_id} = req.body;
     
      
        
        if(!await ImageProduct.findOne({ where: {key : key}})){
            const imageproduct = await ImageProduct.create({nameimageproduct:nameimageproduct,size:size,key:key,url:url,product_id:product_id});
            return res.json(imageproduct);
        }else{
            return res.status(400).json({err:'imageproduct already exists'});
        }
    }
}

