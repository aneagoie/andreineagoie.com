'use strict';

/**
 * Main module of the application.
 */
angular
  .module('andreineagoie1App', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/seeWork', {
        templateUrl: 'views/seeWork.html',
        controller: 'SeeWorkCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

// slider menu functionality
(function(){
  var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
    showLeft = document.getElementById( 'showLeft' ),
    body = document.body;

  showLeft.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( menuLeft, 'cbp-spmenu-open' );
    disableOther( 'showLeft' );
    classie.remove(this, 'active' );
  };
  showLef.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( menuLeft, 'cbp-spmenu-open' );
    disableOther( 'showLeft' );
  };

  function disableOther( button ) {
    if( button !== 'showLeft' ) {
      classie.toggle( showLeft, 'disabled' );
    }
  }

  $(".tip-right").tooltip({placement : 'right'});
}());