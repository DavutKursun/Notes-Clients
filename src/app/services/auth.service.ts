import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate{

  canActivate(): boolean {
    if(localStorage.getItem('currentUser')){
      return true;
    }
    return false;
  }
}
