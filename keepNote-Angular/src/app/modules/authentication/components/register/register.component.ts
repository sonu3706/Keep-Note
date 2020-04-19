import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppConfigService } from '../../../../services/app-config.service';
import { User } from '../../../../models/user';
import { RestService } from '../../../../services/rest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public userObject: User;

  constructor(
    public formBuilder: FormBuilder,
    private appConfigService: AppConfigService,
    private restService: RestService<User>
  ) {}

  ngOnInit(): void {
    this.createForm();
    console.log(this.appConfigService.getBaseUrl('authentication'));
  }

  /*Create registerForm using FormBuilder*/
  public createForm(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  public onSubmit(): void {
    debugger;
    let password = this.registerForm.controls['password'].value;
    let confirmPassword = this.registerForm.controls['confirmPassword'].value;
    if (this.registerForm.valid && this.isPasswordAndConfirmPasswordMatch(password, confirmPassword)) {
      this.createUserObject();
     this.registerUser();
    }
    else {

    }
  }

  /*
  * create user object from registerForm
  * */
  private createUserObject(): void {
    this.userObject = new User(
      this.registerForm.controls[`email`].value,
      this.registerForm.controls['name'].value,
      this.registerForm.controls['password'].value,
      null,
      null,
      null
    );
  }

/*
* match password and confirmPassword
* @param password: string, confirmPassword: string
* @return status: boolean
* */
  private isPasswordAndConfirmPasswordMatch(password: string, confirmPassword: string): boolean {
    let status: boolean = false;
    if(password.length === confirmPassword.length && password === confirmPassword) {
      status = true;
    }
    return status;
  }

  private registerUser(): void {

  }
}
