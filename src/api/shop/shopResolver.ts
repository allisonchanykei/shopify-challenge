export const resolvers = {
    Query: {
        shops: (obj, args, context) => {
            return context.ShopSource.getShops();
        },
        shop: (obj, args, context) => {
            return context.ShopSource.getShop(args.shopId);
        }
    },

    Mutation: {
        updateShop: (obj, args, context) => {
            return context.ShopSource.updateShop(args.shop);
        },
        createShop: (obj, args, context) => {
            return context.ShopSource.createShop(args.shop);
        },
        deleteShop: (obj, args, context) => {
            return context.ShopSource.deleteShop(args.shopId);
        }
    },

    Shop: {
        Products: (shop, args, context) => {
            return context.ProductSource.getProductsByShop(shop.Id);
        }
    }
};
