package com.ems.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.entity.Employee;

import com.ems.repository.IEmployeeRepository;

@Service
public class EmployeeMgmtServiceImpl implements IEmployeeMgmtService {
	@Autowired
	private IEmployeeRepository empRepo;

	@Override
	public List<Employee> showAllEmployees() {
		List<Employee> list=StreamSupport.stream(empRepo.findAll().spliterator(), false).toList();
		return list.stream().sorted((emp1,emp2)-> emp1.getEname().compareToIgnoreCase(emp2.getEname())).toList();
	}

	@Override
	public String registerEmployee(Employee emp) {
		int idVal=empRepo.save(emp).getEmpno();
		return "Employeeis registered with id: "+idVal;
	}

	@Override
	public Employee fetchEmployeeById(int id) {
		return empRepo.findById(id).orElseThrow(()->new IllegalArgumentException("Employee with ID " + id + " not found"));	
	}

	@Override
	public String editEmployee(Employee emp) {
		Optional<Employee> opt=empRepo.findById(emp.getEmpno());
		if(opt.isPresent()) {
			empRepo.save(emp); 
			return emp.getEmpno()+"Employee is updated";
		}
		return emp.getEmpno()+"Employee is not found for updation";
	}

	@Override
	public String deleteEmployeeById(int id) {
		Optional<Employee> opt=empRepo.findById(id);
		if(opt.isPresent()) {
			empRepo.deleteById(id);
			return id+" Employee is deleted";
		}
		return id+ " Employee is not found";
	}
}
