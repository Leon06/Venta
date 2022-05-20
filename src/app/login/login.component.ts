import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiauthService } from '../services/apiauth.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {

  
  public loginForm = this.formBuilder.group({
    email : ['',Validators.required],
    password : ['',Validators.required]
  });    

  //Inyectamos el servicio de apiauth.service.ts
  constructor(public apiauthservice: ApiauthService, 
              private router:Router, 
              private formBuilder: FormBuilder) { 
    // if(this.apiauthservice.usuarioData){
    //   this.router.navigate(['/'])
    // }
  }

  ngOnInit(){
  }

  //va a ejecutar el servicio apiauth.service
  login(){
    console.log(this.loginForm.value);
    this.apiauthservice.login(this.loginForm.value).subscribe(response =>{
      if (response.exito === 1){
        this.router.navigate(['/'])
      }
    });
  }
}
