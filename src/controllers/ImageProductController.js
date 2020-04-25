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

        const {id} = req.params;
       
            const imageproduct = await ImageProduct.create({
                nameimageproduct:req.file.originalname,
                size:req.file.size,
                key:req.file.filename,
                url:'',
                product_id:id});
            return res.json(imageproduct);
       
    }
}

