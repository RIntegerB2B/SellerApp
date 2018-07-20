import {MainCatUpdate} from '../main-category/cat-update.model';

export class SuperCatID {
    _id: string;
    mainCategory: MainCatUpdate;
    constructor(
        _id: string,
        mainCategory: MainCatUpdate
       ) {
           this._id = _id;
        this.mainCategory = mainCategory;
    }
}
