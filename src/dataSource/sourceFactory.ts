import Source from "./interface/Source";
import MockShopSource from "./mockSource/shopSource";
import MockProductSource from "./mockSource/productSource";
import MockOrderSource from "./mockSource/orderSource";

export function getSource(): Source {
    //make it easier to switch between sources
    //although we only have mock source right now
    return {
        ShopSource: new MockShopSource(),
        ProductSource: new MockProductSource(),
        OrderSource: new MockOrderSource()
    };
}
