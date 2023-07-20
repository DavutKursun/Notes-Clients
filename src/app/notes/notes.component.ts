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
    console.log(this.notes[id]);
      this.notes[id].isChangeable =true;
    console.log("true")
  }

  toDisable(id: number) {
    console.log(this.notes[id]);
    this.notes[id].isChangeable = false;
  }

  getNotes(){
    for (let i = 0; i < localStorage.length; i++) {
        this.notes.push(JSON.parse(localStorage.getItem(localStorage.key(i) || ' ' ) || ' '));
    }
    this.notes.sort(function (a,b) {
      if (a.noteID < b.noteID)return -1;
      if(a.noteID> b.noteID)return 1;
       return 0;
    })
 }


 deleteNote(id: number) {
    localStorage.removeItem(id.toString());
    window.location.reload();
  }

}
