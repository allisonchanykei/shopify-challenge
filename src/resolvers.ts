import { books } from "./dataSource/mockData";

export const resolvers = {
    Query: {
        books: () => books
    }
};
