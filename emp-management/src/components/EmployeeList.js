import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table , Alert } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const location = useLocation();

  useEffect(() => {
    fetchEmployees();
  }, []);

  useEffect(() => {
    if (location.state?.message) {
      setMessage(location.state.message);
      setTimeout(() => setMessage(""), 5000); // Hide message after 3 seconds
      navigate("/employees", { replace: true, state: {} }); // Remove message from history
    }
  }, [location, navigate]);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("/employees/all"); // Calls Spring Boot Backend
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  // Navigate to Update Page
  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  // Handle Employee Deletion
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
    if (!confirmDelete) return; // If canceled, do nothing

    try {
      const response = await axios.delete(`/employees/delete/${id}`);
      navigate("/employees", { state: { message: response.data } }); // ✅ Show success message
      fetchEmployees(); // ✅ Refresh the list immediately
    } catch (error) {
      console.error("Error deleting employee:", error);
      alert("Failed to delete employee.");
    }
  };
  //   try {
  //     const response=await axios.delete(`/employees/delete/${id}`);
  //     navigate("/employees", { state: { message: response.data } }); // ✅ Pass success message
  //     fetchEmployees();
  //   } catch (error) {
  //     console.error("Error deleting employee:", error);
  //     alert("Failed to delete employee.");
  //   }
  // };

  return (
    <div className="container mt-4">
      <h2>Employee List</h2>
      
       {/* Display success message */}
       {message && <Alert variant="success">{message}</Alert>}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Job</th>
            <th>Salary</th>
            <th>Dept No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.empno}>
              <td>{emp.empno}</td>
              <td>{emp.ename}</td>
              <td>{emp.job}</td>
              <td>{emp.sal}</td>
              <td>{emp.deptno}</td>
              <td>
                <button className="btn btn-warning btn-sm mx-1" onClick={() => handleUpdate(emp.empno)}>
                  Update
                </button>
                <button className="btn btn-danger btn-sm mx-1" onClick={() => handleDelete(emp.empno)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeeList;
