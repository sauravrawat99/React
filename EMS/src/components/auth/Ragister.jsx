import React, { useState } from "react";
import { useEmployee } from "../../CostomHook.js/EmployeHook.js";

const Register = () => {
  const { addEmployee } = useEmployee();

  const [emplo, setEmplo] = useState({
    name: "",
    email: "",
    password: "",
  });

  // input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setEmplo({
      ...emplo,
      [name]: value,
    });
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    addEmployee(emplo); // 🔥 global state me add

    console.log(emplo);

    // reset form
    setEmplo({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={emplo.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={emplo.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={emplo.password}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;
