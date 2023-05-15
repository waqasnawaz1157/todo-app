import { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class Todo extends Component {
  state = {
    todos: [],
    title: "",
    desc: "",
    isEdit: -1,
  };

  // handleChange
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  // handleAdd
  handleAdd = () => {
    const { title, desc } = this.state;
    const todos = [...this.state.todos];
    todos.push({ title, desc });
    this.setState({ todos, title: "", desc: "" });
    console.log(this.state.todos);
  };
  // handleDelete
  handleDelete = (item) => {
    const todos = [...this.state.todos];
    const index = todos.indexOf(item);
    todos.splice(index, 1);
    this.setState({ todos });
  };
  // handleEdit
  handleEdit = (item) => {
    const todos = [...this.state.todos];
    const index = todos.indexOf(item);
    this.setState({ isEdit: index });
  };
  // handleSaveEdit
  handleSaveEdit = (item) => {
    const todos = [...this.state.todos];
    const { isEdit } = this.state;
    todos[isEdit] = item;
    this.setState({ isEdit: -1, todos });
  };

  render() {
    const { title, desc, todos, isEdit } = this.state;

    return (
      <>
        <TodoForm
          onChange={this.handleChange}
          values={{ title, desc }}
          onAdd={this.handleAdd}
        />
        <TodoList
          todos={todos}
          onDelete={this.handleDelete}
          onEdit={this.handleEdit}
          isEdit={isEdit}
          onSaveEdit={this.handleSaveEdit}
        />
      </>
    );
  }
}

export default Todo;
