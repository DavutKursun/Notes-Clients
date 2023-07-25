import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Note} from "../note";
@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css']
})
export class TabBarComponent {



  constructor(private modalService: NgbModal) {
  }
  openModal(content: any){
    this.modalService.open(content);
  }


  protected readonly onsubmit = onsubmit;
  onSubmit(title: string, body: string) {
    if(title != "" && body != ""){
      let tempNote: Note = {
        noteID:Date.now(),
        title:title,
        bodyText:body,
        isChangeable:false
      }
      localStorage.setItem( Date.now().toString(),JSON.stringify(tempNote));
    }
    window.location.reload();
  }

  deleteAll(){

  }
}
