import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppSetting } from '../config/appSetting';
import { BuyerDetail } from './../buyer/buyer/buyer-detail.model';



@Injectable({
  providedIn: 'root'
})
export class BuyerDetailsService {
  serviceUrl: string = AppSetting.serviceUrl;
  headers: Headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8'
  });
  requestOptions: RequestOptions = new RequestOptions({ headers: this.headers });

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // log to console instead
      return of(result as T);
    };
  }
  constructor(private http: Http, private httpClient: HttpClient) { }
  getBuyerDetails(): Observable<any> {
      const buyerurl = 'buyer/';
      const url: string = this.serviceUrl + buyerurl;
       return this.httpClient.post<BuyerDetail[]>(url, buyerurl);
  }
    showBuyerDetails(userType): Observable<BuyerDetail> {
    const userDetails = 'buyer/';
    const url: string = this.serviceUrl + userDetails + userType;
    return this.httpClient.get<BuyerDetail>(url);
}
}
