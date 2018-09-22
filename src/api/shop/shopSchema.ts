import { gql } from "apollo-server";

export const typeDefs = gql`
    # I have been trying to find a way to extend a type like in typescript, no luck yet :(
    input NewShopInfo {
        Name: String
        Currency: String
    }

    input UpdateShopInfo {
        Id: ID!
        Name: String
        Currency: String
    }

    type Shop {
        Id: ID!
        Name: String!
        Currency: String!
        Products: [Product!]
    }

    # base type for query and mutations are here, other files should extend this type
    type Query {
        shops: [Shop!]
        shop(shopId: ID!): Shop
    }

    type Mutation {
        # shop mutations
        updateShop(shop: UpdateShopInfo!): Shop!
        createShop(shop: NewShopInfo!): Shop!
        deleteShop(shopId: ID!): Boolean!
    }
`;
