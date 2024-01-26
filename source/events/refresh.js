require('events').EventEmitter.defaultMaxListeners = Infinity;
const config = require(`../../config.json`)
const db = require('pro.db')
const {Discord, Client, MessageEmbed, MessageActionRow, MessageButton, Modal, TextInputComponent} = require("discord.js")
const data = require('../../data/code.js');

const client = new Client({intents: 7753})

client.on("ready", async () => {
}).login(process.env.token)

  client.on("interactionCreate", async i => {
  if (!i.isButton()) return;
  if (i.customId == "msg") {
let support = config.supportid
    
if(!i.member.roles.cache.some((role) => role.id === support))
return i.reply({content: `**انت لست من طاقم الادارة لتعديل المنشور**`, ephemeral: true } )
    
const modal = new Modal()
.setTitle('تعديل منشور مميز')
.setCustomId('ref')

const refresh = new TextInputComponent()
.setCustomId('refr')
.setLabel(`كود المزامنة`)
.setPlaceholder(`ادخل كود المزامنة هنا`)
.setMaxLength(4000)
.setRequired(true)
.setStyle("PARAGRAPH")
    
const us = new TextInputComponent()
.setCustomId('us')
.setLabel(`صاحب المنشور`)
.setPlaceholder(`ضع ايدي صاحب المنشور`)
.setMaxLength(4000)
.setRequired(true)
.setStyle("PARAGRAPH")
  
const ne = new TextInputComponent()
.setCustomId('ne')
.setLabel(`تعديل`)
.setPlaceholder(`ضع المنشور الجديد`)
.setMaxLength(4000)
.setRequired(true)
.setStyle("PARAGRAPH")
    
const mn = new TextInputComponent()
.setCustomId('mn')
.setLabel(`نوع المنشن`)
.setPlaceholder(`ضع اسم المنشن دون @`)
.setMaxLength(4000)
.setRequired(true)
.setStyle("PARAGRAPH")

const rows = [refresh , us, ne, mn].map(
(component) => new MessageActionRow().addComponents(component))

modal.addComponents(...rows);
i.showModal(modal);      
  }})

client.on("interactionCreate", async i => {
  if (!i.isModalSubmit()) return;
  if (i.customId == "ref") {
    
let code = i.fields.getTextInputValue('refr');
let ne = i.fields.getTextInputValue('ne');
let mn = i.fields.getTextInputValue('mn');
let us = i.fields.getTextInputValue('us');

    const cod = await data.findOne({code: code})

if (!cod) {
  return i.reply({ content: `**كود المزامنة غير صحيح يرجى التواصل مع مسؤول الادارة**`, ephemeral: true });
}
      
   if(cod){
    
  i.message.edit({content:`${ne}\nتواصل مع <@${us}>\n@${mn}`, components:[]})
  }}})
//
client.on("interactionCreate", async i => {
if (!i.isButton()) return;
if (i.customId == "msg1") {
let support = config.high
    
if(!i.member.roles.cache.some((role) => role.id === support))
return;
    
const modal = new Modal()
.setTitle('تعديل الدعم الفني')
.setCustomId('refg')

const shs = new TextInputComponent()
.setCustomId('rfrf')
.setLabel(`كود المزامنة`)
.setPlaceholder(`ادخل كود المزامنة هنا`)
.setMaxLength(4000)
.setRequired(true)
.setStyle("PARAGRAPH")

const rows = [shs].map(
(component) => new MessageActionRow().addComponents(component))

modal.addComponents(...rows);
i.showModal(modal);      
  }})

client.on("interactionCreate", async i => {
  if (!i.isModalSubmit()) return;
  if (i.customId == "refg") {
    
let code = i.fields.getTextInputValue('rfrf');

    const nsx = await data.findOne({code: code})

if (!nsx) {
  return i.reply({ content: `**كود المزامنة غير صحيح يرجى التواصل مع مسؤول الادارة**`, ephemeral: true });
}
      
   if(nsx){
    
  i.message.edit({components:[]})
   }}})