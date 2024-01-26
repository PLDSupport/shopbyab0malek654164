const express = require('express');
const app = express();
app.listen(() => console.log(('Besr Host S Help you every time ↗️ ')));
app.use('/ping', (req, res) => {  res.send(new Date());
});

app.listen(3000, () => {
  console.log('Bot Started !');
});

const { Client, Collection, Intents,MessageActionRow,MessageButton,MessageEmbed,MessageSelectMenu,Permissions , Discord, EmbedBuilder, Modal, TextInputComponent } = require('discord.js');
const fs = require('fs')
const inlinereply = require('discord-reply');
const probot = require("probot-tax");
const data = require("./config.json")
const mainGuildID = require("./config.json")
const coolDown = new Set()    
const dotenv = require('dotenv')
const db = require("pro.db")
const mongoose = require("mongoose")
dotenv.config()
let prefix = "+"
let sug = "1185911705432240178";

let order = "1185911530672369735";
let cmd = "1185911680346116107";
// the client
  let client = new Client({ partials: ["MESSAGE", "CHANNEL", "REACTION "], repliedUser: false, intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING] });

module.exports = client

	// Commands && SlashCommands && Events Handling and Initializing The Whole Project..

	client.config = data
	client.commands = new Collection();
	client.aliases = new Collection();
	client.events = new Collection();
	client.slashCommands = new Collection();
	client.queue = new Map();
	require(`./source/handlers/cmdHandler/command.js`)(client);
	require(`./source/handlers/slashHandler/slash.js`)(client);
	require(`./source/handlers/eventHandler/events.js`)(client);
	
// handling errors 
process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});
process.on('typeError', error => {
	console.error('Unhandled type rejection:', error);
});



// setTimeout(() => {
// 	if (!client || !client.user) {
// 		console.log("Client Not Login, Process Kill")
// 		process.kill(1);
// 	} else {
// 		console.log("login Auto kill 1 ")
// 	}
// }, 1 * 200 * 20);



const chalk = import('chalk');

client.on('ready', () =>{
   console.log("\x1b[31m", `BotName: ${client.user.tag}\nBotPrefix: / `
            );
  console.log("\x1b[32m", `Servers Count : ${client.guilds.cache.size}`)
  console.log(`Users Count : ${client.guilds.cache
.reduce((a, b) => a + b.memberCount, 0)
.toLocaleString()}`)
  client.user.setActivity(client. config.Activity, {type: client.config.ActivityType})
})

mongoose.connect(process.env.mongodb).then(() => console.log("\x1b[36m", `Data Connected `));

client.login(process.env.token);

client.on("interactionCreate", async (interaction) => {
if(interaction.customId === "clos"){
      
    if (interaction.message && interaction.message.delete) {
  await interaction.message.delete();
    }
      interaction.channel.send({content:`$close` })
    interaction.channel.send({content:`$transcript` })
  interaction.channel.send({content:`$delete` })
    }
  if(interaction.customId === "open-rooms"){
    interaction.reply({content:`موعد غلق الرومات الساعة 2:00 مساء بتوقيت مصر `,ephemeral:true})
  }
  if(interaction.customId === "close-rooms"){
    interaction.reply({content:`موعد فتح الرومات الساعه 10:00 صباح بتوقيت مصر`,ephemeral:true})
  }
      })

const donesendpost = new MessageEmbed()
             .setColor(data.color)
    .setDescription(`**تم ارسال منشورك في <#1156713722287489236>**`)

const permissions = new MessageEmbed()
      .setColor(data.color)
      .setTitle(`> ليس لديك صلاحيات لاستخدام الامر المطلوب `)

client.on('messageCreate', message => { 
  if (message.content === (`خط`)) {
    
message.channel.send({files:[data.lineurl]})
  message.delete()
        }})

client.on("messageCreate", async message => {

  if (sug.includes(message.channel.id)) {
  if(message.author.bot)return;
  message.react("✅")
  message.react("❎")
message.reply({files:[data.lineurl]})
}})

client.on('messageCreate', async message => {       
  if (order.includes(message.channel.id)) {
   if(message.author.bot)return;
    message.delete(); 
  }})
client.on('messageCreate', async message => {       
  if (cmd.includes(message.channel.id)) {
   if(message.author.bot)return;
    message.delete(); 
  }})

client.on("messageCreate", async (msg) => {
  if (msg.channel.id === "1156713057574191104" && !msg.author.bot) { 
    try {
        msg.delete(); 
      const messageEmbed = new MessageEmbed()
        .setColor(data.color)
        .setAuthor(msg.author.username , msg.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`> **${msg.content}**`)
        .setThumbnail(msg.guild.iconURL({ dynamic: true }))
        .setTimestamp();
      const sentMessage = await msg.channel.send({ embeds: [messageEmbed] });
  await msg.channel.send({files:[data.lineurl]});
    } catch (error) {
      console.error(error);
    }
  }
});

client.on("messageCreate" , async em => {
    
const allowedRoles = ['1156713057574191104'];

  if (em.content.startsWith('+embed') && em.guild) {
    const member = em.member;
  
let msg = em.content.split(" ").slice(1).join(" ")
    
 if (member && member.roles.cache.some(role => allowedRoles.includes(role.id))) { 
   
  em.delete(); 
 if(!msg)return em.reply(`> ** Put Your Message**`)
  let attach = em.attachments.first()
  if (attach){
let attachmd = new MessageEmbed()
  .setColor(data.color)
  .setDescription(msg)   .setImage(`${attach.url}`)
    .setFooter(data.foot)
.setAuthor(em.guild.name , em.guild.iconURL({ dynamic: true }))
.setThumbnail(em.guild.iconURL({ dynamic: true }))    
   em.channel.send({embeds: [attachmd]})
em.channel.send({files:[data.lineurl]});
    
  } else {
  let embed = new MessageEmbed()
  .setColor(data.color)
.setDescription(msg)
.setFooter(data.foot)
.setAuthor(em.guild.name , em.guild.iconURL({ dynamic: true }))
.setThumbnail(em.guild.iconURL({ dynamic: true }))
    
    await em.channel.send({embeds: [embed]})
em.channel.send({files:[data.lineurl]});
   } 
 
   }
 }})
  
client.on('messageCreate', async message => {
  const allowedRoles = ['1156713154798174340', '1156713092722462730', '1145081258687344761'];

  if (message.content.startsWith('+come') && message.guild) {
    const member = message.member;
    
    if (member && member.roles.cache.some(role => allowedRoles.includes(role.id))) {
      const args = message.content.slice(6).trim().split(/ +/);
      
      const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
      if (!user) {
        return message.channel.send('*mention a user*')
      }
      
  await user.send({content: `⚠️ { ${user} } { <#${message.channel.id}> }** تم طلبك هنا من فضلك تعال بسرعة ⚠️**`})
message.channel.send(`> **Done Send Private to** ${user} :tools:



> **Please Wait Come Member ** :tools:
`);
 } }})

client.on("messageCreate", async (message) => {
  if (message.content.startsWith("+منشور")) {
    const roleId = data.high;
    if (!message.member.roles.cache.has(roleId)) {
      return message.reply({embeds: [permissions]});
    }
        const args = message.content.slice("-منشور".length).trim().split(/ +/);
    const mention = args.shift();
    const content = args.join(" ")

    if (!mention) {
      return message.reply("**منشن شخص**")
    } 
    if (!content) {
      return message.reply("** ضع المنشور مع المنشن**")
    } 
    const mentionedUser = message.mentions.users.first();
    if (!mentionedUser) {
      return message.reply("**المنشن غير صحيح**");
    }

    const postEmbed = new MessageEmbed()
      .setColor(data.color)
      .setTitle("منشور جديد")
      .setDescription(content)
      .setFooter(`Contact: ${mentionedUser.tag}`, mentionedUser.displayAvatarURL({ dynamic: true }));

    const hereButton = new MessageButton()
      .setLabel("Here")
      .setStyle("SECONDARY")
      .setCustomId("hereButton");

    const everyoneButton = new MessageButton()
      .setLabel("Everyone")
      .setStyle("SECONDARY")
      .setCustomId("everyoneButton");
  
const cancelButton = new MessageButton()
.setLabel("Cancel")
.setStyle("DANGER")
.setCustomId("cancelButton");
    
    const row = new MessageActionRow().addComponents(hereButton, everyoneButton, cancelButton);

    const sentMessage = await message.channel.send({ embeds: [postEmbed], components: [row] });

    const filter = (interaction) => interaction.user.id === message.author.id;
    const collector = sentMessage.createMessageComponentCollector({ filter, time: 15000 });

    collector.on("collect", async (interaction) => {
      if (interaction.customId === "hereButton") {

let msg = new MessageActionRow()
.addComponents(new MessageButton()
.setCustomId(`msg`)
//.setLabel("")
.setEmoji("<:AS_Recycling:1155147875441975450> ")
.setStyle('SECONDARY'));
        
        const mentionHere = "@here";
        const contentHere = `${content}\n@here\nتواصل مع ${mention}`;
        await message.client.channels.cache.get(data.shareroom).send({content: `${contentHere}`, components: [msg]});
        await interaction.deferUpdate();
        return interaction.editReply({embeds: [donesendpost],components:[] });
      } else if (interaction.customId === "everyoneButton") {
let msg = new MessageActionRow()
.addComponents(new MessageButton()
.setCustomId(`msg`)
//.setLabel("")
.setEmoji("<:AS_Recycling:1155147875441975450> ")
.setStyle('SECONDARY'));
        
        const mentionEveryone = "@everyone";
        const contentEveryone = `${content}\n@everyone\nتواصلوا مع ${mention}`;
        await message.client.channels.cache.get(data.shareroom).send({content: `${contentEveryone}`, components: [msg]});
       await interaction.deferUpdate();
        return interaction.editReply({embeds: [donesendpost],components:[] });
      } else if (interaction.customId === "cancelButton") {
        if (interaction.message && interaction.message.delete) {
  await interaction.message.delete();
}
      }
});
        }
      })

const CategoryID = data.buycategoryId

