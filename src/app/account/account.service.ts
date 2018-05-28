import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SignIn } from './sign-in/sign-in.model';
import { AppSetting } from '../config/appSetting';


@Injectable()
export class AccountService {
    serviceUrl: string = AppSetting.serviceUrl;
    handleError(arg0: any): any {
        console.log(arg0);
    }
    constructor(private http: Http) { }

    ngOnInit() {
    }


    signIn(user: SignIn): Observable<any> {
        let headers = new Headers({
            'Content-Type' : 'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.serviceUrl + "admin", user, options)
            .map((response: Response) => <any>response.json())
            .do((x) => console.log(x)).catch((e) => this.handleError(e));
    }


}
