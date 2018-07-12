import { MainCatDetail } from "./main-cat-detail.model";
export class MainCat {
    _id:string;
    categoryName:string;
    categoryDescription:string;
    mainCategory : MainCatDetail;
    constructor(
        _id:string,
        categoryName: string,
        categoryDescription:string,
        mainCategory: MainCatDetail
       ) 
       {
           this._id=_id;
        this.categoryName = categoryName;
        this.categoryDescription=categoryDescription;
        this.mainCategory=mainCategory;
        
    }
}
