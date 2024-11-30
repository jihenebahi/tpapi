import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
 
  employees: Employee[] = [];  // Déclare la propriété employees
 // employees$: Observable<Employee[]>; // Note l'utilisation du type Observable
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    // Charge les employés via le service
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  // Suppression d'un employé
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.employees = this.employees.filter(emp => emp.id !== id);
    });
  }

  // Mise à jour d'un employé
  updateEmployee(id: number) {
    // Logique pour la mise à jour
  }

  // Voir les détails d'un employé
  employeeDetails(id: number) {
    // Logique pour afficher les détails
  }
}
