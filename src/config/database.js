require('dotenv').config({  
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
  })


module.exports = {
dialect: 'mysql',
host: process.env.HOST,
username: process.env.USERNAME,
password: process.env.PASSWORD,
database: 'sales',
define : {
	timestamps: true,
	underscored: true,
},

};