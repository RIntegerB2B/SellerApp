import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { SignIn } from './sign-in.model';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import {NavHeaderService} from '../../shared/nav-header/nav-header.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({transform: 'translateX(0) scale(1)'})),
      state('active',   style({transform: 'translateX(0) scale(1.1)'})),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
      transition('void => inactive', [
        style({transform: 'translateX(-100%) scale(1)'}),
        animate(200)
      ]),
      transition('inactive => void', [
        animate(100, style({transform: 'translateX(100%) scale(1)'}))
      ]),
      transition('void => active', [
        style({transform: 'translateX(0) scale(0)'}),
        animate(200)
      ]),
      transition('active => void', [
        animate(200, style({transform: 'translateX(0) scale(0)'}))
      ])
    ])
  ]
})
export class SignInComponent implements OnInit {

  buyerSignInForm: FormGroup;
  userModel: SignIn;
  public state = 'inactive';
  constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router,
    private navHeaderService: NavHeaderService) { }

  ngOnInit() {
    this.navHeaderService.hideMenuTransparent();
    this.createForm();
  }

  createForm() {
    this.buyerSignInForm = this.fb.group({
      userName: ['', Validators.required,],
      password: ['', Validators.required]
    });
  }
  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
  signInSubmit(buyerSignInForm: FormGroup) {
    this.userModel = new SignIn(
      buyerSignInForm.controls.userName.value,
      buyerSignInForm.controls.password.value,
    );

    this.accountService.signIn(this.userModel).subscribe(data => {

      
      if (data._body.length > 0) {
        this.router.navigate(['/Welcome']);
      }
    }, error => {
      console.log(error);
    });
  }
}
