const client = require('../../main.js');
const config = require(`../../config.json`)
const db = require('pro.db')
const { MessageEmbed , MessageActionRow , MessageSelectMenu, MessageButton} = require('discord.js');
const { Permissions } = require('discord.js');
const {  Modal, TextInputComponent } = require('discord.js');
const ms = require("ms")
const data = require('../../data/discount.js');

let transfer = client.config.transfer
let probot = client.config.probotid
let parentcat = client.config.parent
let roleid = client.config.privaterole 
let color = client.config.color
let line = client.config.lineurl 
let title = client.config.title

client.on("interactionCreate", async interaction => {
if (interaction.customId === "buyroom"){
let status = await db.get(`rooms_${interaction.guild.id}`)
    if(status === "Off" || !status)return interaction.reply({content:`** الرومات الخاصة غير متوفرة حالياً  ..**`, ephemeral:true })
  let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`Back`)
        .setLabel("رجوع")
        .setEmoji("↩️")
        .setStyle('PRIMARY'))
        	.addComponents( 
            new MessageButton()
        .setCustomId(`closetic`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER')
      );
//Check
let user = db.get(`users_${interaction.guild.id}`)
  if(!user) db.push(`users_${interaction.guild.id}`)
  if(user.includes(interaction.member.id)){
    return interaction.reply({content:`** انت تمتلك فعلا روم بالسيرفر **`})
}else {
  
let price = client.config.roombuy
let finalprice = Math.floor(price *(20) / (19) + (1))
    
///Buy Room
   await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {

await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء روم خاص")
  .setDescription(`** قم بلتحويل لإكمال العملية **`)
  .addField(`**قم بتحويل الى **`, `**
 <@${transfer}> **`)
  .addField(`**قم بتحويل مبلغ **`, `${finalprice}`)

  .addField(`** **`, `
\`\`\`
#credit ${transfer} ${finalprice} \`\`\`
`)
  
      .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  
]}).then(async last => {
///collocter 
const filter = (m) =>
  m.content.startsWith(
    `**:moneybag: | ${interaction.member.user.username}`
  ) &&
  m.content.includes(`${transfer}`) &&
  m.author.id === probot &&
  Number(
    m.content.slice(
      m.content.lastIndexOf("`") - String(price).length,
      m.content.lastIndexOf("`")
    )
  ) >= price; 
interaction.channel
  .awaitMessages({
    filter,
    max: 1,
    time: 50000,
    errors: ["time"],
  })
  .then(async (collected) => {


interaction.guild.channels.create(`✧・${interaction.member.user.username}`, {
      permissionOverwrites: [{
        id: interaction.member.id,
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
    }).then(async ch => {
  interaction.member.roles.add(roleid).catch((err)=> {  
  interaction.reply("I Cant give You the role Please Call the High role in this ticket")})
await ch.send({content:`<@${interaction.member.id}>`,embeds: [
  new MessageEmbed()
  .setTitle(`روم خاص جديد`)
  .addFields(
                {name:`Room Owner :`,value:`${interaction.member.user.username} | <@${interaction.member.id}>`,inline:false},
                {name:"Room Time:",value:`7d`,inline:false},
                {name:"Ended In :",value:`<t:${Math.floor((Date.now() + ms("7d")) / 1000)}:R>`,inline:false})
                .setThumbnail(interaction.guild.iconURL({dynamic:true}))
                .setTimestamp()
                .setAuthor({name:interaction.user.username,iconURL:interaction.user.avatarURL({dynamic:true})})
    .setColor(color)
  ]}).then(async d => {
  

db.push(`channels_${interaction.guild.id}`, ch.id)
    db.push(`users_${interaction.guild.id}`, interaction.member.id)

  db.set(`room_${interaction.member.id}`,{
    user: interaction.member.id, 
    channel: ch.id                                     })
  await interaction.channel.send({ embeds:[
    new MessageEmbed()
    .setTitle(title)
    .addField(`** تم> شراء الروم بواسطة **`, `<@${interaction.member.id}>`)
   .addField(`** الروم **`, `<#${ch.id}>`)
     .addField(`** يرجى قراءة القوانين لتجنب التحذيرات و حذف الروم **`, `** **`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row] }).then(async x =>{
    await last.delete()

    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء روم خاص")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`الروم`, `<#${ch.id}>`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)

    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})
  })
 })
   })

   }).catch(async () => {
    
    let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`Back`)
        .setLabel("رجوع")
        .setEmoji("↩️")
        .setStyle('PRIMARY'))
        	.addComponents( 
            new MessageButton()
        .setCustomId(`closetic`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER')
      );
    const embed = new MessageEmbed()
        .setTitle(`❌ انـتـهـى وقـت التـحـويـل`)
      .setColor(color);
 await   interaction.channel.send({ embeds: [embed], components: [row] });
    await last.delete()
  })
  })
     })


          
    


  }
  
}

  
  if (interaction.customId === "renewal"){

    let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`Back`)
        .setLabel("رجوع")
        .setEmoji("↩️")
        .setStyle('PRIMARY'))
        	.addComponents( 
            new MessageButton()
        .setCustomId(`closetic`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER')
      );
    
//Check
let user = db.get(`users_${interaction.guild.id}`)
  if(!user.includes(interaction.member.id)){
    return interaction.reply({content:`** انت لا تمتلك روم بالسيرفر يرجى شراء روم خاص حتى تتم عملية التجديد**`})
   }else {

let price = client.config.roomrenewal
let finalprice = Math.floor(price *(20) / (19) + (1))
let roleid = client.config.privaterole 
  
//Buy
 await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {

await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("تجديد روم خاص")
  .setDescription(`** قم بلتحويل لإكمال العملية **`)
  .addField(`**قم بتحويل الى **`, `**
 <@${transfer}> **`)
  .addField(`**قم بتحويل مبلغ **`, `${finalprice}`)

  .addField(`** **`, `
\`\`\`
#credit ${transfer} ${finalprice} \`\`\`
`)
  
      .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
]}).then(async last => {
///collocter 
const filter = (m) =>
  m.content.startsWith(
    `**:moneybag: | ${interaction.member.user.username}`
  ) &&
  m.content.includes(`${transfer}`) &&
  m.author.id === probot &&
  Number(
    m.content.slice(
      m.content.lastIndexOf("`") - String(price).length,
      m.content.lastIndexOf("`")
    )
  ) >= price; 
interaction.channel
  .awaitMessages({
    filter,
    max: 1,
    time: 50000,
    errors: ["time"],
  })
  .then(async (collected) => {

      let data = db.get(`room_${interaction.member.id}`)
  
let ch = client.channels.cache.get(data.channel)
  let member = data.user
ch.bulkDelete(100)
    
ch.edit({
    permissionOverwrites: [{
        id: interaction.member.id,
        allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "MENTION_EVERYONE", "ATTACH_FILES"]
      },{
        id: interaction.guild.roles.everyone,
deny: ["SEND_MESSAGES", "VIEW_CHANNEL"]
      },{
        id: config.member_id,
allow: ["VIEW_CHANNEL"]
      }
      ]
    })
    
    ch.send({embeds: [
      new MessageEmbed()
.setTitle(`تجديد روم خاص`)
    .addFields(
                {name:`Room Owner :`,value:`${interaction.member.user.username} | <@${interaction.member.id}>`,inline:false},
                {name:"Room Time:",value:`7d`,inline:false},
                {name:"Ended In :",value:`<t:${Math.floor((Date.now() + ms("7d")) / 1000)}:R>`,inline:false})
     // .addField(`** Renew In: **`, `${new Date().toLocaleString()})
    
        .setThumbnail(interaction.guild.iconURL({dynamic:true}))
                .setTimestamp()
                .setAuthor({name:interaction.user.username,iconURL:interaction.user.avatarURL({dynamic:true})})
    .setColor(color)
      
    ]})
  await interaction.channel.send({content:`<@${interaction.member.id}>`, embeds:[
    new MessageEmbed()
    .setTitle(title)
    .addField(`** تم تجديد الروم بواسطة **`, `<@${interaction.user.id}>`)
   .addField(`** الروم **`, `<#${ch.id}>`)
     .addField(`** يرجى قراءة القوانين لتجنب التحذيرات و حذف الروم **`, `** **`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row] }).then(async x =>{
    await last.delete()

    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("تجديد روم خاص")
    .addField(`تم التجديد بواسطة `, `<@${interaction.member.id}>`)
    .addField(`الروم`, `<#${ch.id}>`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)

    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})
  })
 
   })

    
   }).catch(async () => {
  let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`Back`)
        .setLabel("رجوع")
        .setEmoji("↩️")
        .setStyle('PRIMARY'))
        	.addComponents( 
            new MessageButton()
        .setCustomId(`closetic`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER')
      );
    const embed = new MessageEmbed()
        .setTitle(`❌ انـتـهـى وقـت التـحـويـل`)
      .setColor(color);
 await   interaction.channel.send({ embeds: [embed], components: [row] });    await last.delete()
  })
  })
     

    }
   }



  
       })


