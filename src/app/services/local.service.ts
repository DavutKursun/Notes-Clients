import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  setCurrentUser(user: string){
    localStorage.setItem('currentUser',user);
  }

  removeCurrentUser(){
    localStorage.removeItem('currentUser');
  }
}
