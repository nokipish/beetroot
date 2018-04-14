/* REACT */
import React, { Component } from 'react';

/* CUSTOM MODULES */
import Title from './../../components/Title';
import TodoItem from './../../components/TodoItem';
import TextInput from './../../components/TextInput';
import SimpleButton from './../../components/SimpleButton';

/* CONFIGS */
import { IS_SPACE } from './../../config/patterns';

/* STYLES */
import './styles.css';

export default class TodoList extends Component {

  // constructor() {
  //   this.state = {

  //   }

  // }
  state = {
    inputValue: '',
    inputTextError: '',
    todoList: [],
  }

  /**
   * handle change input value
   */
  handleChangeInput = (e) => {
    const { value } = e.target;
    this.setState(() => ({
      inputValue: value
    }));
  }

  /**
   * handleChangeCheckbox
   */
  handleChangeCheckbox = (id) => {
    const _arr = [...this.state.todoList];
    _arr[id].done = !_arr[id].done;
    this.setState((prevState) => ({
      todoList: [..._arr]
    }));
  }

  /**
   * add todo
   */
  addTodo = (e) => {
    e.preventDefault();
    const { inputValue } = this.state;
    if (!inputValue.match(IS_SPACE)[0].length && inputValue.length > 10) {
      const todo = {
        id: new Date(),
        text: this.state.inputValue,
        done: false
      };
      this.setState(() => ({
        todoList: [...this.state.todoList, todo],
        inputValue: '',
        inputTextError: ''
      }));
    } else {
      this.setState(() => ({
        inputTextError: 'Validation error. Please, enter a valid text. Min length 10 characters.'
      }));
    }
  }

  /**
   * delete todo Item
   */
  deleteTodo = (todoText) => {
    this.setState(prevState => ({
      todoList: prevState.todoList.filter( item => item.id !== todoText.id ),
    }));
  }

  /**
   * delete all todos
   */
  deleteAllTodos = () => {
    this.setState(() => ({
      todoList: []
    }));
  }

  render() {
    const { inputValue, todoList, inputTextError } = this.state;

    return (
      <div>
        <Title title="Todo Form" />
        <form onSubmit={this.addTodo}>
          <TextInput
            name="todo"
            placeholder="Enter todo"
            value={inputValue}
            errortext={inputTextError}
            onChange={this.handleChangeInput}
          />
          <SimpleButton
            label="Add todo"
            onClick={this.addTodo}
            btnSubmit={true}
          />
        </form>
        <Title title="Todo List" />
        <div>
          {
            todoList.length > 0
              ? (
                <ul>
                  {
                    todoList.map((item, index) => (
                      <TodoItem
                        key={item.id}
                        text={item.text}
                        deleteTodo={() => this.deleteTodo(item)}
                        checked={item.done}
                        onChange={() => this.handleChangeCheckbox(index)}
                      />
                    ))
                  }
                </ul>
              )
              : <p>Ваш Todo LIST пуст</p>
          }
        </div>
        <hr />
        <p>Общее кол-во todo's: <strong>{todoList.length}</strong></p>
        <hr/>
        <SimpleButton
          label="Delete all todos"
          onClick={this.deleteAllTodos}
          disabled={todoList.length < 1}
        />
      </div>
    )
  }
}