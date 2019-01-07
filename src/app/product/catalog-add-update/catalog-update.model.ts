export class CatalogUpdateModel {
    _id: string;
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
        _id: string,
        catalogName: string,
        catalogType: string,
        material: string,
        capacity: string,
        catalogDescription: string,
    ) {
        this._id = _id;
        this.catalogName = catalogName;
        this.catalogType = catalogType;
        this.material = material;
        this.capacity = capacity;
        this.catalogDescription = catalogDescription;
    }
}
