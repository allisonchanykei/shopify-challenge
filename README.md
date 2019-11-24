# Shopify Challenge

This is a [GraphQL](https://graphql.org/) API that is specifically designed for the winter 2019 Shopify intern challenge.

In the challenge description, the relationship is as follow:

* Shops have many Products
* Shops have many Orders
* Products have many Line Items
* Orders have many Line Items

Due to a lack of channel for asking for clarifications, the following assumptions are made:

1. Line items of products are variations of a product e.g. different colour
1. The price of the product will be ignored if there are line items
1. Line items are unique to each product
1. Orders should have a copy of the prices of line items or products since they should be a snapshot at the time of purchase
1. Not sure what rates mean, so assume price and rates are the same thing
1. When a customer wants to change an order, they would cancel the order and create a new one

The api has basic CRUD (create, read, update, delete) functionailities for product, order, and shop.

## Technology Stack

1. [Typescript](https://www.typescriptlang.org/)
1. [Nodejs](https://nodejs.org/en/)
1. [GraphQL](https://graphql.org/)
1. [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
1. [Lodash](https://www.npmjs.com/package/lodash)

## Starting the API

To run the api, clone the repository.then, go to the location of the repository. In the command prompt, type

```
## clone the repository
git clone https://github.com/allisonchanykei/shopify-challenge.git

## install dependencies
npm run install

## install typescript
npm install -g typescript

## start the api
npm run start
```

Visit the localhost url that is displayed in your command prompt. 
The url will lead you to the graphql playground. 
Click `"Http Headers"` and add `{"token":"test"}`.

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

Nodemon refreshes the api locally everytime you save a file.
