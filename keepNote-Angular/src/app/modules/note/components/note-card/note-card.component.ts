import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../../../models/note';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css'],
})
export class NoteCardComponent implements OnInit {
  @Input() notes: [] = [];
  constructor() {}

  ngOnInit(): void {
    console.log(this.notes.length);
  }
}
