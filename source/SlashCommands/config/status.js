const { Client, Message, MessageEmbed } = require("discord.js");
const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
const { Permissions } = require('discord.js');
const { SlashCommandBuilder } = require("@discordjs/builders");
const db = require("pro.db")
const config  = require('../../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("vipstatus")
    .setDescription("Change Your Vip Roles Status (on/off)")
    .addStringOption(option => option.setName("status").setRequired(true).setDescription("The Status (on/off)").addChoices(
        { name: 'On', value: 'On' },
        { name: 'Off', value: 'Off' },
    )),
    run : async (client, interaction) => {	

      let color = config.color
      
const permissions = new MessageEmbed()
      .setColor(color)
      .setTitle(`> ليس لديك صلاحيات لاستخدام الامر المطلوب `)
      
        let owner = client.config.ownerID

    if(!owner.includes(interaction.member.id))return interaction.reply({embeds: [permissions]}) 

      

      
        let newStatus = interaction.options.getString("status");

  const row = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
                    .setCustomId('status')
                    .setPlaceholder('اضغط هنا لـ التحديد')
          .setMinValues(1)
          .setMaxValues(1)
            .addOptions(
                {
                    label: " رتـب نـادرة" ,
                    value: '1',
                },
                {
                    label: "رومـات خـاصـة",
                    value: '2',
                }
            ),
    );
    interaction.reply({components:[row]})

client.on("interactionCreate", async interaction => {
    if (interaction.customId === "status") {
          let vale = interaction.values[0];
      if(vale === "1"){

db.set(`vipstatus_${interaction.guild.id}`, newStatus)
          
const embed = new MessageEmbed()
            .setTitle(`تغيير حالة الرتب النادرة`)
            .setDescription(' تم  تغير حالة الرتب بنجاح لـ :' + ` ${newStatus}`)
            .setColor(color)
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
    
interaction.message.edit({embeds: [embed] , components: [] , fetchReply: true});

                      
      }
    }

  
if (interaction.customId === "status") {
          let vale = interaction.values[0];
      if(vale === "2"){
  
db.set(`rooms_${interaction.guild.id}`, newStatus)

    const embed = new MessageEmbed()
            .setTitle(`تغيير حالة الرومات الخاصة`)
            .setDescription(' تم  تغير حالة الرومات بنجاح لـ :' + ` ${newStatus}`)
            .setColor(color)
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
    
interaction.message.edit({embeds: [embed] , components: [] , fetchReply: true});
        
}}
})

    }}