import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';


const routes: Routes = [
  {path : 'employees', component : EmployeeListComponent},
  {path: '', redirectTo : 'employees', pathMatch : 'full'},
  {path : 'create-employee', component : CreateEmployeeComponent},
  {path: 'update-employee/:id', component : UpdateEmployeeComponent},
  {path : 'view-employee/:id', component : ViewEmployeeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 