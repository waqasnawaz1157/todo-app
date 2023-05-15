function TodoForm({ values: { title, desc }, onChange, onAdd }) {
  return (
    <>
      <div className="todo-form-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h4 className="text-white mb-4">Add Todo Item Here</h4>
              <div className="todo-form-inner-box">
                <div className="row">
                  <div className="col-sm-12 col-lg-3"></div>
                  <div className="col-sm-12 col-lg-6 mb-3">
                    <input
                      onChange={onChange}
                      value={title}
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Enter todo title"
                      className="form-control"
                    />
                  </div>
                  <div className="col-sm-12 col-lg-3"></div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-lg-3"></div>
                  <div className="col-sm-12 col-lg-6 mb-3">
                    <textarea
                      onChange={onChange}
                      value={desc}
                      name="desc"
                      id="desc"
                      placeholder="Enter todo description"
                      className="form-control"
                    ></textarea>
                  </div>
                  <div className="col-sm-12 col-lg-3"></div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <button onClick={onAdd} className="btn btn-warning">
                      ADD ITEM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoForm;
