const { Client, Message, MessageEmbed } = require("discord.js");
const { MessageActionRow, MessageButton } = require('discord.js');
const { Permissions } = require('discord.js');
const { SlashCommandBuilder } = require("@discordjs/builders");
const db = require('pro.db')
const data = require('../../../data/discount.js');
const config  = require('../../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("deletediscount")
    .setDescription("deletes a discount code")
    .addStringOption(option => option.setName("name").setRequired(true).setDescription("The discount Name")),
    run : async (client, interaction) => {	
      
let color = config.color
      
                const permissions = new MessageEmbed()
      .setColor(color)
      .setTitle(`> ليس لديك صلاحيات لاستخدام الامر المطلوب `)
      
        let owner = client.config.ownerID

    if(!owner.includes(interaction.member.id))return interaction.reply({embeds: [permissions]}) 

        let cat = interaction.options.getString("name")
const db = await data.findOne({discountcode: cat})
      if(!db)return interaction.reply({content: `**Invalid Code**`, ephemeral:true})

    if(db){
          await data.deleteMany({discountcode: cat})
      interaction.reply({content:`Done Delete The Code`, embeds:[
        new MessageEmbed()
        .setTitle(config.title)
        .addField(`Done Delete This Code`, `${cat}`)
        .addField(`Amonut`, `${db.amount}`)
        .setColor(color)
      ]})
    
    }
    }
}