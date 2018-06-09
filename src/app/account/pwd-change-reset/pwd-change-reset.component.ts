import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { PwdChangeReset } from './pwd-change-reset.model';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import {NavHeaderService} from '../../shared/nav-header/nav-header.service';

@Component({
  selector: 'app-pwd-change-reset',
  templateUrl: './pwd-change-reset.component.html',
  styleUrls: ['./pwd-change-reset.component.css']
})
export class PwdChangeResetComponent implements OnInit {
  resetPasswordForm: FormGroup;
  userModel: PwdChangeReset;
  constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router,
    private navHeaderService: NavHeaderService) { }

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
    this.userModel = new PwdChangeReset(
      resetPasswordForm.controls.newPassword.value,
      resetPasswordForm.controls.confirmPassword.value,
    );

    this.accountService.pwdChangeReset(this.userModel).subscribe(data => {
      if (data._body.length > 0) {
        this.router.navigate(['/PwdChangeReset']);
      }
    }, error => {
      console.log(error);
    });
  }
}
