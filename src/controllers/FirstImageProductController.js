const FirstImageProduct = require('../models/firstimageproduct');

module.exports ={

    async index(req,res){
        try{

            const firstimageproduct = await FirstImageProduct.findAll();
            return res.json(firstimageproduct);
        }
        catch(err){
            res.json(err);
        }
    },
    async store(req,res){

        try{
            const firstmageproduct = await FirstImageProduct.create({
                nameimageproduct:req.file.originalname,
                size:req.file.size,
                key:req.file.filename,
                url:"http://sales-com-br.umbler.net/files/"+req.file.filename,
            });
            return res.json(firstmageproduct);
        }
        catch(err){
            res.json(err);
        }
     
      
    },
    async delete(req,res){
        try{
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
        catch(err){
            res.json(err);
        }
}

}