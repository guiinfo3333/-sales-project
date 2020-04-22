const TechinicalSheet = require('../models/TechinicalSheet');

module.exports ={

    async index(req,res){
        const techinicalsheet = await TechinicalSheet.findAll();
        return res.json(techinicalsheet);
    }
    ,
    async store(req,res){
        const {model,dimension,color,connectivity,weight,brand,display,audio,
            sensor,chip,camera,frequency,processor,memory,drums,
            inches,resolution, connections,operationalsystem,bluetooth,powervoltage,
            warranty,wifi,screen,series} = req.body;
            console.log(model);

        if(!await TechinicalSheet.findOne({ where: {model : model}})){
            const techinicalsheet = await TechinicalSheet.create({model:model,dimension:dimension,color:color,connectivity:connectivity,
                    weight:weight,brand:brand,display:display,audio:audio,sensor:sensor,chip:chip,
                     camera:camera,frequency:frequency,processor:processor,memory:memory,drums:drums,
                    inches:inches,resolution:resolution,connections:connections,operationalsystem:operationalsystem,
                    bluetooth:bluetooth,powervoltage:powervoltage,warranty:warranty,wifi:wifi,screen:screen,series:series});

            return res.json(techinicalsheet);
        }else{
            return res.status(400).json({err:'techinicalsheet already exists'});
        }
    },

    async delete(req,res){
        const {id} = req.params;
        if(await TechinicalSheet.findOne({ where: {id : id}})){
        await TechinicalSheet.destroy(
            {
            where : {
                id : id
            }
        })
        .then (status => res.status(200).json({
            message : 'techinicalsheet has been delete'
        }))
        .catch(error => res.json({
            error : true,
            error : error
        }));

    }else{
        return res.status(404).json({err:'TechinicalSheet not found'});
    }
}

}