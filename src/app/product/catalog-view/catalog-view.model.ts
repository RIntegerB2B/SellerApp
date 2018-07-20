export class CatalogViewModel {
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
}
