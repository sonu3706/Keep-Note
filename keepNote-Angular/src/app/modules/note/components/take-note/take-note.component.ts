import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.css']
})
export class TakeNoteComponent implements OnInit {

  public noteForm: FormGroup;

  constructor(public  dialogRef: MatDialog,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createNoteForm();
  }

  private createNoteForm(): void {
    this.noteForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]]
    });
  }

  public saveNote(): void {
    console.log(this.noteForm.value);
  }

}
