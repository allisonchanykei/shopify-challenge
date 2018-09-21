import { shops, products } from "./dataSource/mockSource/mockData";

export const resolvers = {
    Query: {
        shops: (obj, args, context, info) => {
            return context.ShopSource.getShops();
        },
        products: (obj, args, context, info) => {
            return context.ProductSource.getProductsByShop(args.shopId);
        }
    },

    Shop: {
        Product: (shop, args, context, info) => {
            return context.ProductSource.getProductsByShop(shop.Id);
        }
    },

    Product: {
        Shop: product => {
            return shops.find(shop => shop.Id == product.ShopId);
        }
    }
};