client.on("channelCreate", async channel => {
if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && channel.parent.id === CategoryID) {

await new Promise(r => setTimeout(r, 1000))

channel.bulkDelete(100)
  
//await new Promise(r => setTimeout(r, 3000))
  let row = new MessageActionRow()
   	.addComponents(   new MessageButton()
        .setCustomId(`clos`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER'))
  	.addComponents(   new MessageButton()
        .setCustomId(`claim`)
        .setLabel("Claim Ticket")
  .setEmoji("<:AS_Admin:1155048055494676500> ")
        .setStyle('SECONDARY')
      )
  
  
  const support = new MessageEmbed()
       .setColor(data.color)
        .setAuthor(channel.guild.name , channel.guild.iconURL({ dynamic: true }))
        .setDescription(`# - ${data.title} Rules Support・قوانين الدعم الفني

- **ممنوع الاستهبال في الدعم الفني ** 
** __ You can't joking in the ticket __ **

- ** ممنوع تفتح تكت لغرض الاستهبال ** 
** __  You can't open the Ticket to joke __** 

- ** ممنوع الازعاج بالمنشن (في حال لم يتم الرد ، يسمح لك منشن الدعم الفني مره واحده فقط ** 
** لرتبة <@&1145081258687344761> **
** __ You can't disturb others with mentioning them , You can mention the support for once __ **

- ** ممنوع طرح الأسئلة الي ما تخص السيرفر ك طلب كرديت و الخ . .**
** __ You can't ask questions what's not connected with server __ **


** يمكنك حل جميع المشاكل يلي تواجهك في السيرفر عن طريق الدعم الفني**
** __ You can Solve all of  your problems in the server in ticket for support __**`)
  .setImage(``)    
    .setThumbnail(channel.guild.iconURL({ dynamic: true }))
        //.setTimestamp();
      .setFooter({text : `${data.foot}`})
  
channel.send({ embeds: [support], components: [row] });

channel.send({ content: `**لشراء ( " رتبة " , منشور مميز " , " روم خاص " )
قم بكتابة امر
> +buy **` });

  
}
});
    

client.on('messageCreate', async message => {
  const allowedRoles = ['1185911041595547689'];

   if (message.content.startsWith(prefix +'sendrules') && message.guild) {
    const member = message.member;
    
    if (member && member.roles.cache.some(role => allowedRoles.includes(role.id))) {
      
let msg = new MessageActionRow()
.addComponents(new MessageButton()
.setCustomId(`msg1`)
.setEmoji("<:AS_Recycling:1155147875441975450> ")
.setStyle('SECONDARY'))
   
   let sendsupport = new MessageEmbed()
        .setColor(data.color)
        .setAuthor(message.guild.name , message.guild.iconURL({ dynamic: true }))
        .setDescription(`# - ${data.title} Rules Support・قوانين الدعم الفني

- **ممنوع الاستهبال في الدعم الفني ** 
** __ You can't joking in the ticket __ **

- ** ممنوع تفتح تكت لغرض الاستهبال ** 
** __  You can't open the Ticket to joke __** 

- ** ممنوع الازعاج بالمنشن (في حال لم يتم الرد ، يسمح لك منشن الدعم الفني مره واحده فقط ** 
** لرتبة <@&1156713154798174340> **
** __ You can't disturb others with mentioning them , You can mention the support for once __ **

- ** ممنوع طرح الأسئلة الي ما تخص السيرفر ك طلب كرديت و الخ . .**
** __ You can't ask questions what's not connected with server __ **


** يمكنك حل جميع المشاكل يلي تواجهك في السيرفر عن طريق الدعم الفني**
** __ You can Solve all of  your problems in the server in ticket for support __**`)
  .setImage(``)    
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
        //.setTimestamp();
      .setFooter({text : `${data.foot}`})
      
   message.channel.send({ embeds: [sendsupport], components: [msg] });
  }}})




let channel_post = data.shareroom

client.on('messageCreate', async message => {
  if (message.channel.id === channel_post &&
      (message.content.includes('@here') || message.content.includes('@everyone'))) {
    
    message.channel.send({content:`**منشور مدفوع ،  نخلي مسؤوليتنا من يلي يصير بينكم
عايز مثله حياك <#1156713855511183450> **`});
    
    await new Promise(r => setTimeout(r, 1000))
    
    await message.channel.send({files:[data.lineurl]});
  }
});

channel_ads = data.adsroom

client.on('messageCreate', async message => {
  if (message.channel.id === channel_ads &&
      (message.content.includes('@here') || message.content.includes('@everyone'))) {
    
    message.channel.send({content:`**اعلان مدفوع ،  نخلي مسؤوليتنا من يلي يصير بالسيرفر
عايز مثله حياك <#1156713855511183450> `});
    
    await new Promise(r => setTimeout(r, 1000))
    
    await message.channel.send({files:[data.lineurl]});
  }
});

channel_ad = data.giftroom

client.on('messageCreate', async message => {
  if (message.channel.id === channel_ad &&
      (message.content.includes('@here') || message.content.includes('@everyone'))) {
    await new Promise(r => setTimeout(r, 1500))
   message.channel.send({content:`**اعلان مدفوع ،  نخلي مسؤوليتنا من يلي يصير بالسيرفر
عايز مثله حياك <#1156713855511183450>**`});
    
 message.channel.send({files:[data.lineurl]});
  }
});



client.on('messageCreate', async mesg => {
  if (mesg.content == `+close`) {
    let row = new MessageActionRow()
      .addComponents(new MessageButton()
        .setCustomId(`close-rooms`)
        .setLabel("موعد الفتح")
        .setEmoji("🕙")
        .setStyle('SECONDARY')
      );

    if (!mesg.member.roles.cache.find((role) => role.id === '1185911041595547689')) // ايدي رول الي يقدر يتحكم
      return mesg.reply({ embeds: [permissions] });

    let men = mesg.guild.roles.cache.find(role => role.id === '1185911120649789470'); // ايدي رول الممبر
    if (!men) return;

    let channelsToClose = [
      '1185911487701721198', '1185911494504890458', '1185911495847059597',
      '1185911511835754586', '1185911510749433967', '1185911509667299388',
      '1185911502104956968', '1185911503463911455', '1185911517913297010',
      '1185911486514733097', '1185911485176746045', '1185911478784639036',
      '1185911477736046682', '1185911471880802384', '1185911470253416540',
      '1185911464482058250'
    ];

    channelsToClose.forEach(channelId => {
      let channel = client.channels.cache.get(channelId);
      if (channel) {
        channel.permissionOverwrites.create(men, { 'VIEW_CHANNEL': false });
        channel.bulkDelete(100, true);
      }
    });

    mesg.reply({ content: `__**Closed**__ ⛔️` });
    let news = client.channels.cache.get(`1185911463144067173`); // ايدي الروم الي ينشر فيه حالة النشر
    news.bulkDelete(100, true);
    await news.send({ content: `تم غلق الرومات` });
    await news.send({ files: [data.lineurl], components: [row] }); // رابط الخط
  }
});

client.on('messageCreate', async mesg => {
  if (mesg.content == `+open`) {
    let row = new MessageActionRow()
      .addComponents(new MessageButton()
        .setCustomId(`open-rooms`)
        .setLabel("موعد الإغلاق")
        .setEmoji("🔄")
        .setStyle('SECONDARY')
      );

    if (!mesg.member.roles.cache.find((role) => role.id === '1185911041595547689')) // ايدي رول الي يقدر يتحكم
      return mesg.reply({ embeds: [permissions] });

    let men = mesg.guild.roles.cache.find(role => role.id === '1185911120649789470'); // ايدي رول الممبر
    if (!men) return;

    let channelsToOpen = [
      '1185911487701721198', '1185911494504890458', '1185911495847059597',
      '1185911511835754586', '1185911510749433967', '1185911509667299388',
      '1185911502104956968', '1185911503463911455', '1185911517913297010',
      '1185911486514733097', '1185911485176746045', '1185911478784639036',
      '1185911477736046682', '1185911471880802384', '1185911470253416540',
      '1185911464482058250'
    ];

    channelsToOpen.forEach(channelId => {
      let channel = client.channels.cache.get(channelId);
      if (channel) {
        channel.permissionOverwrites.create(men, { 'VIEW_CHANNEL': true });
        channel.bulkDelete(100, true);
      }
    });

    mesg.reply({ content: `__**Opened**__ ✅` });
    let news = client.channels.cache.get(`1185911463144067173`); // ايدي الروم الي ينشر فيه حالة النشر
    news.bulkDelete(100, true);
    await news.send({ content: `تم فتح الرومات` });
    await news.send({ files: [data.lineurl], components: [row] }); // رابط الخط
  }
});

const timestamp = require('discord-timestamp');
const moment = require('moment');
let support = client.config.supportid
client.on("interactionCreate", async interaction => {
  if (interaction.customId === "claim"){
//فحص الشخص 
  let support = client.config.supportid
    
  if (!interaction.member.roles.cache.has(support)) {
    return interaction.reply({ content: `ليس لديك صلاحيات لاستخدام هذا الأمر` });
}
let row = new MessageActionRow()
  .addComponents(   
    new MessageButton()
        .setCustomId(`clos`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER'))
			.addComponents(
    new MessageButton()
        .setCustomId(`unclaim`)
        .setLabel("UnCliam")
        .setEmoji("➖")
        .setStyle('DANGER'))
const wwwee = new MessageEmbed()
  .setColor('RED')
  .setAuthor(interaction.guild.name , interaction.guild.iconURL({ dynamic: true }))
  .setTitle('Rules Support・قوانين الدعم الفني')
  .setDescription(``)
.setImage(``) .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
        //.setTimestamp();
.setFooter({text : `Best Host S`})
  

await interaction.message.edit({embeds:[wwwee], components:[row]}).then(async x => {
  const www = new MessageEmbed()

  .setDescription(`**تم استلام التذكرة بواسطة <@${interaction.member.id}>**`)
  .setColor('GREEN')
  await interaction.message.reply({embeds:[www], components:[]})
  
 let owner = interaction.member.id

db.set(`ownerticket_${interaction.channel.id}`, owner)
  
let high = client.config.highroleId
  
let point = db.get(`points_${interaction.guild.id}`);
let ary = {
  user: `${interaction.member.id}`,
  points: 1
};

if (!point) {
  db.set(`points_${interaction.guild.id}`, [ary]);
} else {
  let found = point.find(x => x.user === interaction.member.id);
  if (found) {
    found.points += 1; // Increment the points by 1
    point[point.indexOf(found)] = found;
  } else {
    point.push(ary); // If user not found, add them with 1 point
  }
  db.set(`points_${interaction.guild.id}`, point);



    
  }

})
  
   } 
})
////leave it 

client.on("interactionCreate", async interaction => {
  if (!interaction.member.roles.cache.has(support)) {
    return interaction.reply({ content: `ليس لديك صلاحيات لاستخدام هذا الأمر` });
}
  if (interaction.customId === "unclaim"){
//فحص الشخص 
    let row = new MessageActionRow()
   	.addComponents(   new MessageButton()
        .setCustomId(`clos`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER'))
  	.addComponents(   new MessageButton()
        .setCustomId(`claim`)
        .setLabel("Claim Ticket")
  .setEmoji("<:AS_Admin:1155048055494676500> ")
        .setStyle('SECONDARY')
      )
    
  let member = db.get(`ownerticket_${interaction.channel.id}`)
      
    
    if(!member){

      
      await interaction.reply({content:`لم يتم العثور على صاحب التكت `, ephemeral:true }).then(async aa=>{


   const hello =  new MessageEmbed()
  
  .setColor(data.color)
        .setAuthor(interaction.guild.name , interaction.guild.iconURL({ dynamic: true }))
        .setTitle('# - Rules Support・قوانين الدعم الفني')
        .setDescription(`
- **ممنوع الاستهبال في الدعم الفني ** 
** __ You can't joking in the ticket __ **

- ** ممنوع تفتح تكت لغرض الاستهبال ** 
** __  You can't open the Ticket to joke __** 

- ** ممنوع الازعاج بالمنشن (في حال لم يتم الرد ، يسمح لك منشن الدعم الفني مره واحده فقط ** 
** لرتبة <@&1156713154798174340> **
** __ You can't disturb others with mentioning them , You can mention the support for once __ **

- ** ممنوع طرح الأسئلة الي ما تخص السيرفر ك طلب كرديت و الخ . .**
** __ You can't ask questions what's not connected with server __ **


** يمكنك حل جميع المشاكل يلي تواجهك في السيرفر عن طريق الدعم الفني**
** __ You can Solve all of  your problems in the server in ticket for support __**`)
  .setImage(`https://cdn.discordapp.com/attachments/1156713713613684877/1157464090114015282/Untitled386_20230930023752.png?ex=6518b3ef&is=6517626f&hm=4cc404ca40aed8cb90030033485222c7c93b15e39467226febea75b0092d561e&`)    
    .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
        //.setTimestamp();
      .setFooter({text : `Best Host S`})

  
      await interaction.message.edit({embeds:[hello], components:[row]})

   let support = client.config.supportId
        let ch = interaction.channel
    
    
        
       })
    }
    if(member){
if(!member.includes(interaction.member.id))return interaction.reply({content:`** انت لست مسؤول التذكرة لعدم الاستلام**`, ephemeral:true })

    


const hello2 = new MessageEmbed()
  
.setColor('RED')

.setAuthor(interaction.guild.name , interaction.guild.iconURL({ dynamic: true }))

         .setTitle('# - Rules Support・قوانين الدعم الفني')
      .setDescription(`
- **ممنوع الاستهبال في الدعم الفني ** 
** __ You can't joking in the ticket __ **

- ** ممنوع تفتح تكت لغرض الاستهبال ** 
** __  You can't open the Ticket to joke __** 

- ** ممنوع الازعاج بالمنشن (في حال لم يتم الرد ، يسمح لك منشن الدعم الفني مره واحده فقط ** 
** لرتبة <@&1156713154798174340> **
** __ You can't disturb others with mentioning them , You can mention the support for once __ **

- ** ممنوع طرح الأسئلة الي ما تخص السيرفر ك طلب كرديت و الخ . .**
** __ You can't ask questions what's not connected with server __ **


** يمكنك حل جميع المشاكل يلي تواجهك في السيرفر عن طريق الدعم الفني**
** __ You can Solve all of  your problems in the server in ticket for support __**`)
.setImage(`https://cdn.discordapp.com/attachments/1156713713613684877/1157464090114015282/Untitled386_20230930023752.png?ex=6518b3ef&is=6517626f&hm=4cc404ca40aed8cb90030033485222c7c93b15e39467226febea75b0092d561e&`) .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
      //.setTimestamp();
    .setFooter({text : `Best Host S`})


await interaction.message.edit({embeds:[hello2], components:[row]
                        }).then(async x => {


  let support = client.config.supportId
let ch = interaction.channel  
  
  ch.setName("ticket-unclaimed")



let point = db.get(`points_${interaction.guild.id}`);
let ary = {
  user: `${interaction.member.id}`,
  points: 1
};

if (!point) {
  db.set(`points_${interaction.guild.id}`, [ary]);
} else {
  let found = point.find(x => x.user === interaction.member.id);
  if (found) {
    found.points -= 1; // Increment the points by 1
    point[point.indexOf(found)] = found;
  } else {
    point.push(ary); // If user not found, add them with 1 point
  }
  db.set(`points_${interaction.guild.id}`, point);



    
}
  db.delete(`ownerticket_${interaction.channel.id}`)
                        })
    }
    
   } 
                                 })

//////

client.on("messageCreate", async message => {
  if(message.content.startsWith(prefix + "ledarbord")){

    let high = client.config.high
    
if(!message.member.roles.cache.some((role) => role.id === high)) return message.reply({embeds: [permissions] } )
    

let pointData = db.get(`points_${message.guild.id}`);

if (pointData) {
  // Sort the data based on points in descending order
  pointData.sort((a, b) => b.points - a.points);

  // Create a leaderboard message
  let leaderboardMessage = `\n`;
  
  for (let i = 0; i < pointData.length; i++) {
    leaderboardMessage += `${i + 1} - <@${pointData[i].user}>  |  ${pointData[i].points}\n`;
  }

  // Send the leaderboard message
  // (You might need to adapt this part depending on your Discord library)

  let embed = new MessageEmbed()
  .setTitle("Leaderboard Tickets")
  .setDescription(`
  ** ${leaderboardMessage}**`)
  .setColor(data.color)
  .setAuthor(message.guild.name , message.guild.iconURL({ dynamic: true }))
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
        //.setTimestamp();
   //   .setFooter({text : ``})
  
  message.reply({embeds: [embed]});
} else {
  message.reply("No data found for the leaderboard.");
}
 

    
  }
})


client.on("messageCreate", async message => {
  if(message.content.startsWith(prefix + "points")){

  let support = client.config.supportId
    
if(!message.member.roles.cache.some((role) => role.id === support)) 
  
return message.reply({embeds: [permissions]} )
    
let pointData = db.get(`points_${message.guild.id}`);

    
  let vale = pointData.find(x => x.user === message.author.id);
  
  if(!vale)return message.reply(`لا تمتلك نقاط`)
    let embed = new MessageEmbed()
    .setTitle(`${data.title} Points System`)
   .addField(`**الاداري**`, `<@${vale.user}>`)
.addField(`**عدد التكتات**`, `** ${vale.points}\n**`)
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
        //.setTimestamp();
     // .setFooter({text : ` `})
.setColor(data.color)
  await  message.reply({embeds: [embed]})
    
   }
 })




/////

client.on("messageCreate", async message => {
  if(message.content.startsWith(prefix + "reset user")){
    
let high = client.config.high
    
if(!message.member.roles.cache.some((role) => role.id === high))  
return;

    
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const user = message.mentions.users.first() || client.users.cache.get(args[1]);

    if (!user) return message.reply("*mention a user*");

///


    let point = db.get(`points_${message.guild.id}`);
let ary = {
  user: `${user.id}`,
  points: 0
};

if (!point) {
  db.set(`points_${message.guild.id}`, [ary]);
} else {
  let found = point.find(x => x.user === user.id);
  if (found) {
    found.points = 0; // Increment the points by 1
    point[point.indexOf(found)] = found;
  } else {
    point.push(ary); // If user not found, add them with 1 point
  }
  db.set(`points_${message.guild.id}`, point);


await message.reply(`✅ ** تم تصفير نقاط الشخص بنجاح**`)
    

    
   }
   }

})



client.on("messageCreate", async message => {
  if(message.content.startsWith(prefix + "set points")){
    
let high = client.config.high
if(!message.member.roles.cache.some((role) => role.id === high))
return;

    
    const args = message.content.slice(prefix.length).trim().split(/ +/);

    const args3 = parseInt(args[3]); // Parse the third argument as an integer
    
    const user = message.mentions.users.first() || client.users.cache.get(args[1]);

    if (!user) return message.reply("*mention a user*");
if (isNaN(args3)) return message.reply(`*the number was not placed successfully*`)
///ا
 

    let point = db.get(`points_${message.guild.id}`);
let ary = {
  user: `${user.id}`,
  points: args3
};

if (!point) {
  db.set(`points_${message.guild.id}`, [ary]);
} else {
  let found = point.find(x => x.user === user.id);
  if (found) {
    found.points = args3; // Increment the points by 1
    point[point.indexOf(found)] = found;
  } else {
    point.push(ary); // If user not found, add them with 1 point
  }
  db.set(`points_${message.guild.id}`, point);


await message.reply(`** ✅ تم وضع عدد النقاط بنجاح **`)
    

    
   }
   }

})

///////////

///////////

client.on("messageCreate", async message => {
  if(message.content.startsWith(prefix + "reset all") || message.content.startsWith(prefix + "تصفير")){
    
let high = client.config.high
if(!message.member.roles.cache.some((role) => role.id === high)) 
return;

let data = db.get(`points_${message.guild.id}`)
if(!data)return message.reply(`** No Found Data ! **`)
    if(data) db.delete(`points_${message.guild.id}`)
  return message.reply(`**✅ تم تصفير النقاط بنجاح **`)
  
  }
     })
    


client.on('channelDelete', (channel) => {
  let chid = channel.id
  let data = db.get(`ownerticket_${chid}`)
  if(!data)return;
  if(data) db.delete(`ownerticket_${chid}`)

});



client.on("messageCreate", async message => {
  if(message.content.startsWith(prefix + "help points")){
let high = client.config.high
  if(!message.member.roles.cache.some((role) => role.id === high)) return 
    await message.reply({embeds: [
      new MessageEmbed()
      .setColor(data.color)
    .setTitle("System Points Help")
.setDescription(`
- ${prefix}points 
- ${prefix}set points
- ${prefix}reset
- ${prefix}leaderboard
- ${prefix}reset user
`)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
        //.setTimestamp();
    //  .setFooter({text : ` S`})
      .setAuthor(message.guild.name , message.guild.iconURL({ dynamic: true }))
    ]})
   } 
 })


//////////////////////////////////////
///////auto tax /////////////////////
/////////////////////////////////////

const TaxChannel = "1185911669029863496" // ايدي الات شانل الاوتو تاكس
const lineurl = require('./config.json')
// ==================== Auto Tax ====================== \\

client.on("messageCreate", message => {
  if (message.channel.type === "dm" ||
    message.author.bot) return

  if (TaxChannel.includes(message.channel.id)) {

    var args = message.content.split(' ').slice(0).join(' ')
    if (!args) return;

    if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
    else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
    else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
    else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1) - (args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    let tax4 = Math.floor(tax2 + tax3 + args2)

    let Taxembed = new MessageEmbed()

      .setThumbnail(client.user.avatarURL({ dynamic: true }))
      .addField(`السعر بدون ضرايب : `, `${args2 - (args2 * 0.05)}`)
      .addField(`السعر مع ضرايب :`, `${tax}`)
      .addField(`ضرايب الوسيط (2.5%) بدون نسبة :`, `${args2 + (args2 * 0.025)}`)
      .addField(`ضرايب الوسيط (2.5%) مع نسبة :`, `${tax + (args2 * 0.025)}`)
      .addField(`نسبة الوسيط :`, `${args2 * 0.025}`)
      .addField(`التحويل بدون ضرايب :`, `${args2 - (args2 * 0.05)}`)
      .setColor('DARK_PURPLE')
      .setTimestamp()
    message.reply({ embeds: [Taxembed] })
    message.channel.send({ files: [lineurl] }).catch((err) => {
      console.log(err.message)
    });
  }
});














//////////////////////////////////////////////////////////////////////////////////////////////////////////////





 const emjTrue = "✅"
const emjFalse = "❌"
const talabtRoom = "1185911530672369735"
const OrderRoom = "1185911530672369735"
const Montagat = "1185911548078739507"
const Designer = "1185911537060290610"
const Developer = "1185911554680569886"
const staffManagerRole = "1185911041595547689"
const discorsLeader = "1185911043000639498"
const OfficialRole = "1185911053935194152"
const RolesRole = "1185911052018397304"
const discordStaff = "1185911041595547689"
const UnderTestRole = "1185911054744682496"
const DeveloperId = "1185911095752405003"
const bankid = "1155225793111265492"
const ManshoratChannel3 = '1185911440754880574'
const spinbank = "1155225793111265492"
const manshoratRoom = '1185911440754880574'
const roomschannel12345 = '1168953283688275991'
const nasab = '1185911121564151893'
const lineLink = "https://cdn.discordapp.com/attachments/1185657301806358538/1185932073073123418/rider_2.png?ex=6591684f&is=657ef34f&hm=9bc801ced6b13a95e23718395574e274303ca87ea8aa13893f99ed24ce7e76c1&"
const colorE = "#380c61"

process.on('uncaughtException', (error) => {
  console.error('Uncaught exception occurred:', error);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled promise rejection:', reason);
});

// // Start

client.on('messageCreate', async message => {
  if (message.content.startsWith('+رول') && message.member.roles.cache.has(RolesRole) || message.content.startsWith('+role') && message.member.roles.cache.has(RolesRole)) {
    if (message.content.startsWith(prefix + "رولات")) return false;
    const args = message.content.split(' ');
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
    if (!user) return message.reply("**منشن الشخص أولاً أو ضع الإيدي !**")
    if (!args) return message.reply("**منشن الشخص أولاً أو ضع الإيدي !**")
    let row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setPlaceholder("Select Kind Of Role ..")
          .setCustomId('menu-select')
          .setMaxValues(1)
          .addOptions([
            {
              label: 'Seller Roles',
              value: 'sellR'
            },
            {
              label: 'Other Roles',
              value: 'otherR'
            }]))
    let m = await message.reply({ content: `** يرجى تحديد نوع الرتبة :**`, components: [row] })
    db.set(`giverole_${m.id}`, user.id)
  }
});

client.on("interactionCreate", interaction => {
  if (interaction.customId == "menu-select") {
    if (interaction.values[0] === 'sellR') {
      if (interaction.member.roles.cache.has(RolesRole)) {
        let row1 = new MessageActionRow()
          .addComponents(
            new MessageSelectMenu()
              .setPlaceholder("Select Role ..")
              .setCustomId('menu-select1')
              .setMaxValues(5)
              .addOptions([
                {
                  label: '🜲 || Angel S :',
                  value: '1185911089565806622'
                },
                {
                  label: '🜲 || Great S :',
                  value: '1185911090610176050'
                },
                {
                  label: '🜲 || Perfect S :',
                  value: '1185911091486806126'
                },
                {
                  label: '🜲 || Excellent S :',
                  value: '1185911092925440020'
                },
                {
                  label: '🜲 || Good S :',
                  value: '1185911093537808387'
                },
                {
                  label: '🜲 || Designer S :',
                  value: '1185911094745768038'
                },
                {
                  label: '🜲 || Developer :',
                  value: '1185911095752405003'
                }, 
                {
                  label: '🜲 || Viking S :',
                  value: '1185911097514016848'
                },
              
              
              
              ]))
        interaction.message.edit({
          content: `** يرجى تحديد الرتبه
      :**`, components: [row1]
        })
        interaction.deferUpdate()
      }
    }
    if (interaction.values[0] === 'otherR') {
      if (interaction.member.roles.cache.has(RolesRole)) {
        let row1 = new MessageActionRow()
          .addComponents(
            new MessageSelectMenu()
              .setPlaceholder("Select Role ..")
              .setCustomId('menu-select2')
              .setMaxValues(2)
              .addOptions([
                {
                  label: '丶Client',
                  value: '1167183140633186314'
                },
                {
                  label: 'BlackList',
                  value: '1167185593260839022'
                },]))
        interaction.message.edit({ content: `** يرجى تحديد الرتبة :**`, components: [row1] })
        interaction.deferUpdate()
      }
    }
  }
});

client.on("interactionCreate", async interaction => {
  if (interaction.isSelectMenu()) {
    if (interaction.customId == "menu-select1") {
      if (interaction.member.roles.cache.has(RolesRole)) {
        let rolesAdded = [];
        let rolesRemoved = [];
        let u = db.get(`giverole_${interaction.message.id}`)
        let member = interaction.guild.members.cache.find(r => r.id == u)
        let roles = interaction.values;
        for (const r of roles) {
          var s;
          const role = interaction.guild.roles.cache.find(ro => ro.id == r)
          if (role) {
            if (member.roles.cache.some(ro => ro.id == r)) {
              await member.roles.remove([role])
              rolesRemoved.push(role.name.replace(/\|\|/g, ''));
            } else {
              await member.roles.add([role])
              rolesAdded.push(role.name.replace(/\|\|/g, ''));
            }
          }
        }
        let message = `** تم تحديث رتب ${member}**\n`;
        if (rolesAdded.length > 0) {
          message += `> ** الرتب التي تم اضافتها : ${rolesAdded.join(' , ')}**\n`;
        }
        if (rolesRemoved.length > 0) {
          message += `> ** الرتب التي تم ازالتها : ${rolesRemoved.join(' , ')}**\n`;
        }
        interaction.message.edit({ content: `${message}`, components: [] })
        interaction.deferUpdate()
        db.delete(`giverole_${interaction.message.id}`)
      }
    }
    if (interaction.customId == "menu-select2") {
      if (interaction.member.roles.cache.has(RolesRole)) {
        let rolesAdded = [];
        let rolesRemoved = [];
        let u = db.get(`giverole_${interaction.message.id}`)
        let member = interaction.guild.members.cache.find(r => r.id == u)
        let roles = interaction.values;
        for (const r of roles) {
          var s;
          const role = interaction.guild.roles.cache.find(ro => ro.id == r)
          if (role) {
            if (member.roles.cache.some(ro => ro.id == r)) {
              await member.roles.remove([role])
              rolesRemoved.push(role.name.replace(/\|\|/g, ''));
            } else {
              await member.roles.add([role])
              rolesAdded.push(role.name.replace(/\|\|/g, ''));
            }
          }
        }
        let message = `** تم تحديث رتب ${member}**\n`;
        if (rolesAdded.length > 0) {
          message += `> ** الرتب التي تم اضافتها : ${rolesAdded.join(' , ')}**\n`;
        }
        if (rolesRemoved.length > 0) {
          message += `> ** الرتب التي تم ازالتها : ${rolesRemoved.join(' , ')}**\n`;
        }
        interaction.message.edit({ content: `${message}`, components: [] })
        interaction.deferUpdate()
        db.delete(`giverole_${interaction.message.id}`)
      }
    }
  }
});
// ///////////////
client.on('messageCreate', async message => {
  if (message.content.startsWith('+نصاب') && message.member.roles.cache.has(OfficialRole)) {
    const now = new Date();
    const guild = message.guild;
    const role = guild.roles.cache.get('1185911121564151893');
    const logChannel = await message.client.channels.fetch("1185912094252597268");
    const args = message.content.split(' ');
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
    if (!user) return message.reply(`**منشن الشخص أولاً أو ضع الإيدي !**`)
    if (db.has(`scammer_${user.id}`)) return message.reply("**هذا الشخص بالفعل في قائمة النصابين !**");
    db.add(`scammer_${user.id}`, 1)
    // await user.roles.set([]);
    await user.roles.add(role)
    await message.reply(`**تم إضافة ${user} إلى قائمة النصابين !**`)
    let EmbedLog = new Discord.MessageEmbed()
      .setTitle(`** Add a New Thief !**`)
      .setDescription(`> ** تم تشهير ${user} , المشرف المسؤول ${message.author} **
        ** إيدي النصاب : ${user.id}
         إيدي المشرف المسؤول : ${message.author.id} \n\n تاريخ التشهير : <t:${Math.floor(now.getTime() / 1000)}:d>**`)
      .setColor(`${colorE}`)
      .setTimestamp()
    await logChannel.send({ embeds: [EmbedLog] })
    await logChannel.send(`${lineLink}`)
  }
});

client.on('messageCreate', async message => {
  if (message.content.startsWith('+ازالة') && message.member.roles.cache.has(OfficialRole)) {
    const now = new Date();
    const guild = message.guild;
    const role = guild.roles.cache.get('1185911121564151893');
    const logChannel = await message.client.channels.fetch("1185912094252597268");
    const args = message.content.split(' ');
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
    if (!user) return message.reply("**منشن الشخص أولاً أو ضع الإيدي !**")
    if (!db.has(`scammer_${user.id}`)) return message.reply("**هذا الشخص ليس بقائمة النصابين لإزالته !**")
    db.delete(`scammer_${user.id}`, 1)
    await user.roles.remove(role);
    await message.reply(`**تم إزالة ${user} من قائمة النصابين !**`)
    let EmbedLog = new MessageEmbed()
      .setTitle(`** Remove a New Thief !**`)
      .setDescription(`> ** تم إزالة تشهير ${user} , المشرف المسؤول ${message.author} **
** إيدي الشخص : ${user.id}
 إيدي المشرف المسؤول : ${message.author.id} \n\n تاريخ إزالة التشهير : <t:${Math.floor(now.getTime() / 1000)}:d>**`)
      .setColor(`${colorE}`)
      .setTimestamp()
    await logChannel.send({ embeds: [EmbedLog] })
    await logChannel.send(`${lineLink}`)
  }
});

client.on('messageCreate', async message => {
  if (message.content.startsWith('+فحص') || message.content.startsWith('فحص')) {
    const args = message.content.split(' ');
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
    if (!user) return message.reply("**منشن الشخص أولاً أو ضع الإيدي !**")
    if (db.has(`scammer_${user.id}`)) {
      await message.reply(`** إنتبه ! هذا الشخص نصاب، الرجاء عدم التعامل معه .**`);
    } else {
      await message.reply(`**هذا الشخص ليس نصاب ، لكن انتبه ! هذا لا يعني أنه مضمون .. الرجاء أخذ وسيط  من هنا   قبل التعامل مع أي أحد . **`);
    }
  }
});

///////////////
client.on("guildMemberAdd", async member => {
  const guild = member.guild;
  const role = guild.roles.cache.find(r => r.name === "نصاب");
  const user = guild.members.cache.find(m => m.id === member.id);
  if (role && user && db.get(`scammer_${user.id}`)) {
    try {
      await user.roles.add(role);
      console.log(`تم إعطاء الرتبة ${role.name} للعضو ${user.displayName} في سيرفر ${guild.name}`);
    } catch (error) {
      console.error(`حدث خطأ أثناء إعطاء الرتبة للعضو ${user.displayName} في سيرفر ${guild.name}: ${error}`);
    }
  }
});

// ///////////////
client.on("messageCreate", async message => {
  if (message.content === prefix + 'ping') {
    let rowPing = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setLabel(`إعادة إختبار السرعة`)
          .setCustomId(`reexam`)
          .setStyle("SECONDARY"))
    message.channel.send('pong').then(message => {
      message.edit({
        content: `**\`\`\`js
My ping is : ${client.ws.ping} ms\`\`\`**`, components: [rowPing]
      })
    });
  }
});
client.on('interactionCreate', async interaction => {
  if (interaction.isButton()) {
    if (interaction.customId === 'reexam') {
      const message = await interaction.channel.messages.fetch(interaction.message.id);
      message.edit(`**\`\`\`js
My ping is : ${client.ws.ping} ms\`\`\`**`)
    }
  }
});

///////////////
client.on('messageCreate', async message => {
  if (message.content.startsWith(prefix + `come`) && message.member.roles.cache.has(discordStaff) || message.content.startsWith('نداء') && message.member.roles.cache.has(discordStaff)) {
    try {
      const channel = message.channel;
      const args = message.content.split(' ');
      const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
      const commandLink = `https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id}`;
      if (!user) return message.reply("**منشن الشخص أولاً أو ضع الإيدي !**")
      await user.send(`** يرجى التوجه إلى ${channel} في أقرب وقت !\n  الإستدعاء من قبل : ${message.member} .\n  رسالة الإستدعاء : ${commandLink} -تعال**`)
      await message.reply(`**${emjTrue} لقد تم نداء ${user} إلى هذا الروم بنجاح !**`)
    } catch {
      await message.reply(`**${emjFalse} لا يمكنني ارسال رسالة لهذا الشخص !**`)
    }
  }
});

///////////////




// ///////////////
// let manshor;
// let member;

// client.on("messageCreate", message => {
//   if (message.content.startsWith(prefix + "منشور")) {
//     if (message.member.roles.cache.has(discorsLeader) || message.member.roles.cache.some(r => r.id == 1168291747961524236)) {

//       if (message.content.startsWith(prefix + "منشورات")) return false;

//       member = message.mentions.members.first()
//       if (!member) return message.reply(`**${emjFalse} يرجى منشن صاحب المنشور أولاً !**`)
//       manshor = message.content.split(" ").slice(2).join(" ");
//       if (!manshor) return message.reply(`**${emjFalse} يرجى وضع المنشور أولاً !**`)

//       let embed = new Discord.MessageEmbed()
//         .setTitle(`** إختر نوع المنشن :**`)
//         .setDescription(`** يرجى إختيار نوع المشنن المناسب : \`here\` أو \`everyone\`\n المنشور :\n\`${manshor}\`**`)
//         .setColor(`${colorE}`)
//       let row = new Discord.MessageActionRow().addComponents(
//         new Discord.MessageButton()
//           .setLabel("here")
//           .setCustomId("menthere")
//           .setStyle("SECONDARY")
//       )
//         .addComponents(
//           new Discord.MessageButton()
//             .setLabel("everyone")
//             .setCustomId("menteve")
//             .setStyle("SECONDARY")
//         )
//         .addComponents(
//           new Discord.MessageButton()
//             .setLabel("no mention")
//             .setCustomId("nomen")
//             .setStyle("SECONDARY")
//         )

//       message.reply({ embeds: [embed], components: [row] })
//     }
//   }
// });

// client.on("interactionCreate", async interaction => {
//   if (!interaction.isButton()) return;

//   if (interaction.customId === "menthere") {
//     if (interaction.member.roles.cache.some((role) => role.id === discorsLeader)) {
//       const message = await interaction.channel.messages.fetch(interaction.message.id);

//       const heremanshor = `${manshor}\n@here`

//       let embed1 = new Discord.MessageEmbed()
//         .setTitle(`** هل انت متأكد من إرسال المنشور ؟**`)
//         .setDescription(`** يرجى الإستجابة مع الأزرار بـ \`إرسال\` أو \`إلغاء\` ..\n المنشور :\n\`${heremanshor}\n\nتواصل مع : ${member}\`**`)
//         .setColor(`${colorE}`)
//       let row1 = new Discord.MessageActionRow().addComponents(
//         new Discord.MessageButton()
//           .setLabel("إرسال")
//           .setCustomId("completeid")
//           .setStyle("SUCCESS")
//       )
//         .addComponents(
//           new Discord.MessageButton()
//             .setLabel("إلغاء")
//             .setCustomId("cancelid")
//             .setStyle("DANGER")
//         )
//       interaction.deferUpdate()

//       message.edit({ embeds: [embed1], components: [row1] });
//     } else {
//       interaction.reply({ content: `**${emjFalse} لا يمكنك إستخدام هذا الزر .**`, ephemeral: true });
//     }
//   } else if (interaction.customId === "menteve") {
//     if (interaction.member.roles.cache.some((role) => role.id === discorsLeader)) {
//       const message = await interaction.channel.messages.fetch(interaction.message.id);
//       const evemanshor = `${manshor}\n@everyone`
//       let embed2 = new Discord.MessageEmbed()
//         .setTitle(`** هل انت متأكد من إرسال المنشور ؟**`)
//         .setDescription(`** يرجى الإستجابة مع الأزرار بـ \`إرسال\` أو \`إلغاء\` ..\n المنشور :\n\`${evemanshor}\n\nتواصل مع : ${member}\`**`)
//         .setColor("EA3648")
//       let row2 = new Discord.MessageActionRow().addComponents(
//         new Discord.MessageButton()
//           .setLabel("إرسال")
//           .setCustomId("completeid2")
//           .setStyle("SUCCESS"))
//         .addComponents(
//           new Discord.MessageButton()
//             .setLabel("إلغاء")
//             .setCustomId("cancelid")
//             .setStyle("DANGER"))
//       interaction.deferUpdate()
//       message.edit({ embeds: [embed2], components: [row2] });
//     } else {
//       interaction.reply({
//         content: `**${emjFalse}
//  لا يمكنك إستخدام هذا الزر .**`, ephemeral: true
//       });
//     }
//   } else if (interaction.customId === "nomen") {
//     if (interaction.member.roles.cache.some((role) => role.id === discorsLeader)) {
//       const message = await interaction.channel.messages.fetch(interaction.message.id);
//       const nomenmanshor = `${manshor}`
//       let embed2 = new Discord.MessageEmbed()
//         .setTitle(`** هل انت متأكد من إرسال المنشور ؟**`)
//         .setDescription(`** يرجى الإستجابة مع الأزرار بـ \`إرسال\` أو \`إلغاء\` ..\n المنشور :\n\`${nomenmanshor}\n\nتواصل مع : ${member}\`**`)
//         .setColor(`${colorE}`)
//       let row2 = new Discord.MessageActionRow().addComponents(
//         new Discord.MessageButton()
//           .setLabel("إرسال")
//           .setCustomId("completeid3")
//           .setStyle("SUCCESS"))
//         .addComponents(
//           new Discord.MessageButton()
//             .setLabel("إلغاء")
//             .setCustomId("cancelid")
//             .setStyle("DANGER"))
//       interaction.deferUpdate()
//       message.edit({ embeds: [embed2], components: [row2] });
//     } else {
//       interaction.reply({ content: `**${emjFalse} لا يمكنك إستخدام هذا الزر .**`, ephemeral: true });
//     }
//   }
// });

// client.on("interactionCreate", async interaction => {
//   if (interaction.customId == "cancelid") {
//     if (interaction.member.roles.cache.some((role) => role.id === discorsLeader)) {
//       const message = await interaction.channel.messages.fetch(interaction.message.id);
//       let embed3 = new Discord.MessageEmbed()
//         .setColor(`EA3648`)
//         .setDescription(`** تم إلغاء إرسال هذا المنشور .
//  بواسطة :
// ${interaction.member}
// **`)
//       interaction.deferUpdate()
//       message.edit({ embeds: [embed3], components: [] });
//     } else {
//       interaction.reply({ content: `**${emjFalse} لا يمكنك إستخدام هذا الزر .**`, ephemeral: true });
//     }
//   }
// });

// client.on("interactionCreate", async interaction => {
//   if (interaction.customId == "completeid") {
//     if (interaction.member.roles.cache.some((role) => role.id === discorsLeader)) {
//       const message = await interaction.channel.messages.fetch(interaction.message.id);
//       const now = new Date();
//       const manshoratRoom = "ᔫ・𝖳es𝖳";
//       const ManshoratChannel = interaction.guild.channels.cache.find(channel => channel.name === manshoratRoom);
//       const ManshoratLog = client.channels.cache.get("1185912094252597268");
//       const mehere = `${member}`
//       const manshorhere = `${manshor}\n\nتواصل مع : ${mehere}\n@here`
//       let embed4 = new Discord.MessageEmbed()
//         .setColor(`${colorE}`)
//         .setDescription(`** تم إرسال هذا المنشور إلى ${ManshoratChannel}
//  بواسطة:
// ${interaction.member}
// **`);
//       message.edit({ embeds: [embed4], components: [] });
//       interaction.deferUpdate();

//       // Check if ManshoratChannel is defined before sending messages
//       if (ManshoratChannel) {
//         await ManshoratChannel.send(`${manshorhere}`);
//         await ManshoratChannel.send(`** منشور مدفوع نخلي كامل مسؤوليتنا للي يصير بينكم , تبي زيه حياك : ** ⁠<#1185911386702876742>`)
//         await ManshoratChannel.send({files : [lineLink]});
//       } else {
//         console.log("໒・manshorat・log");
//       }

//       await ManshoratLog.send(`** المنشور :\n\`${manshor}\`\n المنشن :\nevery\n المشرف المسؤول :\n${interaction.member}\n صاحب المنشور :\n${mehere}\n تاريخ المنشور : <t:${Math.floor(now.getTime() / 1000)}:d>**`);
//       await ManshoratLog.send(`${lineLink}`);
//     } else {
//       interaction.reply({
//         content: `**${emjFalse}
//  لا يمكنك إستخدام هذا الزر .**`, ephemeral: true
//       });
//     }
//   }
// });


// client.on("interactionCreate", async interaction => {
//   if (interaction.customId == "completeid2") {
//     if (interaction.member.roles.cache.some((role) => role.id === discorsLeader)) {
//       const message = await interaction.channel.messages.fetch(interaction.message.id);
//       const now = new Date();
//       const manshoratRoom2 = "↬・الـمـنـشـورات・الـمـمـيـزة";
//       const ManshoratChannel2 = interaction.guild.channels.cache.find(channel => channel.name === manshoratRoom2);
//       const ManshoratLog2 = client.channels.cache.get("1185912094252597268");
//       const memeve = `${member}`
//       const manshoreve = `${manshor}\n\nتواصل مع : ${memeve}\n@everyone`
//       let embed4 = new Discord.MessageEmbed()
//         .setColor(`${colorE}`)
//         .setDescription(`** تم إرسال هذا المنشور إلى ${ManshoratChannel2}
//  بواسطة:
// ${interaction.member}
// **`);
//       message.edit({ embeds: [embed4], components: [] });
//       interaction.deferUpdate();

//       // Check if ManshoratChannel2 is defined before sending messages
//       if (ManshoratChannel2) {
//         await ManshoratChannel2.send(`${manshoreve}`);
//         await ManshoratChannel2.send(`** منشور مدفوع نخلي كامل مسؤوليتنا للي يصير بينكم , تبي زيه حياك : ** ⁠<#1156958626251026483>`)
//         await ManshoratChannel2.send({files : [lineLink]});
//       } else {
//         console.log("໒・manshorat・log");
//       }

//       await ManshoratLog2.send(`** المنشور :\n\`${manshor}\`\n المنشن :\nevery\n المشرف المسؤول :\n${interaction.member}\n صاحب المنشور :\n${memeve}\n تاريخ المنشور : <t:${Math.floor(now.getTime() / 1000)}:d>**`);
//       await ManshoratLog2.send(`${lineLink}`);
//     } else {
//       interaction.reply({
//         content: `**${emjFalse}
//  لا يمكنك إستخدام هذا الزر .**`, ephemeral: true
//       });
//     }
//   }
// });


// client.on("interactionCreate", async interaction => {
//   if (interaction.customId == "completeid3") {
//     if (interaction.member.roles.cache.some(r => r.id == discorsLeader)) {
//       const message = await interaction.channel.messages.fetch(interaction.message.id);
//       const now = new Date();

//       await interaction.guild.channels.fetch();

//       const manshoratRoom3 = "ᔫ・𝖳es𝖳";
//       const ManshoratChannel3 = interaction.guild.channels.cache.find(channel => channel.name === manshoratRoom3);
//       const ManshoratLog3 = client.channels.cache.get("1185912094252597268");
//       const nomen = `${member}`
//       const manshorno = `${manshor}\n\nتواصل مع: ${nomen}`;
//       let embed4 = new Discord.MessageEmbed()
//         .setColor(`${colorE}`)
//         .setDescription(`** تم إرسال هذا المنشور إلى ${ManshoratChannel3}
//  بواسطة:
// ${interaction.member}
// **`);
//       message.edit({ embeds: [embed4], components: [] });
//       interaction.deferUpdate();

//       // Check if ManshoratChannel3 is defined before sending messages
//       if (ManshoratChannel3) {
//         await ManshoratChannel3.send(`${manshorno}`);
//         await ManshoratChannel3.send(`** منشور مدفوع نخلي كامل مسؤوليتنا للي يصير بينكم , تبي زيه حياك : ** ⁠<#1156958626251026483>`)
//         await ManshoratChannel3.send({files : [lineLink]});
//       } else {
//         console.log("໒・manshorat・log");
//       }

//       await ManshoratLog3.send(`** المنشور :\n\`${manshor}\`\n المنشن :\nno mention\n المشرف المسؤول :\n${interaction.member}\n صاحب المنشور :\n${nomen}\n تاريخ المنشور : <t:${Math.floor(now.getTime() / 1000)}:d>**`);
//       await ManshoratLog3.send(`${lineLink}`);
//     } else {
//       interaction.reply({
//         content: `**${emjFalse}
//  لا يمكنك إستخدام هذا الزر .**`, ephemeral: true
//       });
//     }
//   }
// });
// /////////////// 



// //Ticket

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "staff-role")) {
    if (!message.member.roles.cache.some(r => r.id == 1185911018925334548)) {
      return message.reply("**للأسف لا تمتلك صلاحية**");
    }
    let r = message.content.split(" ").slice(1).join(" ")
    let role = message.guild.roles.cache.find(r => r.id == r)
    if (!r) {
      if (!role) {
        if (isNaN(r)) {
          message.reply("> **Error : Please put the rank ID**")
        }
      }
    }
    db.set(`role_${message.guild.id}`, r)
    message.reply(`> **تم تعيين رتبة <@&${r}> مستخدم لـ زر الكلايم .**`)

  }
});

