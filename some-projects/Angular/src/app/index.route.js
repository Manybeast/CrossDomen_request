(function() {
  'use strict';

  angular
    .module('ngRouteModule')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.view.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'app/components/tabs/about/about.view.html'
      })
      .when('/contact', {
        templateUrl: 'app/components/tabs/contact/contact.html'
      })
      .when('/login', {
        templateUrl: 'app/components/tabs/login/login.view.html',
        controller: 'loginController',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
