(function() {
  'use strict';

  angular
    .module('tablePoc')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $scope, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1473430959716;
    vm.showToastr = showToastr;
    vm.test = "test";

    $scope.items = [
      {
        "id": 1,
        "name": {
          "first": "John",
          "last": "Schmidt"
        },
        "address": "45024 France",
        "price": 760.41,
        "isActive": "Yes",
        "product": {
          "description": "Fried Potatoes",
          "options": [
            {
              "description": "Fried Potatoes",
              "image": "//a248.e.akamai.net/assets.github.com/images/icons/emoji/fries.png"
            },
            {
              "description": "Fried Onions",
              "image": "//a248.e.akamai.net/assets.github.com/images/icons/emoji/fries.png"
            }
          ]
        }
      },
      {
        "id": 2,
        "name": {
          "first": "John",
          "last": "Schmidt"
        },
        "address": "45024 France",
        "price": 760.41,
        "isActive": "Yes",
        "product": {
          "description": "Fried Potatoes",
          "options": [
            {
              "description": "Fried Potatoes",
              "image": "//a248.e.akamai.net/assets.github.com/images/icons/emoji/fries.png"
            },
            {
              "description": "Fried Onions",
              "image": "//a248.e.akamai.net/assets.github.com/images/icons/emoji/fries.png"
            }
          ]
        }
      },
      {
        "id": 3,
        "name": {
          "first": "John",
          "last": "Schmidt"
        },
        "address": "45024 France",
        "price": 80.41,
        "isActive": "Yes",
        "product": {
          "description": "Fried Potatoes",
          "options": [
            {
              "description": "Fried Potatoes",
              "image": "//a248.e.akamai.net/assets.github.com/images/icons/emoji/fries.png"
            },
            {
              "description": "Fried Onions",
              "image": "//a248.e.akamai.net/assets.github.com/images/icons/emoji/fries.png"
            }
          ]
        }
      }
    ];

    activate();

    function activate() {
      console.log("Ok");
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
