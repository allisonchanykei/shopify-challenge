export interface IShopSource {
    getShops(): Shop[];
    getShop(id: number): Shop;
    updateShop(shop: Shop): Shop;
    createShop(name: NewShop): Shop;
    deleteShop(id: number): boolean;
}
export interface NewShop {
    Name: string;
    Currency?: string; //the currency used in this store... all items with price would use this currency
}
export interface Shop extends NewShop {
    Id: number;
}
