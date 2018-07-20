import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppSetting } from '../config/appSetting';
import { CatalogModel } from './catalog-add/catalog.model';
import { CatalogViewModel } from './catalog-view/catalog-view.model';
import { CatalogData } from './catalog-add-update/catalog.model';
import { CatalogUpdateModel } from './catalog-add-update/catalog-update.model';
import { CatalogDelete } from './catalog-view/catalog-delete.model';
import { CatalogDetail } from './product-add-update/catalog.model';
import { Product } from './product-add-update/product.model';
import { CatalogImageData } from './catalog-add-update/catalogImageData.model';
import { Catalogs } from './product-view/catalog.model';
import { ProductImageData } from './product-add-update/productImageData.model';



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

  catalogCreate(catalogModel: CatalogData): Observable<CatalogModel> {
    const calatalogUrl = 'catalog';
    const url: string = this.serviceUrl + calatalogUrl;
    return this.httpClient.post<CatalogData>(url, catalogModel);
  }

  showCatalog(): Observable<any> {
    const calatalogUrl = 'catalog';
    const url: string = this.serviceUrl + calatalogUrl;
    return this.httpClient.get<CatalogData[]>(url);
  }


  editCatalog(edit: CatalogUpdateModel): Observable<any> {
    const Caturl = 'catalog/';
    const url: string = this.serviceUrl + Caturl + edit._id;
    return this.httpClient.put<CatalogData[]>(url, edit);
  }


  deleteCatalog(catalogDelete: CatalogDelete): Observable<any> {
    const Caturl = 'catalog/';
    const url: string = this.serviceUrl + Caturl + catalogDelete._id;
    return this.httpClient.delete<CatalogData[]>(url);
  }

  getCatalog(id): Observable<any> {
    const Caturl = 'catalog/';
    const url: string = this.serviceUrl + Caturl + id;
    return this.httpClient.get<CatalogData[]>(url);
  }

  findCatalog(): Observable<any> {
    const Caturl = 'catalog/';
    const url: string = this.serviceUrl + Caturl;
    return this.httpClient.get<CatalogDetail[]>(url);
  }

  addProduct(product: Product): Observable<Product> {
    const productUrl = 'catalog/product';
    const url: string = this.serviceUrl + productUrl;
    return this.httpClient.post<Product>(url, product);
  }

  uploadCatalogImage(catalogImageData: CatalogImageData): Observable<boolean> {
    const formData: FormData = new FormData();
    formData.append('file', catalogImageData.catalogImage, catalogImageData.catalogImage.name);
    const productUrl = 'catalogImage';
    const url: string = this.serviceUrl + productUrl;
    return this.httpClient.post<boolean>(url, formData);
  }
  getProductById(id): Observable<any> {
    const catUrl = 'catalog/';
    const productUrl = '/product';
    const url: string = this.serviceUrl + catUrl + id + productUrl;
    return this.httpClient.get<Catalogs[]>(url);
  }

  deleteProduct(id, productId): Observable<Catalogs> {
    const catUrl = 'catalog/';
    const productUrl = '/product/';
    const url: string = this.serviceUrl + catUrl + id + productUrl + productId;
    return this.httpClient.delete<Catalogs>(url);
  }

  getProduct(id, productId): Observable<any> {
    const Caturl = 'catalog/';
    const productUrl = '/product/';
    const url: string = this.serviceUrl + Caturl + id + productUrl + productId;
    return this.httpClient.get<CatalogData[]>(url);
  }

  updateProduct(id, edit: Product): Observable<any> {
    const Caturl = 'catalog/';
    const productUrl = '/product/';
    const url: string = this.serviceUrl + Caturl + id + productUrl + edit._id;
    return this.httpClient.put<Product[]>(url, edit);
  }

  uploadProductImage(productImageData: ProductImageData): Observable<boolean> {
    const formData: FormData = new FormData();
    formData.append('file', productImageData.productImage, productImageData.productImage.name);
    const productUrl = 'productImage';
    const url: string = this.serviceUrl + productUrl;
    return this.httpClient.post<boolean>(url, formData);
  }
}
