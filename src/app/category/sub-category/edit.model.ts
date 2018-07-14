export class SubCatEdit {
    categoryId:string;
    mainCategoryId: string;
    subCategoryId:string;
    subCategoryName:string;
    subCategoryDescription:string
   
    constructor(
        categoryId:string,
        mainCategoryId: string,
    subCategoryId:string,
    subCategoryName:string,
    subCategoryDescription:string
      
    ) {
        this.categoryId=categoryId;
        this.mainCategoryId = mainCategoryId;
        this.subCategoryId=subCategoryId;
        this.subCategoryName=subCategoryName;
        this.subCategoryDescription=subCategoryDescription
        
    }
}