import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [doctors, setdoctor] = useState([]);

  //delete todo function

  const deleteTodo = async email => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/doctor/${email}`, {
        method: "DELETE"
      });

      setdoctor(doctors.filter(doctor => doctor.email !== email));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/doctor");
      const jsonData = await response.json();

      setdoctor(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  //console.log(todos);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Degree</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {doctors.map(doctor => (
            <tr>
              <td>{doctor.degree}</td>
              <td>{doctor.email}</td>
            <td>
                <EditTodo todo={doctor} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(doctor.email)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
