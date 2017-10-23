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
      templateUrl: 'views/home.html'
    })


    .state('categories', {
      url: '/categories',
      templateUrl: 'views/categories.html',
      controller: "categoriesDataController as categories",
      resolve: {
        categoriesData: ['MenuDataService', function(MenuDataService){
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('categories.items', {
      url: '/items/{categoryId}',
      templateUrl: 'views/items.html',
      controller: "dataItemsController as items",
      resolve: {
        itemsData: ['$stateParams','MenuDataService' ,function($stateParams, MenuDataService){
          return MenuDataService.getItemsForCategory($stateParams.categoryId)
        }]
      }
    });

}

})();
