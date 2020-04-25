import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../../../../services/rest.service';
import { AppConfigService } from '../../../../services/app-config.service';
import { ConfigService } from '@ngx-config/core';
import { NGXLogger } from 'ngx-logger';
import { User } from '../../../../models/user';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../../../utility/token-storage.service';
import { DataSharingService } from '../../../../services/data-sharing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public appConfig: AppConfigService;
  public user: User;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: RestService<Map<string, string>>,
    public configService: ConfigService,
    private logger: NGXLogger,
    public route: Router,
    private tokenStorageService: TokenStorageService,
    private dataSharingService: DataSharingService) {
    this.appConfig = new AppConfigService(configService);
    this.createForm();
  }

  ngOnInit(): void {}

  private createForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {
      this.logger.info('Form valid, login in progress');
        this.setUserData();
        this.login();
    }
  }

  private setUserData(): void {
    this.user = new User(this.loginForm.controls['email'].value, null, this.loginForm.controls['password'].value, null, null, null);
  }

  public login(): void {
    this.loginService.http_post(
      this.appConfig.basUrl.authentication,
      this.appConfig.restUrl.login,
      this.user
    ).subscribe((data) => {
     this.logger.log('Data value', data);
     this.tokenStorageService.setTokenAndUserId(data['access_token'], data['userId']);
     this.dataSharingService.sharedLoggedInState(true);
      this.route.navigate(['/note/dashboard']);
    }, (error) => {
      this.logger.error('Issue while login ', error);
    });

  }
}
