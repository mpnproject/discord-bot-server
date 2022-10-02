import { JsonDB } from "node-json-db";
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'

const model = new JsonDB(new Config('data/monsters.json', true, true));

export { model };
