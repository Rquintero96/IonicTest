// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('starter', ['ionic', 'ChampionsModule'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider){
//PRIMERO VIENE EL TEMPLATE QUE TIENE EL MENU, QUE LLAMAREMOS APP
   $stateProvider
   .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'js/app/menu/menu.html'
  })

//AHORA VIENEN LAS VISTAS, QUE SON TODAS DEPENDIENTES DE APP Y POR ESO SON APP.ALGO
   .state('app.home', {
    url: '/home',
    views:{
      //esto lo que dice es, en lo que se llame content en el index, pon esto
      'content':{
        templateUrl: 'js/app/main/home.html'
      }
    }

  })
   // si ninguno de los estados es llamado, se usa este default
   .otherwise('/app/home');

});