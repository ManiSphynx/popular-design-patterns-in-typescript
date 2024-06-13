import { ProductType } from './flyweight';

export class ProductTypeFactory {
  private types: { [key: string]: ProductType } = {};

  getProductType(category: string, brand: string, sharedProperties: string): ProductType {
    const key = `${category}_${brand}_${sharedProperties}`;
    if (!this.types[key]) {
      this.types[key] = new ProductType(category, brand, sharedProperties);
    }
    return this.types[key];
  }
}
