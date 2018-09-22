import { gql } from "apollo-server";

export const typeDefs = gql`
    input NewProductInfo {
        Name: String!
        Description: String!
        Price: Float
        Inventory: Int
        ShopId: String!
    }

    input UpdateProductInfo {
        Id: ID!
        Name: String
        Description: String
        Price: Float
        Inventory: Int
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
        Product: Product!
        Name: String!
        Price: Float!
        Inventory: Int!
    }

    input NewProductLineItem {
        Name: String!
        Price: Float!
        Inventory: Int!
    }

    input UpdateProductLineItem {
        Id: ID!
        Name: String!
        Price: Float!
        Inventory: Int!
    }

    extend type Query {
        products(shopId: String!): [Product!]
        product(productId: ID!): Product
        variant(variantId: String!): ProductLineItem
    }

    extend type Mutation {
        updateProduct(product: UpdateProductInfo!): Product
        createProduct(product: NewProductInfo!): Product
        addVariants(productId: ID!, variants: [NewProductLineItem!]!): Product
        removeVariants(productId: ID!, variantIds: [ID!]!): Product
        updateVariant(variant: UpdateProductLineItem!): Product
        deleteProduct(productId: ID!): Boolean
    }
`;
