import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TakeNoteComponent } from '../../../note/components/take-note/take-note.component';
import { Router } from '@angular/router';
import { DataSharingService } from '../../../../services/data-sharing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public isUserLoggedIn: boolean = false;
  constructor(public dialog: MatDialog, private route: Router, private dataSharingService: DataSharingService) {}

  ngOnInit(): void {
    this.isLoggedInUser();
  }
  public isLoggedInUser(): void {
   this.dataSharingService.loginUserStatus.subscribe(data => {
        this.isUserLoggedIn = data;
    });
  }
  public openDialog(): void {
    console.log('dialog');
    const dialogRef = this.dialog.open(TakeNoteComponent, {
      width: '600px',
      height: '300px'
    });
  }

  public logout(): void {
    window.sessionStorage.removeItem('access_token');
    window.sessionStorage.removeItem('userId');
    this.dataSharingService.sharedLoggedInState(false);
    this.route.navigate(['/auth/login']);
  }
}
