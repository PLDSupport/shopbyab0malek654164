
const { Client, Message, MessageEmbed } = require("discord.js");
const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
const { Permissions } = require('discord.js');
const { SlashCommandBuilder } = require("@discordjs/builders");
const db = require("pro.db")
const timestamp = require('discord-timestamp');
const isTimestamp = require('is-timestamp')
const ms = require('ms');
const fs = require("fs")
const moment = require('moment');
const client  = require('../../../main.js');
const config  = require('../../../config.json');

let parentcat = client.config.parent
let roleid = client.config.privaterole 
let line = client.config.lineurl
let color = client.config.color

module.exports = {
    data: new SlashCommandBuilder()
    .setName("give-room")
    .setDescription("to create private room for memper")

      .addUserOption(option => option.setName("user").setRequired(true).setDescription("put the user"))
  
.addStringOption(option => option.setName("time").setRequired(true).setDescription("The discount Name")),
  
  run : async (client, interaction) => {
      let high = client.config.high

  const permissions = new MessageEmbed()
      .setColor(color)
      .setTitle(`> ليس لديك صلاحيات لاستخدام الامر المطلوب `)
    if(!interaction.member.roles.cache.some((role) => role.id === high)) return interaction.reply({embeds: [permissions]})
    
let us = interaction.options.getUser('user');
const user = interaction.guild.members.cache.find(r => r.id == us)
      
let time = interaction.options.getString('time')

//if(!time.endsWith("y") && !time.endsWith("d"))
interaction.guild.channels.create(`✧・${user.user.username}`, {
      permissionOverwrites: [{
        id: user.user.id,
        allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "MENTION_EVERYONE", "ATTACH_FILES"]
      },{
        id: interaction.guild.roles.everyone,
deny: ["SEND_MESSAGES", "VIEW_CHANNEL"]
      },{
        id: config.member_id,
allow: ["VIEW_CHANNEL"]
      }
      ],
      type: 'text',
      parent: (parentcat)
}).then(async c => {
    
user.roles.add(roleid)
    
let embed1 = new MessageEmbed()
  .setTitle(`روم خاص جديد`)
  .setDescription(`- **Room Owner** : <@${user.user.id}>\n\n- **Create in** : <t:${Math.round(Date.now()  /1000)}:d>\n\n- **End in** : <t:${Math.floor((Date.now() + ms(time)) / 1000)}:R>`)
                .setThumbnail(interaction.guild.iconURL({dynamic:true}))
                .setTimestamp()
                .setAuthor({name:user.user.username,iconURL:user.user.avatarURL({dynamic:true})})
    .setColor(color)
c.send({embeds: [embed1]}).then(async msg_c => {
msg_c.pin().then(async d => {
  db.push(`channels_${interaction.guild.id}`, c.id)
    db.push(`users_${interaction.guild.id}`, user.user.id)

  db.set(`room_${user.user.id}`,{
    user: user.user.id, 
    channel: c.id       
  })
    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${user.user.id}> ~ ${user.user.id} `,embeds: [
    new MessageEmbed()

    .setTitle("اعطاء روم خاص")
    .addField(`تم اعطاء الشخص`, `<@${user.user.id}>`)
    .addField(`تم اعطاء بواسطة`, `<@${interaction.member.id}>`)
    .addField(`الروم`, `<#${c.id}>`)
  

    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})
  })
 })
   })
    
}
      }                                      