import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  public setTokenAndUserId(token: string, userId: string): void {
    window.sessionStorage.setItem('access_token', token);
    window.sessionStorage.setItem('userId', userId);
  }

  public getItemFormSessionStorage(itemKey: string): string {
    return window.sessionStorage.getItem(itemKey);
  }
}
