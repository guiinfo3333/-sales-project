const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const sequelize = new Sequelize(dbConfig);

class Smartquerys{

	static selectsProducts(op,namecat,id,order,brand,value1,value2,pag){
	
	var query;
	if(!pag){
		pag=1;
	}
	var valpage = ((pag-1)*15);
	var offset =" LIMIT 15 OFFSET "+valpage;
		switch(op){                 //independente de categoria
			case 'totalinitial':   //retorna todos os produtos com sua descricao e a sua imagem a ser usado na tela inicial
				 query= "select p.id,p.nameproduct,p.value,p.description,f.nameimageproduct,f.size,f.key,f.url"
				+" from product p inner join firstimageproduct f on p.firstimageproduct_id"
				+" = f.id inner join productcategory pc on p.productcategory_id ="
				+" pc.id join techinicalsheet t on p.techinicalsheet_id= t.id"+offset;
				
				return 	sequelize.query(query);

			break;
			case 'totalporcat':   //retorna todos os produtos por categoria
			var seachvaluecomplet = " and p.value >="+value1+ " and p.value<="+value2;
			var complet = " order by p.nameproduct ASC";

			query= "select p.id,p.nameproduct,p.value,p.description,f.nameimageproduct,f.size,f.key,f.url"
				+" from product p inner join firstimageproduct f on p.firstimageproduct_id"
				+" = f.id inner join productcategory pc on p.productcategory_id ="
				+" pc.id join techinicalsheet t on p.techinicalsheet_id= t.id where pc.namecategory='"+namecat+"'";
			
			if(brand){   //no caso se a marca estiver configurada
				query = query + " and t.brand='"+brand+"'";
			}
			if((value1!=undefined) & (value2!=undefined)){  //para a filtragem por preco
				query = query + seachvaluecomplet;
			}
			if(order){    //se a ordem estiver configurada
				query = query+complet;
			}
			
			query=query+offset;
				
				return sequelize.query(query);
			break;
			case 'totaldescription': //retorna o produto junto com a sua ficha tecnica e sua imagem
				query= "select p.id,p.nameproduct,p.value,p.description,f.nameimageproduct,"
				+"f.size,f.key,f.url,t.model,t.dimension,t.color,t.connectivity,t.weight,t.brand"
				+",t.display,t.audio,t.sensor,t.chip,t.camera,t.frequency,t.processor,t.memory,t.drums"
				+",t.inches,t.resolution,t.connections,t.operationalsystem,t.bluetooth,t.powervoltage,"
				+"t.warranty,t.wifi,t.screen,t.series"
				+" from product p inner join firstimageproduct f on p.firstimageproduct_id"
				+" = f.id inner join productcategory pc on p.productcategory_id ="
				+" pc.id join techinicalsheet t on p.techinicalsheet_id= t.id where p.id="+id;

				return sequelize.query(query);
			break;
			
		}
	  
	  
	}
	static seachlikeproduct (nameproduct,pag){
		console.log(pag);
		if(!pag){
			pag=1;
		}
		var valpage = ((pag-1)*15);
		var offset =" LIMIT 15 OFFSET "+valpage;
	var vnameproduct = "'%"+nameproduct+"%'";
	var	query= "select p.id,p.nameproduct,p.value,p.description,f.nameimageproduct,f.size,f.key,f.url"
		+" from product p inner join firstimageproduct f on p.firstimageproduct_id"
		+" = f.id inner join productcategory pc on p.productcategory_id ="
		+" pc.id join techinicalsheet t on p.techinicalsheet_id= t.id  where p.nameproduct like "+vnameproduct;

		query = query + offset;
		return sequelize.query(query);
	}
	
}
module.exports = Smartquerys;