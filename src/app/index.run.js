(function() {
  'use strict';

  angular
    .module('tablePoc')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
