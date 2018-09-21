export interface IProductSource {
    getProducts(): Product[];
    getProductsByShop(shopId: string): Product[];
    getProduct(id: string): Product;
    updateProduct(product: Product): Product;
    createProduct(newProduct: NewProduct): Product;
    deleteProduct(id: string): boolean;
}

export interface NewProduct {
    ShopId: string;
    Name: string;
    Price?: number;
    Inventory?: number;
    Description: string;
    Variants?: ProductLineItem[];
}

export interface Product extends NewProduct {
    Id: string;
}

export interface ProductLineItem {
    Id: string;
    Name: string;
    Price: number;
    Inventory: number;
}
