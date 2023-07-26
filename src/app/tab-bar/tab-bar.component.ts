import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Note} from "../note";
import {NotesService} from "../notes.service";
@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css']
})
export class TabBarComponent {



  constructor(private modalService: NgbModal, private notesService: NotesService) {
  }
  openModal(content: any){
    this.modalService.open(content);
  }


  protected readonly onsubmit = onsubmit;
  onSubmit(title: string, body: string) {
    if(title != "" && body != ""){
      let tempNote: Note = {
        id:Date.now().toString(),
        isChangeable:false,
        title:title,
        bodyText:body,

      }
      this.notesService.addNote(tempNote).subscribe();
      //localStorage.setItem( Date.now().toString(),JSON.stringify(tempNote));
    }
    window.location.reload();
  }

  deleteAll(){
    this.notesService.deleteAll();
  }

}
