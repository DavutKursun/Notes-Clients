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
  @Output() setNoteEvent = new EventEmitter<Note>();
  constructor(private notesService: NotesService ) {
  }
  ngOnInit(): void {
  }
  toEnable(){
    this.note.changeable = true;
  }
 deleteNote() {
    this.setNoteEvent.emit(this.note);
  }
  updateNote(noteTemp: Note){
    this.note.changeable=false;
    this.notesService.updateNote(noteTemp).subscribe();
  }
}
