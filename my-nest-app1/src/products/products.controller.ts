import { ProductsService } from './products.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productService.getProduct(Number(id));
  }
}
