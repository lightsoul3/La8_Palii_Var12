export class Subject{
    ID!: number;
    Name!: string;
    Rating!: number;

    constructor(ID:number, Name:string, rating:number){
        this.ID = ID;
        this.Name = Name;
        this.Rating = rating;
    }
}