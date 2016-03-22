(function () {
	'use strict';

	angular
		.module('levelUpAngular')
		.directive('appFooter', AppFooter);

	function AppFooter () {
		return {
			restrict: 'E',
			templateUrl: 'app/components/footer/footer.view.html',
			controller: TestController()
		};
	}

	function TestController ($scope) {
		console.log('I am Controller');
	}
})();