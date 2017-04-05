angular.module('ChampionsModule').controller('ChampionsController', function($scope, Champion, champions){
	var initView = function(){
		$scope.champions = champions[0];
	};

	//Lo siguiente es llamar la funcion cuando se cargue la vista por primera vez
	$scope.$on('$ionicView.loaded', function(){
		initView();
	})
});