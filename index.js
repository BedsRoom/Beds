const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Listening to Beats')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//For uptimerobot ^

const { Client, Collection, Intents } = require("discord.js");
const { readdirSync } = require("fs");
const client = new Client({
   shards: "auto",
   intents: [Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING],
    allowedMentions: {
        parse: ["everyone", "roles", "users"],
        repliedUser: true
    },
    partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"]

});
module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
client.SlashCommands = new Collection();
client.config = require("./config.json");
client.owner = client.config.ownerID;
client.prefix = client.config.prefix;
client.embedColor = client.config.embedColor;
client.aliases = new Collection();
client.commands = new Collection();
client.categories = readdirSync("./commands/");
client.logger = require("./utils/logger.js");
client.emoji = require("./utils/emoji.json");

module.exports = client;

 require("./Structures/Event")(client)
 require("./Structures/Command")(client)
 require("./Structures/slashCommand")(client)
 require("./handler/Client")(client);



 


client.login(client.config.token); //---fake config token---//
client.login(process.env.token); //--- Use Secret ---//

