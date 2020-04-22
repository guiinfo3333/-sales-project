const { Model,DataTypes } = require('sequelize');

class Admins extends Model{
	static init(sequelize){
		super.init({
			nameadmin : DataTypes.STRING,
			emailadmin: DataTypes.STRING,
			passwordadmin: DataTypes.STRING
		},{
			sequelize
		})
	}

	

} 


module.exports = Admins;