// client.on("channelCreate", channel => {
//   if (channel.name.startsWith("ticket-")) {
//     let embed = new MessageEmbed()
//       .setDescription("**Click For Claim**")
//       .setColor(`#380c61`)
//     let row = new MessageActionRow().addComponents(
//       new MessageButton()
//         .setLabel("Claim")
//         .setCustomId("claim")
//         .setStyle("SECONDARY")
//     )
//     setTimeout(() => {
//       channel.send({ embeds: [embed], components: [row] }).then(m => db.set(`message_${channel.id}`, m.id))
//     }, 1000);
//   }
// });

// client.on("interactionCreate", interaction => {
//   if (interaction.isButton()) {
//     let message = db.get(`message_${interaction.channel.id}`)
//     let msg = interaction.channel.messages.cache.find(r => r.id == message)
//     let role = interaction.guild.roles.cache.find(r => r.id == db.get(`role_${interaction.guild.id}`))
//     if (interaction.customId == "claim") {
//       // if (!interaction.member.roles.cache.some(r => r.id == db.get(`role_${interaction.guild.id}`))) return interaction.reply({ content: "**يمكن للإدارة فقط إستخدام هذا الزر .**", ephemeral: true })
//       let embed = new MessageEmbed()
//         .setDescription(`**مسؤول التذكرة : ${interaction.member} .**`)
//         .setColor(`#380c61`)
//       let row = new MessageActionRow().addComponents(
//         new MessageButton()
//           .setLabel("Unclaim")
//           .setCustomId("unclaim")
//           .setStyle("DANGER"))
//       interaction.channel.permissionOverwrites.edit(role, {
//         SEND_MESSAGES: false,
//       })
//       interaction.channel.permissionOverwrites.edit(staffManagerRole, {
//         SEND_MESSAGES: true,
//       })
//       interaction.channel.permissionOverwrites.edit(interaction.member, {
//         SEND_MESSAGES: true,
//       })
//       interaction.channel.setName(`ticket-${interaction.member.user.username}`)
//       db.set(`claimed_${interaction.channel.id}_${interaction.member.id}`, interaction.member.id)
//       db.set(`user_${interaction.channel.id}`, interaction.member.id)
//       db.add(`weekuser_${interaction.member.id}`, 1)
//       db.add(`alluser_${interaction.member.id}`, 1)
//       interaction.reply({ embeds: [new MessageEmbed().setDescription(`**The Ticket Has Been Claim Before ${interaction.member} .**`).setColor(`#380c61`)] })
//       msg.edit({ embeds: [embed], components: [row] })
//     }
//     if (interaction.customId == "unclaim") {
//       // if (!interaction.member.roles.cache.some(r => r.id == db.get(`role_${interaction.guild.id}`))) return interaction.reply({ content: "**يمكن للإدارة فقط إستخدام هذا الزر .**", ephemeral: true })
//       if (!db.has(`claimed_${interaction.channel.id}_${interaction.member.id}`)) return interaction.reply({ content: "**يمكن لصاحب التذكرة فقط إستخدام هذا الزر .**", ephemeral: true })
//       interaction.reply({ content: `${role}`, embeds: [new MessageEmbed().setDescription(`**The Ticket Has Been Left Before : ${interaction.member} .**`).setColor(`#380c61`)] })
//       let embed = new MessageEmbed()
//         .setDescription("**إضغط على الزر لتصبح مسؤول التذكرة**")
//         .setColor(`#380c61`)
//       let row = new MessageActionRow().addComponents(
//         new MessageButton()
//           .setLabel("Claim")
//           .setCustomId("claim")
//           .setStyle("SECONDARY"))
//       interaction.channel.permissionOverwrites.edit(role, {
//         SEND_MESSAGES: true,
//       })
//       interaction.channel.permissionOverwrites.edit(interaction.member, {
//         SEND_MESSAGES: false,
//       })

