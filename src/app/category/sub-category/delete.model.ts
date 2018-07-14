export class SubCatDelete {
    categoryId: string;
    mainCategoryId: string;
    subCategoryId: string;


    constructor(
        categoryId: string,
        mainCategoryId: string,
        subCategoryId: string,


    ) {
        this.categoryId = categoryId;
        this.mainCategoryId = mainCategoryId;
        this.subCategoryId = subCategoryId;


    }
}