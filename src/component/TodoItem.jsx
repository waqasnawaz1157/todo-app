function TodoItem({ item, onDelete, onEdit }) {
  return (
    <div className="todo-item shadow rounded">
      <h5>{item.title}</h5>
      <hr />
      <p>{item.desc}</p>
      <hr />
      <button
        onClick={() => onEdit(item)}
        className="btn btn-primary btn-sm todo-item-btn"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(item)}
        className="btn btn-danger btn-sm todo-item-btn"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
