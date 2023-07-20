import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Note} from "./note";

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private ROOT_URL = "http://localhost:3000/notes";
  // @ts-ignore
  constructor(private http: HttpClient) { }
}
