import { injectable } from "inversify";

import { MonsterRepository } from "#/api/monsters/domain/repositories/monster-repository";
import { Monster } from "#/api/monsters/domain/entities/monster";
import { model } from "#/api/monsters/infrastructure/providers/models/monster-model";
import { MonsterId } from "../../domain/entities/monster-id";

@injectable()
export class ObjectionMonsterRepository implements MonsterRepository {
  public async getList(): Promise<Monster[]> {
    return model.getData("/");
  };

  public async getById(monsterId: MonsterId): Promise<Monster[]> {
    return model.getObject(`/${monsterId}`);
  };
}
