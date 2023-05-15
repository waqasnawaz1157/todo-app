import TodoItem from "./TodoItem";
import TodoItemEdit from "./TodoItemEdit";

function TodoList({ todos, onDelete, onEdit, isEdit, onSaveEdit }) {
  return (
    <>
      <div className="todo-list-box">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 d-flex justify-content-center">
              {/* TodoList */}
              <div className="todo-list-item-box">
                <div className="row">
                  {todos.map((item, index) =>
                    isEdit !== index ? (
                      <TodoItem
                        item={item}
                        key={index}
                        onDelete={onDelete}
                        onEdit={onEdit}
                      />
                    ) : (
                      <TodoItemEdit item={item} onSaveEdit={onSaveEdit} />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
