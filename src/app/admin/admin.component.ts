import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  employees: Employee[] | undefined
  constructor(private employeeService: EmployeeService,
    private router: Router) { }


  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data =>{
      this.employees = data ;
    });
  }
  employeeDetails(id: any){
    this.router.navigate(['employee-details', id]);
  }
  updateEmployee(id:any){
    this.router.navigate(['update-employee',id]);
  }
  deleteEmployee(id: any){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
}


