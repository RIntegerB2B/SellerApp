import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { SuperCategory } from './super-category/super-category.model';
import { AppSetting } from '../config/appSetting';
import { SuperCategoryComponent } from './super-category/super-category.component';
import { Edit } from './super-category/edit.model';
import { Delete } from '../category/super-category/delete-model'
import { MainCategory } from '../category/main-category/main-category.model'
import {SuperCategoryName} from '../category/main-category/superCategoryName.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  serviceUrl: string = AppSetting.serviceUrl;
  headers: Headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8'
  });
  requestOptions: RequestOptions = new RequestOptions({ headers: this.headers });

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  constructor(private http: Http,private httpClient :HttpClient) { }


  addCategory(add: SuperCategory): Observable<any> {

    const addCaturl = 'addCategory/';
    return this.http.post(this.serviceUrl + addCaturl, add, this.requestOptions).pipe(
      tap((response: Response) => console.log(response)),
      catchError(this.handleError<SuperCategory>('Super Category '))
    );

  }

  editCategory(edit: Edit): Observable<any> {

    const Caturl = 'category/';
    return this.http.post(this.serviceUrl + Caturl, edit, this.requestOptions).pipe(
      tap((response: Response) => console.log(response)),
      catchError(this.handleError<Edit>('Super Category edit '))
    );
  }

  deleteCategory(del: Delete): Observable<any> {

    const Caturl = 'categoryDelete/';
    return this.http.post(this.serviceUrl + Caturl, del, this.requestOptions).pipe(
      tap((response: Response) => console.log(response)),
      catchError(this.handleError<Delete>('Super Category delete '))
    );
  }



  addMainCategory(add: MainCategory): Observable<any> {

    const addMainCaturl = 'mainCategory/';
    return this.http.post(this.serviceUrl + addMainCaturl, add, this.requestOptions).pipe(
      tap((response: Response) => console.log(response)),
      catchError(this.handleError<MainCategory>('Super Category '))
    );

  }


  findDetail(): Observable<any> {
    const addurl = 'superCategory/';
    const url: string=this.serviceUrl + addurl  ;
    return this.httpClient.get<SuperCategoryName[]>(url);  
  }
}
