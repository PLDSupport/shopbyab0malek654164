const { MessageEmbed , MessageActionRow , MessageSelectMenu, MessageButton} = require('discord.js');
const client = require('../../../main.js');

const { Permissions } = require('discord.js');
const { SlashCommandBuilder } = require("@discordjs/builders");
const { DiscordModal,ModalBuilder,ModalField } = require ('discord-modal');
DiscordModal(client)
const ms = require("ms")
const db = require("pro.db")
module.exports = {
    data: new SlashCommandBuilder()
    .setName("end")
    .setDescription("to ending a room from a member")

      .addUserOption(option => option.setName("user").setRequired(true).setDescription("put the user")),
  
    run : async (client, interaction) => {

      let support = client.config.supportid
let color = client.config.color
      
      const permissions = new MessageEmbed()
      .setColor(color)
      .setTitle(`> ليس لديك صلاحيات لاستخدام الامر المطلوب `)
    if(!interaction.member.roles.cache.some((role) => role.id === support)) return interaction.reply({embeds: [permissions]})
      
let member = interaction.options.getUser("user")


let room = await db.get(`room_${member.id}`)
      if(!room)return interaction.reply({content:`**this Member Didnt Have The room **`, ephemeral:true})

      if(room){
let roomid = room.channel
  let channel = client.channels.cache.get(roomid)
      if(!channel) return interaction.reply({content: `** The Channel Not In this server **`, ephemeral:true})
        
      if(channel){
        let memberk = room.user

  await  //channel.delete().then(async d =>{
  channel.bulkDelete(100)
        
    channel.edit({
    permissionOverwrites: [{
        id: interaction.member.id,
        deny: ["SEND_MESSAGES", "VIEW_CHANNEL", "MENTION_EVERYONE", "ATTACH_FILES"]
    },{
        id: '1145081328824483911',
deny: ["VIEW_CHANNEL"]
      },{ id: interaction.guild.roles.everyone,
deny: ["SEND_MESSAGES", "VIEW_CHANNEL"]
      }
      ]
    })
      await member.send({content :`**تم انتهاء مدة الروم\nلديك 24 ساعة لتجديد الروم**`}).then(async hala => {
//let datauser = await db.get(`users_${interaction.guild.id}`)
//blet datach = await db.get(`channels_${interaction.guild.id}`)
        
//db.delete(`room_${member.id}`)
//datauser.splice(datauser.indexOf(member.id), 1);
         //   await db.set(`users_${interaction.guild.id}`, datauser);


        
//datach.splice(datach.indexOf(roomid), 1);
            //await db.set(`channels_${interaction.guild.id}`, datach)

        await interaction.reply({content:` تم انهاء الروم بنجاح  `})


        
      })
       }
      }
      }
     }