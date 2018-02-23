import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(({ id, text, checked }) => {
      return <TodoItem
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
      />
    });

    // const todoList = todos.map(
    //   (todo) => (
    //     <TodoItem
    //       {...todo}
    //       onToggle={onToggle}
    //       onRemove={onRemove}
    //       key={todo.id}
    //     />
    //   )
    // );


    // const todoList = todos.map(todo => {
    //   <TodoItem
    //     id={todo.id}
    //     text={todo.text}
    //     checked={todo.checked}
    //     onToggle={onToggle}
    //     onRemove={onRemove}
    //     key={todo.id}
    //   />
    // });

    
    // const todoList = todos.map(todo => {
    //   <TodoItem
    //     {...todo}
    //     onToggle={onToggle}
    //     onRemove={onRemove}
    //     key={todo.id}
    //   />
    // });


    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoItemList;