/* istanbul ignore file */

require("reflect-metadata");
require("module-alias").addAlias("#", __dirname);
require("#/load-modules").load();
// eslint-disable-next-line import/first
import { server } from "#/server";

const port = process.env.PORT ?? "3001";

server.listen(port, () => {
  console.info(`Server running on port ${port}!`);
});
