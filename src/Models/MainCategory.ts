import { SubCategory } from "./SubCategory";

export  interface MainCategory{
    id:number;
    name:string;

    subcategories:SubCategory[];
}