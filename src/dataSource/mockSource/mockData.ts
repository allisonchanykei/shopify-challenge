import { Shop } from "../interface/IShopSource";
import { Product, ProductLineItem } from "../interface/IProductSource";
import { Order, Status, ItemType } from "../interface/IOrderSource";

export const shops: Shop[] = [
    {
        Id: 1,
        Name: "Shop 1",
        Currency: "CAD"
    },
    {
        Id: 2,
        Name: "Shop 2",
        Currency: "USD"
    }
];

export const products: Product[] = [
    {
        Id: 1,
        Name: "Product 1",
        ShopId: 1,
        Price: 30,
        Inventory: 200,
        Description: "Description 1"
    },
    {
        Id: 2,
        Name: "Product 2",
        ShopId: 1,
        Price: 20,
        Inventory: 300,
        Description: "Description 2"
    },
    {
        Id: 3,
        Name: "Product 3",
        ShopId: 2,
        Price: 80,
        Inventory: 200,
        Description: "Description 3"
    }
];

export const variants: ProductLineItem[] = [
    {
        Id: 1,
        ProductId: 1,
        Name: "Red",
        Inventory: 30,
        Price: 60
    },
    {
        Id: 2,
        ProductId: 2,
        Name: "Black",
        Inventory: 20,
        Price: 45
    }
];

export const orders: Order[] = [
    {
        Id: 1,
        ShopId: 1,
        TotalPrice: 140,
        Items: [
            {
                Name: "Product 1 - Red",
                Price: 60,
                ItemId: 1,
                ItemType: ItemType.Variant,
                Quantity: 2
            },
            {
                Name: "Product 2",
                Price: 20,
                ItemId: 2,
                ItemType: ItemType.Product,
                Quantity: 1
            }
        ],
        Status: Status.Active
    }
];
