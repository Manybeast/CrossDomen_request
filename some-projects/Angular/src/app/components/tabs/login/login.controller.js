(function () {
	'use strict';

	angular
		.module('ngRouteModule')
		.controller('loginController', loginController);

	function loginController () {
	 	var vm = this;

	 	vm.user = {};	 	

	 	vm.userInfo = function () {
	 		console.log('User Login: ' + vm.user.login);
	 		console.log('User Password: ' + vm.user.password);
	 		console.log('User E-mail: ' + vm.user.email);
	 	};

	 }
})();