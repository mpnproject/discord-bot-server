import { Client } from "discord.js";
import { DISCORD_TOKEN } from "#/settings";
import * as commandModules from "#/discord/commands";

const commands = Object(commandModules);

export const client = new Client({
  intents: [
    "Guilds",
    "GuildWebhooks",
    "GuildMessageReactions",
    "DirectMessages",
    "GuildMessages",
    "GuildMembers",
    "GuildBans",
  ],
});

client.once("ready", () => {
  console.log("Discord bot online!");
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) {
    return;
  }
  const { commandName } = interaction;
  commands[commandName].execute(interaction, client);
});

client.login(DISCORD_TOKEN);
