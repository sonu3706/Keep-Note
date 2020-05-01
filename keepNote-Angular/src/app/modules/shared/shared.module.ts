import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule, MatDialogModule, MatButtonModule, MatCardModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class SharedModule {}
