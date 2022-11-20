import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
  //console.log(todo.email)
  const [degree, setDescription] = useState(todo.degree);

  //edit description function

  const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = { degree };
      const response = await fetch(
        `https://backend-doctor-nuedukz.herokuapp.com/${todo.email}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.email}`}
      >
        Edit
      </button>

      {/*
        id = id10
      */}
      <div
        class="modal"
        id={`id${todo.email}`}
        onClick={() => setDescription(todo.degree)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit degree</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setDescription(todo.degree)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={degree}
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(todo.degree)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
