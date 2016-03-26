(function() {
  'use strict';

  angular
    .module('ngRouteModule')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment, $location) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
      vm.changeActive = function (path) {
        // debugger;
          if(path === '/') {
              if($location.path() === '/') {
                  return "active";
              } else {
                  return "";
              }
          }
          if(path === '/about') {
              if($location.path() === '/about') {
                  return "active";
              } else {
                  return "";
              }
          } 
          if(path === '/contact') {
              if($location.path() === '/contact') {
                  return "active";
              } else {
                  return "";
              }
          } 
          if(path === '/login') {
              if($location.path() === '/login') {
                  return "active";
              } else {
                  return "";
              }
          } 

      };
    }
  }

})();
