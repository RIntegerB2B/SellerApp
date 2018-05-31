import { Injectable } from '@angular/core';

@Injectable()
export class NavHeaderService {
    menuTransparent: string;
    makeMenuTransparent() {
        this.menuTransparent = 'menuTransparent';
    }

    hideMenuTransparent() {
        this.menuTransparent = '';
    }
}
