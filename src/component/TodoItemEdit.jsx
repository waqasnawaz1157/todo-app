import { Component } from "react";

class TodoItemEdit extends Component {
  constructor(props) {
    super(props);
    const {
      item: { title, desc },
    } = this.props;
    this.state = {
      title,
      desc,
    };
  }

  // handleChange
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { onSaveEdit } = this.props;
    const { title, desc } = this.state;

    return (
      <div className="todo-item-edit shadow rounded">
        <div className="todo-item-edit-form">
          <input
            onChange={this.handleChange}
            value={title}
            type="text"
            name="title"
            id="title"
            placeholder="Enter todo title"
            className="form-control mb-3"
          />
          <textarea
            onChange={this.handleChange}
            value={desc}
            name="desc"
            id="desc"
            placeholder="Enter todo description"
            className="form-control mb-3"
          ></textarea>
          <button
            onClick={() => onSaveEdit({ title, desc })}
            className="btn btn-success btn-sm todo-item-btn"
          >
            Edit & Save
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItemEdit;
