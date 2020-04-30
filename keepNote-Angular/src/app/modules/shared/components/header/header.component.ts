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
  public dialogOpened: boolean = false;

  constructor(
    public dialog: MatDialog,
    private route: Router,
    private dataSharingService: DataSharingService
  ) {}

  ngOnInit(): void {
    this.checkToken();
    this.isLoggedInUser();
    this.dialog.afterAllClosed.subscribe((data) => {
      this.dialogOpened = false;
    });
  }
  public isLoggedInUser(): void {
    this.dataSharingService.loginUserStatus.subscribe((data) => {
      this.isUserLoggedIn = data;
    });
  }

  public checkToken(): void {
    if (window.sessionStorage.getItem('access_token')) {
      this.isUserLoggedIn = true;
    }
  }
  public openDialog(): void {
    if (this.dialogOpened) {
    } else {
      const dialogRef = this.dialog.open(TakeNoteComponent, {
        width: '600px',
        height: '300px',
      });
      this.dialogOpened = true;
    }
  }

  public logout(): void {
    window.sessionStorage.removeItem('access_token');
    window.sessionStorage.removeItem('userId');
    this.dataSharingService.sharedLoggedInState(false);
    this.route.navigate(['/auth/login']);
  }
}
