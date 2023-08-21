import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Note} from "./note";
import {Observable} from "rxjs";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private ROOT_URL = "http://localhost:8080/api/note";
  constructor(private http: HttpClient, private afs: AngularFireAuth) { }
  public getUsersAllNotes(userId: string): Observable<Note[]>{
    console.log("burdayım")
    return this.http.get<Note[]>(`${this.ROOT_URL}/getAllNotesById/${userId}`)
  }
  public addNote(note: Note): Observable<Note>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };
    return this.http.post<Note>(`${this.ROOT_URL}/save`, note, options)
  }
  public updateNote(note: Note): Observable<Note[]>{
    return this.http.put<Note[]>(`${this.ROOT_URL}/edit/${note.id}`,note)
  }
  public deleteNote(id: string): void{

     this.http.delete<void>(`${this.ROOT_URL}/delete/${id}`).subscribe()
  }
  public deleteAll(): void{
    this.http.delete<void>(`${this.ROOT_URL}/deleteAll`).subscribe()
  }

  public loginWithEmailAndPassword(user: {email: string, password: string}){
    localStorage.setItem('currentUser', user.email)
    return this.afs.signInWithEmailAndPassword(user.email,user.password);

  }

  public registerWithEmailAndPassword(user: {email: string, password: string}){
    localStorage.setItem('currentUser', user.email)
    return this.afs.createUserWithEmailAndPassword(user.email,user.password);

  }

  public logout(){
    localStorage.removeItem('currentUser')
    return this.afs.signOut();

  }

}
