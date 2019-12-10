import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AppService } from '../app.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username:string ;
  password:string;
  errorMsg : string;
  createForm() {
    this.loginForm = this.fb.group({
      password: ['', [Validators.required] ],
      username : ['', Validators.required ]
    });
  }

  constructor(private fb: FormBuilder,
    private appService : AppService,
    private router : Router) { 
    this.createForm();
  }

  ngOnInit() {
  }

  submit(){
    this.errorMsg = null;
    let result = this.appService.authenticate(this.username,this.password);
    if(result != "OK"){
      this.errorMsg = result;
    }else{
      this.router.navigate(["/dashboard"]);
    }
  }
}
