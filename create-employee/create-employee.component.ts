import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee(0, '', '', '','');

  constructor(private employeeService: EmployeeService) {}

  onSubmit() {
    this.employeeService.addEmployee(this.employee).subscribe(() => {
      // Logique après soumission
      console.log('Employee added', this.employee);
    });
  }
}
