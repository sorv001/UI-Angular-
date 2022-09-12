import { Component, OnInit } from '@angular/core';
import { employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public employees:employee[] = []

  constructor(private employeeService: EmployeeService) { }

  collection: any = [];
  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe((result) => {
      console.log(result);
      this.collection = result;
    })
  }
  deleteUser(id: any) {
    this.employeeService.deleteUser(id).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err)
    })
  }
}
