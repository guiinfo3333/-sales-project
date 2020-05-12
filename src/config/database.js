require('dotenv').config({  
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
  })


module.exports = {
dialect: 'mysql',
host: process.env.host,
username: process.env.username,
password: process.env.password,
database: 'sales',
define : {
	timestamps: true,
	underscored: true,
},

};