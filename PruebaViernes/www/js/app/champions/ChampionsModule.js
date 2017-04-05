angular.module('ChampionsModule', ['ChampionModel', 'RiotModule']).config(function($stateProvider){
   $stateProvider.state('app.champions', {
    url: '/champions',
    views:{
      //esto lo que dice es, en lo que se llame content en el index, pon esto
      'content':{
        templateUrl: 'js/app/champions/Champions/champions.html',
        controller: 'ChampionsController',
        resolve:{
          champions: function(ChampionService){
            return ChampionService.getChampions();
          }
        }
      }
    }

   });

  $stateProvider.state('app.champion-details', {
    url: '/champions/details/:championID',
    views:{
      //esto lo que dice es, en lo que se llame content en el index, pon esto
      'content':{
        templateUrl: 'js/app/champions/ChampionDetails/champion-details.html',
        controller: 'ChampionDetailsController',
        resolve: {
          champion: function(ChampionService, $stateParams){
            return ChampionService.getChampion($stateParams.championID);
          }
        }
      }
    }

   });
})