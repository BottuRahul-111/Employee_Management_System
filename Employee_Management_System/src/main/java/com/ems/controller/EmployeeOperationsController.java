package com.ems.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.entity.Employee;
import com.ems.service.IEmployeeMgmtService;

@RestController
@RequestMapping("/employees")
//@CrossOrigin(origins = "http://localhost:3000")  // Allow React frontend access
public class EmployeeOperationsController {

	@Autowired
	private IEmployeeMgmtService empService;
	
	 // Fetch all employees (Sorted by Name)
    @GetMapping("/all")
    public ResponseEntity<?> getAllEmployees() {
    	try {
        List<Employee> employees = empService.showAllEmployees();
        return new ResponseEntity<List<Employee>>(employees,HttpStatus.OK);
    	}
    	catch(Exception e)
    	{
    		e.printStackTrace();
    		return new ResponseEntity<String>("Problem in fetching Employees",HttpStatus.INTERNAL_SERVER_ERROR);
    	}
    }

    // Fetch employee by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getEmployeeById(@PathVariable int id) {
    	try {
    		 Employee employee = empService.fetchEmployeeById(id);
    	        return new ResponseEntity<Employee>(employee,HttpStatus.OK);
    	}
       catch(Exception e) {
    	   return new ResponseEntity<String>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
       }
    }

    // Register a new employee
    @PostMapping("/register")
    public ResponseEntity<String> createEmployee(@RequestBody Employee emp) {
    	try {
        String message = empService.registerEmployee(emp);
        return new ResponseEntity<String>(message,HttpStatus.CREATED);
    	}
    	catch(Exception e) {
    		return new ResponseEntity<String>("problem in employee register",HttpStatus.INTERNAL_SERVER_ERROR);
    	}
    }

    // Update an existing employee
    @PutMapping("/update")
    public ResponseEntity<String> updateEmployee(@RequestBody Employee emp) {
    	try {
    		 String message = empService.editEmployee(emp);
    	     return new ResponseEntity<String>(message,HttpStatus.OK);
    	}
    	catch(Exception e)
    	{
    		return new ResponseEntity<String>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
    	}
       
    }

    // Delete an employee by ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable int id) {
    	try {
    		 String message = empService.deleteEmployeeById(id);
    	     return new ResponseEntity<String>(message,HttpStatus.OK);
    	}
    	catch(Exception e)
    	{
    		return new ResponseEntity<String>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
    	}
       
    }
}
