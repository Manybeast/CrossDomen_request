(function() {
  'use strict';

  angular
    .module('ngRouteModule')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
