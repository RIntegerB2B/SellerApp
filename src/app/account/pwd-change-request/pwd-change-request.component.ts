import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { PwdChangeRequest } from './pwd-change-request.model'
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-pwd-change-request',
  templateUrl: './pwd-change-request.component.html',
  styleUrls: ['./pwd-change-request.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
      })),
      state('active',   style({
        transform: 'scale(1.05, 1.05)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class PwdChangeRequestComponent implements OnInit {
  passwordRequestForm: FormGroup;

  userModel: PwdChangeRequest;

  public state = 'inactive';

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
  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
  sendResetSubmit(passwordRequestForm: FormGroup) {
    this.userModel = new PwdChangeRequest(
      passwordRequestForm.controls.emailId.value

    );

    this.accountService.pwdRequest(this.userModel).subscribe(data => {
      if (data._body.length > 0) {
        this.router.navigate(['/PwdChangeRequest']);
      }
    }, error => {
      console.log(error);
    });
  }
}
