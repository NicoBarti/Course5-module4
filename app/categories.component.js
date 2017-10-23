(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesShow',{
  templateUrl : 'views/showCategories.html',
  bindings : {
    list : '<'
  }
});

})()
