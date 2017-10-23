(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath',  "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http','ApiBasePath'];
function MenuDataService($http, ApiBasePath) {

  var service = this;
console.log("hola, en MenuDataService")
  //Define methods for MenuDataService

  service.getAllCategories = function () {
    var response = $http({
      method : "GET",
      url : (ApiBasePath + "/categories.json")
    });
    console.log("hola, desde el servicio de llamada al servidor");
    return response;
  }

  service.getItemsForCategory = function (categoryShortName){

  }

}



})()
