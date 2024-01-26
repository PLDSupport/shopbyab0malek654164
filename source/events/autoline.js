const client = require('../../main.js');
const { Client, Message, MessageEmbed } = require("discord.js");
const db = require("pro.db")
client.on('messageCreate', async message =>{


  if(!message.guild.me.permissions.has("ADMINISTRATOR"))return;  
    
if (!message.guild) return; 
  
if(message.author.id === client.user.id) return;
  
 let data = db.get(`channels_${message.guild.id}`)
  
 if (!data) return;  
    if (data.includes(message.channel.id)){
    let lineData = client.config.lineurl
message.channel.send({files: [lineData]});
   }
  
})

