const { Model,DataTypes } = require('sequelize');

class FirstImageProduct extends Model{
	static init(sequelize){
		super.init({
			nameimageproduct : DataTypes.STRING,
			size: DataTypes.STRING,
            key: DataTypes.STRING,
            url: DataTypes.STRING
		},{
            sequelize,
            tableName: 'firstimageproduct',
		})
	}

	

} 


module.exports = FirstImageProduct;