import { IProduct } from './iproduct.interface';
export class FeaturedProduct implements IProduct {
    id: number;
    price: number;
    description: string;
    image: string;
    quantity: number;
    constructor(public name: string) {

    }
}