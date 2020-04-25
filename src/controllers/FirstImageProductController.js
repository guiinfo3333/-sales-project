const FirstImageProduct = require('../models/firstimageproduct');

module.exports ={

    async index(req,res){
        const firstimageproduct = await FirstImageProduct.findAll();
        return res.json(firstimageproduct);
    },
    async store(req,res){
     
            const firstmageproduct = await FirstImageProduct.create({
                nameimageproduct:req.file.originalname,
                size:req.file.size,
                key:req.file.filename,
                url:'',
            });
            return res.json(firstmageproduct);
      
    },
    async delete(req,res){
        const {id} = req.params;
        if(await FirstImageProduct.findOne({ where: {id : id}})){
        await FirstImageProduct.destroy(
            {
            where : {
                id : id
            }
        })
        .then (status => res.status(200).json({
            message : 'FirstImageProduct has been delete'
        }))
        .catch(error => res.json({
            error : true,
            error : error
        }));

    }else{
        return res.status(404).json({err:'FirstImageProduct not found'});
    }
}

}