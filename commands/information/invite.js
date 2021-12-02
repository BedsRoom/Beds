const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    category: "Information",
    aliases: [ "addme" ],
    description: "invite BedsRadio",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
         
         
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`),
			new MessageButton()
    .setLabel("Website")
    .setStyle("LINK")
    .setURL("https://www.bedsroom.ml"),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.gg/VyqpZRE7np")
			);

          const mainPage = new MessageEmbed()
            .setAuthor('BedsRadio', 'https://media.discordapp.net/attachments/905563084356214854/905563143097438228/IMG_20211018_230104_424.jpg')
            .setThumbnail('https://media.discordapp.net/attachments/905563084356214854/905563143097438228/IMG_20211018_230104_424.jpg')
             .setColor('#303236')
            .addField('invite BedsRadio', `[Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`, true)
           message.channel.send({embeds: [mainPage], components: [row]})
    }
}