import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiauthService } from '../services/apiauth.service';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {

  public email!: string;
  public password!: string;
  //Inyectamos el servicio de apiauth.service.ts
  constructor(public apiauthservice: ApiauthService, private router:Router) { 
    if(this.apiauthservice.usuarioData){
      this.router.navigate(['/home'])
    }
  }

  ngOnInit(){
  }

  //va a ejecutar el servicio apiauth.service
  login(){
    this.apiauthservice.login(this.email, this.password).subscribe(response =>{
      if (response.exito === 1){
        this.router.navigate(['/'])
      }
    });
  }
}
