/* istanbul ignore file */

// require("#/load-modules").load("v2");

import { server } from "#/server";
require("reflect-metadata");
require("module-alias").addAlias("#", __dirname);

const port = process.env.PORT ?? "3002";

server.listen(port, () => {
  console.info(`V2 server running on port ${port}`);
});
