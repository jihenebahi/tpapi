import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private readonly apiUrl = 'http://localhost:8080/springcrud/api/v1/employees';

  constructor(private http: HttpClient) {}

  // Récupérer tous les employés
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  // Ajouter un nouvel employé
  addEmployee(employee: Employee): Observable<Object> {
    return this.http.post(this.apiUrl, employee);
  }

  // Mettre à jour un employé existant
  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, employee);
  }

  // Supprimer un employé
  deleteEmployee(id: number): Observable<Object> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Récupérer les détails d'un employé
  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }
}