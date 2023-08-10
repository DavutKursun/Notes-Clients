import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from "../note";
import {NotesService} from "../notes.service";
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit{
  @Input() note: Note = {id: "", title: "", bodyText: "", changeable:false};
  noteOut: Note = {id: "", title: "", bodyText: "", changeable:false};
  @Output() setNoteEvent = new EventEmitter<Note>();
  constructor(private notesService: NotesService ) {
  }
  ngOnInit(): void {
  }
  toEnable(id: string){
    this.note.changeable = true;
  }
 deleteNote(id: string) {
    this.setNoteEvent.emit(this.note);
  }
  updateNote(noteID: string,title: string, body: string){
    let tempNote: Note = {
      id: noteID,
      title:title,
      bodyText:body,
      changeable:false
    }
    this.note.changeable=false;
    this.notesService.updateNote(tempNote).subscribe();
  }
}
