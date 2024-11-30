import { Component } from '@angular/core';
import { EmployeeService } from './service/employee.service';
import { Employee } from './model/employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-app';
  employees: Employee[] = [];

  constructor(private empService: EmployeeService) {
    empService.getEmployees().subscribe(data => (this.employees = data));
  }
}
