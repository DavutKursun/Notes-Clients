import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Note} from "../note";
import {NotesService} from "../services/notes.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css']
})
export class TabBarComponent {
  username: string = localStorage.getItem('currentUser') || " ";

  constructor(private modalService: NgbModal, private notesService: NotesService, private router: Router) {
  }

  openModal(content: any){
    this.modalService.open(content);
  }

  onSubmit(title: string, body: string) {
    if(title != "" && body != ""){
      let tempNote: Note = {
        id:Date.now().toString(),
        userId: localStorage.getItem('currentUser') || " ",
        changeable:false,
        title:title,
        bodyText:body,
      }
      this.notesService.addNote(tempNote).subscribe();
    }
    window.location.reload();
  }

  deleteAll() {
    this.notesService.deleteUsersAllNote(this.username);
  }

  logout(){
    this.notesService.logout().then((res: any) => {
      this.router.navigateByUrl("");
    });
  }
}
