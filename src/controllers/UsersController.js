const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth')

module.exports ={

    async index(req,res){
        try{
            const users = await User.findAll();
            console.log(users);
            
            return res.json(users);
        }catch(err){
            res.json(err);
        }
    },
    async store(req,res){

                    const {name, email,cpf,password,phone_number,country,birthday} = req.body;
                 
                    const hash = await bcrypt.hash(password,10);
                    
                    if(!await User.findOne({ where: {email :email}})){
                        const user = await User.create({name:name,email:email,cpf:cpf,password:hash,phone_number:phone_number,country:country,birthday:birthday});
                        return res.json(user);
                    }else{

                        return res.status(400).json({err:'User already exists'});
                    }

                  
        
    },
    async change(req,res){

        try{
            
            const {id} = req.params;
            const {name,cpf, password ,phone_number,country,birthday} = req.body;
            await User.update({
                name:name,
                cpf:cpf,
                password:password,
                phone_number:phone_number,
                country:country,
                birthday:birthday

        },{
            where : {
                id : id
            }
        })
        .then (user => res.status(200).json({
            message : 'user has been updated'
        }))
        .catch(error => res.json({
            error : true,
            error : error
        }));
        
    }catch(err){
        res.json(err);
    }
        
    },
    async delete(req,res){
        try{
        const {id} = req.params;
        if(await User.findOne({ where: {id : id}})){
        await User.destroy(
            {
            where : {
                id : id
            }
        })
        .then (status => res.status(200).json({
            message : 'user has been delete'
        }))
        .catch(error => res.json({
            error : true,
            error : error
        }));

    }else{
        return res.status(404).json({err:'user not found'});
    }
}
    catch(err){

        res.json(err);

    }
}
,
async authUser(req,res){
    const {email,password} = req.body;
    const user = await User.findOne({ where: {email : email}});

    if(!user){
        return res.status(400).json({err:'Email or password invalids !'});
    }else{
        if(!await bcrypt.compare(password,user.password)){
            return res.status(400).json({err:'Email or password invalids !'});
        }else{
            user.password=undefined;
            const token = jwt.sign({id:user.id},authConfig.secret,{
                expiresIn:86400,  //24h
            });
            return res.json({user,token});
        }
    }
}

}