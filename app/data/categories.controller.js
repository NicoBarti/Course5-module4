(function () {
'use strict';

angular.module('data')
.controller('categoriesDataController', categoriesDataController);

categoriesDataController.$inject = ['categoriesData'];
function categoriesDataController (categoriesData){

  var categories = this;
  categories.retrieved = [];
  categories.retrieved = categoriesData.data;

};


})()
