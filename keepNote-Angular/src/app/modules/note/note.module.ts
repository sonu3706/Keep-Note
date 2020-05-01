import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoteRoutingModule } from './note-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TakeNoteComponent } from './components/take-note/take-note.component';
import { SharedModule } from '../shared/shared.module';
import { NoteCardComponent } from './components/note-card/note-card.component';

@NgModule({
  declarations: [DashboardComponent, TakeNoteComponent, NoteCardComponent],
  imports: [
    CommonModule,
    NoteRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class NoteModule {}
