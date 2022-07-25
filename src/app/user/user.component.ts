import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { UserService } from '../_services/user.service';
import { EmployeeService } from '../_services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  employees:Employee[] | undefined
  message!: string;
  constructor(private userService: UserService,private employeeService: EmployeeService,private router: Router) { }

  ngOnInit(): void {
    this.forUser(),
    this.getEmployees();
  }
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe((data: any) => {
      this.employees = data;
    });
  }
  employeeDetails(id: any){
    this.router.navigate(['employee-details', id]);
  }

  forUser() {
    this.userService.forUser().subscribe(
      (response) => {
        console.log(response);
        this.message = response;
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}