//       db.subtract(`weekuser_${interaction.member.id}`, 1)
//       db.subtract(`alluser_${interaction.member.id}`, 1)
//       db.delete(`claimed_${interaction.channel.id}_${interaction.member.id}`)
//       db.delete(`user_${interaction.channel.id}`)
//       msg.edit({ embeds: [embed], components: [row] })
//     }
//   }
// });

client.on("channelDelete", channel => {
  if (db.has(`user_${channel.id}`)) {
    const s = db.get(`user_${channel.id}`)
    if (db.has(`claimed_${channel.id}_${s}`)) {
      db.delete(`claimed_${channel.id}_${s}`)
    }
    if (db.has(`message_${channel.id}`)) {
      db.delete(`message_${channel.id}`)
      db.delete(`user_${channel.id}`)
    }
  }
})

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "points") || message.content.startsWith(prefix + "نقاط") || message.content.startsWith(prefix + "نقط")) {
    let user = message.mentions.members.first()
    if (user) {
      let member = message.guild.members.cache.find(u => u == user.id)
      var points = db.get(`weekuser_${user.id}`)
      var weekwarns = db.get(`weekwarns_${user.id}`)
      var allpoints = db.get(`alluser_${user.id}`)
      var allwarns = db.get(`allwarns_${user.id}`)
      var allmute = db.get(`muteall_${user.id}`)
      var weekmute = db.get(`muteweek_${user.id}`)
      if (!points) {
        points = 0
      }
      if (!weekwarns) {
        weekwarns = 0
      }
      if (!allpoints) {
        allpoints = 0
      }
      if (!allwarns) {
        allwarns = 0
      }
      if (!allmute) {
        allmute = 0
      }
      if (!weekmute) {
        weekmute = 0
      }
      let embed2 = new Discord.MessageEmbed()
        .setDescription(` **${member.user} , Points :**\n     \n>  **Week Points : \`${points + weekwarns + weekmute}\`**\n>  **All Points : \`${allpoints + allwarns + allmute}\`**\n     \n>  **Week Tickets : \`${points}\`**\n>  **Week Warns : \`${weekwarns}\`**\n>  **Week Mutes : \`${weekmute}\`**\n     \n>  **All Tickets : \`${allpoints}\`**\n>  **All Warns : \`${allwarns}\`**\n>  **All Mutes : \`${allmute}\`**`)
        .setColor(`#380c61`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed2] })
    }
    if (!user) {
      var points = db.get(`weekuser_${message.member.id}`)
      var weekwarns = db.get(`weekwarns_${message.member.id}`)
      var allpoints = db.get(`alluser_${message.member.id}`)
      var allwarns = db.get(`allwarns_${message.member.id}`)
      var allmute = db.get(`muteall_${message.member.id}`)
      var weekmute = db.get(`muteweek_${message.member.id}`)
      if (!points) {
        points = 0
      }
      if (!weekwarns) {
        weekwarns = 0
      }
      if (!allpoints) {
        allpoints = 0
      }
      if (!allwarns) {
        allwarns = 0
      }
      if (!allmute) {
        allmute = 0
      }
      if (!weekmute) {
        weekmute = 0
      }
      let embed4 = new MessageEmbed()
        .setDescription(` **${message.member.user} , Points :**\n     \n>  **Week Points : \`${points + weekwarns + weekmute}\`**\n>  **All Points : \`${allpoints + allwarns + allmute}\`**\n     \n>  **Week Tickets : \`${points}\`**\n>  **Week Warns : \`${weekwarns}\`**\n>  **Week Mutes : \`${weekmute}\`**\n     \n>  **All Tickets : \`${allpoints}\`**\n>  **All Warns : \`${allwarns}\`**\n>  **All Mutes : \`${allmute}\`**`)
        .setColor(`#380c61`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed4] })
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "tickets") || message.content.startsWith(prefix + "تكتات") || message.content.startsWith(prefix + "تكت")) {
    let user = message.mentions.members.first()
    if (user) {
      let member = message.guild.members.cache.find(u => u == user.id)
      let points = db.get(`weekuser_${user.id}`)
      let allpoints = db.get(`alluser_${user.id}`)
      let embed1 = new MessageEmbed()
        .setTitle(`${member.user.tag}, Points :`)
        .setDescription(`> **Week Tickets : \`0\`**\n> **All Tickets : \`${allpoints}\`**`)
        .setColor(`#380c61`)
        .setFooter({ text: `Requested by : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      let embedd = new MessageEmbed()
        .setTitle(`${member.user.tag}, Points :`)
        .setDescription(`> **Week Tickets : \`${points}\`**\n> **All Tickets : \`0\`**`)
        .setColor(`#380c61`)
        .setFooter({ text: `Requested by : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      let embed44 = new MessageEmbed()
        .setTitle(`${member.user.tag}, Points :`)
        .setDescription(`> **Week Tickets : \`0\`**\n> **All Tickets : \`0\`**`)
        .setColor(`#380c61`)
        .setFooter({ text: `Requested by : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      if (!db.has(`weekuser_${user.id}`)) return message.reply({ embeds: [embed1] })
      if (!db.has(`alluser_${user.id}`)) return message.reply({ embeds: [embedd] })
      let embed2 = new MessageEmbed()
        .setTitle(`${member.user.tag}, Points :`)
        .setDescription(`> **Week Tickets : \`${points}\`**\n> **All Tickets : \`${allpoints}\`**`)
        .setColor(`#380c61`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed2] })
    }
    if (!user) {
      let points = db.get(`weekuser_${message.member.id}`)
      let allpoints = db.get(`alluser_${message.member.id}`)
      let embed3 = new MessageEmbed()
        .setTitle(`${message.member.user.tag}, Points :`)
        .setDescription(`> **Week Tickets : \`0\`**\n> **All Tickets : \`${allpoints}\`**`)
        .setColor(`#380c61`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      let embedd = new MessageEmbed()
        .setTitle(`${message.member.user.tag}, Points :`)
        .setDescription(`> **Week Tickets : \`${points}\`**\n> **All Tickets : \`0\`**`)
        .setColor(`#380c61`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      if (!db.has(`weekuser_${message.member.id}`)) return message.reply({ embeds: [embed3] })
      if (!db.has(`alluser_${message.member.id}`)) return message.reply({ embeds: [embedd] })
      let embed4 = new MessageEmbed()
        .setTitle(`${message.member.user.tag}, Points :`)
        .setDescription(`> **Week Tickets : \`${points}\`**\n> **All Tickets : \`${allpoints}\`**`)

        .setColor(`#380c61`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed4] })
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "mutes") || message.content.startsWith(prefix + "ميوتات")) {
    let user = message.mentions.members.first()
    if (user) {
      let member = message.guild.members.cache.find(u => u == user.id)
      var mutes = db.get(`muteweek_${user.id}`)
      var allmutes = db.get(`muteall_${user.id}`)
      if (!mutes) {
        mutes = 0
      }
      if (!allmutes) {
        allmutes = 0
      }
      let embed2 = new MessageEmbed()
        .setTitle(`${member.user.tag}, Mutes :`)
        .setDescription(`> **All Mutes : \`${allmutes}\`**\n> **Week Mutes : \`${mutes}\`**`)
        .setColor(`${colorE}`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed2] })
    }
    if (!user) {
      var mutes = db.get(`muteweek_${message.member.id}`)
      var allmutes = db.get(`muteall_${message.member.id}`)
      if (!mutes) {
        mutes = 0
      }
      if (!allmutes) {
        allmutes = 0
      }
      let embed4 = new MessageEmbed()
        .setTitle(`${message.member.user.tag}, Mutes :`)
        .setDescription(`> **Week Mutes : \`${mutes}\`**\n> **All Mutes : \`${allmutes}\`**`)
        .setColor(`${colorE}`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed4] })
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "ticket(+)")) {
    if (message.member.roles.cache.some(r => r.id == 1151903262556049450)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be added**")
      await db.add(`weekuser_${user.id}`, args2)
      await db.add(`alluser_${user.id}`, args2)
      let embed = new MessageEmbed()
        .setDescription(`**Done added ${args2} ticket points to ${user}**`)
        .setColor(`${colorE}`)
      message.reply({ embeds: [embed] })
      let log = message.guild.channels.cache.find(r => r.id == 1156636136530268160)
      let member = message.guild.members.cache.find(r => r.id == user.id)
      let embedLog = new MessageEmbed()
        .setAuthor({ name: message.member.user.username, iconURL: message.member.user.displayAvatarURL() })
        .setTitle(`** تم اضافة نقطة جديدة**`)
        .setDescription(`> ** المسؤول : ${message.member}**\n> ** الشخص : ${message.guild.members.cache.find(r => r.id == user.id)}**\n> ** عدد النقاط المضافة : ${args2}**`)
        .setFooter({ text: member.user.username, iconURL: member.user.displayAvatarURL() })
        .setColor(`${colorE}`)
      log.send({ embeds: [embedLog] })
      log.send(`https://cdn.discordapp.com/attachments/1185657301806358538/1185931778033209424/2BFBC683-B26C-465B-AD5F-B470291D22B6.png?ex=65916809&is=657ef309&hm=1c2c23cb70f94f9b6ad04626ad7b6e0d6937a4d8485de4fb1bc72a5b79493b17&`)
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "allticket(+)")) {
    if (message.member.roles.cache.some(r => r.id == 1151903262556049450)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be added**")
      await db.add(`alluser_${user.id}`, args2)
      let embed = new MessageEmbed()
        .setDescription(`**Done added ${args2} ticket points to ${user}**`)
        .setColor(`${colorE}`)
      message.reply({ embeds: [embed] })
      let log = message.guild.channels.cache.find(r => r.id == 1156636136530268160)
      let member = message.guild.members.cache.find(r => r.id == user.id)
      let embedLog = new MessageEmbed()
        .setAuthor({ name: message.member.user.username, iconURL: message.member.user.displayAvatarURL() })
        .setTitle(`** تم اضافة نقطة جديدة**`)
        .setDescription(`> ** المسؤول : ${message.member}**\n> ** الشخص : ${message.guild.members.cache.find(r => r.id == user.id)}**\n> ** عدد النقاط المضافة : ${args2}**`)
        .setFooter({ text: member.user.username, iconURL: member.user.displayAvatarURL() })
        .setColor(`${colorE}`)
      log.send({ embeds: [embedLog] })
      log.send(`https://cdn.discordapp.com/attachments/1158491033387143188/1158553572707942523/line1.png?ex=651caa98&is=651b5918&hm=f495392f0a661058295b72c1f1e849e817e2bb714789346a00230eb3592e2001&`)
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "mute(+)")) {
    if (message.member.roles.cache.some(r => r.id == 1151903262556049450)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be added**")
      await db.add(`muteweek_${user.id}`, args2)
      await db.add(`muteall_${user.id}`, args2)
      let embed = new MessageEmbed()
        .setDescription(`**Done added ${args2} mute points to ${user}**`)
        .setColor(`${colorE}`)
      message.reply({ embeds: [embed] })
      let log = message.guild.channels.cache.find(r => r.id == 1156636136530268160)
      let member = message.guild.members.cache.find(r => r.id == user.id)
      let embedLog = new MessageEmbed()
        .setAuthor({ name: message.member.user.username, iconURL: message.member.user.displayAvatarURL() })
        .setTitle(`** تم اضافة نقطة جديدة**`)
        .setDescription(`> ** المسؤول : ${message.member}**\n> ** الشخص : ${message.guild.members.cache.find(r => r.id == user.id)}**\n> ** عدد النقاط المضافة : ${args2}**`)
        .setFooter({ text: member.user.username, iconURL: member.user.displayAvatarURL() })
        .setColor(`${colorE}`)
      log.send({ embeds: [embedLog] })
      log.send(`https://cdn.discordapp.com/attachments/1158491033387143188/1158553572707942523/line1.png?ex=651caa98&is=651b5918&hm=f495392f0a661058295b72c1f1e849e817e2bb714789346a00230eb3592e2001&`)
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "allmute(+)")) {
    if (message.member.roles.cache.some(r => r.id == 1151903262556049450)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be added**")
      await db.add(`muteall_${user.id}`, args2)
      let embed = new MessageEmbed()
        .setDescription(`**Done added ${args2} mute points to ${user}**`)
        .setColor(`${colorE}`)
      message.reply({ embeds: [embed] })
      let log = message.guild.channels.cache.find(r => r.id == 1156636136530268160)
      let member = message.guild.members.cache.find(r => r.id == user.id)
      let embedLog = new MessageEmbed()
        .setAuthor({ name: message.member.user.username, iconURL: message.member.user.displayAvatarURL() })
        .setTitle(`** تم اضافة نقطة جديدة**`)
        .setDescription(`> ** المسؤول : ${message.member}**\n> ** الشخص : ${message.guild.members.cache.find(r => r.id == user.id)}**\n> ** عدد النقاط المضافة : ${args2}**`)
        .setFooter({ text: member.user.username, iconURL: member.user.displayAvatarURL() })
        .setColor(`${colorE}`)
      log.send({ embeds: [embedLog] })
      log.send(`https://cdn.discordapp.com/attachments/1158491033387143188/1158553572707942523/line1.png?ex=651caa98&is=651b5918&hm=f495392f0a661058295b72c1f1e849e817e2bb714789346a00230eb3592e2001&`)
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "allwarn(+)")) {
    if (message.member.roles.cache.some(r => r.id == 1151903262556049450)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be added**")
      await db.add(`allwarns_${user.id}`, args2)
      let embed = new MessageEmbed()
        .setDescription(`**Done added ${args2} warn points to ${user}**`)
        .setColor(`${colorE}`)
      message.reply({ embeds: [embed] })
      let log = message.guild.channels.cache.find(r => r.id == 1156636136530268160)
      let member = message.guild.members.cache.find(r => r.id == user.id)
      let embedLog = new MessageEmbed()
        .setAuthor({ name: message.member.user.username, iconURL: message.member.user.displayAvatarURL() })
        .setTitle(`** تم اضافة نقطة جديدة**`)
        .setDescription(`> ** المسؤول : ${message.member}**\n> ** الشخص : ${message.guild.members.cache.find(r => r.id == user.id)}**\n> ** عدد النقاط المضافة : ${args2}**`)
        .setFooter({ text: member.user.username, iconURL: member.user.displayAvatarURL() })
        .setColor(`${colorE}`)
      log.send({ embeds: [embedLog] })
      log.send(`https://cdn.discordapp.com/attachments/1158491033387143188/1158553572707942523/line1.png?ex=651caa98&is=651b5918&hm=f495392f0a661058295b72c1f1e849e817e2bb714789346a00230eb3592e2001&`)
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "ticket(-)")) {
    if (message.member.roles.cache.some(r => r.id == 1151903262556049450)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      if (!db.has(`weekuser_${user.id}`)) return message.reply("**This user does not have any points**")
      if (!db.has(`alluser_${user.id}`)) return message.reply("**This user does not have any points**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be removed**")
      await db.subtract(`weekuser_${user.id}`, args2)
      await db.subtract(`alluser_${user.id}`, args2)
      let embed = new MessageEmbed()
        .setDescription(`**Done removed ${args2} ticket points from ${user}**`)
        .setColor(`${colorE}`)
      message.reply({ embeds: [embed] })
      let log = message.guild.channels.cache.find(r => r.id == 1156636136530268160)
      let member = message.guild.members.cache.find(r => r.id == user.id)
      let embedLog = new MessageEmbed()
        .setAuthor({ name: message.member.user.username, iconURL: message.member.user.displayAvatarURL() })
        .setTitle(`** تم ازالة نقطة جديدة**`)
        .setDescription(`> ** المسؤول : ${message.member}**\n> ** الشخص : ${message.guild.members.cache.find(r => r.id == user.id)}**\n> ** عدد النقاط المزالة : ${args2}**`)
        .setFooter({ text: member.user.username, iconURL: member.user.displayAvatarURL() })
        .setColor(`${colorE}`)
      log.send({ embeds: [embedLog] })
      log.send(`https://cdn.discordapp.com/attachments/1158491033387143188/1158553572707942523/line1.png?ex=651caa98&is=651b5918&hm=f495392f0a661058295b72c1f1e849e817e2bb714789346a00230eb3592e2001&`)
    }

  }

});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "warn(+)")) {
    if (message.member.roles.cache.some(r => r.id == 1151903262556049450)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be added**")
      await db.add(`weekwarns_${user.id}`, args2)
      await db.add(`allwarns_${user.id}`, args2)
      let embed = new MessageEmbed()
        .setDescription(`**Done added ${args2} warn points to ${user}**`)
        .setColor(`${colorE}`)
      message.reply({ embeds: [embed] })
      let log = message.guild.channels.cache.find(r => r.id == 1156636136530268160)
      let member = message.guild.members.cache.find(r => r.id == user.id)
      let embedLog = new MessageEmbed()
        .setAuthor({ name: message.member.user.username, iconURL: message.member.user.displayAvatarURL() })
        .setTitle(`** تم اضافة نقطة جديدة**`)
        .setDescription(`> ** المسؤول : ${message.member}**\n> ** الشخص : ${message.guild.members.cache.find(r => r.id == user.id)}**\n> ** عدد النقاط المضافة : ${args2}**`)
        .setFooter({ text: member.user.username, iconURL: member.user.displayAvatarURL() })
        .setColor(`${colorE}`)
      log.send({ embeds: [embedLog] })
      log.send(`https://cdn.discordapp.com/attachments/1158491033387143188/1158553572707942523/line1.png?ex=651caa98&is=651b5918&hm=f495392f0a661058295b72c1f1e849e817e2bb714789346a00230eb3592e2001&`)
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "warn(-)")) {
    if (message.member.roles.cache.some(r => r.id == 1151903262556049450)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      if (!db.has(`weekwarns_${user.id}`)) return message.reply("**This user does not have any points**")
      if (!db.has(`allwarns_${user.id}`)) return message.reply("**This user does not have any points**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be removed**")
      await db.subtract(`weekwarns_${user.id}`, args2)
      await db.subtract(`allwarns_${user.id}`, args2)
      let embed = new MessageEmbed()
        .setDescription(`**Done removed ${args2} warn points from ${user}**`)
        .setColor(`${colorE}`)
      message.reply({ embeds: [embed] })
      let log = message.guild.channels.cache.find(r => r.id == 1156636136530268160)
      let member = message.guild.members.cache.find(r => r.id == user.id)
      let embedLog = new MessageEmbed()
        .setAuthor({ name: message.member.user.username, iconURL: message.member.user.displayAvatarURL() })
        .setTitle(`** تم ازالة نقطة جديدة**`)
        .setDescription(`> ** المسؤول : ${message.member}**\n> ** الشخص : ${message.guild.members.cache.find(r => r.id == user.id)}**\n> ** عدد النقاط المزالة : ${args2}**`)
        .setFooter({ text: member.user.username, iconURL: member.user.displayAvatarURL() })
        .setColor(`${colorE}`)
      log.send({ embeds: [embedLog] })
      log.send(`https://cdn.discordapp.com/attachments/1158491033387143188/1158553572707942523/line1.png?ex=651caa98&is=651b5918&hm=f495392f0a661058295b72c1f1e849e817e2bb714789346a00230eb3592e2001&`)
    }
  }
});

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "mute(-)")) {
    if (message.member.roles.cache.some(r => r.id == 1151903262556049450)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      if (!db.has(`muteweek_${user.id}`)) return message.reply("**This user does not have any points**")
      if (!db.has(`muteall_${user.id}`)) return message.reply("**This user does not have any points**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be removed**")
      await db.subtract(`muteweek_${user.id}`, args2)
      await db.subtract(`muteall_${user.id}`, args2)
      let embed = new MessageEmbed()
        .setDescription(`**Done removed ${args2} mute points from ${user}**`)
        .setColor(`${colorE}`)
      message.reply({ embeds: [embed] })
      let log = message.guild.channels.cache.find(r => r.id == 1156636136530268160)
      let member = message.guild.members.cache.find(r => r.id == user.id)
      let embedLog = new MessageEmbed()
        .setAuthor({ name: message.member.user.username, iconURL: message.member.user.displayAvatarURL() })
        .setTitle(`** تم ازالة نقطة جديدة**`)
        .setDescription(`> ** المسؤول : ${message.member}**\n> ** الشخص : ${message.guild.members.cache.find(r => r.id == user.id)}**\n> ** عدد النقاط المزالة : ${args2}**`)
        .setFooter({ text: member.user.username, iconURL: member.user.displayAvatarURL() })
        .setColor(`${colorE}`)
      log.send({ embeds: [embedLog] })
      log.send(`https://cdn.discordapp.com/attachments/1158491033387143188/1158553572707942523/line1.png?ex=651caa98&is=651b5918&hm=f495392f0a661058295b72c1f1e849e817e2bb714789346a00230eb3592e2001&`)
    }
  }
});

































