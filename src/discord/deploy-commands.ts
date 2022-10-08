import { REST, Routes } from "discord.js";
import { DISCORD_TOKEN, GUILD_ID, CLIENT_ID } from "#/settings";
import * as commandModules from "#/discord/commands";
import { Command } from "#/discord/types/command-type";

const commands = [];

for (const module of Object.values<Command>(commandModules)) {
  commands.push(module.commandInformation);
}

const rest = new REST().setToken(DISCORD_TOKEN);

rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands }).then(() => {
  console.log("Successfully registered commands");
}).catch(console.error);
