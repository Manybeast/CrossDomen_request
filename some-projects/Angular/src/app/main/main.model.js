(function() {
  'use strict';

  angular
    .module('levelUpAngular')
    .service('toDoModel', ToDoModel);

    function ToDoModel ($http) {
    	console.log('Service enable');

    	var items = [];

        this.getAllItems = function () {
            return $http({
                method: 'GET',
                url: 'http://localhost:4001/fruites'
            });
        };

        this.setItem = function (item) {
            return $http({
                method: 'POST',
                url: 'http://localhost:4001/fruites',
                data: {'fruite': item}
            });
        }
    }
})();