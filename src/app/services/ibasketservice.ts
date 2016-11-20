import { IProduct } from '../models/iproduct.interface';
export interface IBasketService {
    products: IProduct[];
    totalPrice: number;
    totalQuantity: number;
    addProduct(product: IProduct): void;
    clearBasket(): void;
}
