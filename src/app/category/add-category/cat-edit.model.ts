import { MainCatData } from './main-cat-data.model';

export class CategoryEdit {
    _id: string;
    mainCategory: MainCatData;
    constructor(
        _id: string,
        mainCategory: MainCatData
       ) {
           this._id = _id;
        this.mainCategory = mainCategory;
    }
}
