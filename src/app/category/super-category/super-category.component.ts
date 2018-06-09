import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
import{ SuperCategory} from './super-category.model';
import{CategoryService} from '../category.service';


@Component({
  selector: 'app-super-category',
  templateUrl: './super-category.component.html',
  styleUrls: ['./super-category.component.css']
})
export class SuperCategoryComponent implements OnInit {
  superCategoryForm: FormGroup;
  userModel: SuperCategory;
  

  constructor(private fb: FormBuilder, private router: Router,private categoryService:CategoryService,
    private navHeaderService: NavHeaderService) { }

  ngOnInit() {
    this.navHeaderService.hideMenuTransparent();
    this.createForm();
  }

  createForm() {
    this.superCategoryForm = this.fb.group({
      categoryName: ['', Validators.required],
      categoryDescription: ['', Validators.required],

    });
  }


  /*add(categoryName: string): void {
    categoryName = categoryName.trim();
    if (!categoryName) { return; }
    this.categoryService.addCategory({ categoryName } as SuperCategory)
      .subscribe(hero => {
        this.superCategoryForm.push(category);
      });
  } */

}
