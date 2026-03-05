import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [
    { id: 1, name: 'Laptop', price: 60000 },
    { id: 2, name: 'mobile', price: 10000 },
    { id: 3, name: 'tablet', price: 20000 },
  ];

  getProducts() {
    return this.products;
  }
  getProduct(id: number) {
    return this.products.find((p) => p.id === id);
  }
}
