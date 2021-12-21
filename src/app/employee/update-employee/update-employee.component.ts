import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee : Employee = new Employee;
  id : number | undefined;
  constructor(private employeeService : EmployeeService, private activatedRoute : ActivatedRoute, private route : Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"]
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee = data
    })
  }
  updateEmployee(){  
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data=>{
      this.route.navigate(["employees"])
      console.log(data)
    })
  }

  onSubmit(){
   this.updateEmployee()
  }
}
