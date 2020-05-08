const Product = require('../models/Product');
// const fs = require("fs");
// const path = require("path");
// const {promisify} = require("util");

module.exports ={

    async index(req,res){
        try{

            const product = await Product.findAll();
            return res.json(product);
        }
        catch(err){
            res.json(err);
        }
    },
    async store(req,res){
        try{
            const {nameproduct,value,description,productcategory_id,techinicalsheet_id,firstimageproduct_id} = req.body;
            if(!await Product.findOne({ where: {nameproduct : nameproduct}})){
                const product = await Product.create({nameproduct:nameproduct,
                value:value,
                description:description,
                productcategory_id:productcategory_id,
                techinicalsheet_id:techinicalsheet_id,
                firstimageproduct_id:firstimageproduct_id
        });
                return res.json(product);
            }else{
                return res.status(400).json({err:'product already exists'});
            }

        }
        catch(err){
            res.json(err);
        }
    },
    async change(req,res){
        try{
            const {id} = req.params;
            const {nameproduct, value,description} = req.body;
            await Product.update({
               nameproduct:nameproduct,
               value:value,
               description:description
            },{
                where : {
                    id : id
                }
            })
            .then (product => res.status(200).json({
                message : 'product has been updated'
            }))
            .catch(error => res.json({
                error : true,
                error : error
            }));

        }
        catch(err){
            res.json(err);
        }

        
    },

    async delete(req,res){

        try{
            const {id} = req.params;
            if(await Product.findOne({ where: {id : id}})){
                // return  promisify(fs.unlink)(
                //     path.resolve(__dirname,"tpm","uploads",key)
                // )
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
        catch(err){
            res.json(err);
        }
}

}