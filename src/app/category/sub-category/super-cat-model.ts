import { MainCatIdAndSub } from './main-cat-id.model';
export class SuperCatIdAndMainCat {
    _id: string;

    mainCategory: MainCatIdAndSub;
    constructor(
        _id: string,

        mainCategory: MainCatIdAndSub
    ) {
        this._id = _id;

        this.mainCategory = mainCategory;

    }
}
