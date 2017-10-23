(function (){
'use strict';

angular.module('MenuApp')
.config(RoutesConfig)

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home if no other URL matches
  $urlRouterProvider.otherwise('home');

  // Set up UI states
  $stateProvider


    .state('home', {
      url: '/home',
      templateUrl: '/views/home.html'
    })


    .state('categories', {
      url: '/categories',
      templateUrl: '/views/categories.html',
      controller: "dataController as list",
      resolve: {
        serverData: ['MenuDataService', function(MenuDataService){
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/items/{categoryId}',
      templateUrl: '/views/items.html',
      // controller: "dataCategoriesController as categories",
    });

}

})();
