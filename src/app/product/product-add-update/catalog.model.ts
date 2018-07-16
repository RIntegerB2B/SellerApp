export class CatalogDetail {
    _id:string;
    catalogName: string;
    constructor(
        _id:string,
        catalogName: string
    ) {
        this._id=_id;
        this.catalogName = catalogName;
    }
   
}
