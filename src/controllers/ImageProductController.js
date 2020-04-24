const ImageProduct = require('../models/ImageProduct');



module.exports ={

    async index(req,res){
        const imageproduct = await ImageProduct.findAll();
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
    },
    async delete(req,res){
        const {id} = req.params;
        if(await ImageProduct.findOne({ where: {id : id}})){
        await ImageProduct.destroy(
            {
            where : {
                id : id
            }
        })
        .then (status => res.status(200).json({
            message : 'ImageProduct has been delete'
        }))
        .catch(error => res.json({
            error : true,
            error : error
        }));

    }else{
        return res.status(404).json({err:'ImageProduct not found'});
    }
}

}