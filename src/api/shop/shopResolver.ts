import Source from "../../dataSource/interface/Source";

export const resolvers = {
    Query: {
        shops: (obj, args, context: Source) => {
            return context.ShopSource.getShops();
        },
        shop: (obj, args, context: Source) => {
            return context.ShopSource.getShop(args.shopId);
        }
    },

    Mutation: {
        updateShop: (obj, args, context: Source) => {
            return context.ShopSource.updateShop(args.shop);
        },
        createShop: (obj, args, context: Source) => {
            return context.ShopSource.createShop(args.shop);
        },
        deleteShop: (obj, args, context: Source) => {
            return context.ShopSource.deleteShop(args.shopId);
        }
    },

    Shop: {
        Products: (shop, args, context: Source) => {
            return context.ProductSource.getProductsByShop(shop.Id);
        }
    }
};
