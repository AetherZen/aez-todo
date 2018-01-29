import { inject } from 'aurelia-framework';
import { ZenSpaces, Operator } from 'aethos-spaces';
import { Todo } from './todo';

@inject(ZenSpaces)
export class App {
  constructor(spaces) {
    this.spaces = spaces;
    this.collectionRegistry = spaces.collectionRegistry;
    this.operatorRegistry = spaces.operatorRegistry;

    this.heading = "Tasks";
    this.list = [];
    this.todoDescription = '';

    // Set the collection name -
    // this comes from the collection created in data-definition.json
    // {
    //   eventType: "newCollection",
    //   data: {
    //     name: "tasks", <-- here
    //     ...
    this.collectionName = 'tasks';

    this.operatorRegistry.register('newTask', NewTaskOperator);
    this.operatorRegistry.register('deleteTask', DeleteTaskOperator);
  }

  activate(params, routeConfig) {
    // bind to this.list (would be nice to have a parameter to allow binding to this.tasks or something other than
    // always defaulting to model.list)
    this.binding = this.collectionRegistry.bind(this, this.collectionName, 'name description done');
  }

  deactivate() {
    if (this.binding) {
      this.binding.dispose();
    }
  }

  addTodo() {
    // Validate; should probabl use something more Aurelia-like
    if (this.todoDescription) {
      // Get the appropriate action and call it.
      this.actions.get('newTask').execute().then(() => {
        this.todoDescription = '';
      });
    }
  }

  removeTodo(todo) {
    return this.actions.get('deleteTask').execute(todo);
  }
}

class NewTaskOperator extends Operator {
  constructor(...args) {
    super(...args);
  }

  execute() {
    console.log('New Task');
    console.log(this.viewModel);
    return this.getEventType().then((eventFactory) => {
      let newEvent = eventFactory.create();
      // TODO Would be nice to have this binding automatically occur.
      newEvent.description = this.viewModel.todoDescription;
      newEvent.done = false;
      this.spaces.createEvent(newEvent);
    })
  }
}

class DeleteTaskOperator extends Operator {
  constructor(...args) {
    super(...args);
  }

  execute(task) {
    console.log('Delete Task');
    console.log(this.viewModel);
    return this.getEventType().then((eventFactory) => {
      let deleteEvent = eventFactory.create(task);
      this.spaces.createEvent(deleteEvent);
    })
  }
}
