import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {SuperCategory} from './super-category/super-category.model';
import{AppSetting} from '../config/appSetting'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  serviceUrl: string = AppSetting.serviceUrl;
  constructor() { }

  /*
  addCategory (category: SuperCategory): Observable<SuperCategory> {
    return this.http.post<SuperCategory>(this.serviceUrl, category, httpOptions).pipe(
      tap((hero: SuperCategory) => this.log(`added category  w/ name=${category.categoryName}`)),
      catchError(this.handleError<SuperCategory>('addCategory'))
    );
  } */
}
