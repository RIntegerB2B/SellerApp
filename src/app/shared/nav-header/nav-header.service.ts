import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AppSetting } from '../../config/appSetting';

@Injectable()
export class NavHeaderService {
    menuTransparent: string;
    serviceUrl: string = AppSetting.serviceUrl;
    constructor(private http: HttpClient) {

    }
    makeMenuTransparent() {
        this.menuTransparent = 'menuTransparent';
    }

    hideMenuTransparent() {
        this.menuTransparent = '';
    }

    addPushSubscriber(sub: any) {
        const notificationUrl = 'notification';
        const url: string = this.serviceUrl + notificationUrl;
        return this.http.post(url, sub);
    }
}
