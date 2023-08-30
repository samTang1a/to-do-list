import { Component } from 'react';

export default class ToDoList extends Component {

  todos: string[] = ["Buy groceries", "Clean the house", "Walk the dog"]

  render() {
    return (
      <>
        <ul className="list-group">
          {this.todos.map(todo =>
            (<li className="list-group-item">{todo}</li>)
          )}
        </ul>
      </>
    )
  }
}
