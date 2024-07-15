import { Client } from "discord.js";
import { config } from "./config";
import { commands } from "./commands";
import { deployCommands } from "./deploy-commands";

const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

client.once("ready", () => {
  console.log("Discord bot is ready! 🤖");

  client.user?.setActivity({
    name: " on zerops.io"
  })
    client.user?.setStatus("online")
});

client.on("guildCreate", async (guild: { id: any; }) => {
  await deployCommands({ guildId: guild.id });
});


client.on("interactionCreate", async (interaction: { isCommand?: any; commandName?: any; }) => {
  if (!interaction.isCommand()) {
    return;
  }
  const { commandName } = interaction;
  if (commands[commandName as keyof typeof commands]) {
    commands[commandName as keyof typeof commands].execute(interaction);
  }
});

client.login(config.DISCORD_TOKEN);