
import { MainCatView } from './main-cat-view.model';

export class SuperCatView {
    _id: Number;
    mainCategory: MainCatView;
    constructor(
        _id: Number,
        mainCategory

    ) {
        this._id = _id;
        this.mainCategory = mainCategory;
    }
}
