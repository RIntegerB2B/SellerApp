import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppSetting } from '../config/appSetting';
import {CatalogModel} from './catalog-add/catalog.model';
import {CatalogViewModel} from './catalog-view/catalog-view.model';
import {CatalogData} from './catalog-add-update/catalog.model'
import { CatalogUpdateModel} from './catalog-add-update/catalog-update.model';
import {CatalogDeleteModel} from './catalog-add-update/catalog-delete.model'

@Injectable()
export class ProductService {
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
  superCategoryAdd(arg0: any): any {
    throw new Error('Method not implemented.');
  }

  catalogCreate(catalogModel: CatalogModel): Observable<CatalogModel> {
    const calatalogUrl = 'catalog';
    const url: string = this.serviceUrl + calatalogUrl;
    return this.httpClient.post<CatalogModel>(url, catalogModel);
  }

  showCatalog():Observable<any> {
    const calatalogUrl = 'catalog';
    const url: string = this.serviceUrl + calatalogUrl;
    return this.httpClient.get<CatalogData[]>(url);
  }


 /*  editMainCategory(edit: CategoryEdit): Observable<any> {
    const Caturl = 'category/';
    const mainurl = "/mainCategory/"
    const url: string = this.serviceUrl + Caturl + edit._id + mainurl + edit.mainCategory._id
    return this.httpClient.put<CategoryEdit>(url, edit.mainCategory, httpOptions);
  } */

  editCatalog(edit:CatalogUpdateModel):Observable<any>{
    const Caturl = 'catalog/';
    const url: string = this.serviceUrl + Caturl + edit._id 
    return this.httpClient.put<CatalogData[]>(url, edit);
  }


  deleteCatalog(del:CatalogDeleteModel):Observable<any>{
    const Caturl = 'catalog/';
    const url: string = this.serviceUrl + Caturl + del._id 
    return this.httpClient.delete<CatalogData[]>(url);
  }
}
