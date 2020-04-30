import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  public loginUserStatus: Subject<boolean> = new Subject<boolean>();

  public sharedLoggedInState(state: boolean): void {
    this.loginUserStatus.next(state);
  }
}
