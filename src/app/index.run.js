(function() {
  'use strict';

  angular
    .module('elga')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
