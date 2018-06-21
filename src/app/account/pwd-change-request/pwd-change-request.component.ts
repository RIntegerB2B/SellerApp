import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { PwdChangeRequest } from './pwd-change-request.model'
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ServiceResult } from '../../shared/model/service-result.model';

@Component({
  selector: 'app-pwd-change-request',
  templateUrl: './pwd-change-request.component.html',
  styleUrls: ['./pwd-change-request.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({ transform: 'translateX(0) scale(1)' })),
      state('active', style({ transform: 'translateX(0) scale(1.1)' })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
      transition('void => inactive', [
        style({ transform: 'translateX(-100%) scale(1)' }),
        animate(200)
      ]),
      transition('inactive => void', [
        animate(100, style({ transform: 'translateX(100%) scale(1)' }))
      ]),
      transition('void => active', [
        style({ transform: 'translateX(0) scale(0)' }),
        animate(200)
      ]),
      transition('active => void', [
        animate(200, style({ transform: 'translateX(0) scale(0)' }))
      ])
    ])
  ]
})
export class PwdChangeRequestComponent implements OnInit {
  passwordRequestForm: FormGroup;

  userModel: PwdChangeRequest;


  resetemailsent: boolean = false;
  emailmismatch: boolean = false;
  error: boolean = false;

  public state = 'inactive';

  constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router,
    private navHeaderService: NavHeaderService) { }

  ngOnInit() {
    this.navHeaderService.hideMenuTransparent();
    this.createForm();
  }
  createForm() {
    this.passwordRequestForm = this.fb.group({
      emailId: ['', Validators.required]
    });
  }
  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }


  sendResetSubmit(passwordRequestForm: FormGroup) {
    this.userModel = new PwdChangeRequest(
      passwordRequestForm.controls.emailId.value
    );

    this.accountService.pwdRequest(this.userModel).subscribe(serviceResult => {
      switch (serviceResult.result) {
        case 0: {
          this.error = true;
          break;
        }
        case 1: {
          this.resetemailsent = true;
          break;
        }
        case 2: {
          this.emailmismatch = true;
          break;
        }
        default: {
          this.error = true;
          break;
        }
      }
    }, error => {
      console.log(error);
    });
  }
}
