angular.module('ChampionsModule', ['ChampionModel']).config(function($stateProvider){
   $stateProvider.state('app.champions', {
    url: '/champions',
    views:{
      //esto lo que dice es, en lo que se llame content en el index, pon esto
      'content':{
        templateUrl: 'js/app/champions/Champions/champions.html',
        controller: 'ChampionsController'
      }
    }

   });

  $stateProvider.state('app.champion-details', {
    url: '/champions/details',
    views:{
      //esto lo que dice es, en lo que se llame content en el index, pon esto
      'content':{
        templateUrl: 'js/app/champions/ChampionDetails/champion-details.html',
        controller: 'ChampionDetailsController'
      }
    }

   });
})