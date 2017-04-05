//modelo con el que transformo lo que recibo de Riot en un champion
angular.module('championModel',[])

.factory('Champion', function(){
	//Constructor
	function Champion(name, title, lore){
		this.name = name;
		this.title = title;
		this.lore = lore;
	}

	//funcion para crear un champion con la data que recibo de Riot
	Champion.build = function(data){
		if(!data){
			return null;
		}
		else{
			return new Champion(data.name, data.title, data.lore);
		}
	}

	//funcion para convertir a Json el objeto Champion
	Champion.prototype.toJson = function(){
		return angular.toJson(this);
	}

	//funcion para crear un monton de Champions de un array que mande Riot en data
	Champion.fromJsonBunch = function (data){
		if(angular.isArray(data)){
			//data.map es que voy a hacer una accion por cada objeto del array
			return data.map(Champion.build).filter(Boolean); //el filter boolean quita los objetos vacios
		}
		else{
			return Champion.build(data);
		}
	}

	return Champion;
});