import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { PwdChangeReset } from './pwd-change-reset.model';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-pwd-change-reset',
  templateUrl: './pwd-change-reset.component.html',
  styleUrls: ['./pwd-change-reset.component.css']
})
export class PwdChangeResetComponent implements OnInit {
  resetPasswordForm: FormGroup;
  userModel: PwdChangeReset;
  emailKey: string;

  urlnomorevalid: boolean;
  error: boolean;

  constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router,
    private navHeaderService: NavHeaderService, private activatedRoute: ActivatedRoute) {
    this.emailKey = this.activatedRoute.snapshot.paramMap.get('key');
  }

  ngOnInit() {
    this.navHeaderService.hideMenuTransparent();
    this.resetPassword();
  }

  resetPassword() {
    this.resetPasswordForm = this.fb.group({
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }
  resetSubmit(resetPasswordForm: FormGroup) {
    // TODO: Change the userModel variable to pwdChangeReset
    this.userModel = new PwdChangeReset(
      resetPasswordForm.controls.newPassword.value,
      resetPasswordForm.controls.confirmPassword.value,
      this.emailKey
    );

    this.accountService.pwdChangeReset(this.userModel).subscribe(data => {
      var value = data._body;
      if (value.indexOf("1") > -1) {
        // The Update is success so navigate to Login page
        this.router.navigate(['/SignIn']);
      }
      if (value.indexOf("2") > -1) {
        // The Key didnt match , so show a message saying the URL is no more valid
        this.urlnomorevalid = true;

      }
      if (value.indexOf("0") > -1) {
        // Some exception happened. So show a message saying. Something went wrong pls try after sometime
        this.error = true;
      }
    }, error => {
      console.log(error);
    });
  }
}