client.on("messageCreate", message => {
  if (message.content == prefix + "claim") {

    if (!message.member.roles.cache.some(r => r.id == perms)) {
      return message.reply("**للأسف لا تمتلك صلاحية**");
    }
    let embed = new MessageEmbed()
      .setDescription("**إضغط على الزر لتصبح مسؤول التذكرة**")
      .setColor(`${colorE}`)
    let row = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Claim")
        .setCustomId("claim")
        .setStyle("SECONDARY")
    )
    message.delete()
    message.channel.send({ embeds: [embed], components: [row] }).then(m => db.set(`message_${message.channel.id}`, m.id))

  }
});

///////////////
client.on('messageCreate', async (message) => {
  if (message.content.startsWith('$setr')) {
    let args = message.content.split(" ")
    const roles = message.mentions.roles.first() || message.guild.roles.cache.find((x) => x.id == args[1]) || message.guild.roles.cache.find((x) => x.name == message.content.split(' ').slice(1).join(' '));
    if (!message.member.roles.cache.some(r => r.id == 1168291747961524236)) {
      return message.reply("**للأسف لا تمتلك صلاحية**");
    }
    if (!args) return message.reply("**حدد رتبة !**")
    if (!roles) return message.reply("**حدد رتبة !**")


    const members = roles.members.map((e) => `<:222:1158891999349461093> |  <@${e.user.id}>`);
    const membersCount = roles.members.size;
    const MAX_LENGTH = 2000;
    const chunks = [];
    let currentChunk = '';
    for (const member of members) {
      if (currentChunk.length + member.length + 1 <= MAX_LENGTH) {
        currentChunk += `${member}\n`;
      } else {
        chunks.push(currentChunk);
        currentChunk = `${member}\n`;
      }
    }
    if (currentChunk) {
      chunks.push(currentChunk);
    }
    for (let i = 0; i < chunks.length; i++) {
      const content = i === chunks.length - 1 ? `**${chunks[i]}\nعددهم : \`${membersCount}\`**` : `**${chunks[i]}**`;
      await message.reply({ content });
    }
  }
});

// == [ Voice ]

const { joinVoiceChannel, createAudioPlayer } = require('@discordjs/voice');

const voiceChannelId = '1185911217097801759';
const guildId = '1168290159167557714';

client.on('ready', () => {
  const voiceChannel = client.channels.cache.get(voiceChannelId);
  if (!voiceChannel) {
    return console.log(`Voice channel ${voiceChannelId} not found.`);
  }

  const connection = joinVoiceChannel({
    channelId: voiceChannelId,
    guildId: guildId,
    adapterCreator: voiceChannel.guild.voiceAdapterCreator,
  });

  connection.on('error', (error) => {
    console.error(`Error joining voice channel: ${error.message}`);
  });

  connection.on('stateChange', (state) => {
    console.log(`Connection state changed: ${state.status}`);
  });

  const audioPlayer = createAudioPlayer();
  connection.subscribe(audioPlayer);

  console.log(`Joined voice channel ${voiceChannel.name}!`);
});
// ////////////////

client.on("messageCreate", (message) => {
  if (message.channel.id == `${OrderRoom}`) {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix + "طلب")) return false;
    setTimeout(() => {
      message.delete();
    }, 3000);
  }
});

client.on("messageCreate", (message) => {
  if (message.content.startsWith(prefix + "طلب")) {
    if (message.channel.id == `${OrderRoom}`) {
      let args = message.content.split(" ").slice(1).join(" ");
      if (!args) {
        message.reply(`**طريقة الطلب \`:\` ${prefix}طلب + طلبك**`).then((m) => {
          setTimeout(() => {
            m.delete();
            message.delete();
          }, 3000);
        });
      }
      if (args) {
        let row = new MessageActionRow().addComponents(
          new MessageButton()
            .setLabel("منتجات 🎮")
            .setCustomId("mon")
            .setStyle("SECONDARY"),
          new MessageButton()
            .setLabel("تصاميم 🎨")
            .setCustomId("des")
            .setStyle("SECONDARY"),
          new MessageButton()
            .setLabel("برمجيات 💻")
            .setCustomId("dev")
            .setStyle("SECONDARY"),
          new MessageButton()
            .setLabel("الغاء ❌")
            .setCustomId("can")
            .setStyle("DANGER"),
        );
        let embed = new MessageEmbed()
          .setTitle(
            "**__إختر المكان الصحيح لطلبك :__                                                                  **",
          )
          .setDescription(
            `**منتجات : 🎮                                                                                        
- مثل : نيترو , حسابات , الخ ..
تصاميم : 🎨
- مثل صورة , بنر , الخ ..
برمجيات : 💻
- مثل : بوت , كود , الخ ..
إلغاء الطلب : ❌
- لإلغاء طلبك، عدم إرساله للبائعين .**`,
          )
          .setColor(`${colorE}`);
        db.set(`talab_${message.member.id}`, args);
        message.channel.send({
          content: `${message.member}`,
          embeds: [embed],
          components: [row],
        });
        message.delete();
      }
    }
  }
});

