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

  toEnable(id: number){
    this.notes[id].isChangeable =true;
  }

  toDisable(id: number) {
    this.notes[id].isChangeable = false;
  }

  getNotes(){
    this.notesService.getNotes().subscribe(notes => {
      notes = this.notes
    })
    /*
    for (let i = 0; i < localStorage.length; i++) {
        this.notes.push(JSON.parse(localStorage.getItem(localStorage.key(i) || ' ' ) || ' '));
    }*/

    this.notes.sort(function (a,b) {
      if (a.noteID < b.noteID)return -1;
      if(a.noteID> b.noteID)return 1;
       return 0;
    })
 }


 deleteNote(id: string) {
    this.notesService.deleteNote(id)
    //localStorage.removeItem(id.toString());
    window.location.reload();
  }

  updateNote(noteID: string,title: string, body: string){
    let tempNote: Note = {
      noteID: noteID,
      title:title,
      bodyText:body,
      isChangeable:false
    }
    this.notesService.updateNote(tempNote);
    window.location.reload();
  }

}
