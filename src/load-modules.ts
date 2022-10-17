import _ from "lodash";

import { LOAD_MODULES } from "#/settings";

export function load(applicationName = "DEFAULT", modules: string | string[] = LOAD_MODULES): void {
  if (typeof modules === "string") {
    modules = modules
      .split(",")
      .map((x) => x.trim())
      .filter((x) => !_.isEmpty(x));
  }

  console.log(`Loading modules for ${applicationName}`, modules);

  for (const module of modules) {
    console.log("Module line 16: " + module);
    require(`#/${module}`);
  }
}
