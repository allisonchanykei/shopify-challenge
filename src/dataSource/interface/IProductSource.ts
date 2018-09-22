export interface IProductSource {
    getProducts(): Product[];
    getProductsByShop(shopId: number): Product[];
    getProduct(id: number): Product;
    getVariantsByProduct(productId: number): ProductLineItem[];
    getVariant(id: number): ProductLineItem;
    //allow bulk insert and remove for variants on the same product
    addProductVariants(productId: number, variants: ProductLineItem[]): Product;
    removeProductVariants(productId: number, variantIds: number[]): Product;
    updateVariant(variant: ProductLineItem): Product;
    updateProduct(product: Product): Product;
    createProduct(newProduct: NewProduct): Product;
    deleteProduct(id: number): boolean;
}

export interface NewProduct {
    ShopId: number;
    Name: string;
    Price: number;
    Inventory: number;
    Description: string;
    Variants?: ProductLineItem[];
}

export interface Product extends NewProduct {
    Id: number;
}

export interface NewProductLineItem {
    Name: string;
    Price: number;
    Inventory: number;
}

export interface ProductLineItem extends NewProductLineItem {
    Id: number;
    ProductId: number;
}
