const ProductCategory = require('../models/ProductCategory');

module.exports ={

    async index(req,res){
        try{

            const productcategory = await ProductCategory.findAll();
            return res.json(productcategory);
        }
        catch(err){
            res.json(err);
        }
    },
    async store(req,res){

        try{

            const {namecategory} = req.body;
    
            if(!await ProductCategory.findOne({ where: {namecategory : namecategory}})){
                const productcategory = await ProductCategory.create({namecategory:namecategory});
                return res.json(productcategory);
            }else{
                return res.status(400).json({err:'productcategory already exists'});
            }
        }
        catch(err){
            res.json(err);
        }
    },

    async delete(req,res){
        try{

            const {id} = req.params;
            if(await ProductCategory.findOne({ where: {id : id}})){
            await ProductCategory.destroy(
                {
                where : {
                    id : id
                }
            })
            .then (status => res.status(200).json({
                message : 'ProductCategory has been delete'
            }))
            .catch(error => res.json({
                error : true,
                error : error
            }));
    
        }else{
            return res.status(404).json({err:'ProductCategory not found'});
        }
        }
        catch(err){
            res.json(err);
        }
}

}