client.on("interactionCreate", (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId == "mon") {
      let talab = db.get(`talab_${interaction.member.id}`);
      let number = db.fetch(`OrderMsg_${interaction.guild.id}`);
      if (!number || number === null) number = 1;
      db.add(`OrderMsg_${interaction.guild.id}`, 1);
      const row = new MessageActionRow().addComponents(
        new MessageButton()
          .setLabel("Delete")
          .setCustomId("del")
          .setStyle("DANGER"),
      );
      let mon = new MessageEmbed()
        .setTitle(
          "> **الطلب الجديد :                                                                  **",
        )
        .setAuthor({
          name: `${interaction.member.user.username}`,
          iconURL: interaction.member.displayAvatarURL(),
        })
        .setDescription(`**${talab}**`)
        .setColor(`${colorE}`)
        .setThumbnail(interaction.guild.iconURL())
        .setTimestamp()
        .setFooter({
          text: `${interaction.guild.name}`,
          iconURL: interaction.guild.iconURL(),
        });
      interaction.guild.channels.cache.get(`${Montagat}`).send({
        content: `<@&1185911099581812756>\n**صاحب الطلب : ${interaction.member}\nرقم الطلب : ${number}**`,
        embeds: [mon],
        components: [row],
      });
      interaction.guild.channels.cache
        .get(`${Montagat}`)
        .send({ content: `${lineLink}` });
      interaction.reply(
        "> **تم إرسال طلبك إلى البائعين، الرجاء الإنتظار ليتواصل معك أحدهم .**",
      );
      interaction.message.delete().then((reply) => {
        setTimeout(() => {
          interaction.deleteReply().catch((err) => {});
        }, 5000);
      });
      db.delete(`talab_${interaction.member.id}`);
    }
    if (interaction.customId == "des") {
      let talab = db.get(`talab_${interaction.member.id}`);

      let number = db.fetch(`OrderMsg_${interaction.guild.id}`);
      if (!number || number === null) number = 1;
      db.add(`OrderMsg_${interaction.guild.id}`, 1);
      const row = new MessageActionRow().addComponents(
        new MessageButton()
          .setLabel("Delete")
          .setCustomId("del")
          .setStyle("DANGER"),
      );
      let mon = new MessageEmbed()
        .setTitle(
          "> **الطلب الجديد :                                                                  **",
        )
        .setAuthor({
          name: `${interaction.member.user.username}`,
          iconURL: interaction.member.displayAvatarURL(),
        })
        .setDescription(`**${talab}**`)
        .setColor(`${colorE}`)
        .setThumbnail(interaction.guild.iconURL())
        .setTimestamp()
        .setFooter({
          text: `${interaction.guild.name}`,
          iconURL: interaction.guild.iconURL(),
        });
      interaction.guild.channels.cache.get(`${Designer}`).send({
        content: `<@&1185911099581812756> \n**صاحب الطلب : ${interaction.member}\nرقم الطلب : ${number}**`,
        embeds: [mon],
        components: [row],
      });
      interaction.guild.channels.cache.get(`${Designer}`)
        interaction.channel.send(`https://cdn.discordapp.com/attachments/1185657301806358538/1185932073073123418/rider_2.png?ex=6591684f&is=657ef34f&hm=9bc801ced6b13a95e23718395574e274303ca87ea8aa13893f99ed24ce7e76c1&`);
      interaction.reply(
        "> **تم إرسال طلبك إلى المصممين، الرجاء الإنتظار ليتواصل معك أحدهم .**",
      );
      interaction.message.delete().then((reply) => {
        setTimeout(() => {
          interaction.deleteReply().catch(console.error);
        }, 5000);
      });
      db.delete(`talab_${interaction.member.id}`);
    }
    if (interaction.customId == "dev") {
      let talab = db.get(`talab_${interaction.member.id}`);

      let number = db.fetch(`OrderMsg_${interaction.guild.id}`);
      if (!number || number === null) number = 1;
      db.add(`OrderMsg_${interaction.guild.id}`, 1);
      const row = new MessageActionRow().addComponents(
        new MessageButton()
          .setLabel("Delete")
          .setCustomId("del")
          .setStyle("DANGER"),
      );
      let mon = new MessageEmbed()
        .setTitle(
          "> **الطلب الجديد :                                                                  **",
        )
        .setAuthor({
          name: `${interaction.member.user.username}`,
          iconURL: interaction.member.displayAvatarURL(),
        })
        .setDescription(`**${talab}**`)
        .setColor(`${colorE}`)
        .setThumbnail(interaction.guild.iconURL())
        .setTimestamp()
        .setFooter({
          text: `${interaction.guild.name}`,
          iconURL: interaction.guild.iconURL(),
        });
      interaction.guild.channels.cache.get(`${Developer}`).send({
        content: `<@&1185911099581812756> \n**صاحب الطلب : ${interaction.member}\nرقم الطلب : ${number}**`,
        embeds: [mon],
        components: [row],
      });
      interaction.guild.channels.cache
        .get(`${Developer}`)
        .send({ content: `${lineLink}` });
      interaction.reply(
        "> **تم إرسال طلبك إلى المبرمجين، الرجاء الإنتظار ليتواصل معك أحدهم .**",
      );
      interaction.message.delete().then((reply) => {
        setTimeout(() => {
          interaction.deleteReply().catch(console.error);
        }, 5000);
      });
      db.delete(`talab_${interaction.member.id}`);
    }
    if (interaction.customId == "can") {
      interaction.reply("> **تم إلغاء طلبك بنجاح .**");
      interaction.message.delete().then((reply) => {
        setTimeout(() => {
          interaction.deleteReply().catch(console.error);
        }, 5000);
      });
    }
    if (interaction.customId == "del") {
      if (
        interaction.member.roles.cache.some((r) => r.id == 1185911041595547689)
      ) {
        interaction.message.delete();
        interaction.reply({
          content: `**${emjTrue} لقد تم حذف الطلب بنجاح .**`,
          ephemeral: true,
        });
      }
    }
  }
});

//
client.on("interactionCreate", async interaction => {
  if (interaction.customId == "manshorat") {
    const message = await interaction.channel.messages.fetch(interaction.message.id);
    let embed3 = new MessageEmbed()
      .setDescription(`** Manter \`S\` Manshorat・المنشورات المميزه

>  Manshor Mention Here・منشور منشن هير
>  Price: 40k Credit
    
>  Manshor Mention Everyone・منشور منشن للكل
>  Price: 80k Credit**`)
      .setColor(`${colorE}`)
    message.edit({ embeds: [embed3], components: [] })
    setTimeout(() => {
      interaction.channel.send(`**التحويل فقط لـ <@611364135510343748> .**`);
    }, 500);
  }
});

//
client.on("interactionCreate", async interaction => {
  if (interaction.customId == "rooms") {
    const message = await interaction.channel.messages.fetch(interaction.message.id);
    let fi = interaction.guild.channels.cache.filter(ch => ch.name.startsWith("〢↯・"))
    var f;
    if (fi.size < 10) {
      f = "مفتوح"
    }
    if (fi.size >= 10) {
      f = "مغلق"
    }
    let embed3 = new MessageEmbed()
      .setDescription(`** Manter \`S\` Private Rooms・الرومات الخاصة

>  Role: <@&1151903348816089118>
>  Price: 80k Credit Weekly
>  روم خاص بـ اسمك
>  تقدر تطلب و تبيع
>  تقدر تمنشن هير كل ساعتين
>  النشر في الروم بمفردك

>  الرومات المتوفرة : ${fi.size} 
>  \`${f}\` **`)
      .setColor(`${colorE}`)
    message.edit({ embeds: [embed3], components: [] })
    setTimeout(() => {
      interaction.channel.send(`**التحويل فقط لـ <@611364135510343748> .**`);
    }, 500);
  }
});


client.on('messageCreate', message => {
  if (message.content === prefix + 'rooms') {
    if (!message.member.roles.cache.some(r => r.id === '1185911041595547689')) {
      return message.reply('**للأسف لا تمتلك صلاحية**');
    }
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.member.user.username, message.member.user.displayAvatarURL())
      .setDescription(`> **${emjTrue} = ارجاع الرومات**\n\n> **${emjFalse} = اخفاء الرومات**`)
      .setTimestamp()
      .setColor(colorE)
      .setFooter(message.guild.name, message.guild.iconURL());
    let row = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setEmoji(emjTrue)
        .setStyle('SECONDARY')
        .setCustomId('show'),
      new Discord.MessageButton()
        .setEmoji(emjFalse)
        .setStyle('SECONDARY')
        .setCustomId('hide')
    );
    message.reply({ embeds: [embed], components: [row] }).then(m => {
      db.set(`m_${message.guild.id}`, m.id);
    });
  }
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'show') {
    const guild = client.guilds.cache.get('1185910920334032956');
    const channelIds = [
      '1185911464482058250',
      '1185911470253416540',
      '1185911471880802384',
      '1185911477736046682',
      '1185911478784639036',
      '1185911485176746045',
      '1185911486514733097',
      '1185911487701721198',
      '1185911494504890458',
      '1185911495847059597',
      '1185911502104956968',
      '1185911503463911455',
      '1185911509667299388',
      '1185911510749433967',
      '1185911511835754586',
      '1185911517913297010'
    ];
    const everyoneRole = guild.roles.cache.get('1185910920334032956');

    channelIds.forEach(channelId => {
      const channel = guild.channels.cache.get(channelId);
      if (channel) {
        channel.permissionOverwrites.edit(everyoneRole, {
          VIEW_CHANNEL: true,
        });
        channel.bulkDelete(100).catch(error => {
          console.log(`Error deleting messages in channel ${channel.name}: ${error}`);
        });
      } else {
        console.log(`Channel ${channelId} not found`);
      }
    });

    let embed = new Discord.MessageEmbed()
      .setTitle("Rooms was Opened !!")
      .setDescription("**مرحبًا ، تم إظهار رومات البيـ3 الآن ، وستغلق في الساعة 12:00 ليلاً بتوقيت مصر**")
      .setColor("GREEN");

 guild.channels.cache.get('1185911463144067173').send({ embeds: [embed], content: '|| @here ||' })
   guild.channels.cache.get('1185911463144067173').send(`${lineLink}`)
  .then(() => {
    console.log(`Opened channels in guild ${guild.name}`);
  })
  .catch((error) => {
    console.log(`Error opening channels: ${error}`);
  });
  } else if (interaction.customId === 'hide') {
    const guild = client.guilds.cache.get('1185910920334032956');
    const channelIds = [
      '1185911464482058250',
      '1185911470253416540',
      '1185911471880802384',
      '1185911477736046682',
      '1185911478784639036',
      '1185911485176746045',
      '1185911486514733097',
      '1185911487701721198',
      '1185911494504890458',
      '1185911495847059597',
      '1185911502104956968',
      '1185911503463911455',
      '1185911509667299388',
      '1185911510749433967',
      '1185911511835754586',
      '1185911517913297010'
    ];
    const everyoneRole = guild.roles.cache.get('1185910920334032956');

    channelIds.forEach(channelId => {
      const channel = guild.channels.cache.get(channelId);
      if (channel) {
        channel.permissionOverwrites.edit(everyoneRole, {
          VIEW_CHANNEL: false,
        });
      } else {
        console.log(`Channel ${channelId} not found`);
      }
    });

    let embed = new Discord.MessageEmbed()
      .setTitle("Rooms was Closed !!")
      .setDescription("**مرحبًا ، تم غلق رومات البيـ3 الآن ، وسيتم إظهارها في الساعة 8:00 صباحاً بتوقيت مصر**")
      .setColor("RED");

guild.channels.cache.get('1185911463144067173').send({ embeds: [embed], content: '|| @here ||' })
     guild.channels.cache.get('1185911463144067173').send(`${lineLink}`)

  .then(() => {
    console.log(`Closed channels in guild ${guild.name}`);
  })
  .catch((error) => {
    console.log(`Error closing channels: ${error}`);
  });
  }
});

// ///////////

// client.on('messageCreate', async message => {
//   if (message.content.startsWith('$say')) {
//     const content = message.content.slice('$say'.length).trim();

//     const isAdmin = message.member.permissions.has('ADMINISTRATOR');

//     if (!isAdmin) {
//       return message.reply('You do not have permission to use this command.');
//     }

//     const embed = new MessageEmbed()
//       .setColor('#380C61')
//       .setDescription(content)
//       .setTimestamp();

//     message.channel.send({ embeds: [embed] });
//   }
// });


client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "warns") || message.content.startsWith(prefix + "تحذيرات")) {
    let user = message.mentions.members.first()
    if (user) {
      let member = message.guild.members.cache.find(u => u == user.id)
      var warns = db.get(`weekwarns_${user.id}`)
      var allwarns = db.get(`allwarns_${user.id}`)
      if (!warns) {
        warns = 0
      }
      if (!allwarns) {
        allwarns = 0
      }
      let embed2 = new MessageEmbed()
        .setTitle(`${member.user.tag}, Warns :`)
        .setDescription(`> **All Warns : \`${allwarns}\`**\n> **Week Warns : \`${warns}\`**`)
        .setColor(`${colorE}`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed2] })
    }
    if (!user) {
      var warns = db.get(`weekwarns_${message.member.id}`)
      var allwarns = db.get(`allwarns_${message.member.id}`)
      if (!warns) {
        warns = 0
      }
      if (!allwarns) {
        allwarns = 0
      }
      let embed4 = new MessageEmbed()
        .setTitle(`${message.member.user.tag}, Warns :`)
        .setDescription(`> **Week Warns : \`${warns}\`**\n> **All Warns : \`${allwarns}\`**`)
        .setColor(`${colorE}`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed4] })
    }
  }
});

////////
client.on('messageCreate', async (message) => {
  if (message.content.startsWith('$repoints')) {
    if (!message.member.roles.cache.some(r => r.id == 1151903262556049450)) {
      return message.reply("**للأسف لا تمتلك صلاحية**");
    }
    try {
      const memberList = await message.guild.members.fetch();
      let usersData = [];
      memberList.forEach((member) => {
        if (member.roles.cache.has('1151903317811810444')) {
          var points = db.get(`weekuser_${member.id}`);
          var weekwarns = db.get(`weekwarns_${member.id}`);
          var weekmute = db.get(`muteweek_${member.id}`);
          points = parseInt(points) || 0;
          weekwarns = parseInt(weekwarns) || 0;
          weekmute = parseInt(weekmute) || 0;
          if (points > 0 || weekwarns > 0 || weekmute > 0) {
            usersData.push({ user: member.user, points, weekwarns, weekmute, total: points + weekwarns + weekmute });
          }
        }
      });
      usersData.sort((a, b) => b.total - a.total);
      const embed = new MessageEmbed()
        .setColor(`${colorE}`)
        .setTitle('**Top 10 Week :**');
      const topUsers = usersData.slice(0, 10);
      topUsers.forEach((user, index) => {
        embed.addField(`**#${index + 1} | **`, `**<@${user.user.id}> - ${user.points} Tickets - ${user.weekwarns} Warns - ${user.weekmute} Mutes - All Week : ${user.points + user.weekwarns + user.weekmute} **`);
      });
      const channel = message.guild.channels.cache.get('1151903482559864973');
      if (channel && channel.isText()) {
        await channel.send({ embeds: [embed] });
        await message.reply('**تم إعادة تعيين نقاط الأسبوع بنجاح.**');
      }
      usersData.forEach((user) => {
        if (user.user.id !== client.user.id) {
          if (db.has(`feedback_${user.user.id}`)) {
            db.delete(`feedback_${user.user.id}`)
          }
          if (user.points === 0 && user.weekwarns === 0 && user.weekmute === 0) {
            db.delete(`weekuser_${user.user.id}`);
            db.delete(`weekwarns_${user.user.id}`);
            db.delete(`muteweek_${user.user.id}`);
          } else {
            db.set(`muteweek_${user.user.id}`, 0);
            db.set(`weekwarns_${user.user.id}`, 0);
            db.set(`weekuser_${user.user.id}`, 0);
          }
        }
      });
    } catch (error) {
      console.error('حدث خطأ :', error);
    }
  }
});

