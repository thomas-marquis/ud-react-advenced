import React, { Component } from 'react';

export default class TodoApp extends Component {
  state = {
    todoList: [],
    input: ''
  };

  onButtonPress = event => {
    const { input, todoList } = this.state;
    this.setState({
      todoList: [...todoList, input]
    });
  };

  renderTodoList = () =>
    this.state.todoList.map((todo, index) => (
      <div
        key={index}
        className="list-group-item list-group-item-action flex-column align-items-start"
      >
        {todo}
      </div>
    ));

  render() {
    return (
      <div className="row justify-content-center">
        <fieldset className="col-md-10 form-group">
          <label htmlFor="inputTodo" className="bmd-label-floating">
            Nouvelle tâche
          </label>
          <input
            id="inputTodo"
            onChange={e => this.setState({ input: e.target.value })}
            value={this.state.input}
            className="form-control"
          />
        </fieldset>

        <div className="col-md-2">
          <button
            id="addButton"
            className="btn btn-primary btn-raised"
            onClick={this.onButtonPress}
          >
            Ajouter
          </button>
        </div>

        <div className="row">{this.renderTodoList()}</div>
      </div>
    );
  }
}
