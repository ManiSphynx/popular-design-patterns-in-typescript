import { ProductTypeFactory } from './flyweight-factory';
import { Product } from './product';

const factory = new ProductTypeFactory();

const products = [
  new Product(factory.getProductType('Electronics', 'BrandA', 'CommonProps1'), 1, 'Product1', 100, 'SKU1'),
  new Product(factory.getProductType('Electronics', 'BrandA', 'CommonProps1'), 2, 'Product2', 150, 'SKU2'),
  new Product(factory.getProductType('Electronics', 'BrandB', 'CommonProps2'), 3, 'Product3', 200, 'SKU3'),
  new Product(factory.getProductType('Furniture', 'BrandC', 'CommonProps3'), 4, 'Product4', 300, 'SKU4'),
];

products.forEach(product => product.display());
