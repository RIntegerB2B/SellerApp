export class MainCategoryDetail {
    
    mainId:Number;
    mainCategoryName: string;
    mainCategoryDescription: string;
    constructor(
        
        mainId:Number,
        mainCategoryName: string,
        mainCategoryDescription: string
       ) 
       {
        
        this.mainId=mainId;
        this.mainCategoryName = mainCategoryName;
        this.mainCategoryDescription=mainCategoryDescription;
    }
}
