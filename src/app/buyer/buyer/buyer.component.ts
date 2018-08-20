import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuyerDetailsService} from '../buyer-details.service';
import { Router } from '@angular/router';
import { BuyerDetail } from './buyer-detail.model';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  buyerDetail: BuyerDetail;
  userTypes = [ 'Agent', 'Retailer', 'Wholesaler', 'Distributor', 'Others'];
  viewBuyerForm: FormGroup;
  userType;
  constructor(private fb: FormBuilder, private router: Router, private buyerService: BuyerDetailsService) { }

  ngOnInit() {
    this.createForm();
    this.getDetails();
  }
  createForm() {
    this.viewBuyerForm = this.fb.group({
      userType: ['']
    });
  }
  getDetails() {
    this.buyerService.getBuyerDetails().subscribe(data => {
      this.buyerDetail = data;
      console.log(this.buyerDetail);
    }, error => {
      console.log(error);
    });
  }
  
getSelected(user: any) {
this.userType = user;
this.buyerService.showBuyerDetails(this.userType).subscribe(data => {
  this.buyerDetail = data;
  console.log(this.buyerDetail);
  console.log(data);
}, error => {
  console.log(error);
});
}
}
