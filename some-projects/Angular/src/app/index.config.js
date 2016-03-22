(function() {
  'use strict';

  angular
    .module('levelUpAngular')
    .config(config);

  /** @ngInject */
  function config($logProvider, $routeProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.view.html'
      })
      .when('/new-route', {
        templateUrl: 'app/components/footer/footer.view.html'
      });
    // Set options third-party lib

  }

})();
