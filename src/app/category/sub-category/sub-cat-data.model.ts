
export class SubCategoryData {
    _id: string;
    subCategoryName: string;
    subCategoryDescription: string;
    constructor(
        _id: string,
        subCategoryName: string,
        subCategoryDescription: string
    ) {
        this._id = _id;
        this.subCategoryName = subCategoryName;
        this.subCategoryDescription = subCategoryDescription;
    }
}
