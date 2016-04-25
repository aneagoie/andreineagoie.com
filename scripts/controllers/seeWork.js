'use strict';

/**
 * @ngdoc function
 * @name andreineagoie1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the andreineagoie1App
 */
angular.module('andreineagoie1App')
  .controller('SeeWorkCtrl', function ($scope) {
    var el = document.querySelectorAll('canvas');
    el[0].style.display = '';
  });

