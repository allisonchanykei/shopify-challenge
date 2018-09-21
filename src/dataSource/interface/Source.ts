import { IShopSource } from "./IShopSource";
import { IProductSource } from "./IProductSource";

export default interface Source {
    ShopSource: IShopSource;
    ProductSource: IProductSource;
}
