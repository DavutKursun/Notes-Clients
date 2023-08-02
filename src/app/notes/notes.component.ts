import {Component, OnInit} from '@angular/core';
import {Note} from "../note";
import {NotesService} from "../notes.service";
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit{
  notes: Note[] =[];
  constructor(private notesService: NotesService) {
  }
  ngOnInit(): void {
    this.getNotes();
  }
  toEnable(id: string){

    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id == id){
        this.notes[i].isChangeable = true;
      }
    }
  }
  getNotes(){
    this.notesService.getNotes().subscribe(notes => {
      this.notes = notes
    })

    this.notes.sort(function (a,b) {
      if (a.id < b.id)return -1;
      if(a.id> b.id)return 1;
       return 0;
    })
 }
 deleteNote(id: string) {
    this.notesService.deleteNote(id);
    window.location.reload();
  }
  updateNote(noteID: string,title: string, body: string){
    let tempNote: Note = {
      id: noteID,
      title:title,
      bodyText:body,
      isChangeable:false
    }
    this.notesService.updateNote(tempNote).subscribe();
    window.location.reload();
  }
}
