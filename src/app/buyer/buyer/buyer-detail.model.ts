export class BuyerDetail {
    name: String;
    mobileNumber: Number;
    location: String;
    userType: String;
    constructor(
        name: String,
        mobileNumber: Number,
        location: String,
        userType: String
        )
        {
            this.name=name;
            this.mobileNumber=mobileNumber;
            this.location=location;
            this.userType=userType;
            
        }
    
}