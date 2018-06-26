export class MainCategory {
    _id:Number;
    mainCategoryName: string;
    mainCategoryDescription: string;
    constructor(
        _id:Number,
        mainCategoryName: string,
        mainCategoryDescription: string
       ) 
       {
           this._id=_id;
        this.mainCategoryName = mainCategoryName;
        this.mainCategoryDescription=mainCategoryDescription;
    }
}
