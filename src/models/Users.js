const { Model,DataTypes } = require('sequelize');

class Users extends Model{
	static init(sequelize){
		super.init({
			name : DataTypes.STRING,
			email: DataTypes.STRING,
		    cpf: DataTypes.STRING,
		    password: DataTypes.STRING,
            phone_number: DataTypes.STRING,
            country: DataTypes.STRING,
            birthday: DataTypes.DATEONLY,
		},{
            sequelize,
            tableName: 'users',
		})
	}

	

} 


module.exports = Users;