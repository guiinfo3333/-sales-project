const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
module.exports ={
    dest : path.resolve(__dirname,"..","tmp","uploads"),
    storage : multer.diskStorage({
        destination : (req,file,cb) =>{
            cb(null,path.resolve(__dirname,"..","tmp","uploads"));
        },
        filename: (req,file,cb) => {   //configurando o nome da imagem
            crypto.randomBytes(16,(err,hash) =>{
                if(err) cb(err);

                const fileName = `${hash.toString('hex')}-${file.originalname}`;

                cb(null,fileName)
            });
        },
    }),
    limits: {
      fileSize: 2*1024*1024 , //o padrao é em bytes  
    },
    fileFilter: (req,file,cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif',

        ];
            if(allowedMimes.includes(file.mimetype)){
                cb(null,true);
            }else{
                cb(new Error('Invalide fyle type.'))
            }
    }

};