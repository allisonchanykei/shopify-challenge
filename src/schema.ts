const { gql } = require("apollo-server");

export const typeDefs = gql`
    type Shop {
        Id: ID!
        Name: String!
        Product: [Product!]
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

    type Query {
        shops: [Shop!]
        products(shopId: String!): [Product!]
    }
`;
