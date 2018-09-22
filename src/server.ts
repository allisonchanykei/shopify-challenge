import { ApolloServer } from "apollo-server";
import { merge } from "lodash";
import { getSource } from "./dataSource/sourceFactory";
import { resolvers as productResovlers } from "./api/product/productResolver";
import { typeDefs as productTypeDefs } from "./api/product/productSchema";
import { resolvers as shopResolvers } from "./api/shop/shopResolver";
import { typeDefs as shopTypeDefs } from "./api/shop/shopSchema";
import { resolvers as orderResolvers } from "./api/order/orderResolver";
import { typeDefs as orderTypeDefs } from "./api/order/orderSchema";

const TOKEN = "test";

const typeDefs = [shopTypeDefs, productTypeDefs, orderTypeDefs];
const resolvers = merge(shopResolvers, productResovlers, orderResolvers);
// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const token = req.headers.token || "";
        if (token !== TOKEN) throw new Error("Unauthorized");
        return getSource();
    }
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
