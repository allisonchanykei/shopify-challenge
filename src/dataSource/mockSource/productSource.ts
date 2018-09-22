import { IProductSource, Product, NewProduct, NewProductLineItem, ProductLineItem } from "../interface/IProductSource";
import { products, variants } from "./mockData";
import MockShopSource from "./shopSource";
import { newId } from "./helper";

export default class MockProductSource implements IProductSource {
    private indexOf(id: number): number {
        return products.findIndex(product => product.Id == id);
    }

    static hasProduct(id: number): boolean {
        return products.findIndex(product => product.Id == id) != -1;
    }

    static hasVariant(id: number): boolean {
        return variants.findIndex(variant => variant.Id == id) != -1;
    }

    getProducts(): Product[] {
        return products;
    }

    getProductsByShop(shopId: number): Product[] {
        return products.filter(product => product.ShopId == shopId);
    }

    getProduct(id: number): Product {
        return products.find(product => product.Id == id);
    }

    getVariant(variantId: number): ProductLineItem {
        return variants.find(variant => variant.Id == variantId);
    }

    getVariantsByProduct(productId: number): ProductLineItem[] {
        return variants.filter(variant => variant.ProductId == productId);
    }

    updateProduct(product: Product): Product {
        const index = this.indexOf(product.Id);
        if (index == -1) throw new Error("Product does not exist.");
        //make sure no change in shop
        product.ShopId = products[index].ShopId;
        // only replace fields that are provided
        products[index] = Object.assign(products[index], product);
        return products[index];
    }

    createProduct(newProduct: NewProduct): Product {
        // check if shop exists
        if (MockShopSource.hasShop(newProduct.ShopId)) throw new Error("Shop does not exist.");
        const id = newId(products.length);
        // spread newProduct's field across product
        const product: Product = { ...newProduct, Id: id };
        //default price and inventory to 0
        product.Price = product.Price ? product.Price : 0;
        product.Inventory = product.Inventory ? product.Inventory : 0;
        products.push(product);
        return product;
    }

    addProductVariants(productId: number, newVariants: NewProductLineItem[]): Product {
        const index = this.indexOf(productId);
        if (index == -1) throw new Error("Product does not exist.");
        newVariants.forEach(variant => {
            variants.push({ ...variant, Id: newId(variants.length), ProductId: productId });
        });
        return products[index];
    }

    removeProductVariants(productId: number, variantIds: number[]): Product {
        const index = this.indexOf(productId);
        if (index == -1) throw new Error("Product does not exist");
        // would not be O(nm) if using database, this is just for demo purpose
        for (let i = variants.length - 1; i >= 0; i--) {
            if (variantIds.indexOf(variants[i].Id) != -1) {
                variants.splice(i, 1);
            }
        }
        return products[index];
    }

    updateVariant(variant: ProductLineItem): Product {
        const index = variants.findIndex(element => element.Id == variant.Id);
        if (index == -1) throw new Error("Variant does not exist.");
        variant.ProductId = variants[index].ProductId;
        variants[index] = Object.assign(variants[index], variant);
        return this.getProduct(variant.ProductId);
    }

    deleteProduct(id: number): boolean {
        const index = this.indexOf(id);
        if (index == -1) return true;
        // remove related variants
        for (let i = variants.length - 1; i >= 0; i--) {
            if (variants[i].ProductId == id) {
                variants.splice(i, 1);
            }
        }
        products.splice(index, 1);
        return true;
    }
}
