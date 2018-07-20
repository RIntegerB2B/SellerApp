export class MainCatUpdate {
    _id: string;
    mainCategoryName: string;
    mainCategoryDescription: string;
    constructor(
        _id: string,
        mainCategoryName: string,
        mainCategoryDescription: string

    ) {
        this._id = _id;
        this.mainCategoryName = mainCategoryName;
        this.mainCategoryDescription = mainCategoryDescription;
    }
}
