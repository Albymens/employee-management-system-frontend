import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee;

  constructor(private employeeService : EmployeeService, private route: Router) { }

  ngOnInit(): void {
  
  }
  onSubmit(){
    return this.employeeService.createEmployee(this.employee).subscribe(data=>{
      this.goToEmployeeList()
      console.log(this.employee)
    }, error=> console.error)
  }

  goToEmployeeList(){
    this.route.navigate(['employees'])
  }
}
