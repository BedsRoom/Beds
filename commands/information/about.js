const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "about",
    category: "Information",
    aliases: [ "botinfo" ],
    description: "See description about this project",
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
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
			new MessageButton()
    .setLabel("Website")
    .setStyle("LINK")
    .setURL("https://www.bedsroom.ml"),
    new MessageButton()
    .setLabel("Community Server")
    .setStyle("LINK")
    .setURL("https://discord.gg/VyqpZRE7np")
			);

      const mainPage = new MessageEmbed()
            .setAuthor('BedsRadio', 'https://media.discordapp.net/attachments/905563084356214854/905563143097438228/IMG_20211018_230104_424.jpg')
            .setThumbnail('https://media.discordapp.net/attachments/905563084356214854/905563143097438228/IMG_20211018_230104_424.jpg')
            .setColor('#303236')
            .addField('Creator', '[BedsRoom](https://www.bedsroom.ml)', true)
            .addField('Organization', '[BedsRoom](https://www.bedsroom.ml)', true)
            .addField('Repository (Maybe)', '[Here](https://github.com/bedsroom)', true)
            .addField('\u200b',
                `[BedsRadio](https://github.com/bedsroom) is [Bedsroom](https://github.com/bedsroom)s bot created by him. more info soon`
            )
        return message.channel.send({embeds: [mainPage], components: [row]});
    }
}
