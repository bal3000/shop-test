import { FeaturedProduct } from '../models/featuredproduct.model';
export interface IBasketService {
    products: FeaturedProduct[];
    totalPrice: number;
    totalQuantity: number;
    addProduct(product: FeaturedProduct): void;
    clearBasket(): void;
}
