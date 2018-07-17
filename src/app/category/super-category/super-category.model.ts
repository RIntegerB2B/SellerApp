export class SuperCategory {

    categoryName: string;
    categoryDescription: string;
    editing: boolean;
    constructor(
        categoryName: string,
        categoryDescription: string
    ) {
        this.categoryName = categoryName;
        this.categoryDescription = categoryDescription;
    }
}
