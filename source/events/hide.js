const client = require('../../main.js')
const {mainGuildID , channels} = require('../../config.json')
const data = require('../../config.json')
const { MessageActionRow,MessageButton,MessageEmbed,MessageSelectMenu,Permissions , Discord} = require('discord.js');

var cron = require('node-cron');

cron.schedule('0 20 * * *', async() => {
//cron.schedule('*/1 * * * *', async() => {
    console.log('Close')
  
    let firstChannel = client.channels.cache.get(channels[0])
    let guild = firstChannel.guild
    let ROLE = guild.roles.cache.find(r => r.id === "1145081328824483911")
  if(!ROLE) return client.channels.cache.get(channels[0]).send({content: "Role not found!" })
  
        for(let i = 0; i < channels.length; i++){
            let channel = client.channels.cache.get(channels[i])
            channel.permissionOverwrites.edit(ROLE , {
                VIEW_CHANNEL: false
            })
        
          
            // bulk delete any message in the channel
           await channel.messages.fetch({ limit: 100 }).then(messages => {
                channel.bulkDelete(messages)
            })
            .catch(err => {
                console.log(err)
            })

            try {
                // check if there any message in the channel
                await channel.messages.fetch({ limit: 100 })
                .then(messages => {
                    if(messages.size < 0){
                        return;
                    } else {
                        channel.bulkDelete(messages)
                    }
                })
            } catch (error) {
                console.log(error)
                
            }
        }
                let row = new MessageActionRow()
   	.addComponents(   new MessageButton()
        .setCustomId(`close-rooms`)
        .setLabel("موعد الفتح")
        .setEmoji("🕙")
        .setStyle('SECONDARY')
      );
  client.channels.cache.get("1145081547335143494").send({content:`تم غلق الرومات`,components: []})
client.channels.cache.get("1145081547335143494").send({files:[data.lineurl],components: [row]})
  
}, {
  scheduled: true,
  timezone: "UTC"
});