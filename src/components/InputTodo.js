import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [email, setE] = useState("");
  const [degree, setD] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email,degree };
      const response = await fetch("https://backend-doctor-nuedukz.herokuapp.com/doctor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleChange1 = event => {
    setE(event.target.value);

    console.log('value is:', event.target.value);
  };

  const handleChange2 = event => {
    setD(event.target.value);

    console.log('value is:', event.target.value);
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Doctors List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          placeholder="enter email"
          type="email"
          className="form-control"
          onChange={handleChange1}
          value={email}
        />
        <input
          placeholder="enter degree"
          type="text"
          className="form-control-2"
          onChange={handleChange2}
          value={degree}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
