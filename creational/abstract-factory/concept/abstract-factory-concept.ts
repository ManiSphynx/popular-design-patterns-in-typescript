// Abstract Factory Concept Sample Code
import { FactoryB, IProductB } from './../use case/factory-b';
import { FactoryA, IProductA } from './../use case/factory-a';

interface IProduct extends IProductA, IProductB {}

class AbstractFactory {
  // The Abstract Factory Concrete Class

  static createObject(factory: string): IProduct | undefined {
    try {
      if (["aa", "ab", "ac"].indexOf(factory) > -1) {
        return FactoryA.getObject(factory[1]);
      }
      if (["ba", "bb", "bc"].indexOf(factory) > -1) {
        return FactoryB.getObject(factory[1]);
      }
      throw new Error("No Factory Found");
    } catch (e) {
      console.log(e);
    }
  }
}

// The Client
let PRODUCT = AbstractFactory.createObject("ab");
console.log(PRODUCT);

PRODUCT = AbstractFactory.createObject("bc");
console.log(PRODUCT);
