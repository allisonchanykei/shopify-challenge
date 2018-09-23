export interface IProductSource {
    getProducts(): Product[];
    getProductsByShop(shopId: string): Product[];
    getProduct(id: string): Product;
    getVariantsByProduct(productId: string): ProductLineItem[];
    getVariant(id: string): ProductLineItem;
    //allow bulk insert and remove for variants on the same product
    addProductVariants(productId: string, variants: ProductLineItem[]): Product;
    removeProductVariants(productId: string, variantIds: string[]): Product;
    updateVariant(variant: ProductLineItem): Product;
    updateProduct(product: Product): Product;
    createProduct(newProduct: NewProduct): Product;
    deleteProduct(id: string): boolean;
}

export interface NewProduct {
    ShopId: string;
    Name: string;
    Price: number;
    Inventory: number;
    Description: string;
    Variants?: ProductLineItem[];
}

export interface Product extends NewProduct {
    Id: string;
}

export interface NewProductLineItem {
    Name: string;
    Price: number;
    Inventory: number;
}

export interface ProductLineItem extends NewProductLineItem {
    Id: string;
    ProductId: string;
}
