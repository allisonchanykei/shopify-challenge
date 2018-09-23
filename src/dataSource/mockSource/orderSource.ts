import { IOrderSource, Order, NewOrder, ItemType, Status } from "../interface/IOrderSource";
import { orders, variants, products } from "./mockData";
import MockShopSource from "./shopSource";
import { newId } from "./helper";

export default class MockOrderSource implements IOrderSource {
    getOrders(): Order[] {
        return orders;
    }
    getOrdersByShop(shopId: string): Order[] {
        return orders.filter(order => order.ShopId == shopId);
    }
    getOrder(id: string): Order {
        return orders.find(order => order.Id == id);
    }
    createOrder(newOrder: NewOrder): Order {
        let isBadOrder = !MockShopSource.hasShop(newOrder.ShopId);
        let name = "";
        let errorMessage = "";
        let totalPrice = 0;
        if (isBadOrder) {
            errorMessage = "Shop does not exist.";
        } else {
            //check if anything doesn't make sense
            isBadOrder = newOrder.Items.some(item => {
                let productId;
                if (item.ItemType == ItemType.Variant) {
                    const index = variants.findIndex(variant => item.ItemId == variant.Id);
                    // variant does not exist
                    if (index == -1) {
                        errorMessage = `Variant ${item.ItemId} does not exist.`;
                        return true;
                    }
                    name = ` - ${variants[index].Name}`;
                    item.Price = variants[index].Price;
                    productId = variants[index].ProductId;
                } else {
                    productId = item.ItemId;
                }
                const index = products.findIndex(product => productId == product.Id && product.ShopId == newOrder.ShopId);
                // product does not exist
                if (index == -1) {
                    errorMessage = `Product ${item.ItemId} does not exist in shop ${newOrder.ShopId}.`;
                    return true;
                }
                if (item.ItemType == ItemType.Product) {
                    item.Price = products[index].Price;
                }
                item.Name = `${products[index].Name}${name}`;
                totalPrice += item.Price * item.Quantity;
            });
        }
        if (isBadOrder) {
            throw new Error(errorMessage);
        }

        const order: Order = { ...newOrder, Id: newId() };
        order.Status = Status.Active;
        order.TotalPrice = totalPrice;
        orders.push(order);
        return order;
    }
    updateOrderStatus(id: string, status: Status): Order {
        const index = orders.findIndex(element => element.Id == id);
        if (index == -1) throw new Error("Order does not exist");
        orders[index].Status = status;
        return orders[index];
    }
    deleteOrder(id: string): boolean {
        const index = orders.findIndex(element => element.Id == id);
        if (index == -1) return true;
        orders.splice(index, 1);
        return true;
    }
}
