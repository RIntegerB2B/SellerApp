import { MainCatDelete } from './main-cat-del.model';

export class CategoryDelete {
    _id: string;
    mainCategory: MainCatDelete;
    constructor(
        _id: string,
        mainCategory: MainCatDelete
       ) {
           this._id = _id;
        this.mainCategory = mainCategory;
    }
}
