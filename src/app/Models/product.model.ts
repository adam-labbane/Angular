import { DatePipe } from "@angular/common";

export class Product {
    public id:number = 0;
    public title: string = "";
    public description: string = "";
    public imageUrl: string = "";
    public price: number = 0;
    public likes: number = 0;
    public isLiked: boolean = false;
    public btnValue: string = "like";
    public dateadd: Date = new Date;
    public size?: Array<string>;

    constructor(id: number, title: string, description: string, imageUrl: string, price: number, likes: number, isLiked: boolean, btnValue: string, dateadd: Date ,size?:Array<string>) {
        this.id = id,
        this.title = title,
        this.description = description,
        this.imageUrl = imageUrl,
        this.price = price,
        this.likes = likes,
        this.isLiked = isLiked,
        this.btnValue = btnValue,
        this.dateadd = dateadd,
        this.size = size
    }
}