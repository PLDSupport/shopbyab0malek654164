require('events').EventEmitter.defaultMaxListeners = Infinity;
//const client = require('../../main.js');

const config = require(`../../config.json`)
const db = require('pro.db')
const {Discord, Client, MessageEmbed, MessageActionRow, MessageButton, Modal, TextInputComponent} = require("discord.js")
const client = new Client({intents: 7753})
const ms = require('ms');
const fs = require("fs")
const moment = require('moment');

client.on("ready", async () => {
}).login(process.env.token)

let probot = config.probotid
let adca = config.parentad
let line = config.lineurl
let color = config.color

client.on("interactionCreate", async interaction => {
    if (interaction.customId === "roomad") {
const modal = new Modal()
			.setCustomId('modalroom')
			.setTitle('اعلان روم خاص')
  
  const q1 = new TextInputComponent()
			.setCustomId('q1')
.setLabel(`الاعلان`)
  .setPlaceholder("ضع رسالة الاعلان هنا")
  .setStyle('PARAGRAPH')
      
const q2 = new TextInputComponent()
			.setCustomId('q2')
.setLabel(`اسم الروم`)
  .setPlaceholder("ضع اسم الروم هنا")
  .setStyle('PARAGRAPH')

 const rows = [q1 , q2].map(
                (component) => new MessageActionRow().addComponents(component)
            )
            modal.addComponents(...rows);
            interaction.showModal(modal);
  
       
  } 

if (!interaction.isModalSubmit()) return;
  if (interaction.customId == "modalroom") {
let q1 = interaction.fields.getTextInputValue('q1');
let q2 = interaction.fields.getTextInputValue('q2');

interaction.guild.channels.create(q2, {
      permissionOverwrites: [{
        id: interaction.guild.roles.everyone,
deny: ["SEND_MESSAGES", "VIEW_CHANNEL"]
      },{
        id: '1145081328824483911',
allow: ["VIEW_CHANNEL"]
      }
      ],
      type: 'text',
      parent: (adca)
}).then(async c => {
c.send({content: `**اعلان روم خاص\nينتهي في** : <t:${Math.floor((Date.now() + ms("3d")) / 1000)}:d>`})
 c.send({content:q1 })
 c.send({content: `**اعلان مدفوع ،  نخلي مسؤوليتنا من يلي يصير بالسيرفر
عايز مثله حياك <#1145081619657531432> **`})
c.send({files:[line]})
       await interaction.reply({content:`** تم نشر اعلانك بنجاح**`})

      let log = client.channels.cache.get(config.logbuy)
  await log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()
    .setTitle("نشر اعلان")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`نوع الاعلان`, `Privte Room`)
.addField(`اسم الروم`,`${q2}`)  
.addField(`الاعلان`, `${q1}`)
  .addField(`الروم`, `<#${c.id}>`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})
})
  }})

client.on("interactionCreate", async interaction => {
  if (interaction.customId === "roomadg") {
const modal = new Modal()
			.setCustomId('modalroomg')
			.setTitle('اعلان روم خاص مع جيف اواي')
  
  const q1 = new TextInputComponent()
			.setCustomId('q1')
.setLabel(`الاعلان`)
  .setPlaceholder("ضع رسالة الاعلان هنا")
  .setStyle('PARAGRAPH')
      
const q2 = new TextInputComponent()
			.setCustomId('q2')
.setLabel(`اسم الروم`)
  .setPlaceholder("ضع اسم الروم هنا")
  .setStyle('PARAGRAPH')

 const rows = [q1 , q2].map(
                (component) => new MessageActionRow().addComponents(component)
            )
            modal.addComponents(...rows);
            interaction.showModal(modal);
  
       
  } 

if (!interaction.isModalSubmit()) return;
  if (interaction.customId == "modalroomg") {
let q1 = interaction.fields.getTextInputValue('q1');
let q2 = interaction.fields.getTextInputValue('q2');

interaction.guild.channels.create(q2, {
      permissionOverwrites: [{
        id: interaction.guild.roles.everyone,
deny: ["SEND_MESSAGES", "VIEW_CHANNEL"]
      },{
        id: '1145081328824483911',
allow: ["VIEW_CHANNEL"]
      }
      ],
      type: 'text',
      parent: (adca)
}).then(async c => {
c.send({content: `**اعلان روم خاص\nينتهي في** : <t:${Math.floor((Date.now() + ms("3d")) / 1000)}:d>`})
 c.send({content:q1 })
c.send({content: `!start 1d 1 test`})
 c.send({content: `**اعلان مدفوع ،  نخلي مسؤوليتنا من يلي يصير بالسيرفر
عايز مثله حياك <#1145081619657531432> **`})
c.send({files:[line]})
       await interaction.reply({content:`** تم نشر اعلانك بنجاح**`})

      let log = client.channels.cache.get(config.logbuy)
  await log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()
    .setTitle("نشر اعلان")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`نوع الاعلان`, `Privte Room Giveaway`)
.addField(`اسم الروم`,`${q2}`)  
.addField(`الاعلان`, `${q1}`)
  .addField(`الروم`, `<#${c.id}>`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})
})
}})

client.on("interactionCreate", async interaction => {
    if (interaction.customId === "discount_roomad") {
const modal = new Modal()
			.setCustomId('modalroom_d')
			.setTitle('اعلان روم خاص')
  
  const q1 = new TextInputComponent()
			.setCustomId('q1')
.setLabel(`الاعلان`)
  .setPlaceholder("ضع رسالة الاعلان هنا")
  .setStyle('PARAGRAPH')
      
const q2 = new TextInputComponent()
			.setCustomId('q2')
.setLabel(`اسم الروم`)
  .setPlaceholder("ضع اسم الروم هنا")
  .setStyle('PARAGRAPH')

 const rows = [q1 , q2].map(
                (component) => new MessageActionRow().addComponents(component)
            )
            modal.addComponents(...rows);
            interaction.showModal(modal);
  
       
  } 

if (!interaction.isModalSubmit()) return;
  if (interaction.customId == "modalroom_d") {
let q1 = interaction.fields.getTextInputValue('q1');
let q2 = interaction.fields.getTextInputValue('q2');

interaction.guild.channels.create(q2, {
      permissionOverwrites: [{
        id: interaction.guild.roles.everyone,
deny: ["SEND_MESSAGES", "VIEW_CHANNEL"]
      },{
        id: '1145081328824483911',
allow: ["VIEW_CHANNEL"]
      }
      ],
      type: 'text',
      parent: (adca)
}).then(async c => {
c.send({content: `**اعلان روم خاص\nينتهي في** : <t:${Math.floor((Date.now() + ms("3d")) / 1000)}:d>`})
 c.send({content:q1 })
 c.send({content: `**اعلان مدفوع ،  نخلي مسؤوليتنا من يلي يصير بالسيرفر
عايز مثله حياك <#1145081619657531432> **`})
c.send({files:[line]})
       await interaction.reply({content:`** تم نشر اعلانك بنجاح**`})

      let log = client.channels.cache.get(config.logbuy)
  await log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()
    .setTitle("نشر اعلان")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`نوع الاعلان`, `Privte Room`)
.addField(`اسم الروم`,`${q2}`)  
.addField(`الاعلان`, `${q1}`)
  .addField(`الروم`, `<#${c.id}>`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})
})
  }})