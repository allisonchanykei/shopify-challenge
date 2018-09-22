import { IShopSource, Shop, NewShop } from "../interface/IShopSource";
import { shops } from "./mockData";
import { newId } from "./helper";

export default class MockShopSource implements IShopSource {
    static hasShop(id: number): Boolean {
        const index = shops.findIndex(shop => shop.Id == id);
        return index != -1;
    }

    getShops(): Shop[] {
        return shops;
    }

    getShop(id: number): Shop {
        return shops.find(shop => shop.Id == id);
    }

    updateShop(shop: Shop): Shop {
        const index = shops.findIndex(el => el.Id == shop.Id);
        if (index == -1) throw new Error("Shop does not exist.");
        // only replace fields that are provided
        shops[index] == Object.assign(shops[index], shop);
        return shops[index];
    }

    createShop(newShop: NewShop): Shop {
        const shop: Shop = { Id: newId(shops.length), ...newShop };
        //assume currency is a legit one
        shop.Currency = shop.Currency ? shop.Currency : "USD";
        shops.push(shop);
        return shop;
    }

    deleteShop(id: number): boolean {
        const index = shops.findIndex(el => el.Id == id);
        if (index == -1) return true;
        shops.splice(index, 1);
        return true;
    }
}
