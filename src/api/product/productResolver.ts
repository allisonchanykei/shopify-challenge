import { shops } from "../../dataSource/mockSource/mockData";

export const resolvers = {
    Query: {
        products: (obj, args, context) => {
            return context.ProductSource.getProductsByShop(args.shopId);
        },
        product: (obj, args, context) => {
            return context.ProductSource.getProduct(args.productId);
        }
    },

    Mutation: {
        updateProduct: (obj, args, context) => {
            return context.ProductSource.updateProduct(args.product);
        },
        createProduct: (obj, args, context) => {
            return context.ProductSource.createProduct(args.product);
        },
        deleteProduct: (obj, args, context) => {
            return context.ProductSource.deleteProduct(args.productId);
        }
    },

    Product: {
        Shop: product => {
            return shops.find(shop => shop.Id == product.ShopId);
        }
    }
};
