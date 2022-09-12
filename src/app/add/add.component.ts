import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {


  constructor(private httpService:EmployeeService) { }

  addUserForm = new FormGroup({
    uid: new FormControl(''),
    firstName:new FormControl(''),
    middleName:new FormControl(''),
    lastName:new FormControl(''),
    email:new FormControl(''),
    contact:new FormControl(''),
    c_name:new FormControl(''),
    website:new FormControl(''),
    customer_address:new FormControl(''),
    role:new FormControl(''),
  })

  ngOnInit(): void {
  }

  onSubmit(){
      console.log(this.addUserForm.value);
      this.httpService.addUser(this.addUserForm.value).subscribe((data)=>{
        console.log('success!!',data);
      },(err) =>{
        console.log(err);
      })
  }

}
