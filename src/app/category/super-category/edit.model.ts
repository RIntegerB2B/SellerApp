export class Edit {
    _id: Number;
    categoryName: string;
    categoryDescription: string;
    //editable:Boolean;
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
