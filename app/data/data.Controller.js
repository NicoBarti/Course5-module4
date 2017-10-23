(function () {
'use strict';

angular.module('data')
.controller('dataController', dataController);

dataController.$inject = ['serverData'];
function dataController (serverData){
console.log("iniciando controlador");
  var list = this
  list.retrieved = []
  list.retrieved = serverData.data;
  console.log(list.retrieved);

};


})()
