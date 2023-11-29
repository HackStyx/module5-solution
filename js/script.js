// js/script.js

(function () {
    'use strict';
  
    var $dc = {};
  
    // TODO: STEP 1
    $dc.menuCategories = [];
  
    // TODO: STEP 2
    $dc.loadMenuCategories = function () {
      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/categories.json'
      }).then(function (response) {
        $dc.menuCategories = response.data;
      });
    };
  
    // TODO: STEP 3
    $dc.loadMenuItems = function (categoryShortName) {
      // If no category short name is provided, use the random one
      categoryShortName = categoryShortName || $dc.randomCategoryShortName();
  
      $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
        params: {
          category: categoryShortName
        }
      }).then(function (response) {
        $dc.menuItems.setMenuItems(response.data.menu_items);
      });
    };
  
    // TODO: STEP 4
    $dc.randomCategoryShortName = function () {
      var randomIndex = Math.floor(Math.random() * $dc.menuCategories.length);
      return $dc.menuCategories[randomIndex].short_name;
    };
  
    // TODO: STEP 5
    $dc.menuItems = {
      categories: []
    };
  
    // TODO: STEP 6
    $dc.menuItems.getMenuItems = function (categoryShortName) {
      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
        params: {
          category: categoryShortName
        }
      });
    };
  
    // TODO: STEP 7
    $dc.menuItems.setMenuItems = function (menuItems) {
      $dc.menuItems.categories = menuItems;
    };
  
    // TODO: STEP 8
    $dc.getRandomCategoryShortName = function () {
      var randomCategoryShortName = $dc.randomCategoryShortName();
      $dc.menuItems.getMenuItems(randomCategoryShortName)
        .then(function (response) {
          $dc.menuItems.setMenuItems(response.data.menu_items);
        });
    };
  
    // TODO: STEP 9
    $dc.loadMenuItems = function () {
      // Call the new method for random category
      $dc.getRandomCategoryShortName();
    };
  
    // Ensure you have the necessary libraries and services ($http) available.
  
  })();
  