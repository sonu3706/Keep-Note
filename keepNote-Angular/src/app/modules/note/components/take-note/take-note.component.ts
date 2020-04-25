import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.css']
})
export class TakeNoteComponent implements OnInit {

  constructor(public  dialogRef: MatDialog) { }

  ngOnInit(): void {
  }

}
