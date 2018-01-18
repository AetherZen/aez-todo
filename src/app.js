import { inject } from 'aurelia-framework';
import { ZenSpaces, CollectionRegistry, OperatorRegistry, Operator } from 'aethos-spaces';
import { Todo } from './todo';

@inject(ZenSpaces, CollectionRegistry, OperatorRegistry)
export class App {
  constructor(spaces, collectionReistry, operatorRegistry) {
    this.spaces = spaces;
    this.collectionRegistry = collectionReistry;
    this.operatorRegistry = operatorRegistry;

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
  }

  activate(params, routeConfig) {
    // Configure the model
    this.model = {
      name: this.collectionName
    };
    // bind to this.list
    this.binding = this.collectionRegistry.bind(this, this.collectionName);
  }

  deactivate() {
    if (this.binding) {
      this.binding.dispose();
    }
  }

  addTodo() {
    // TODO Get the appropriate action and call it.
    console.log(this.actions);
    if (this.todoDescription) {
      // this.todos.push(new Todo(this.todoDescription));
      // this.todoDescription = '';
    }
  }

  removeTodo(todo) {
    // let index = this.todos.indexOf(todo);
    // if (index !== -1) {
    //   this.todos.splice(index, 1);
    // }
  }
}

class NewTaskOperator extends Operator {
  constructor() {
    super(...arguments);
  }

  execute() {
    console.log('New Task');
    this.getEventType().then((eventFactory) => {
      this.newEvent = eventFactory.create();
      this.newEvent.
      this.spaces.createEvent(event);
    })
  }
}
