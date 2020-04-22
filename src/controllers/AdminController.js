const Admin = require('../models/Admins');
const bcrypt = require('bcryptjs');


module.exports ={

    async index(req,res){
        const admins = await Admin.findAll();
        return res.json(admins);
    },
    async store(req,res){
        const {nameadmin, emailadmin,passwordadmin} = req.body;
     
        const hash = await bcrypt.hash(passwordadmin,10);
        
        if(!await Admin.findOne({ where: {emailadmin : emailadmin}})){
            const admin = await Admin.create({nameadmin:nameadmin,emailadmin:emailadmin,passwordadmin:hash});
            return res.json(admin);
        }else{
            return res.status(400).json({err:'Admin already exists'});
        }
    },
    async change(req,res){
        const {id} = req.params;
        const {nameadmin, emailadmin,passwordadmin} = req.body;
        await Admin.update({
           nameadmin:nameadmin,
           emailadmin:emailadmin,
           passwordadmin:passwordadmin 
        },{
            where : {
                id : id
            }
        })
        .then (admin => res.status(200).json({
            message : 'admin has been updated'
        }))
        .catch(error => res.json({
            error : true,
            error : error
        }));

        
    },
    async delete(req,res){
        const {id} = req.params;
        if(await Admin.findOne({ where: {id : id}})){
        await Admin.destroy(
            {
            where : {
                id : id
            }
        })
        .then (status => res.status(200).json({
            message : 'admin has been delete'
        }))
        .catch(error => res.json({
            error : true,
            error : error
        }));

    }else{
        return res.status(404).json({err:'Admin not found'});
    }
}

}