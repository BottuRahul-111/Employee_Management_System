import React, { useState } from "react";
import axios from "axios";

const EmployeeRegister = () => {
  const [employee, setEmployee] = useState({
    ename: "",
    job: "",
    sal: "",
    deptno: 30,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4040/employees/register",
        employee
      );
      setMessage(response.data); // Show success message
      setEmployee({ ename: "", job: "", sal: "", deptno: 30 }); // Reset form fields
    } catch (error) {
      setMessage("Error registering employee");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Register Employee</h2>
      {message && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Employee Name</label>
          <input
            type="text"
            className="form-control"
            name="ename"
            value={employee.ename}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Job</label>
          <input
            type="text"
            className="form-control"
            name="job"
            value={employee.job}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input
            type="number"
            className="form-control"
            name="sal"
            value={employee.sal}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Dept No</label>
            <select  name="deptno" className="form-control" onChange={handleChange} required >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default EmployeeRegister;
