import { ProductType } from './flyweight';

export class Product {
  constructor(
    private type: ProductType,
    public id: number,
    public name: string,
    public price: number,
    public sku: string
  ) {}

  display() {
    console.log(`Product [ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, SKU: ${this.sku}, Category: ${this.type.category}, Brand: ${this.type.brand}, Shared Properties: ${this.type.sharedProperties}]`);
  }
}
