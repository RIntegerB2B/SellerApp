import { Product } from './product.model';

export class Catalogs {
    _id: string;
  products: Product;
    constructor(
        _id: string,

    ) {
        this._id = _id;

    }
}
