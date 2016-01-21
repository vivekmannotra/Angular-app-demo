'use strict';

angular.module('lexstartProjectApp')
  .controller('viewController', viewController);
viewController.$inject = ['taskFactory'];
function viewController (taskFactory) {
  var view = this;
  activate();
  function activate() {
    taskFactory.getTaskData().success(function (data) {
      view.taskData = data;
      for (var i = 0; i < view.taskData.tasks.length; i++) {
        view.taskData.tasks[i].expand = false;
      }
    });
  }
  view.addTask = function () {
  };
}
