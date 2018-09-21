import { IProductSource, Product, NewProduct } from "../interface/IProductSource";
import { products } from "./mockData";

export default class MockProductSource implements IProductSource {
    getProducts(): Product[] {
        return products;
    }

    getProductsByShop(shopId: string): Product[] {
        console.log(products);
        return products.filter(product => product.ShopId == shopId);
    }

    getProduct(id: string): Product {
        return products.find(product => product.Id == id);
    }

    updateProduct(product: Product): Product {
        const index = products.findIndex(prod => prod.Id == product.Id);
        if (index == -1) throw new Error("Product does not exist");
        products[index] = product;
        return products[index];
    }

    createProduct(newProduct: NewProduct): Product {
        const id = Date.now().toString();
        const product: Product = { ...newProduct, Id: id };
        //default price and inventory to 0
        product.Price = product.Price ? product.Price : 0;
        product.Inventory = product.Inventory ? product.Inventory : 0;
        products.push(product);
        return product;
    }

    deleteProduct(id: string): boolean {
        const index = products.findIndex(product => product.Id == id);
        if (index == -1) throw new Error("Product does not exist");
        products.splice(index, 1);
        return true;
    }
}
