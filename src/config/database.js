
require('dotenv').config({  
  path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
})

console.log(process.env.HOST);
console.log(process.env.NAME);
console.log(process.env.PASSWORD);

module.exports = {
dialect: 'mysql',
host: process.env.HOST,
username: process.env.NAME,
password: process.env.PASSWORD,
database: 'sales',
define : {
	timestamps: true,
	underscored: true,
},

};