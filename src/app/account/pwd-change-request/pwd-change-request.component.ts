import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { PwdChangeRequest } from './pwd-change-request.model'
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';


@Component({
  selector: 'app-pwd-change-request',
  templateUrl: './pwd-change-request.component.html',
  styleUrls: ['./pwd-change-request.component.css']
})
export class PwdChangeRequestComponent implements OnInit {
  passwordRequestForm: FormGroup;

  userModel: PwdChangeRequest;

  constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router,
    private navHeaderService: NavHeaderService) { }

  ngOnInit() {
    this.navHeaderService.hideMenuTransparent();
    this.createForm();
  }
  createForm() {
    this.passwordRequestForm = this.fb.group({
      emailId: ['', Validators.required],

    });
  }

  sendResetSubmit(passwordRequestForm: FormGroup) {
    this.userModel = new PwdChangeRequest(
      passwordRequestForm.controls.emailId.value

    );

    this.accountService.pwdReset(this.userModel).subscribe(data => {
      if (data._body.length > 0) {
        this.router.navigate(['/PwdChangeReset']);
      }
    }, error => {
      console.log(error);
    });
  }
}
