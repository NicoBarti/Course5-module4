(function () {
'use strict';

angular.module('MenuApp')
.component('itemsShow',{
  templateUrl : 'views/showItems.html',
  bindings : {
    list : '<',
    instructions: '<'

  }
});

})()
