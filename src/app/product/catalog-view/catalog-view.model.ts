/* export class CatalogViewModel {
    catalogName: string;
    catalogType: string;
    material: string;
    capacity: string;
    catalogDescription: string;
    work: string;
    dispatch: string;
    imageType: string;
    catalogImageName: string;
    constructor(
        catalogName: string,
        catalogType: string,
        material: string,
        capacity: string,
        catalogDescription: string,
        work: string,
        dispatch: string,
        imageType: string


    ) {
        this.catalogName = catalogName;
        this.catalogType = catalogType;
        this.material = material;
        this.capacity = capacity;
        this.catalogDescription = catalogDescription;
        this.work = work;
        this.dispatch = dispatch;
        this.imageType = imageType;

    }
} */
export class CatalogViewModel {
    catalogName: string;
    catalogImageName: string;
    catalogTitle: string;
    styleCode: string;
    moq: string;
    catalogDescription: string;
    constructor(
        catalogTitle: string,
        catalogName: string,
        styleCode: string,
        moq: string,
        catalogDescription: string,
    ) {
        this.catalogTitle = catalogTitle;
        this.catalogName = catalogName;
        this.styleCode = styleCode;
        this.moq = moq;
        this.catalogDescription = catalogDescription;
    }
}
