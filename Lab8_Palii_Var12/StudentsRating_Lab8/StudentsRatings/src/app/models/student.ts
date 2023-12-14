export class Student{
    ID!: number;
    Fullname!: string;
    Address!: string;
    Phone!: string;
    DateOfBirth!: Date;

    constructor(ID:number, Fullname:string, Address:string, Phone:string, DateOfBirth:Date){
        this.ID = ID;
        this.Fullname = Fullname;
        this.Address = Address;
        this.Phone = Phone;
        this.DateOfBirth = DateOfBirth;
    }
}