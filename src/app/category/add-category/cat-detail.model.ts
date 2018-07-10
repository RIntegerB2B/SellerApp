import { MainCatData } from './main-cat-data.model';

export class CategoryDetail {
    _id:string;
    categoryName:string;
    categoryDescription:string;
    mainCategory : MainCatData;
    constructor(
        _id:string,
        categoryName: string,
        categoryDescription:string,
        mainCategory: MainCatData
       ) 
       {
           this._id=_id;
        this.categoryName = categoryName;
        this.categoryDescription=categoryDescription;
        this.mainCategory=mainCategory;
        
    }
}