// //////////////
client.on('messageCreate', async (message) => {
  if (message.content.startsWith('$top') || message.content.startsWith('$توب')) {
    try {
      const memberList = await message.guild.members.fetch();
      let usersData = [];
      memberList.forEach((member) => {
        if (member.roles.cache.has('1151903317811810444')) {
          var points = db.get(`alluser_${member.id}`);
          var weekwarns = db.get(`allwarns_${member.id}`);
          var weekmute = db.get(`muteall_${member.id}`);
          points = parseInt(points) || 0;
          weekwarns = parseInt(weekwarns) || 0;
          weekmute = parseInt(weekmute) || 0;
          if (points > 0 || weekwarns > 0 || weekmute > 0) {
            usersData.push({ user: member.user, points, weekwarns, weekmute, totalPoints: points + weekwarns + weekmute });
          }
        }
      });
      usersData.sort((a, b) => b.totalPoints - a.totalPoints);
      const embed = new MessageEmbed()
        .setColor(`${colorE}`)
        .setTitle('**Top 10 Points :**');
      const topUsers = usersData.slice(0, 10);
      if (topUsers.length === 0) {
        embed.setDescription('**لا يوجد أعضاء يمتلكون نقاط .**');
      } else {
        topUsers.forEach((user, index) => {
          embed.addField(`**#${index + 1} | **`, `**<@${user.user.id}> - ${user.points} Tickets - ${user.weekwarns} Warns - ${user.weekmute} Mutes - All Top : ${user.points + user.weekwarns + user.weekmute} **`);
        });
      }
      let rowtp = new Discord.MessageActionRow().addComponents(
        new Discord.MessageButton()
          .setLabel("All")
          .setCustomId("altop")
          .setStyle("SECONDARY")
          .setDisabled(true))
        .addComponents(
          new Discord.MessageButton()
            .setLabel("Week")
            .setCustomId("wetop")
            .setStyle("SECONDARY")
            .setDisabled(false))
      await message.channel.send({ embeds: [embed], components: [rowtp] })
    } catch (error) {
      console.error('حدث خطأ :', error);
    }
  }
});
client.on("interactionCreate", async interaction => {
  if (interaction.customId == "wetop") {
    const message = await interaction.channel.messages.fetch(interaction.message.id);
    try {
      const memberList = await message.guild.members.fetch();
      let usersData = [];
      memberList.forEach((member) => {
        if (member.roles.cache.has('1151903317811810444')) {
          var points = db.get(`weekuser_${member.id}`);
          var weekwarns = db.get(`weekwarns_${member.id}`);
          var weekmute = db.get(`muteweek_${member.id}`);

          points = parseInt(points) || 0;
          weekwarns = parseInt(weekwarns) || 0;
          weekmute = parseInt(weekmute) || 0;
          if (points > 0 || weekwarns > 0 || weekmute > 0) {
            usersData.push({ user: member.user, points, weekwarns, weekmute, totalPoints: points + weekwarns + weekmute });
          }
        }
      });
      usersData.sort((a, b) => b.totalPoints - a.totalPoints);
      const embed = new MessageEmbed()
        .setColor(`${colorE}`)
        .setTitle('**Top 10 Week :**');
      const topUsers = usersData.slice(0, 10);
      if (topUsers.length === 0) {
        embed.setDescription('**لا يوجد أعضاء يمتلكون نقاط في هذا الإسبوع .**');
      } else {
        topUsers.forEach((user, index) => {
          embed.addField(`**#${index + 1} | **`, `**<@${user.user.id}> - ${user.points} Tickets - ${user.weekwarns} Warns - ${user.weekmute} Mutes - All Week : ${user.points + user.weekwarns + user.weekmute} **`);
        });
      }
      let rowtpreply = new Discord.MessageActionRow().addComponents(
        new Discord.MessageButton()
          .setLabel("All")
          .setCustomId("altop")
          .setStyle("SECONDARY")
          .setDisabled(false))
        .addComponents(
          new Discord.MessageButton()
            .setLabel("Week")
            .setCustomId("wetop")
            .setStyle("SECONDARY")
            .setDisabled(true))
      await message.edit({ embeds: [embed], components: [rowtpreply] });
    } catch (error) {
      console.error('حدث خطأ :', error);
    }
  }
})
client.on("interactionCreate", async interaction => {
  if (interaction.customId == "altop") {
    const message = await interaction.channel.messages.fetch(interaction.message.id);
    try {
      const memberList = await message.guild.members.fetch();
      let usersData = [];
      memberList.forEach((member) => {
        if (member.roles.cache.has('1151903317811810444')) {
          var points = db.get(`alluser_${member.id}`);
          var weekwarns = db.get(`allwarns_${member.id}`);
          var weekmute = db.get(`muteall_${member.id}`);
          points = parseInt(points) || 0;
          weekwarns = parseInt(weekwarns) || 0;
          weekmute = parseInt(weekmute) || 0;
          if (points > 0 || weekwarns > 0 || weekmute > 0) {
            usersData.push({ user: member.user, points, weekwarns, weekmute, totalPoints: points });
          }
        }
      });
      usersData.sort((a, b) => b.totalPoints - a.totalPoints);
      const embed = new MessageEmbed()
        .setColor(`${colorE}`)
        .setTitle('**Top 10 Points :**');
      const topUsers = usersData.slice(0, 10);
      if (topUsers.length === 0) {
        embed.setDescription('**لا يوجد أعضاء يمتلكون نقاط .**');
      } else {
        topUsers.forEach((user, index) => {
          embed.addField(`**#${index + 1} | **`, `**<@${user.user.id}> - ${user.points} Tickets - ${user.weekwarns} Warns - ${user.weekmute} Mutes - All Points : ${user.points + user.weekwarns + user.weekmute} **`);
        });
      }
      let rowtpreply = new Discord.MessageActionRow().addComponents(
        new Discord.MessageButton()
          .setLabel("All")
          .setCustomId("altop")
          .setStyle("SECONDARY")
          .setDisabled(true))
        .addComponents(
          new Discord.MessageButton()
            .setLabel("Week")
            .setCustomId("wetop")
            .setStyle("SECONDARY")
            .setDisabled(false))
      await message.edit({ embeds: [embed], components: [rowtpreply] });
    } catch (error) {
      console.error('حدث خطأ :', error);
    }
  }

})

///////////
let messageCount = 0;
client.on('messageCreate', async (message) => {
  if (message.content.startsWith('$start')) {
    if (!message.member.roles.cache.some(r => r.id == 1168291747961524236)) {
      return message.reply("**للأسف لا تمتلك صلاحية**");
    }
    try {
      const memberList = await message.guild.members.fetch();
      memberList.forEach(async (member) => {
        if (member.roles.cache.has('1151903317811810444')) {
          var points = db.get(`weekuser_${member.id}`)
          var weekwarns = db.get(`weekwarns_${member.id}`)
          var weekmute = db.get(`muteweek_${member.id}`)
          points = parseInt(points) || 0;
          weekwarns = parseInt(weekwarns) || 0;
          weekmute = parseInt(weekmute) || 0;
          messageCount++;
          var roleToAssign = "1151903317811810444";
          var roleToAssignHighStaff = "1151903303274332320";
          if (!member.roles.cache.some(r => r.id == 1151903317811810444)) {
            if (points + weekwarns + weekmute >= 100) {
              roleToAssign = "دبل ترقية";
            } else if (points + weekwarns + weekmute >= 50 && points + weekwarns + weekmute <= 99) {
              roleToAssign = "ترقية";
            } else if (points + weekwarns + weekmute >= 15 && points + weekwarns + weekmute <= 49) {
              roleToAssign = "سكب";
            } else if (points + weekwarns + weekmute < 15) {
              roleToAssign = "تخفيض";
            }
          }
          if (member.roles.cache.some(r => r.id == 1151903303274332320)) {
            if (points + weekwarns + weekmute >= 130) {
              roleToAssignHighStaff = "دبل ترقية";
            } else if (points + weekwarns + weekmute >= 90 && points + weekwarns + weekmute <= 129) {
              roleToAssignHighStaff = "ترقية";
            } else if (points + weekwarns + weekmute >= 20 && points + weekwarns + weekmute < 90) {
              roleToAssignHighStaff = "سكب";
            }
            else if (points + weekwarns + weekmute < 20) {
              roleToAssignHighStaff = "تخفيض";
            }
          }
          let replyMessage = `> ** الإداري : <@${member.user.id}>**\n> ** الإداري رقم : ${messageCount}**\n** عدد التكتات : ${points}\n عدد التحذيرات : ${weekwarns}\n عدد الميوتات : ${weekmute}\n مجموع النقاط الكلي : ${points + weekwarns + weekmute}**`;
          if (!member.roles.cache.some(r => r.id == 1151903317811810444)) {
            if (roleToAssign !== "") {
              replyMessage += `\n**<:141414:1158892392217313351> النتيجة : ${roleToAssign}**`;
            }
          }
          if (member.roles.cache.some(r => r.id == 1151903303274332320)) {
            if (roleToAssignHighStaff !== "") {
              replyMessage += `\n**<:141414:1158892392217313351> النتيجة : ${roleToAssignHighStaff}**`;
            }
          }

          await message.channel.send(replyMessage);
        }
      });
    } catch (error) {
      console.error('خطأ :', error);
    }
  }
});

// ////////////
client.on("messageCreate", async message => {
  const args = message.content.split(" ")
  const now = new Date()
  if (message.content.startsWith(prefix + 'sub')) {
    if (message.member.roles.cache.some(r => r.id == 1185911052018397304)) {
      let prv = message.guild.roles.cache.find(r => r.id == 1185911052018397304)
      let Emoji = message.guild.roles.cache.find(r => r.name == "- MatS")
      let discordstaff = message.guild.roles.cache.find(r => r.name == "♛ || Discord Staff")
      let args = message.content.split(" ")
      let member = message.mentions.members.first() || message.guild.members.cache.find(r => r.id == args[1])
      if (!args[1]) return message.reply(`${emjFalse} | **منشن شخص !**`)
      if (!member) return message.reply(`${emjFalse} | **منشن شخص !**`)
      if (db.has(`prvuser_${member.id}`)) return message.reply(`${emjFalse} | **هذا الشخص يمتلك بالفعل روم خاص**`)
      if (!args[2]) return message.reply(`${emjFalse} | **حدد مدة الروم !**`)
      if (!args[2].endsWith("d")) {
        if (!args[2].endsWith("h")) {
          if (!args[2].endsWith("m")) {
            return message.reply(`${emjFalse}** | حدد الوقت بالأيام - بالساعات أو بالدقائق**`)
          }
        }
      }
      if (isNaN(args[2][0])) return message.reply(`${emjFalse} | **حدد وقت صحيح !**`)

      message.reply(`${emjTrue} **| تم إنشاء روم خاص لـ ${member} لمدة \`${args[2]}\`**`)

      let embed = new Discord.MessageEmbed()
        .setDescription(`** Manter \`S\` Private Rooms・الرومات الخاصه**\n\n> ** صاحب الروم : <@${member.id}> **
  
> ** صنع بواسطة : ${message.member} **
  
> ** صنع في : <t:${Math.floor(now.getTime() / 1000)}:d> **
  
> ** ينتهي في : <t:${Math.floor((now.getTime() + ms(args[2])) / 1000)}:R> **

> ** مدة الروم : ${args[2]} **
`)
        .setColor(`${colorE}`)
      let mm = await message.guild.channels.create(`〢↬・${member.user.username}`, { type: "text" })
        .then(async m => {
          m.setParent(message.guild.channels.cache.find(r => r.id == 1185911147044552754))
          member.roles.add([prv]).catch(err => { })
          db.set(`prvuser_${member.id}`, member.id)
          db.set(`prvroom_${m.id}`, member.id)
          m.permissionOverwrites.edit(message.guild.roles.everyone, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false
          })

          m.permissionOverwrites.edit(Emoji, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: true
          })
          m.permissionOverwrites.edit(discordstaff, {
            MANAGE_MESSAGES: true,
          })
          m.permissionOverwrites.edit(member.id, {
            SEND_MESSAGES: true,
            MENTION_EVERYONE: true,
            ATTACH_FILES: true
          })

          m.send({ content: `<@${member.id}>`, embeds: [embed] })
          db.push(`room`, {
            server: message.guild.id,
            id: member.id,
            endsAt: Date.now() + ms(args[2]),
            channelid: m.id
          })
        });
    }
  }
});

async function saleh() {
  if (db.has(`room`)) {
    const data = await db.get(`room`)
    for (const x of data) {
      let end = x.endsAt
      let g = await x.server
      if (end < new Date()) {
        const guild = await client.guilds.cache.get(g)
        const channel = await guild.channels.cache.find(r => r.id == x.channelid)
        await db.set(`enduser_${x.id}`, x.id)
        await db.set(`endroom_${x.channelid}`, x.channelid)

        await channel.bulkDelete(100);


        const embed = new Discord.MessageEmbed()
          .setDescription(`** Manter S Rooms Ended・إنتهاء الروم**\n> ** لقد انتهت مدة هذا الروم، لديك مهلة 24 ساعه لتجديده ..**\n> ** للتجديد تواصل مع <#1151903472560636014> .**`)
          .setColor(`${colorE}`)
          .setTimestamp()
        channel.permissionOverwrites.edit(guild.members.cache.get(x.id), {
          SEND_MESSAGES: false,
        })
        await channel.send({ content: `<@${x.id}>`, embeds: [embed] })

        const index = data.indexOf(x);
        if (index !== -1) {
          data.splice(index, 1);
          await db.set('room', data);
        }
      }
    }
  }
}
setInterval(async () => {
  saleh()
}, 10000)

client.on("messageCreate", async message => {
  const args = message.content.split(" ")
  const now = new Date()
  if (message.content.startsWith(prefix + 'renew')) {
    if (message.member.roles.cache.some(r => r.id == 1185911052018397304)) {
      let prv = message.guild.roles.cache.find(r => r.id == 1185911052018397304)

      let member = message.mentions.members.first() || message.guild.members.cache.find(r => r.id == args[1])
      let channel = message.mentions.channels.first() || message.guild.channels.cache.find(r => r.id == args[2])
      if (!args[1]) return message.reply(`${emjFalse} | **منشن شخص !**`)
      if (!member) return message.reply(`${emjFalse} | **منشن شخص !**`)
      if (!channel) return message.reply(`${emjFalse} | **منشن الروم !**`)
      if (!args[2]) return message.reply(`${emjFalse} | **منشن الروم !**`)

      if (!args[3]) return message.reply(`${emjFalse} | **حدد مدة الروم !**`)
      if (!args[3].endsWith("d")) {
        if (!args[3].endsWith("h")) {
          if (!args[3].endsWith("m")) {
            return message.reply(`${emjFalse}** | حدد الوقت بالأيام - بالساعات أو بالدقائق**`)
          }
        }
      }
      if (isNaN(args[3][0])) return message.reply(`${emjFalse} | **حدد وقت صحيح !**`)

      if (!db.has(`enduser_${member.id}`)) return message.reply(`${emjFalse} | **هذا الشخص لا يمتلك روم منتهي**`)
      if (!db.has(`endroom_${channel.id}`)) return message.reply(`${emjFalse} | **هذا الروم ليس منتهي**`)

      message.reply(`${emjTrue} **| تم تجديد الروم ${channel} لـ ${member} لمدة \`${args[3]}\`**`)
      db.set(`prvuser_${member.id}`, member.id)
      db.set(`prvroom_${channel.id}`, member.id)
      let embed = new Discord.MessageEmbed()
        .setDescription(`** Manter \`S\` Private Rooms・الرومات الخاصه**\n\n> ** صاحب الروم : <@${member.id}> **
  
> ** تم التجديد بواسطة : ${message.member} **
  
> ** تم التجديد في : <t:${Math.floor(now.getTime() / 1000)}:d> **
  
> ** ينتهي في : <t:${Math.floor((now.getTime() + ms(args[3])) / 1000)}:R> **

> ** مدة الروم : ${args[3]} **
`)
        .setColor(`${colorE}`)
      channel.bulkDelete(100)
      member.roles.add([prv]).catch(err => { })
      db.delete(`enduser_${member.id}`)
      db.delete(`endroom_${channel.id}`)
      channel.permissionOverwrites.edit(member.id, {
        SEND_MESSAGES: true
      })
      channel.send({ content: `<@${member.id}>`, embeds: [embed] })
      db.push(`room`, {
        server: message.guild.id,
        id: member.id,
        endsAt: Date.now() + ms(args[3]),
        channelid: channel.id
      })
    }
  }
});

client.on("messageCreate", async message => {
  const args = message.content.split(" ")
  if (message.content.startsWith(prefix + 'close')) {
    if (message.member.roles.cache.some(r => r.id == 1185911052018397304)) {
      let prv = message.guild.roles.cache.find(r => r.id == 1185911052018397304)
      let member = message.mentions.members.first() || message.guild.members.cache.find(r => r.id == args[1])
      let channel = message.mentions.channels.first() || message.guild.channels.cache.find(r => r.id == args[2])
      if (!args[1]) return message.reply(`${emjFalse} | **منشن شخص !**`)
      if (!member) return message.reply(`${emjFalse} | **منشن شخص !**`)
      if (!channel) return message.reply(`${emjFalse} | **منشن الروم !**`)
      if (!args[2]) return message.reply(`${emjFalse} | **منشن الروم !**`)
      if (!db.has(`prvuser_${member.id}`)) return message.reply(`${emjFalse} | **هذا الشخص ليس لديه روم خاص**`)
      await message.reply(`${emjTrue} | **تم حذف الروم ${channel.name} للشخص ${member} .**`)
      await channel.delete()
      await member.roles.remove([prv])
      if (db.has(`enduser_${member.id}`)) {
        await db.delete(`enduser_${member.id}`)
      }
      if (db.has(`endroom_${channel.id}`)) {
        await db.delete(`endroom_${channel.id}`)
      }
      if (db.has(`prvuser_${member.id}`)) {
        await db.delete(`prvuser_${member.id}`)
      }
      if (db.has(`prvroom_${channel.id}`)) {
        await db.delete(`prvroom_${channel.id}`)
      }
      if (db.has(`room`)) {
        const data = await db.get(`room`)
        for (const x of data) {
          if (x.id == member.id) {
            if (x.channelid == channel.id) {
              const index = data.indexOf(x);
              if (index !== -1) {
                data.splice(index, 1);
                await db.set('room', data);
              }
            }
          }
        }
      }
    }
  }
});

client.on("channelDelete", async channel => {
  if (db.has(`prvroom_${channel.id}`)) {
    let member = channel.guild.members.cache.find(r => r.id == db.get(`prvroom_${channel.id}`))
    if (db.has(`enduser_${member.id}`)) {
      await db.delete(`enduser_${member.id}`)
    }
    if (db.has(`endroom_${channel.id}`)) {
      await db.delete(`endroom_${channel.id}`)
    }
    if (db.has(`prvuser_${member.id}`)) {
      await db.delete(`prvuser_${member.id}`)
    }
    if (db.has(`prvroom_${channel.id}`)) {
      await db.delete(`prvroom_${channel.id}`)
    }
    if (db.has(`room`)) {
      const data = await db.get(`room`)
      for (const x of data) {
        if (x.id == member.id) {
          if (x.channelid == channel.id) {
            const index = data.indexOf(x);
            if (index !== -1) {
              data.splice(index, 1);
              await db.set('room', data);
            }
          }
        }
      }
    }
  }
});

