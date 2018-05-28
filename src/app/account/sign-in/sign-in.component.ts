import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { SignIn } from './sign-in.model';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  buyerSignInForm: FormGroup;
  userModel: SignIn;
  constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.buyerSignInForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signInSubmit(buyerSignInForm: FormGroup) {
    this.userModel = new SignIn(
      buyerSignInForm.controls.userName.value,
      buyerSignInForm.controls.password.value,
    );
    console.log(this.buyerSignInForm);

    this.accountService.signIn(this.userModel).subscribe(data => {
      console.log(data);
      if (data.length > 0) {
        console.log(data[0]);
        this.router.navigate(['/Welcome']);
      }

    }, error => {
      console.log(error);
    });
  }
}
