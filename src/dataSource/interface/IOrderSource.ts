//using ids here so that staff of store could check in the system which product it was exactly
export interface OrderLineItem {
    ProductId: string;
    VariantId?: string;
    Price: number;
    Quantity: number;
}