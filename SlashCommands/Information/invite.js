const { MessageEmbed, CommandInteraction, Client, MessageButton, MessageActionRow } = require("discord.js")

module.exports = {
    name: "invite",
    description: "get my invite link",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        await interaction.deferReply({
            ephemeral: false
        });

           
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
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.gg/VyqpZRE7np")
			);

          const mainPage = new MessageEmbed()
            .setAuthor('BedsRadio', 'https://media.discordapp.net/attachments/905563084356214854/905563143097438228/IMG_20211018_230104_424.jpg')
            .setThumbnail('https://media.discordapp.net/attachments/905563084356214854/905563143097438228/IMG_20211018_230104_424.jpg')
             .setColor('#303236')
            .addField('invite BedsRadio', `[Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot)`, true)
           await interaction.followUp({embeds: [mainPage], components: [row]})
    }
}