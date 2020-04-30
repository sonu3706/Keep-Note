import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from '../../../../models/note';
import { RestService } from '../../../../services/rest.service';
import { AppConfigService } from '../../../../services/app-config.service';
import { ConfigService } from '@ngx-config/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.css'],
})
export class TakeNoteComponent implements OnInit {
  public noteForm: FormGroup;
  public noteObject: Note;
  public appConfig: AppConfigService;

  constructor(
    public dialogRef: MatDialog,
    private formBuilder: FormBuilder,
    private createNoteService: RestService<Boolean>,
    private configService: ConfigService,
    private logger: NGXLogger
  ) {
    this.appConfig = new AppConfigService(configService);
  }

  ngOnInit(): void {
    this.createNoteForm();
  }

  private createNoteForm(): void {
    this.noteForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
  }

  public saveNote(): void {
    if (this.noteForm.valid) {
      this.setNoteObject();
      this.createNote();
    }
  }

  public setNoteObject() {
    this.noteObject = new Note();
    this.noteObject.noteTitle = this.noteForm.controls['title'].value;
    this.noteObject.noteContent = this.noteForm.controls['content'].value;
    this.noteObject.createdBy = window.sessionStorage.getItem('userId');
  }

  private createNote(): void {
    this.createNoteService
      .http_post(
        this.appConfig.basUrl.note,
        this.appConfig.restUrl.createNote,
        this.noteObject
      )
      .subscribe(
        (data: Boolean) => {
          this.logger.info('Note Created', data);
        },
        (error) => {
          this.logger.error('Unable to create Note');
        }
      );
  }
}
