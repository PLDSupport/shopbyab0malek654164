const { Client, Message, MessageEmbed } = require("discord.js");
const { MessageActionRow, MessageButton } = require('discord.js');
const { Permissions } = require('discord.js');
const { SlashCommandBuilder } = require("@discordjs/builders");
const db = require('pro.db')
const data = require('../../../data/discount.js');
const config  = require('../../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("adddiscount")
    .setDescription("adds a new discountcode to the store")
    .addStringOption(option => option.setName("name").setRequired(true).setDescription("The Code Name"))
    .addStringOption(option => option.setName("amount").setRequired(true).setDescription("amount to make a discount ")),
    run : async (client, interaction) => {	
      let owner = client.config.ownerID
let color = config.color

      
                const permissions = new MessageEmbed()
      .setColor(color)
      .setTitle(`> ليس لديك صلاحيات لاستخدام الامر المطلوب `)
      
        if(!owner.includes(interaction.member.id))return interaction.reply({embeds: [permissions]}) 
      
        let newCategory = interaction.options.getString("name")
        let catDesc = interaction.options.getString("amount");

const guild = await data.findOne({discountcode : newCategory })
      
if(!guild){
  await new data({
   guild: interaction.guild.id,
  discountcode : `${newCategory}` , 
  amount : `${catDesc}`
  }).save()
  await interaction.reply({content: `Done Add A New Discount Code`, embeds: [
    new MessageEmbed()
   .setTitle(config.title)
  .addField(`Discount Code`, `${newCategory}`)
.addField(`Discount Amount`, `${catDesc}` + `%`)
    .setColor(color)
  ] ,  })
}
if(guild)return interaction.reply({content:`This Code Already Add`, ephemeral:true})
     }
              }