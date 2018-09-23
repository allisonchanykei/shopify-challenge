# Shopify Challenge

This is a GraphQL API that is specifically designed for the winter 2019 Shopify intern challenge.

In the challenge description, the relationship is as follow:

Shops have many Products

Shops have many Orders

Products have many Line Items

Orders have many Line Items

Due to a lack of channel for asking for clarifications, the following assumptions are made:

1. line items of products are variations of a product e.g. different colour
1. the price of the product will be ignored if there are line items
1. line items are unique to each product
1. orders should have a copy of the prices of line items or products since they should be a snapshot at the time of purchase
1. not sure what rates mean, so assume price and rates are the same thing
1. when a customer wants to change an order, they would cancel the order and create a new one

The api has basic CRUD functionailities for product, order, and shop.

## Technology Stack

1. Typescript
1. Nodejs
1. GraphQL
1. Apollo Server

## Starting the API

To run the api, clone the repository.then, go to the location of the repository. In the command prompt, type

```
npm run install
npm install -g typescript
npm run start
```

Visit the localhost url that is displayed in your command prompt. The url will lead you to the graphql playground. Click "Http Headers" and add `{"token":"test"}`.

A file has been created for your convenience to test. Simply copy the lines to the playgraound, uncomment the line you want to use, and press the play button.
You can try out the other functions by looking at the schema on the right.

**Note**: right now, the data lives in memory, meaning any changes you made would be undone once you restart the app.

## Files

All source files are located in the `src` folder.

`api/*` - schemas and resolvers are under each type - shop, product, order

`dataSource/mockData.ts` - sample data for demo purposes

## Development

If you want to work on this project, in the command prompt, type

```
npm install -g nodemon
tsc -w
npm run dev
```

This would refresh the api locally everytime you save a file.
