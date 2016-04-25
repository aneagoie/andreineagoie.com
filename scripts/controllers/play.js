'use strict';

/**
 * @ngdoc function
 * @name andreineagoie1App.controller:AboutCtrl
 * @description
 * # PlayCtrl
 * Controller of the andreineagoie1App
 */
angular.module('andreineagoie1App')
  .controller('PlayCtrl', function ($scope) {

    var el = document.querySelectorAll('canvas');
    el[0].style.display = 'block';
  });