angular.module('todoListApp', [])
  .controller('mainCtrl', function($scope, dataService) {

    $scope.helloConsole = dataService.hello;
    $scope.addTodo = function() {
      var todo = {
        name: "This is a new Todo"
      };

      $scope.todos.push(todo);
    };

    dataService.getTodos(function(response) {
      $scope.todos = response.data;
    });

    $scope.deleteTodo = function(todo, $index) {
      dataService.deleteTodo(todo);
      $scope.todos.splice($index, 1);
    };

    $scope.saveTodo = function(todo, $index) {
      dataService.saveTodo(todo);
    };
  })

  .service('dataService', function($http) {
    this.hello = function() {
      console.log("this is dataService");
    };

    this.getTodos = function(callback) {
      $http.get('mock/todos.json')
      .then(callback);
    };

    this.deleteTodo = function(todo) {
      console.log("deleting" + todo);
    };

    this.saveTodo = function(todo) {
      console.log("saving" + todo);
    };
  });
