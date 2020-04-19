/*Represent User Object*/
export class User {
  public userEmail: string;
  public userName: string;
  public password: string;
  public activeStatus: boolean;
  public lastLoggedIn: Date;
  public memberSince: Date



  constructor(userEmail: string, userName: string, password: string, activeStatus: boolean, lastLoggedIn: Date, memberSince: Date) {
    this.userEmail = userEmail;
    this.userName = userName;
    this.password = password;
    this.activeStatus = activeStatus;
    this.lastLoggedIn = lastLoggedIn;
    this.memberSince = memberSince;
  }

}
