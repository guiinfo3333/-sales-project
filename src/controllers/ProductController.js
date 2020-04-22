const Product = require('../models/Product');

module.exports ={

    async index(req,res){
        const productcategory = await Product.findAll();
        return res.json(productcategory);
    },
    async store(req,res){
        const {nameproduct,value,description,productcategory_id,techinicalsheet_id} = req.body;

        if(!await Product.findOne({ where: {nameproduct : nameproduct}})){
            const product = await Product.create({namecategory:namecategory,
            value:value,
            description:description,
            productcategory_id:productcategory_id,
            techinicalsheet_id:techinicalsheet_id
    });
            return res.json(product);
        }else{
            return res.status(400).json({err:'product already exists'});
        }
    },
    async change(req,res){
        const {id} = req.params;
        const {nameproduct, value,description} = req.body;
        await Admin.update({
           nameproduct:nameproduct,
           value:value,
           description:description
        },{
            where : {
                id : id
            }
        })
        .then (admin => res.status(200).json({
            message : 'product has been updated'
        }))
        .catch(error => res.json({
            error : true,
            error : error
        }));

        
    },

    async delete(req,res){
        const {id} = req.params;
        if(await Product.findOne({ where: {id : id}})){
        await Product.destroy(
            {
            where : {
                id : id
            }
        })
        .then (status => res.status(200).json({
            message : 'Product has been delete'
        }))
        .catch(error => res.json({
            error : true,
            error : error
        }));

    }else{
        return res.status(404).json({err:'Product not found'});
    }
}

}