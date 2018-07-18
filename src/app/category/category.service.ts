import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { SuperCategory } from './super-category/super-category.model';
import { AppSetting } from '../config/appSetting';
import { SuperCategoryComponent } from './super-category/super-category.component';
import { Edit } from './super-category/edit.model';
import { Delete } from '../category/super-category/delete-model';
import { MainCategory } from '../category/main-category/main-category.model';
import { SuperCategoryName } from '../category/main-category/superCategoryName.model';
import { MainCategoryDetail } from '../category/main-category/main-categoryDetail.model';
import { MainCat } from './main-category/main-cat.model';
import { SuperCategoryID } from './main-category/super-cat-detail.model';
import { SuperCatID } from './add-category/sup-cat-id.model';
import { CategoryDetail } from './add-category/cat-detail.model';
import { CategoryEdit } from './add-category/cat-edit.model';
import { CategoryDelete } from './add-category/cat-del.model';
import { SuperID } from './sub-category/sup-cat-id.model';
import { SuperCatDetail } from './sub-category/sup-cat-detail.model';
import { MainCatDetail } from './sub-category/main-cat.model';
import { SuperCatIdAndMainCat } from './sub-category/super-cat-model';
import { SuperCatView } from './sub-category/super-cat-view.model';
import { SubCategoryData } from './sub-category/sub-cat-data.model';
import { MainCategoryData } from './sub-category/main-cat-data.model';
import { SubCatEdit } from './sub-category/edit.model';
import { SubCatDelete } from './sub-category/delete.model';


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
  constructor(private http: Http, private httpClient: HttpClient) { }




  addCat(add: SuperCategory): Observable<any> {
    const Caturl = 'addCategory/';
    return this.http.post(this.serviceUrl + Caturl, add, this.requestOptions).pipe(
      tap((response: Response) => console.log(response)),
      catchError(this.handleError<Edit>('Super Category edit '))
    );
  }



  editCategory(edit: Edit): Observable<any> {
    const Caturl = 'category/';
    const url: string = this.serviceUrl + Caturl + edit._id;
    return this.httpClient.put<SuperCategory[]>(url, edit);
  }

  /* editCategory(edit: Edit): Observable<any> {
    const Caturl = 'category/';
    return this.http.post(this.serviceUrl + Caturl, edit, this.requestOptions).pipe(
      tap((response: Response) => console.log(response)),
      catchError(this.handleError<SuperCategory[]>('Super Category edit '))
    );
  } */

  deleteCategory(del: Delete): Observable<any> {

    const Caturl = 'categoryDelete/';

    const url: string = this.serviceUrl + Caturl + del._id;
    return this.httpClient.delete<SuperCategory[]>(url);

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
    const url: string = this.serviceUrl + addurl;
    return this.httpClient.get<SuperCategoryName[]>(url);
  }

  showCategory(): Observable<any> {
    const addurl = 'categoryDetails/';
    const url: string = this.serviceUrl + addurl;
    return this.httpClient.get<SuperCategoryName[]>(url);
  }



  showMainCategory(): Observable<any> {
    const addurl = 'mainCategoryDetails/';
    const url: string = this.serviceUrl + addurl;
    return this.httpClient.get<MainCategoryDetail[]>(url);
  }

  getMainCategory(): Observable<MainCat> {
    const addurl = 'superCategory/';
    const url: string = this.serviceUrl + addurl;
    return this.httpClient.get<MainCat>(url);
  }



  showMainCategoryDetails(superID: SuperCategoryID): Observable<any> {

    const Caturl = 'superCategorydetail/';
    const url: string = this.serviceUrl + Caturl + superID._id;
    return this.httpClient.get<MainCategoryDetail[]>(url);

  }


  showMainCategoryData(superID: SuperCatID): Observable<any> {

    const Caturl = 'categoryData/';
    const url: string = this.serviceUrl + Caturl + superID._id;
    return this.httpClient.get<CategoryDetail[]>(url);

  }

  editMainCategory( edit: MainCatDetail): Observable<any> {
    const Caturl = 'category/';
    const mainurl = '/mainCategory/';
    const url: string = this.serviceUrl + Caturl  + mainurl + edit._id;
    return this.httpClient.put<CategoryEdit>(url, edit, httpOptions);
  }

  deleteMainCategory(id, catID): Observable<any> {
    const Caturl = 'category/';
    const mainurl = '/mainCategory/';
    const url: string = this.serviceUrl + Caturl + id + mainurl + catID;
    return this.httpClient.delete<CategoryDetail[]>(url);
  }



  showSuperCategoryOnSub(): Observable<any> {
    const addurl = 'mainCategoryData/';
    const url: string = this.serviceUrl + addurl;
    return this.httpClient.get<SuperCatDetail[]>(url);

  }

  showMainCategoryOnSub(id: SuperID): Observable<any> {
    const Caturl = 'mainCategoryOnSub/';
    const url: string = this.serviceUrl + Caturl + id._id;
    return this.httpClient.get<MainCatDetail[]>(url);
  }

  addSubCategory(data: SuperCatIdAndMainCat): Observable<SuperCatIdAndMainCat> {
    const Caturl = 'subCategory/';
    const url: string = this.serviceUrl + Caturl;
    return this.httpClient.post<SuperCatIdAndMainCat>(url, data);
  }


  showSubCategory(data: SuperCatView): Observable<any> {
    const Caturl = 'category/';
    const mainurl = '/mainCategory/';
    const url: string = this.serviceUrl + Caturl + data._id + mainurl + data.mainCategory.mainCategoryId;
    return this.httpClient.get<SubCategoryData[]>(url);
  }


  editSubCategory(edit: SubCatEdit): Observable<any> {
    const Caturl = 'category/';
    const mainurl = '/mainCategory/';
    const suburl = '/subCategory/';
    const url: string = this.serviceUrl + Caturl + edit.categoryId + mainurl + edit.mainCategoryId + suburl + edit.subCategoryId;
    return this.httpClient.put<SubCategoryData[]>(url, edit, httpOptions);
  }

  deleteSubCategory(del: SubCatDelete): Observable<any> {
    const Caturl = 'category/';
    const mainurl = '/mainCategory/';
    const suburl = '/subCategory/';
    const url: string = this.serviceUrl + Caturl + del.categoryId + mainurl + del.mainCategoryId + suburl + del.subCategoryId;
    return this.httpClient.delete<CategoryEdit>(url);
  }

}
