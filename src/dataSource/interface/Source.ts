import { IShopSource } from "./IShopSource";
import { IProductSource } from "./IProductSource";
import { IOrderSource } from "./IOrderSource";

export default interface Source {
    ShopSource: IShopSource;
    ProductSource: IProductSource;
    OrderSource: IOrderSource;
}
