import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";



const UpdateEmployee = () => {
  const { id } = useParams(); // Get employee ID from URL
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    empno: id,
    ename: "",
    job: "",
    sal: "",
    deptno: "",
  });

  

  // Fetch employee details by ID
  useEffect(() => {
    axios.get(`/employees/${id}`)
      .then(response => setEmployee(response.data))
      .catch(error => console.error("Error fetching employee:", error));
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  // Submit the updated employee details
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const response= await axios.put("/employees/update", employee);
      navigate("/employees", { state: { message: response.data } }); // ✅ Pass ss mesuccessage
    } catch (error) {
      console.error("Error updating employee:", error);
      alert("Failed to update employee.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label className="form-label">ID:</label>
          <input
            type="text"
            className="form-control"
            name="eid"
            value={employee.empno}
            readOnly        />
          </div>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            name="ename"
            value={employee.ename}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Job:</label>
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
          <label className="form-label">Salary:</label>
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
          <label className="form-label">Dept No:</label>
          <select  name="deptno" value={employee.deptno} className="form-control" onChange={handleChange} required >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
        <button type="button" className="btn btn-secondary mx-2" onClick={() => navigate("/employees")}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
