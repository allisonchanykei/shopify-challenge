export interface IOrderSource {
    getOrders(): Order[];
    getOrdersByShop(shopId: string): Order[];
    getOrder(id: string): Order;
    createOrder(order: NewOrder): Order;
    updateOrderStatus(id: string, status: Status): Order;
    deleteOrder(id: string): boolean;
}

export interface NewOrder {
    ShopId: string;
    TotalPrice: number;
    Items: OrderLineItem[];
    Status: Status;
}

export enum Status {
    Active = "Active",
    Fulfilled = "Fulfilled",
    Cancelled = "Cancelled"
}

export interface Order extends NewOrder {
    Id: string;
}

export interface OrderLineItem {
    //using ids here so that staff of store could check in the system which product it was exactly
    ItemId: string;
    ItemType: ItemType;
    // Use a copy of name and price at time of order
    Name: string;
    Price: number;
    Quantity: number;
}

export enum ItemType {
    Product = "Product",
    Variant = "Variant"
}
