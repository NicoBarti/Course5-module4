(function () {
'use strict';

angular.module('data')
.controller('dataItemsController', dataItemsController);

dataItemsController.$inject = ['itemsData', 'categoriesData'];
function dataItemsController (itemsData, categoriesData) {
  var items = this;
  items.retrieved = itemsData.data.menu_items;
  items.special = itemsData.data.category.special_instructions;
  items.categoryName = itemsData.data.category.name;

};

})()
