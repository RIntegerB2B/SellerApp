import { SubCategoryData } from './sub-cat-data.model'
export class MainCategoryData {
    _id: string;
    mainCategoryName: string;
    mainCategoryDescription: string
    subCategory: SubCategoryData
    constructor(
        _id: string,
        mainCategoryName: string,
        mainCategoryDescription: string,
        subCategory
    ) {
        this._id = _id;
        this.mainCategoryName = mainCategoryName;
        this.mainCategoryDescription = mainCategoryDescription;
        this.subCategory = subCategory
    }
}
