import { IShopSource, Shop, NewShop } from "../interface/IShopSource";
import { shops } from "./mockData";

export default class MockShopSource implements IShopSource {
    getShops(): Shop[] {
        return shops;
    }

    getShop(id: string): Shop {
        return shops.find(shop => shop.Id == id);
    }

    updateShop(shop: Shop): Shop {
        const index = shops.findIndex(el => el.Id == shop.Id);
        if (index == -1) throw new Error("Shop does not exist.");
        shops[index] == shop;
        return shops[index];
    }

    createShop(newShop: NewShop): Shop {
        const shop: Shop = { Id: Date.now().toString(), ...newShop };
        //assume currency is a legit one
        shop.Currency = shop.Currency ? shop.Currency : "USD";
        shops.push(shop);
        return shop;
    }

    deleteShop(id: string): boolean {
        const index = shops.findIndex(el => el.Id == id);
        if (index == -1) throw new Error("Shop does not exist.");
        shops.splice(index, 1);
        return true;
    }
}
