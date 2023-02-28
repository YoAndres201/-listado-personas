import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyD-0nnPPHehFcK7G9gIrLLrN58JUcLkHJg",
      authDomain: "listado-personas-fed8d.firebaseapp.com",
    })
  }
  
  isAutenticado(){
    return this.loginService.isAutenticado;
  }

  salir(){
    this.loginService.logout();
  }
}
