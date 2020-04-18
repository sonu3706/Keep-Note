import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AppConfigService} from "../../../../services/app-config.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  
  constructor(public formBuilder: FormBuilder, private appConfigService: AppConfigService) {}

  ngOnInit(): void {
    this.createForm();
    console.log(this.appConfigService.getBaseUrl('authentication'));
  }

  /*Create registerForm using FormBuilder*/
  public createForm(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.requiredTrue]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public onSubmit(): void {
    if (
      this.registerForm.controls[`password`].value.length ===
        this.registerForm.controls[`confirmPassword`].value.length &&
      this.registerForm.controls[`password`].value ===
        this.registerForm.controls[`confirmPassword`].value
    ) {
      console.log(this.registerForm.value);
    }
  }
}
