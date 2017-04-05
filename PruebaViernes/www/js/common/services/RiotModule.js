angular.module('RiotModule', ['ChampionModel'])

.constant('riotApiG', 'https://global.api.riotgames.com/api/lol/static-data/NA/v1.2/champion?api_key=RGAPI-e46056a9-f266-4eb3-b362-11b0856a563d')

.constant('riotApiE', (function(){
		var idPlaceHolder = '[idPlaceHolder]';
		return{
			url: 'https://global.api.riotgames.com/api/lol/static-data/NA/v1.2/champion/'+idPlaceHolder+'?api_key=RGAPI-e46056a9-f266-4eb3-b362-11b0856a563d',
			idPlaceHolder: idPlaceHolder
		};	
})()
)

.factory('ChampionService', function($http, $q, Champion, riotApiE, riotApiG){
	var championService = {};

	championService.selectedChampion = null;

	championService.champions = [];

	championService.getChampions = function(success){
		var deferred = $q.defer();
		var resolveIfFinished = function(success){
			if(!success){
				console.log('Error al buscar champions');
				deferred.reject();
			}
			else{
				deferred.resolve(championService.champions);
			}
		};

		$http.get(riotApiG).then(function(response){
			championService.champions[0] = response.data.data;
			resolveIfFinished(true);
		}, function(error){
			resolveIfFinished(false);
		});
		return deferred.promise;
	};

	var urlForREST = function(id){
			var url = riotApiE.url.replace(riotApiE.idPlaceHolder, id);
			return url;
		};

	championService.getChampion = function(id){
		var deferred = $q.defer();

		$http.get(urlForREST(id), {}).then(function(response){
			championService.selectedChampion = Champion.build(response.data);
			deferred.resolve(championService.selectedChampion);
		}, function(error){
			championService.selectedChampion = null;
			deferred.resolve(null);
		});
		return deferred.promise;
	};
	return championService;
});