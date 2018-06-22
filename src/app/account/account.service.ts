import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SignIn } from './sign-in/sign-in.model';
import { AppSetting } from '../config/appSetting';
import { PwdChangeRequest } from './pwd-change-request/pwd-change-request.model';
import { PwdChangeRequestComponent } from './pwd-change-request/pwd-change-request.component';
import { PwdChangeReset } from './pwd-change-reset/pwd-change-reset.model';
import { ServiceResult } from '../shared/model/service-result.model';


@Injectable()
export class AccountService {
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

    signIn(adminUser: SignIn): Observable<any> {
        const adminUrl = 'admin/validate';
        return this.http.post(this.serviceUrl + adminUrl, adminUser, this.requestOptions).pipe(
            tap((response: Response) => console.log(response)),
            catchError(this.handleError<SignIn>('Sign In'))
        );
    }

    pwdRequest(pwdReq: PwdChangeRequest): Observable<ServiceResult> {
        const pwdReqUrl = 'pwdChange/';
        const url: string = this.serviceUrl + pwdReqUrl + pwdReq.email;
        return this.httpClient.get<ServiceResult>(url);
    }
    pwdChangeReset(pwdReset: PwdChangeReset): Observable<any> {
        const pwResUrl = 'pwdChange/reset/';
        return this.http.post(this.serviceUrl + pwResUrl, pwdReset, this.requestOptions).pipe(
            tap((response: Response) => console.log(response)),
            catchError(this.handleError<PwdChangeReset>('Pwd Reset'))
          );
    }

   /* pwdChangeReset(pwdReset: PwdChangeReset): Observable<any> {
        const pwResUrl = '/pwdChange/reset/:key/:pwd';
        return this.http.post(this.serviceUrl + pwResUrl, pwdReset, this.requestOptions).pipe(
            tap((response: Response) => console.log(response)),
            catchError(this.handleError<PwdChangeReset>('Pwd Change Reset'))
          );
    } */
    


        
    }
