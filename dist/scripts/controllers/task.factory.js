angular.module('lexstartProjectApp').factory('taskFactory', taskFactory);
taskFactory.$inject = ['$http'];
function taskFactory($http){
  return {
    getTaskData: function() {
      return $http.get('./task.json');
    }
  }
}
