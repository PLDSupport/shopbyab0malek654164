const client = require('../../main.js');
const config = require(`../../config.json`)

const { MessageActionRow , MessageButton , MessageEmbed } = require('discord.js')

client.on("messageCreate", message => {
    if(!message.guild || message.author.bot) return;
if (message.content === `<@${client.user.id}>`) {
message.author.send({content : `> ** Hello if you need to invite me Join My server Support. **`, embeds: [
  new MessageEmbed()
  .setTitle(`**__ Bot Prefix__**`)
  .setDescription(`> ** Prefix Is : / **`)
.addField(`**> __ Use /help to see the commands __**`, `**> /help **`)
  .setColor(client.config.color)
  .setTimestamp()
  .setFooter(`Perfect Line`)
  
], components: [
  new MessageActionRow()
                .setComponents(
                 new MessageButton()
        .setLabel("Support Server")
          .setStyle("LINK")
          .setURL(client.config.server),
                  new MessageButton()
        .setLabel("Vote")
          .setStyle("LINK")
          .setURL(``) 
       ),
]})
  message.reply(`**> __Done__**`).then(msg => {
         setTimeout(() => {
    msg.delete()
}, 5000)
       
        })
  }
});