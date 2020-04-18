import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoteRoutingModule } from './note-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, NoteRoutingModule],
})
export class NoteModule {}
