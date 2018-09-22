import Source from "../../dataSource/interface/Source";

export const resolvers = {
    Query: {
        products: (obj, args, context: Source) => {
            return context.ProductSource.getProductsByShop(args.shopId);
        },
        product: (obj, args, context: Source) => {
            return context.ProductSource.getProduct(args.productId);
        },
        variant: (obj, args, context: Source) => {
            return context.ProductSource.getVariant(args.variantId);
        }
    },

    Mutation: {
        updateProduct: (obj, args, context: Source) => {
            return context.ProductSource.updateProduct(args.product);
        },
        createProduct: (obj, args, context: Source) => {
            return context.ProductSource.createProduct(args.product);
        },
        deleteProduct: (obj, args, context: Source) => {
            return context.ProductSource.deleteProduct(args.productId);
        },
        removeVariants: (obj, args, context: Source) => {
            return context.ProductSource.removeProductVariants(args.productId, args.variantIds);
        },
        addVariants: (obj, args, context: Source) => {
            return context.ProductSource.addProductVariants(args.productId, args.variants);
        },
        updateVariant: (obj, args, context: Source) => {
            return context.ProductSource.updateVariant(args.variant);
        }
    },

    Product: {
        Shop: (product, args, context: Source) => {
            return context.ShopSource.getShop(product.ShopId);
        },

        Variants: (product, args, context: Source) => {
            return context.ProductSource.getVariantsByProduct(product.Id);
        }
    },

    ProductLineItem: {
        Product: (variant, args, context: Source) => {
            return context.ProductSource.getProduct(variant.ProductId);
        }
    }
};
