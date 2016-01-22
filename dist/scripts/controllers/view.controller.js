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
      view.actions = [];
      for (var i = 0; i < view.taskData.tasks.length; i++) {
        view.taskData.tasks[i].expand = false;
        view.taskData.tasks[i].name = view.taskData.tasks[i].Action_Attribute.value;
        view.taskData.tasks[i].description = view.taskData.tasks[i].Legal_Action_Type.template;
        view.taskData.tasks[i].date = moment(view.taskData.tasks[i].created_at).format("MM/DD/YY");
        view.taskData.tasks[i].actions = view.taskData.tasks[i].Legal_Action_Type.Action_Type_Operation;
        for(var j in view.taskData.tasks[i].actions) {
          if (_.isUndefined(_.find(view.actions, function (act) {
              return act.operation === view.taskData.tasks[i].actions[j].operation;
            }))) {
            view.actions.push(view.taskData.tasks[i].actions[j]);
          }
        }
      }
    });
  }
  view.addNewTask = function () {
    view.newTask = angular.copy(view.taskData.tasks[0]); //creating new task with old task as template.
    view.newTask.name = null;
    view.newTask.description = null;
    view.newTask.date = null;
    view.newTask.Documents = [];
    view.newTask.actions = [];
  };
  view.saveTask = function () {
    for(var i = 0;i < view.actions.length;i++) {
      if (view.actions[i].selected) {
        view.newTask.actions.push(view.actions[i]);
        view.actions[i].selected = false;
      }
    }
    view.taskData.tasks.push(view.newTask);
  };
  view.addNewDoc = function () {
    view.newTask.Documents.push({name:view.newDoc});
    view.newDoc = null;
  };
}
