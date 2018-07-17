export class Edit {
    _id: Number;
    categoryName: string;
    categoryDescription: string;
    constructor(
        _id: Number,
        categoryName: string,
        categoryDescription: string,

    ) {
        this._id = _id;
        this.categoryName = categoryName;
        this.categoryDescription = categoryDescription;

    }

}