// // == [ Mute ]

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "ميوت") || message.content.startsWith(prefix + `mute`)) {
    if (message.content.startsWith(prefix + "mutes")) return;
    if (message.content.startsWith(prefix + "ميوتات")) return;
    let ch = "1168866271916478464"
    if (ch.includes(message.channel.id)) {
      const guild = message.guild;
      const channel10 = await guild.channels.cache.find(r => r.name == 1185911052018397304)
      const now = new Date();
      let args = message.content.split(" ")
      if (!args) return message.reply("**حدد الشخص !**")
      let user = message.mentions.members.first() || message.guild.members.cache.find(r => r.id == args[1])
      if (!user) return message.reply("**حدد الشخص !**")
      if (!args[2]) return message.reply(`${emjFalse} | **حدد مدة الميوت !**`)
      if (!args[2].endsWith("d")) {
        if (!args[2].endsWith("h")) {
          if (!args[2].endsWith("m")) {
            return message.reply(`${emjFalse}** | حدد الوقت بالأيام - بالساعات أو بالدقائق**`)
          }
        }
      }
      if (isNaN(args[2][0])) return message.reply(`${emjFalse} | **حدد وقت صحيح !**`)
      let role = message.guild.roles.cache.find(r => r.name == "Muted")
      user.roles.add([role]).catch(err => { })
      db.add(`muteweek_${message.member.id}`, 1)
      db.add(`muteall_${message.member.id}`, 1)

      message.reply(`**تم إسكات ${user} بنجاح !**`)

      let SpecialEmbedLog10 = new Discord.MessageEmbed()
        .setTitle(`** Add Order Mute !**`)
        .setDescription(`> ** تم إضافة ميوت لـ ${user} , المشرف المسؤول ${message.author} **
      ** إيدي الشخص : ${user.id}
       إيدي المشرف المسؤول : ${message.author.id} \n\n تاريخ إضافة الميوت : <t:${Math.floor(now.getTime() / 1000)}:d>**`)
        .setColor(`${colorE}`)
        .setTimestamp()

      channel10.send({ embeds: [SpecialEmbedLog10] })
      db.set(`muted_${user.id}`, user.id)
      db.push(`mute`, {
        server: message.guild.id,
        id: user.id,
        endsAt: Date.now() + ms(args[2]),
      })
    }
  }
});

client.on("guildMemberAdd", member => {
  if (db.has(`muted_${member.id}`)) {
    db.push(`mute`, {
      server: member.guild.id,
      id: member.id,
      endsAt: Date.now() + ms(`5h`),
    })
    member.roles.add([member.guild.roles.cache.find(r => r.name == "Muted")])
  }
});

client.on("guildMemberRemove", async member => {
  if (db.has(`muted_${member.id}`)) {
    if (db.has(`mute`)) {
      const data = await db.get(`mute`)
      for (const x of data) {
        if (x.id == member.id) {
          const index = data.indexOf(x);
          if (index !== -1) {
            data.splice(index, 1);
            await db.set('mute', data);
          }
        }
      }
    }
  }
});

async function mute() {
  if (db.has(`mute`)) {
    const data = await db.get(`mute`)
    for (const x of data) {
      let end = x.endsAt
      let g = await x.server
      if (end < new Date()) {
        const guild = await client.guilds.cache.get(g)
        const member = await guild.members.cache.get(x.id)
        const role = await guild.roles.cache.find(r => r.name == "Muted")
        const channel = await guild.channels.cache.find(r => r.name == "໒・mute・log")
        channel.send(`**لقد انتهت مدة الميوت للشخص ${member} .**`)
        member.roles.remove([role]).catch(err => { })
        db.delete(`muted_${member.id}`)
        const index = data.indexOf(x);
        if (index !== -1) {
          data.splice(index, 1);
          await db.set('mute', data);
        }

      }
    }
  }
}
setInterval(async () => {
  mute()
}, 15000)

// ////////////


client.on('messageCreate', (message) => {
  if (message.content.startsWith('+discount') || message.content.startsWith('$تخفيض') || message.content.startsWith('تخفيض')) {
    const discountPercentage = message.content.split(" ")[1]
    if (isNaN(discountPercentage) || discountPercentage < 0 || discountPercentage > 100) return message.reply('**حدد نسبة بين 0 و 100 !**');
    const originalPrice = message.content.split(" ")[2]
    if (isNaN(originalPrice) || originalPrice <= 0) return message.reply('**حدد رقم للخصم !**');
    const discountAmount = (discountPercentage / 100) * originalPrice;
    const discountedPrice = originalPrice - discountAmount;
    message.reply(`** المبلغ الاساسي : ${originalPrice}**\n** نسبة الخصم : ${discountPercentage}%**\n **قيمة الخصم : ${discountAmount}**\n **المبلغ النهائي مع الخصم : ${discountedPrice}**`)
  }
});

// //

client.on("messageCreate", message => {
  if (message.content == prefix + "setup") {
    let row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("apply")
        .setStyle("SECONDARY")
        .setLabel("Apply") // Add a label for the button
        .setEmoji("📨")
    )
    let embed = new MessageEmbed()
      .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL() })
      .setTitle("**نموذج التقديم :**")
      .setDescription(`**
>   تم فتح تقديم الإدارة
-
>   اسمك :
>   عمرك :
>   بلدك :
-
>   كم مده تفاعلك :
>   خبراتك :
>   في ايش راح تفيدنا :

>  وضع الرابط في البايو : اجباري

**`)
      .setColor(`#380c61`)
      .setThumbnail(message.guild.iconURL())
    message.delete()
    message.channel.send({ components: [row], embeds: [embed] })
  }
});

const cooldown = new Set()

const discordModals = require('discord-modals');
discordModals(client);
client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;
  if (interaction.customId === 'apply') {
    if (cooldown.has(interaction.member.id)) return interaction.reply({ content: "Cooldown !", ephemeral: true })
    let user = db.get(`user_${interaction.member.id}`)
    if (db.has(`userapply_${interaction.member.id}`)) return interaction.reply({ content: "**انت بالفعل على قائمة المقدمين !**", ephemeral: true })
    if (interaction.member.roles.cache.some(r => r.id == 1185911052018397304) || interaction.member.roles.cache.some(r => r.id == 1185911052018397304)) return interaction.reply({ content: "**انت بالفعل اداري**", ephemeral: true })
    const { Modal, TextInputComponent, SelectMenuComponent, showModal } = require('discord-modals');

    const modal = new Modal()
      .setCustomId('modal')
      .setTitle('نموذج التقديم :')
      .addComponents(
        new TextInputComponent()
          .setCustomId('name')
          .setLabel("ما اسمك ؟")
          .setRequired(true)
          .setPlaceholder("ادخل اسمك هنا")
          .setStyle('SHORT'),

        new TextInputComponent()
          .setCustomId('age')
          .setRequired(true)
          .setPlaceholder("ادخل عمرك من هنا")
          .setLabel("كم عمرك ؟")
          .setStyle('SHORT'),

        new TextInputComponent()
          .setCustomId('country')
          .setRequired(true)
          .setPlaceholder("ادخل بلدك من هنا")
          .setLabel("من وين ؟")
          .setStyle('SHORT'),

        new TextInputComponent()
          .setCustomId('active')
          .setRequired(true)
          .setPlaceholder("ادخل هنا مدة تفاعلك")
          .setLabel("مدة تفاعلك باليوم ؟")
          .setStyle('SHORT'),

        new TextInputComponent()
          .setCustomId('shop')
          .setRequired(true)
          .setPlaceholder("ادخل هنا خبرتك و هل كنت اداري في سيرفر شوب اخر")
          .setLabel("هل لديك خبرة او ماضي في سيرفرات الشوب ؟")
          .setStyle('LONG')

      )

    showModal(modal, {
      client: client,
      interaction: interaction,
    });

  }
});

client.on('modalSubmit', async modal => {
  if (modal.customId == "modal") {
    let ch = db.get(`channel_${modal.guild.id}`)
    let channel = modal.guild.channels.cache.find(c => c.id == 1185911418642497587)
    const name = modal.getTextInputValue("name")
    const age = modal.getTextInputValue("age")
    const country = modal.getTextInputValue("country")
    const active = modal.getTextInputValue("active")
    const shop = modal.getTextInputValue("shop")

    let row = new MessageActionRow().addComponents(
      new MessageButton()
        
        .setCustomId("acc")
        .setStyle("SECONDARY"),
      new MessageButton()
        .setEmoji(`${emjFalse}`)
        .setCustomId("dec")
        .setStyle("SECONDARY"),
      new MessageButton()
        .setEmoji("🤐")
        .setCustomId("time")
        .setStyle("SECONDARY")
    )
    let embed = new MessageEmbed()
      .setAuthor({ name: `${modal.member.user.username}`, iconURL: `${modal.member.user.displayAvatarURL()}` })
      .setFooter({ text: modal.guild.name, iconURL: modal.guild.iconURL() })
      .setTimestamp()
      .setThumbnail(modal.guild.iconURL())
      .setTitle("**تقديم جديد !**")
      .setDescription(`**الشخص : <@${modal.member.id}>**\n\n>  **الاسم : ${name}**\n\n>  **العمر : ${age}**\n\n>  **البلد : ${country}**\n\n>  **مدة التفاعل : ${active}**\n\n>  **خبرته في سيرفرات الشوب : ${shop}**`)
      .setColor(`#380c61`)
    modal.reply({ content: "تم ارسال تقديمك !", ephemeral: true })
    channel.send({ content: `${modal.member}`, embeds: [embed], components: [row] }).then(m => {
      db.set(`userapply_${modal.member.id}`, modal.member.id)
      db.set(`userm_${m.id}`, modal.member.id)
    })
  }
});

client.on("interactionCreate", interaction => {
  if (interaction.isButton()) {
    if (interaction.customId == "acc") {
      if (!interaction.member.roles.cache.some(r => r.id == 1185911052018397304)) return interaction.reply({ content: "**ما تقدر تستعمل هذا الامر**", ephemeral: true })
      let user = db.get(`userm_${interaction.message.id}`)
      let member = interaction.guild.members.cache.get(user)
      let role = interaction.guild.roles.cache.find(r => r.id == "1185911052018397304")
      let embed = new MessageEmbed()
        .setDescription(`**تقديم مقبول من : ${member} ${emjTrue}**`)
        .setAuthor({ name: member.user.username, iconURL: member.user.displayAvatarURL() })
        .setFooter({ text: interaction.guild.name, iconURL: interaction.guild.iconURL() })
        .setColor(`${colorE}`)
        .setTimestamp()
      member.roles.add([role]).catch(err => { })
      member.send(`**لقد تم قبول تقديمك !**\n**الرجاء مراجعة هذه الرومات و حفظ ما فيها :**\n<#1151903476201304145> | <#1151903491179151370> | <#1151903485365846148>`).catch(err => { })
      interaction.message.edit({ content: `${member}`, embeds: [embed], components: [] })
      db.delete(`userapply_${db.get(`userm_${interaction.message.id}`)}`)
      db.delete(`userm_${interaction.message.id}`)
    }
    if (interaction.customId == "dec") {
      if (!interaction.member.roles.cache.some(r => r.id == 1185911052018397304)) return interaction.reply({ content: "**ما تقدر تستعمل هذا الامر**", ephemeral: true })
      let user = db.get(`userm_${interaction.message.id}`)
      let member = interaction.guild.members.cache.get(user)
      let embed = new MessageEmbed()
        .setDescription(`**تقديم مرفوض من : ${member} ${emjFalse}**`)
        .setAuthor({ name: member.user.username, iconURL: member.user.displayAvatarURL() })
        .setFooter({ text: interaction.guild.name, iconURL: interaction.guild.iconURL() })
        .setColor(`${colorE}`)
        .setTimestamp()
      interaction.message.edit({ content: `${member}`, embeds: [embed], components: [] })
      member.send(`**لقد تم رفض تقديمك ! الرجاء عدم التقديم مرة ثانية لتجنب الميوت .**`).catch(err => { })
      db.delete(`userapply_${db.get(`userm_${interaction.message.id}`)}`)
      db.delete(`userm_${interaction.message.id}`)
    }
    if (interaction.customId == "time") {
      if (!interaction.member.roles.cache.some(r => r.id == 1185911052018397304)) return interaction.reply({ content: "**ما تقدر تستعمل هذا الامر**", ephemeral: true })
      let user = db.get(`userm_${interaction.message.id}`)
      let member = interaction.guild.members.cache.get(user)
      let embed = new MessageEmbed()
        .setDescription(`**لقد تم اسكات : ${member} 🤐**`)
        .setAuthor({ name: member.user.username, iconURL: member.user.displayAvatarURL() })
        .setFooter({ text: interaction.guild.name, iconURL: interaction.guild.iconURL() })
        .setColor(`${colorE}`)
        .setTimestamp()
      interaction.message.edit({ content: `${member}`, embeds: [embed], components: [] })
      member.send(`**لقد تم اسكاتك !**`).catch(err => { })
      member.timeout(86400000).catch(err => { })
      db.delete(`userapply_${db.get(`userm_${interaction.message.id}`)}`)
      db.delete(`userm_${interaction.message.id}`)
    }
  }
});




// // == [ Boost ]

let boost_channel = "1185911248764801124"; //ID Channel
client.on("guildMemberUpdate", (old,now) => {
    let oldS = old.premiumSince;
    let nowS = now.premiumSince;
    if (!oldS && nowS) {
        let user = now.guild.members.cache.get(now.user.id)
        let channel = now.guild.channels.cache.get(boost_channel)
        channel.send({
         content : `**__
> 🌹 |  Thanks For Added Boost ${now.user} __**`
        }).then((y) => {
y.react("<a:Mats_love:1152757032185778186>")
})
    }
})

// // == [ Words Delete ]

client.on('messageCreate', (message) => {
  const klamMmno3 = ["خط","خطط","$تشهير","$معلومات","$info","$say"]
  if (!message.author.bot && message.guild) {
    const tttt = klamMmno3.some(word => message.content.includes(word));

    if (tttt) {
      message.delete() 
  }
}
});




client.on('messageCreate', (message) => {
  if (message.content === 'count') {
    const guild = message.guild;

    if (guild) {
      const members = guild.members.cache;

      // عمك احمد مكسيكان
      const bots = members.filter(member => member.user.bot);
      const realUsers = members.filter(member => !member.user.bot);

      message.channel.send(`**عدد البوتات في السيرفر: ** ${bots.size} `);
      message.channel.send(`**عدد الأعضاء الحقيقيين في السيرفر:** ${realUsers.size} `);
    } else {
      message.channel.send('يرجى تنفيذ الامر في سيرفر.');
    }
  }
});

// // == [  ]

// const channelId = '1151903417753677975'; // ايدي روم الي هيترسل فيها
// const messageContent = '**اللهم صلي وسلم وبارك علي سيدنا محمد**'; 

//   setInterval(() => {
//     const channel = client.channels.cache.get(channelId);
//     if (!channel) return;

//     if (channel.isText() && messageContent) {
//       channel.send(messageContent);
//     }
//   }, 3600000); 



// // == [ Auto Reaction ]

// const channelId1 = '1185911705432240178'; // 
// const reactions = ['✅', '❌']; // 

// client.on('messageCreate', async (message) => {
//   // 
//   if (message.author && message.channelId === channelId1) {
//     //
//     for (const reaction of reactions) {
//       await message.react(reaction);
//     }
//   }
// });


// // == [ Auto Line ]

const channelIDLINE = ['1185911517913297010', '1185911511835754586', '1185911510749433967','1185911509667299388','1185911503463911455','1185911502104956968','1185911495847059597','1185911494504890458','1185911487701721198','1185911486514733097','1185911485176746045','1185911478784639036','1185911477736046682','1185911470253416540','1185911464482058250','','1185911440754880574','1185911386702876742','1185911554680569886','1185911548078739507','1185911554680569886','','','','','','','','','']; 

client.on('messageCreate', (message) => {
    if (channelIDLINE.includes(message.channel.id)) {
      if (message.author.bot) return ; 

        message.channel.send({files : [`https://cdn.discordapp.com/attachments/1185657301806358538/1185932073073123418/rider_2.png?ex=6591684f&is=657ef34f&hm=9bc801ced6b13a95e23718395574e274303ca87ea8aa13893f99ed24ce7e76c1&`]});
    }
});

// // == [ Line ]

client.on('messageCreate', (message) => {
    if (message.content == 'خط') {
      if (message.author.bot) return ; 
      if (!message.member.permissions.has("ADMINISTRATOR"))
        return
           message.delete()
        message.channel.send({files : [`https://cdn.discordapp.com/attachments/1185657301806358538/1185932073073123418/rider_2.png?ex=6591684f&is=657ef34f&hm=9bc801ced6b13a95e23718395574e274303ca87ea8aa13893f99ed24ce7e76c1&`]});
    }
});

// // == [ Help ]
client.on('messageCreate', message => {
  if (message.content.startsWith(prefix + "help")) //الرسالة {
    return message.channel.send(`**Sever \`S\` Help・قـائـمـة الـمـسـاعـدة**
    **
  >  +setup
  >  +replacer
  >  +sub
  >  +role
  >  +come
  >  +say
  >  +رول
  >  +منشور
  >  +buy**
    `) // D
}
);