//////////////////
//discount

client.on("interactionCreate", async interaction => {

  
if (interaction.customId === "buyroom_dis"){
let status = await db.get(`rooms_${interaction.guild.id}`)
    if(status === "Off" || !status)return interaction.reply({content:`** الرومات الخاصة غير متوفرة حالياً  ..**`, ephemeral:true })
  
let dis = await db.get(`disticket_${interaction.channel.id}`)
  let disa = await data.findOne({discountcode: dis})
    let discountamount = disa.amount
  
  let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`Back`)
        .setLabel("رجوع")
        .setEmoji("↩️")
        .setStyle('PRIMARY'))
        	.addComponents( 
            new MessageButton()
        .setCustomId(`closetic`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER')
      );
//Check
let user = db.get(`users_${interaction.guild.id}`)
  if(!user) db.push(`users_${interaction.guild.id}`)
  if(user.includes(interaction.member.id)){
    return interaction.reply({content:`** انت تمتلك فعلا روم بالسيرفر **`}).then(x => {
      db.delete(`disticket_${interaction.channel.id}`)
    })
   }else {   
const originalPriceBest = client.config.roombuy; 
const discountAmountBest = (originalPriceBest * discountamount) / 100;  
const finalPriceBest = originalPriceBest - discountAmountBest;      
  let price = finalPriceBest
let finalprice = Math.floor(price *(20) / (19) + (1))
let roleid = client.config.privaterole 
    
//Buy
 await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {

await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء روم خاص")
  .setDescription(`** قم بلتحويل لإكمال العملية **`)
  .addField(`**قم بتحويل الى **`, `**
 <@${transfer}> **`)
  .addField(`**قم بتحويل مبلغ **`, `${finalprice}`)

  .addField(`** **`, `
\`\`\`
#credit ${transfer} ${finalprice} \`\`\`
`)
  
      .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
]}).then(async last => {
///collocter 
const filter = (m) =>
  m.content.startsWith(
    `**:moneybag: | ${interaction.member.user.username}`
  ) &&
  m.content.includes(`${transfer}`) &&
  m.author.id === probot &&
  Number(
    m.content.slice(
      m.content.lastIndexOf("`") - String(price).length,
      m.content.lastIndexOf("`")
    )
  ) >= price; 
interaction.channel
  .awaitMessages({
    filter,
    max: 1,
    time: 50000,
    errors: ["time"],
  })
  .then(async (collected) => {


    
interaction.guild.channels.create(`✧・${interaction.member.user.username}`, {
      permissionOverwrites: [{
        id: interaction.member.id,
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
    }).then(async ch => {
  interaction.member.roles.add(roleid).catch((err)=> {  
  interaction.reply("I Cant give You the role Please Call the High role in this ticket")})
await ch.send({content:`<@${interaction.member.id}>`,embeds: [
  new MessageEmbed()
  .setTitle(`روم خاص جديد`)
  .addFields(
                {name:`Room Owner :`,value:`${interaction.member.user.username} | <@${interaction.member.id}>`,inline:false},
                {name:"Room Time:",value:`7d`,inline:false},
                {name:"Ended In :",value:`<t:${Math.floor((Date.now() + ms("7d")) / 1000)}:R>`,inline:false})
                .setThumbnail(interaction.guild.iconURL({dynamic:true}))
                .setTimestamp()
                .setAuthor({name:interaction.user.username,iconURL:interaction.user.avatarURL({dynamic:true})})
    .setColor(color)
  
  ]}).then(async d => {
  db.delete(`disticket_${interaction.channel.id}`)
  

db.push(`channels_${interaction.guild.id}`, ch.id)
    db.push(`users_${interaction.guild.id}`, interaction.member.id)

  db.set(`room_${interaction.member.id}`,{
    user: interaction.member.id, 
    channel: ch.id                                     })
  await interaction.channel.send({ embeds:[
    new MessageEmbed()
    .setTitle(title)
    .addField(`** تم شراء الروم بواسطة **`, `<@${interaction.member.id}>`)
   .addField(`** الروم **`, `<#${ch.id}>`)
     .addField(`** يرجى قراءة القوانين لتجنب التحذيرات و حذف الروم **`, `** **`)
   .addField(`**تم استخدام كود خصم** `, `${dis}`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row] }).then(async x =>{
    await last.delete()

    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء روم خاص")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`الروم`, `<#${ch.id}>`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
.addField(`**تم استخدام كود خصم** `, `${dis}`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})
  })
 })
   })

    
   }).catch(async () => {

     let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`Back`)
        .setLabel("رجوع")
        .setEmoji("↩️")
        .setStyle('PRIMARY'))
        	.addComponents( 
            new MessageButton()
        .setCustomId(`closetic`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER')
      );
    const embed = new MessageEmbed()
        .setTitle(`❌ انـتـهـى وقـت التـحـويـل`)
      .setColor(color);
 await   interaction.channel.send({ embeds: [embed], components: [row] });
    
    await last.delete()
    db.delete(`disticket_${interaction.channel.id}`)
  })
  })
     })


          
    


  }
  
}
  
  ////تجديد 
  if (interaction.customId === "renewal_dis"){
let dis = await db.get(`disticket_${interaction.channel.id}`)
  let disa = await data.findOne({discountcode: dis})
    let discountamount = disa.amount
//
let user = db.get(`users_${interaction.guild.id}`)
  if(!user.includes(interaction.member.id)){
    return interaction.reply({content:`** انت لا تمتلك روم بالسيرفر يرجى شراء روم خاص حتى تتم عملية`})
   }else {

    const originalPriceBest =client.config.roomrenewal; 
const discountAmountBest = (originalPriceBest * discountamount) / 100;       
const finalPriceBest = originalPriceBest - discountAmountBest;      
  let price = finalPriceBest
let finalprice = Math.floor(price *(20) / (19) + (1))
let roleid = client.config.privaterole 
  

 //Buy
 await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {

await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("تجديد روم خاص")
  .setDescription(`** قم بلتحويل لإكمال العملية **`)
  .addField(`**قم بتحويل الى **`, `**
 <@${transfer}> **`)
  .addField(`**قم بتحويل مبلغ **`, `${finalprice}`)

  .addField(`** **`, `
\`\`\`
#credit ${transfer} ${finalprice} \`\`\`
`)
  
      .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
]}).then(async last => {
///collocter 
const filter = (m) =>
  m.content.startsWith(
    `**:moneybag: | ${interaction.member.user.username}`
  ) &&
  m.content.includes(`${transfer}`) &&
  m.author.id === probot &&
  Number(
    m.content.slice(
      m.content.lastIndexOf("`") - String(price).length,
      m.content.lastIndexOf("`")
    )
  ) >= price; 
interaction.channel
  .awaitMessages({
    filter,
    max: 1,
    time: 50000,
    errors: ["time"],
  })
  .then(async (collected) => {
db.delete(`disticket_${interaction.channel.id}`)

    
      let data = db.get(`room_${interaction.member.id}`)

ch.edit({
    permissionOverwrites: [{
        id: interaction.member.id,
        allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "MENTION_EVERYONE", "ATTACH_FILES"]
      },{
        id: interaction.guild.roles.everyone,
deny: ["SEND_MESSAGES", "VIEW_CHANNEL"]
      },{
        id: config.member_id,
allow: ["VIEW_CHANNEL"]
      }
      ]
    })
    
    ch.send({embeds: [
      new MessageEmbed()
.setTitle(`تجديد روم خاص`)
    .addFields(
                {name:`Room Owner :`,value:`${interaction.member.user.username} | <@${interaction.member.id}>`,inline:false},
                {name:"Room Time:",value:`7d`,inline:false},
                {name:"Ended In :",value:`<t:${Math.floor((Date.now() + ms("7d")) / 1000)}:R>`,inline:false})
     // .addField(`** Renew In: **`, `${new Date().toLocaleString()})
    
        .setThumbnail(interaction.guild.iconURL({dynamic:true}))
                .setTimestamp()
                .setAuthor({name:interaction.user.username,iconURL:interaction.user.avatarURL({dynamic:true})})
    .setColor(color)
      
    ]})
  await interaction.channel.send({content:`<@${interaction.member.id}>`, embeds:[
    new MessageEmbed()
    .setTitle(title)
    .addField(`** تم تجديد الروم بواسطة **`, `<@${interaction.user.id}>`)
   .addField(`** الروم **`, `<#${ch.id}>`)
     .addField(`** يرجى قراءة القوانين لتجنب التحذيرات و حذف الروم **`, `** **`)
  .addField(`**تم استخدام كود خصم** `, `${dis}`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row] }).then(async x =>{
    await last.delete()

    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("تجديد روم خاص")
    .addField(`تم التجديد بواسطة `, `<@${interaction.member.id}>`)
    .addField(`الروم`, `<#${ch.id}>`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
.addField(`**تم استخدام كود خصم** `, `${dis}`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})
  })
 
   })

    
   }).catch(async () => {

  let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`Back`)
        .setLabel("رجوع")
        .setEmoji("↩️")
        .setStyle('PRIMARY'))
        	.addComponents( 
            new MessageButton()
        .setCustomId(`closetic`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER')
      );
    const embed = new MessageEmbed()
        .setTitle(`❌ انـتـهـى وقـت التـحـويـل`)
      .setColor(color);
 await   interaction.channel.send({ embeds: [embed], components: [row] });
  
    await last.delete()
  db.delete(`disticket_${interaction.channel.id}`)
  })
  })
     

    }
   }



  
       })


////////////////////////////////

///discount





