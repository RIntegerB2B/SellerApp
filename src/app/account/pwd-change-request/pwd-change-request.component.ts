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
export class PwdChangeRequestComponent implements OnInit {
  passwordRequestForm: FormGroup;

  userModel: PwdChangeRequest; 
  

  resetemailsent :boolean = false;
  emailmismatch :boolean=false;
  error :boolean=false;

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
//email validation
      
        
     
    
this.userModel = new PwdChangeRequest(
      passwordRequestForm.controls.emailId.value
);

    this.accountService.pwdRequest(this.userModel).subscribe(data => {
      var value=data._body; 
      if(value.indexOf("1") > -1){
        this.resetemailsent=true;
     
      }
  if(value.indexOf("2") > -1)
  {
    this.emailmismatch=true;
  }
  if(value.indexOf("0") > -1)
      {
        this.error=true;
      }

      //if (data._body.length > 0) {
        //this.router.navigate(['/PwdChangeRequest']);
     // }
    }, error => {
      console.log(error);
    });




  }


}
