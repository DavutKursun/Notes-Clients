import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Note} from "./note";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private ROOT_URL = "http://localhost:8080/api/note";
  // @ts-ignore
  constructor(private http: HttpClient) { }

  public getNotes(): Observable<Note[]>{
    return this.http.get<Note[]>(`${this.ROOT_URL}/getAll`)
  }

  public getNoteById(id: string): Observable<Note> {
    return this.http.get<Note>(`${this.ROOT_URL}/note/{id}`)
  }

  public addNote(note: Note): Observable<Note>{
    return this.http.post<Note>(`${this.ROOT_URL}/save`, note)
  }

  public updateNote(note: Note): Observable<Note[]>{

    return this.http.put<Note[]>(`${this.ROOT_URL}//edit/{note.noteID}`,note)
  }

  public deleteNote(id: string): Observable<void>{
    return this.http.delete<void>(`${this.ROOT_URL}/delete/{id}`)
  }

  public deleteAll(): void{
    this.http.delete<void>(`${this.ROOT_URL}/deleteAll`)
  }
}
