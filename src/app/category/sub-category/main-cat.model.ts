import { MainCatOnSub } from "./mai-cat-detail.model";
export class MainCatDetail {
    _id: string;
    categoryName: string;
    categoryDescription: string;
    mainCategory: MainCatOnSub;
    constructor(
        _id: string,
        categoryName: string,
        categoryDescription: string,
        mainCategory: MainCatOnSub
    ) {
        this._id = _id;
        this.categoryName = categoryName;
        this.categoryDescription = categoryDescription;
        this.mainCategory = mainCategory;

    }
}
