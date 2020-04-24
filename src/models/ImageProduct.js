const { Model,DataTypes } = require('sequelize');

class ImageProduct extends Model{
	static init(sequelize){
		super.init({
			nameproduct : DataTypes.STRING,
			size: DataTypes.STRING,
            key: DataTypes.STRING,
			url: DataTypes.STRING,
			product_id: DataTypes.INTEGER,
		},{
			sequelize
		})
	}

	

} 


module.exports = ImageProduct;