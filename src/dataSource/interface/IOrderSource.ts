export interface IOrderSource {
    getOrders(): Order[];
    getOrdersByShop(shopId: number): Order[];
    getOrder(id: number): Order;
    createOrder(order: NewOrder): Order;
    updateOrderStatus(id: number, status: Status): Order;
    deleteOrder(id: number): boolean;
}

export interface NewOrder {
    ShopId: number;
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
    Id: number;
}

export interface OrderLineItem {
    //using ids here so that staff of store could check in the system which product it was exactly
    ItemId: number;
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
