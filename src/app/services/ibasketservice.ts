import { FeaturedProduct } from '../models/featuredproduct.model';
export interface IBasketService {
    products: FeaturedProduct[];
    totalPrice: number;
    addProduct(product: FeaturedProduct): void;
}
