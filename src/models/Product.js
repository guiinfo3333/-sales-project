const { Model,DataTypes } = require('sequelize');

class Product extends Model{
	static init(sequelize){
		super.init({
			nameproduct : DataTypes.STRING,
			value: DataTypes.FLOAT,
            description: DataTypes.STRING,
            productcategory_id : DataTypes.INTEGER,
            techinicalsheet_id : DataTypes.INTEGER,
            
		},{
			sequelize
		})
	}

	

} 


module.exports = Admins;