import { gql } from "apollo-server";

export const typeDefs = gql`
    input NewOrder {
        ShopId: String!
        Items: [NewOrderLineItem!]!
    }

    input NewOrderLineItem {
        ItemId: String!
        ItemType: ItemType!
        Quantity: Int!
    }

    enum ItemType {
        Product
        Variant
    }

    type Order {
        Id: ID!
        ShopId: String!
        TotalPrice: Float!
        Items: [OrderLineItem!]!
        Status: String!
    }

    type OrderLineItem {
        Product: Product
        Variant: ProductLineItem
        Name: String!
        Price: Float!
        Quantity: Int!
    }

    extend type Query {
        orders(shopId: String!): [Order!]
        order(orderId: ID!): Order
    }

    extend type Mutation {
        createOrder(order: NewOrder!): Order!
        "change status to Cancelled"
        cancelOrder(orderId: ID!): Order!
        "change status to Fulfilled"
        fulfillOrder(orderId: ID!): Order!
        deleteOrder(orderId: ID!): Boolean!
    }
`;
