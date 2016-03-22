(function () {
	'use strict';

	angular
		.module('levelUpAngular')
		.directive('appListItem', AppListItem);

	function AppListItem () {
		return {
			restrict: 'E',
			templateUrl: 'app/components/list.items/list.view.html',
			controller: TestController()
		};
	}

	function TestController ($scope) {
		console.log('I am Controller');
	}
})();