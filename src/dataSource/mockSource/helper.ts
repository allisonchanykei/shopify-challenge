var shortid = require("shortid");
export function newId(): string {
    // easier to change the way id is generated in the future
    return shortid.generate();
}
