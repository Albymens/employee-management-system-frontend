import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = "http://localhost:8082/employees"

  constructor(private httpClient : HttpClient) { }

  getEmployees() : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`)
  }

  createEmployee(employee : Employee) : Observable<Employee>{
    return this.httpClient.post<Employee>(this.baseUrl, employee);
  }

  updateEmployee(id : number | undefined, employee : Employee) : Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, employee)
  }

  getEmployeeById(id : number | undefined) : Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`)
  }

  deleteEmployee(id : number | undefined) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
