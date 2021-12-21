import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  employee : Employee = new Employee;
  id : number | undefined
  constructor(private employeeService : EmployeeService, private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id']
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee = data;
    })
  }

}
