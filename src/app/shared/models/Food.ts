export class Food {
    id!:number;
    name!:string;
    price!:number;
    price_kg!: string;
    tags?:string[];
    favorite:boolean = false;
    stars:number = 0;
    imageUrl!:string;
    origins!:string[];
    deliveryTime!:string;
}