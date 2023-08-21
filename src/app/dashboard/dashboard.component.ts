import {Component, OnInit} from '@angular/core';
import {Note} from "../note";
import {NotesService} from "../notes.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  username: string = localStorage.getItem('currentUser') || " ";
  notes: Note[] =[];
  constructor(private notesService: NotesService) {
  }
  ngOnInit(): void {
    this.getNotes();
  }
  public getNotes(){
    this.notesService.getUsersAllNotes(this.username).subscribe(notes => {
      this.notes = notes
    });
  }
  deleteNote(id: string) {
    this.notesService.deleteNote(id);
    this.notesService.getUsersAllNotes(this.username).subscribe();
    this.getNotes();
  }
}
