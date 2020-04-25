import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppConfigService } from '../../../../services/app-config.service';
import { User } from '../../../../models/user';
import { RestService } from '../../../../services/rest.service';
import { ConfigService } from '@ngx-config/core';
import { NGXLogger } from 'ngx-logger';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public userObject: User;
  public config: AppConfigService;
  public showEmailError: boolean = false;
  public showErrorObject: string = null;

  constructor(
    public formBuilder: FormBuilder,
    private register: RestService<User>,
    private checkEmail: RestService<boolean>,
    public configService: ConfigService,
    private logger: NGXLogger,
    private router: Router
  ) {
    this.config = new AppConfigService(configService);
  }

  ngOnInit(): void {
    this.createForm();
    this.checkEmailExists();
  }

  /*Create registerForm using FormBuilder*/
  public createForm(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public onSubmit(): void {
    let password = this.registerForm.controls['password'].value;
    let confirmPassword = this.registerForm.controls['confirmPassword'].value;
    if (this.registerForm.valid && this.isPasswordAndConfirmPasswordMatch(password, confirmPassword)) {
      this.createUserObject();
      this.registerUser();
    } else {
      this.logger.error('Password mismatch');
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
    if (password.length === confirmPassword.length && password === confirmPassword) {
      this.logger.info('Password and confirmPassword matched');
      status = true;
    } else {
      this.logger.info('Password mismatch');
    }
    return status;
  }

  private registerUser(): void {
    this.logger.info('Register User');
    this.register.http_post(
      this.config.basUrl.authentication,
      this.config.restUrl.register,
      this.userObject
    ).subscribe((data: User) => {
        console.log(data);
        if (data) {
          this.router.navigate([`/auth/login`]);
        }
      },
      (error) => {
        this.logger.error('Error while making request', error);
        console.log(error.status);
        if (error.status === 409)
          this.registerForm.reset();
      });
  }

  public checkEmailExists(): void {
    this.registerForm.controls['email'].valueChanges.subscribe((data) => {
      console.log(data);
      this.checkEmailStatus(data);
    });
  }

  public checkEmailStatus(email: string): void {
    this.checkEmail.http_get(
      this.config.basUrl.authentication,
      this.config.restUrl.checkEmailStatus.concat(email)
    ).subscribe((data) => {
      if (data && data === true) {
        this.showEmailError = true;
        this.showErrorObject = 'Show error';
        this.registerForm.controls['name'].disable();
        this.registerForm.controls['password'].disable();
        this.registerForm.controls['confirmPassword'].disable();
      } else {
        this.showEmailError = false;
        this.showErrorObject = 'No Error';
        this.registerForm.controls['name'].enable();
        this.registerForm.controls['password'].enable();
        this.registerForm.controls['confirmPassword'].enable();
      }
    });
  }
}
