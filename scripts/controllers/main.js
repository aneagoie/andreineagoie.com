'use strict';

/**
 * @ngdoc function
 * @name andreineagoie1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the andreineagoie1App
 */
angular.module('andreineagoie1App')
  .controller('MainCtrl', function ($scope) {

     $scope.initSlider = function () {

        var last = $('span.flash span:first');
        var z = 1;

        window.setInterval(function() {
          var el = last;
          var next = el.next();
          if(!next.length) {
            next = $('span.flash span:first');
          }

          next.css('z-index',z);
          z++;
          last = next;
        },800);

        window.setTimeout(function() {
          $('span.flash').addClass('open');
          window.setTimeout(function() {
            $('span.flash').removeClass('open');
          },1000);
        }, 350); // open after 300ms

        $('.nav-toggle').on('click',function() {
          $('nav.menu').toggleClass('open');
        });

      };

      });










