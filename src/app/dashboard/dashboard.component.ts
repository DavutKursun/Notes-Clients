import {Component, OnInit} from '@angular/core';
import {Note} from "../note";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  notes: Note[] = [];
  ngOnInit(): void {
  }

  getNotes(): void{

  }



}