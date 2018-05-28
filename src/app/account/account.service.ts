import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SignIn } from './sign-in/sign-in.model';
import { AppSetting } from '../config/appSetting';


@Injectable()
export class AccountService {
    serviceUrl: string = AppSetting.serviceUrl;
    headers: Headers = new Headers({
        'Content-Type' : 'application/json; charset=utf-8'
    });
    requestOptions: RequestOptions = new RequestOptions({ headers: this.headers });

    handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          // TODO: send the error to remote logging infrastructure
          console.log(error); // log to console instead
          // TODO: better job of transforming error for user consumption
          // this.log(`${operation} failed: ${error.message}`);
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }

    constructor(private http: Http) { }

    ngOnInit() {
    }


    signIn(adminUser: SignIn): Observable<any> {
        const adminUrl = 'admin/validate';
        return this.http.post(this.serviceUrl + adminUrl, adminUser, this.requestOptions).pipe(
            tap((hero: Response) => console.log(hero)),
            catchError(this.handleError<SignIn>('Sign In'))
          );
    }
}
