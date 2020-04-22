const { Model,DataTypes } = require('sequelize');

class ProductCategory extends Model{
	static init(sequelize){
		super.init({
			namecategory : DataTypes.STRING
		},{
            sequelize,
            tableName: 'productcategory',
		})
	}

	

} 


module.exports = ProductCategory;