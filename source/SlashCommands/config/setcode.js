const { Client, Message, MessageEmbed } = require("discord.js");
const { MessageActionRow, MessageButton } = require('discord.js');
const { Permissions } = require('discord.js');
const { SlashCommandBuilder } = require("@discordjs/builders");
const db = require('pro.db')
const data = require('../../../data/code.js');
const config  = require('../../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("setcode")
    .setDescription("set code")
    .addStringOption(option => option.setName("name").setRequired(true).setDescription("The Code Name")),
    run : async (client, interaction) => {	
      let owner = client.config.ownerID
let color = config.color

      
                const permissions = new MessageEmbed()
      .setColor(color)
      .setTitle(`> ليس لديك صلاحيات لاستخدام الامر المطلوب `)
      
        if(!owner.includes(interaction.member.id))return interaction.reply({embeds: [permissions]}) 
      
        let newCategory = interaction.options.getString("name")

const guild = await data.findOne({code : newCategory })
      
if(!guild){
  await new data({
   guild: interaction.guild.id,
  code : `${newCategory}`
  }).save()
  await interaction.reply({content: `Done Add A Code`, embeds: [
    new MessageEmbed()
   .setTitle(config.title)
  .addField(`Code`, `${newCategory}`)
    .setColor(color)
  ] ,  })
}
if(guild)return interaction.reply({content:`This Code Already Add`, ephemeral:true})
     }
              }