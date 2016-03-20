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
            }).then(function (response) {
                return response.data;
            }, function (reject) {
                console.log(reject);
            });
        };

        this.setItem = function (item) {
            return $http({
                method: 'POST',
                url: 'http://localhost:4001/fruites',
                data: {'fruite': item}
            }).then(function (response) {
                return response.data;
            }, function (reject) {
                console.log(reject);
            });
        };

        this.removeItem = function (id) {
            return $http({
                method: 'DELETE',
                url: 'http://localhost:4001/fruites/' + id
            }).then(function (response) {
                return response.data;
            }, function (reject) {
                console.log(reject);
            });
        };

        this.changeItem = function (item, id) {
            return $http({
                method: 'PUT',
                url: 'http://localhost:4001/fruites/' + id,
                data: {'fruite': item}
            }).then(function (response) {
                return response.data;
            }, function (reject) {
                console.log(reject);
            });
        };
    }
})();