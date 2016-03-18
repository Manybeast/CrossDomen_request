(function() {
  'use strict';

  angular
    .module('levelUpAngular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $filter, toDoModel) {
    var vm = this;

    vm.header = "ToDoList";
    vm.newTodo = null;
    vm.btnText = 'ADD';
    vm.activeFilter = {};
    vm.status = '';
    vm.items = [];

    toDoModel.getAllItems()
      .then(function (response) {
                vm.items = response.data;
            }, function (reject) {
                console.log(reject);
            });

    $scope.$watch(function () {
      return vm.items;
    }, function () {
      // vm.leftTask = $filter('filter')(vm.items, {completed: false}).length;
      vm.leftTask = vm.items.filter(function (item) {
        return !item.completed;
      }).length;
      vm.completedCount = vm.items.length - vm.leftTask;
    }, true);

    vm.addItem = function (e) {
      var model = null;

      if (e.type === 'click' && vm.newTodo !== '') {
        model = {
            name: vm.newTodo,
            completed: false,
            id: vm.generateId()
        };
        // vm.items.push(model);
        toDoModel.setItem(model)
          .then(function (response) {
                vm.items = response.data;
            }, function (reject) {
                console.log(reject);
            });
        vm.newTodo = null;
        // vm.addToLocalStorage(vm.items);
      }
    };

    vm.addToLocalStorage = function (list) {
      localStorage.removeItem('ToDoList');
      localStorage.setItem('ToDoList', JSON.stringify(list));
    }

    vm.generateId = function () {
        return Math.floor((1 + Math.random()) * 0x10000);
    };

    vm.delete = function (e, id) {
        var currentIndex = vm.items.indexOf(vm.items.filter(function (item){
            return item.id === parseInt(id);
        })[0]);

        vm.items.splice(currentIndex, 1);

        // vm.addToLocalStorage(vm.items);
    };

    vm.completeItem = function (e, id) {
      var currentIndex = vm.items.indexOf(vm.items.filter(function (item){
        return item.id === parseInt(id);
      })[0]);

      vm.items[currentIndex].completed = !vm.items[currentIndex].completed;

      // vm.addToLocalStorage(vm.items);
    };

    vm.changeFilter = function (filter) {
      vm.newFilter = filter;

      if (vm.newFilter === 'active') {
        vm.activeFilter = {completed: false};
        return;
      }
      if (vm.newFilter === 'completed') {
        vm.activeFilter = {completed: true};
        return;
      }

      vm.activeFilter = {};
    }

    vm.clearCompleted = function () {
      vm.items = vm.items.filter(function (item) {
        return !item.completed;
      })

      // vm.addToLocalStorage(vm.items);
    };

    vm.toggleAll = function (completed) {
      vm.items.forEach(function (item) {
        item.completed = completed;
      });

      // vm.addToLocalStorage(vm.items);
    }

  }
})();
