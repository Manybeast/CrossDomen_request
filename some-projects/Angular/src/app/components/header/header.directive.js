(function () {
	'use strict';

	angular
		.module('levelUpAngular')
		.directive('appHeader', AppHeader);

	function AppHeader () {
		return {
			restrict: 'E',
			templateUrl: 'app/components/header/header.view.html',
			controller: TestController()
		};
	}

	function TestController ($scope) {
		console.log('I am Controller');
	}
})();