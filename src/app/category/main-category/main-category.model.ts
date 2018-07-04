export class MainCategory {
    categoryName:String;
    mainCategoryName: string;
    mainCategoryDescription: string;
    constructor(
        categoryName:String,
        mainCategoryName: string,
        mainCategoryDescription: string
       ) 
       {
           this.categoryName=categoryName;
        this.mainCategoryName = mainCategoryName;
        this.mainCategoryDescription=mainCategoryDescription;
    }
}
