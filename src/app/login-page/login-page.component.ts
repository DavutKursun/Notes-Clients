import { Component } from '@angular/core';
import {NotesService} from "../services/notes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  email: string = "";
  password: string= "";
  isRegistered: boolean = false;
  constructor(private userService: NotesService, private router: Router) {
  }

  registerWithEmail(email: string, password: string){
    console.log(email);
    this.userService.registerWithEmailAndPassword({email,password}).then((res: any) => {
      this.router.navigateByUrl("home");
    })
  }

  loginWithEmail(email: string, password: string){
    this.userService.loginWithEmailAndPassword({email,password}).then((res: any) => {
      this.router.navigateByUrl("home");
    });
  }

}
