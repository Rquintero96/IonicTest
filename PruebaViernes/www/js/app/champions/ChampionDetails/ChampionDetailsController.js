//IGUAL QUE EN EL CONTROLADOR DE CHAMPIONS
angular.module('ChampionsModule').controller('ChampionDetailsController', function($scope, Champion, champion){
	var initView = function(){
		$scope.champion = champion;
	};
	$scope.$on('$ionicView.loaded', function(){
		initView();
	});
});