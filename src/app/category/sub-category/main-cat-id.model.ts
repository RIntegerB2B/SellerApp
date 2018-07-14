import { SubCategory } from "./sub-cat-detail.model";
export class MainCatIdAndSub {

    mainCategoryId: string;
    subCategory: SubCategory;
    constructor(
        mainCategoryId: string,
        subCategory: SubCategory
    ) {
        this.mainCategoryId = mainCategoryId;
        this.subCategory = subCategory;

    }
}
