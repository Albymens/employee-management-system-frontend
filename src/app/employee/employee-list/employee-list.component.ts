import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees : Employee[] | undefined 

  constructor(private employeeService : EmployeeService, private route : Router) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(){
    return this.employeeService.getEmployees().subscribe(data=>{
      this.employees = data
    });
  }

  updateEmployee(id : number | undefined){
    return this.route.navigate(["update-employee", id]);
  }

  deleteEmployee(id : number | undefined){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      console.log(data)
      this.getAllEmployees()
    })
  }
  viewEmployee(id : number | undefined){
    this.route.navigate(['view-employee', id])
  }
}
