export class ProductData {
    productName: string;
    price: Number;
    sizeDescription: string;
    productTypeDesc: string;
    size: string;
    productDescription: string;
    cod: Boolean;
    dispatchDesc: string;
    watsAppDesc: string;
    imageType: string;
    constructor(
        productName: string,
        price: Number,
        sizeDescription: string,
        productTypeDesc: string,
        size: string,
        productDescription: string,
        cod: Boolean,
        dispatchDesc: string,
        watsAppDesc: string,
        imageType: string
    ) {
        this.productName = productName;
        this.price = price;
        this.sizeDescription = sizeDescription;
        this.productTypeDesc = productTypeDesc;
        this.size = size;
        this.productDescription = productDescription;
        this.cod = cod;
        this.dispatchDesc = dispatchDesc;
        this.watsAppDesc = watsAppDesc;
        this.imageType = imageType;

    }
}
