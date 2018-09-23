import Source from "../../dataSource/interface/Source";
import { Status, ItemType } from "../../dataSource/interface/IOrderSource";

export const resolvers = {
    Query: {
        orders: (obj, args, context: Source) => {
            return context.OrderSource.getOrdersByShop(args.shopId);
        },
        order: (obj, args, context: Source) => {
            return context.OrderSource.getOrder(args.orderId);
        }
    },

    Mutation: {
        createOrder: (obj, args, context: Source) => {
            return context.OrderSource.createOrder(args.order);
        },
        cancelOrder: (obj, args, context: Source) => {
            return context.OrderSource.updateOrderStatus(args.orderId, Status.Cancelled);
        },
        fulfillOrder: (obj, args, context: Source) => {
            return context.OrderSource.updateOrderStatus(args.orderId, Status.Fulfilled);
        },
        deleteOrder: (obj, args, context: Source) => {
            return context.OrderSource.deleteOrder(args.orderId);
        }
    },

    OrderLineItem: {
        Product: (variant, args, context: Source) => {
            let productId = variant.ItemId;
            if (variant.ItemType == ItemType.Variant) {
                const tempVariant = context.ProductSource.getVariant(variant.ItemId);
                if (tempVariant) {
                    productId = tempVariant.ProductId;
                } else {
                    return null;
                }
            }
            return context.ProductSource.getProduct(productId);
        },
        Variant: (variant, args, context: Source) => {
            if (variant.ItemType == ItemType.Variant) {
                return context.ProductSource.getVariant(variant.ItemId);
            }
            return null;
        }
    }
};
