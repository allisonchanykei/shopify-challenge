import { gql } from "apollo-server";

export const typeDefs = gql`
    input NewProductInfo {
        Name: String!
        Description: String!
        Price: Float
        Inventory: Int
        ShopId: String!
        Variants: [NewProductLineItem!]
    }

    input UpdateProductInfo {
        Id: ID!
        Name: String
        Description: String
        Price: Float
        Inventory: Int
        Variants: [NewProductLineItem!]
    }

    type Product {
        Id: ID!
        Name: String!
        Description: String!
        Price: Float
        Inventory: Int
        Shop: Shop!
        Variants: [ProductLineItem!]
    }

    type ProductLineItem {
        Id: ID!
        Name: String!
        Price: Float!
        Inventory: Int!
    }

    input NewProductLineItem {
        Name: String!
        Price: Float!
        Inventory: Int!
    }

    extend type Query {
        products(shopId: String!): [Product!]
        product(productId: ID!): Product
    }

    extend type Mutation {
        updateProduct(product: UpdateProductInfo!): Product
        createProduct(product: NewProductInfo!): Product
        deleteProduct(productId: ID!): Boolean
    }
`;
