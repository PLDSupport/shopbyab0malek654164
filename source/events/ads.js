const client = require('../../main.js');
const config = require(`../../config.json`)
const db = require('pro.db')
const { MessageEmbed , MessageActionRow , MessageSelectMenu, MessageButton} = require('discord.js');
const { Permissions } = require('discord.js');
const {  Modal, TextInputComponent } = require('discord.js');
const data = require('../../data/discount.js');

let transfer = client.config.transfer
let probot = client.config.probotid
let adca = client.config.parentad
let line = client.config.lineurl
let color = client.config.color
let title = client.config.title

client.on("interactionCreate", async interaction => {
if (interaction.customId === "ads"){
let vale = interaction.values[0];
if(vale === "1"){
let price = client.config.nomads
let finalprice = Math.floor(price *(20) / (19) + (1))

  await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {

await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء اعلان")
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
    let row3 = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`nom`)
        .setLabel("Click here")
        .setEmoji("✨")
        .setStyle('SECONDARY')
      );  
        
  await interaction.channel.send({ embeds:[
    new MessageEmbed()
    .setTitle(title)
    .addField(`** تم شراء اعلان بواسطة **`, `<@${interaction.member.id}>`)
   .addField(`** تم شراء اعلان**`, `No Mention`)
    .addField(`**اضغط على الزر **`, `**لكتابة اعلانك **`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row3] }).then(async x =>{
    await last.delete()

    
    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء اعلان")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`**نوع الااعلان**`, `No Mention`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
.addField(`في انتظار نشر الاعلان`, `<#${interaction.channel.id}>`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})

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
    }}
  
 if (interaction.customId === "ads"){
let vale = interaction.values[0];
if(vale === "2"){
let price = client.config.hereads
let finalprice = Math.floor(price *(20) / (19) + (1))

     await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {

await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء اعلان")
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
    let row3 = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`hec`)
        .setLabel("Click here")
        .setEmoji("✨")
        .setStyle('SECONDARY')
      );
  await interaction.channel.send({embeds:[
    new MessageEmbed()
    .setTitle(title)
    .addField(`** تم شراء اعلان **`, `<@${interaction.member.id}>`)
   .addField(`** تم شراء اعلان**`, `Here`)
    .addField(`**اضغط علي الزر **`, `**لكتابة اعلانك**`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row3] }).then(async x =>{
    await last.delete()

    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء اعلان")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`** نوع الاعلان**`, `Here`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
.addField(`في انتظار نشر الاعلان`, `<#${interaction.channel.id}>`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})

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
    }}
  
if (interaction.customId === "ads"){
let vale = interaction.values[0];
if(vale === "3"){
let price = client.config.everyoneads
let finalprice = Math.floor(price *(20) / (19) + (1))

     await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {

await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء اعلان")
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
    let row3 = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`evc`)
        .setLabel("Click here")
        .setEmoji("✨")
        .setStyle('SECONDARY')
      );
  await interaction.channel.send({embeds:[
    new MessageEmbed()
    .setTitle(title)
    .addField(`** تم شراء اعلان **`, `<@${interaction.member.id}>`)
   .addField(`** تم شراء اعلان**`, `Everyone`)
    .addField(`**اضغط علي الزر **`, `**لكتابة اعلانك**`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row3] }).then(async x =>{
    await last.delete()

    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء اعلان")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`** نوع الاعلان**`, `Everyone`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
.addField(`في انتظار نشر الاعلان`, `<#${interaction.channel.id}>`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})

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
    }}
if (interaction.customId === "ads"){
let vale = interaction.values[0];
if(vale === "4"){
let price = client.config.giftad
let finalprice = Math.floor(price *(20) / (19) + (1))

     await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {

await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء اعلان")
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
    let row3 = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`giftad`)
        .setLabel("Click here")
        .setEmoji("✨")
        .setStyle('SECONDARY')
      );
  await interaction.channel.send({embeds:[
    new MessageEmbed()
    .setTitle(title)
    .addField(`** تم شراء اعلان **`, `<@${interaction.member.id}>`)
   .addField(`** تم شراء اعلان**`, `Gift Giveaway`)
    .addField(`**اضغط علي الزر **`, `**لكتابة اعلانك**`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row3] }).then(async x =>{
    await last.delete()

    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء اعلان")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`** نوع الاعلان**`, `Gift Giveaway`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
.addField(`في انتظار نشر الاعلان`, `<#${interaction.channel.id}>`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})

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
    }}
  if (interaction.customId === "ads"){
let vale = interaction.values[0];
if(vale === "5"){
let price = client.config.roomad
let finalprice = Math.floor(price *(20) / (19) + (1))

     await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {

await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء اعلان")
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
    let row3 = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`roomad`)
        .setLabel("Click here")
        .setEmoji("✨")
        .setStyle('SECONDARY')
      );
  await interaction.channel.send({embeds:[
    new MessageEmbed()
    .setTitle(title)
    .addField(`** تم شراء اعلان **`, `<@${interaction.member.id}>`)
   .addField(`** تم شراء اعلان**`, `Privte Room`)
    .addField(`**اضغط علي الزر **`, `**لكتابة اعلانك**`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row3] }).then(async x =>{
    await last.delete()

    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء اعلان")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`** نوع الاعلان**`, ` Private Room`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
.addField(`في انتظار نشر الاعلان`, `<#${interaction.channel.id}>`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})

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
    }}
 if (interaction.customId === "ads"){
let vale = interaction.values[0];
if(vale === "6"){
let price = client.config.roomadg
let finalprice = Math.floor(price *(20) / (19) + (1))

     await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {

await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء اعلان")
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
    let row3 = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`roomadg`)
        .setLabel("Click here")
        .setEmoji("✨")
        .setStyle('SECONDARY')
      );
  await interaction.channel.send({embeds:[
    new MessageEmbed()
    .setTitle(title)
    .addField(`** تم شراء اعلان **`, `<@${interaction.member.id}>`)
   .addField(`** تم شراء اعلان**`, `Privte Room`)
    .addField(`**اضغط علي الزر **`, `**لكتابة اعلانك**`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row3] }).then(async x =>{
    await last.delete()

    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء اعلان")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`** نوع الاعلان**`, ` Private Room Giveaway`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
.addField(`في انتظار نشر الاعلان`, `<#${interaction.channel.id}>`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})

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
    }}
})

//Send
client.on("interactionCreate", async interaction => {
    if (interaction.customId === "nom") {
const modal = new Modal()
			.setCustomId('modalnomad')
			.setTitle('اعلان بدون منشن')
  
  const name = new TextInputComponent()
			.setCustomId('namenom')
.setLabel(`الاعلان`)
  .setPlaceholder("ضع رسالة الاعلان هنا")
  .setStyle('PARAGRAPH')
  const firstActionRow = new MessageActionRow().addComponents(name);
		
		// Add inputs to the modal
		modal.addComponents(firstActionRow);
		// Show the
		await interaction.showModal(modal);   

    }
    if (interaction.customId === "evc") {
const modal = new Modal()
			.setCustomId('modaleveryad')
			.setTitle('اعلان منشن ايفريون')
  
  const name = new TextInputComponent()
			.setCustomId('nameevery')
.setLabel(`الاعلان`)
  .setPlaceholder("ضع رسالة الاعلان هنا")
  .setStyle('PARAGRAPH')
  const firstActionRow = new MessageActionRow().addComponents(name);
		
		// Add inputs to the modal
		modal.addComponents(firstActionRow);
		// Show the
		await interaction.showModal(modal);   

     }
      if (interaction.customId === "hec") {
const modal = new Modal()
			.setCustomId('modalheread')
			.setTitle('اعلان منشن هير')
  
  const name = new TextInputComponent()
			.setCustomId('namehere')
.setLabel(`اعلان`)
  .setPlaceholder("ضع رسالة الاعلان هنا")
  .setStyle('PARAGRAPH')
  const firstActionRow = new MessageActionRow().addComponents(name);
		
		// Add inputs to the modal
		modal.addComponents(firstActionRow);
		// Show the
		await interaction.showModal(modal);   

      }
    if (interaction.customId === "evc") {
const modal = new Modal()
			.setCustomId('modaleveryad')
			.setTitle('اعلان منشن ايفريون')
  
  const name = new TextInputComponent()
			.setCustomId('nameevery')
.setLabel(`الاعلان`)
  .setPlaceholder("ضع رسالة الاعلان هنا")
  .setStyle('PARAGRAPH')
  const firstActionRow = new MessageActionRow().addComponents(name);
		
		// Add inputs to the modal
		modal.addComponents(firstActionRow);
		// Show the
		await interaction.showModal(modal);   

    }
      if (interaction.customId === "giftad") {
const modal = new Modal()
			.setCustomId('modalgiftad')
			.setTitle('اعلان هدايا الاعلانات')
  
  const name = new TextInputComponent()
			.setCustomId('namegiftad')
.setLabel(`الاعلان`)
  .setPlaceholder("ضع رسالة الاعلان هنا")
  .setStyle('PARAGRAPH')
  const firstActionRow = new MessageActionRow().addComponents(name);
		
		// Add inputs to the modal
		modal.addComponents(firstActionRow);
		// Show the
		await interaction.showModal(modal);   

      }
		// Show the
  if (!interaction.isModalSubmit()) return;
    if (!interaction.isModalSubmit()) return;
  
    if (interaction.customId === "modalnomad") {

    
      const name = interaction.fields.getTextInputValue()

      let channel = client.channels.cache.get(client.config.adsroom)
      
      await channel.send({content:`${name}`}).then(async x => {
    await interaction.message.delete().then(async s =>{
await interaction.reply({content:`** تم نشر اعلانك بنجاح**`}).then(async l=> {
  let log = client.channels.cache.get(client.config.logbuy)
  await log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()
    .setTitle("نشر اعلان")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`نوع الاعلان`, `No Mention`)
.addField(`الاعلان`, `${name}`)
  .addField(`رابط الاعلان`, `${x.url}`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})
})
    })              
})
      }
        if (interaction.customId === "modalheread") {
      const name = interaction.fields.getTextInputValue()
      let channel = client.channels.cache.get(client.config.adsroom)
      
      await channel.send({content:`${name}\n||@here||`}).then(async x => {
    await interaction.message.delete().then(async s =>{
await interaction.reply({content:`** تم نشر اعلانك بنجاح**`}).then(async l=> {
let log = client.channels.cache.get(client.config.logbuy)
  await log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()
    .setTitle("نشر اعلان")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`نوع الاعلان`, `Here`)
.addField(`الاعلان`, `${name}`)
  .addField(`رابط الاعلان`, `${x.url}`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})
})
    })              
})
        }
    if (interaction.customId === "modaleveryad") {

    
      const name = interaction.fields.getTextInputValue()

      let channel = client.channels.cache.get(client.config.adsroom)
      
      await channel.send({content:`${name}\n||@everyone||`}).then(async x => {
    await interaction.message.delete().then(async s =>{
await interaction.reply({content:`** تم نشر اعلانك بنجاح**`}).then(async l=> {
  let log = client.channels.cache.get(client.config.logbuy)
  await log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()
    .setTitle("نشر اعلان")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`نوع الاعلان`, `Everyone`)
.addField(`الاعلان`, `${name}`)
  .addField(`رابط الاعلان`, `${x.url}`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})
})
    })              
})
    }
      if (interaction.customId === "modalgiftad") {
      const name = interaction.fields.getTextInputValue()
      let channel = client.channels.cache.get(client.config.giftroom)
      
      await channel.send({content:`${name}\n||@everyone||`})
channel.send({content:`!start 1d 2 200k`}).then(async x => {
    await interaction.message.delete().then(async s =>{
await interaction.reply({content:`** تم نشر اعلانك بنجاح**`}).then(async l=> {
let log = client.channels.cache.get(client.config.logbuy)
  await log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()
    .setTitle("نشر اعلان")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`نوع الاعلان`, `Gift Giveaway`)
.addField(`الاعلان`, `${name}`)
  .addField(`رابط الاعلان`, `${x.url}`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})
})
    })              
})
      }
})
/* 
//////// / / /  // / / / / / / /

////////////////////  discount

*/
client.on("interactionCreate", async interaction => {    
if (interaction.customId === "discount_ad"){
let vale = interaction.values[0];
if(vale === "1"){
  
let dis = await db.get(`disticket_${interaction.channel.id}`)
  let disa = await data.findOne({discountcode: dis})
let discountamount = disa.amount
const originalPriceno = client.config.nomads;
const discountAmountno = (originalPriceno * discountamount) / 100;   
const finalPriceno = originalPriceno - discountAmountno;
let price = finalPriceno
let finalprice = Math.floor(price *(20) / (19) + (1))

//Buy
await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {

await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء اعلان")
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
    let row3 = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`discount_nomads`)
        .setLabel("Click here")
        .setEmoji("✨")
        .setStyle('SECONDARY')
      );
  await interaction.channel.send({embeds:[
    new MessageEmbed()
    .setTitle(title)
    .addField(`** تم شراء اعلان بواسطة **`, `<@${interaction.member.id}>`)
   .addField(`** تم شراء اعلان**`, `No Mention`)
    .addField(`**اضغط على الزر **`, `**لكتابة اعلانك **`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row3] }).then(async x =>{
    await last.delete()

    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء اعلان")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`نوع الاعلان`, `No Mention`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
.addField(`في انتظار نشر الاعلان`, `<#${interaction.channel.id}>`)
.addField(`تم استخدام كود خصم `, `${dis}`)
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})

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
      
if (interaction.customId === "discount_ad"){
let vale = interaction.values[0];
if(vale === "2"){
  
let dis = await  db.get(`disticket_${interaction.channel.id}`)
  let disa = await data.findOne({discountcode: dis})
    let discountamount = disa.amount
 const originalPriceHere = client.config.hereads;
const discountAmountHere = (originalPriceHere * discountamount) / 100;   
const finalPriceHere = originalPriceHere - discountAmountHere;
let price = finalPriceHere
let finalprice = Math.floor(price *(20) / (19) + (1))
  
//Buy
await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {

await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء اعلان")
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
    let row3 = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`discount_here`)
        .setLabel("Click here")
        .setEmoji("✨")
        .setStyle('SECONDARY')
      );
  await interaction.channel.send({embeds:[
    new MessageEmbed()
    .setTitle(tilte)
    .addField(`** تم شراء الاعلان بواسطة **`, `<@${interaction.member.id}>`)
   .addField(`** نوع الاعلان**`, `Here`)
    .addField(`**اضغط على الزر **`, `**لكتابة اعلانك **`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row3] }).then(async x =>{
    await last.delete()

    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء اعلان")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`نوع الاعلان`, `Here`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
.addField(`في انتظار نشر الاعلان`, `<#${interaction.channel.id}>`)
.addField(`تم استخدام كود خصم `, `${dis}`)
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})

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
  if (interaction.customId === "discount_ad"){
let vale = interaction.values[0];
if(vale === "3"){
  
let dis = await  db.get(`disticket_${interaction.channel.id}`)
  let disa = await data.findOne({discountcode: dis})
    let discountamount = disa.amount
 const originalPriceEv = client.config.everyoneads;
const discountAmountEv = (originalPriceEv * discountamount) / 100;   
const finalPriceEv = originalPriceEv - discountAmountEv;
let price = finalPriceEv
let finalprice = Math.floor(price *(20) / (19) + (1))
  
//Buy
await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {

await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء اعلان")
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
    let row3 = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`discount_everyone`)
        .setLabel("Click here")
        .setEmoji("✨")
        .setStyle('SECONDARY')
      );
  await interaction.channel.send({embeds:[
    new MessageEmbed()
    .setTitle(tilte)
    .addField(`** تم شراء الاعلان بواسطة **`, `<@${interaction.member.id}>`)
   .addField(`** نوع الاعلان**`, `Everyone`)
    .addField(`**اضغط على الزر **`, `**لكتابة اعلانك **`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row3] }).then(async x =>{
    await last.delete()

    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء اعلان")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`نوع الاعلان`, `Everyone`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
.addField(`في انتظار نشر الاعلان`, `<#${interaction.channel.id}>`)
.addField(`تم استخدام كود خصم `, `${dis}`)
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})

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

  if (interaction.customId === "discount_ad"){
let vale = interaction.values[0];
if(vale === "6"){
  
let dis = await  db.get(`disticket_${interaction.channel.id}`)
  let disa = await data.findOne({discountcode: dis})
    let discountamount = disa.amount
 const originalPriceRoom = client.config.roomad;
const discountAmountRoom = (originalPriceRoom * discountamount) / 100;   
const finalPriceRoom = originalPriceRoom - discountAmountRoom;
let price = finalPriceRoom
let finalprice = Math.floor(price *(20) / (19) + (1))
  
//Buy
await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {

await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء اعلان")
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
    let row3 = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`discount_roomad`)
        .setLabel("Click here")
        .setEmoji("✨")
        .setStyle('SECONDARY')
      );
  await interaction.channel.send({embeds:[
    new MessageEmbed()
    .setTitle(tilte)
    .addField(`** تم شراء الاعلان بواسطة **`, `<@${interaction.member.id}>`)   .addField(`** نوع الاعلان**`, `Private Room`)
    .addField(`**اضغط على الزر **`, `**لكتابة اعلانك **`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row3] }).then(async x =>{
    await last.delete()

    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء اعلان")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`نوع الاعلان`, `Private Room`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
.addField(`في انتظار نشر الاعلان`, `<#${interaction.channel.id}>`)
.addField(`تم استخدام كود خصم `, `${dis}`)
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})

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
})

/////modal
client.on("interactionCreate", async interaction => {
    if (interaction.customId === "discount_nomads") {
const modal = new Modal()
			.setCustomId('modal_nom_discount')
			.setTitle('اعلان بدون منشن')
  
  const name = new TextInputComponent()
			.setCustomId('discount_msg_no')
.setLabel(`الاعلان`)
  .setPlaceholder("ضع رسالة الاعلان هنا")
  .setStyle('PARAGRAPH')
  const firstActionRow = new MessageActionRow().addComponents(name);
		
		// Add inputs to the modal
		modal.addComponents(firstActionRow);
		// Show the
		await interaction.showModal(modal);   

    }
    if (interaction.customId === "discount_everyone") {
const modal = new Modal()
			.setCustomId('modal_ev_discount')
			.setTitle('اعلان منشن ايفريون')
  
  const name = new TextInputComponent()
			.setCustomId('discount_msg_ev')
.setLabel(`الاعلان`)
  .setPlaceholder("ضع رسالة الاعلان هنا")
  .setStyle('PARAGRAPH')
  const firstActionRow = new MessageActionRow().addComponents(name);
		
		// Add inputs to the modal
		modal.addComponents(firstActionRow);
		// Show the
		await interaction.showModal(modal);   

     }
      if (interaction.customId === "discount_here") {
const modal = new Modal()
			.setCustomId('modal_here_discount')
				.setTitle('اعلان منشن هير')
  
  const name = new TextInputComponent()
			.setCustomId('discount_msg_here')
.setLabel(`الاعلان`)
  .setPlaceholder("ضع رسالة الاعلان هنا")
  .setStyle('PARAGRAPH')
  const firstActionRow = new MessageActionRow().addComponents(name);
		
		// Add inputs to the modal
		modal.addComponents(firstActionRow);
		// Show the
		await interaction.showModal(modal);   

      }
 })

client.on("interactionCreate", async interaction => {
  if (!interaction.isModalSubmit()) return;
    if (interaction.customId === "modal_nom_discount") {

    
      const name = interaction.fields.getTextInputValue()

      let channel = client.channels.cache.get(client.config.adsroom)
      
      await channel.send({content:`${name}`}).then(async x => {
    await interaction.message.delete().then(async s =>{
await interaction.reply({content:`** تم نشر اعلانك بنجاح** `}).then(async l=> {
  let log = client.channels.cache.get(client.config.logbuy)
  await log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()
    .setTitle("نشر اعلان")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`نوع الاعلان`, `No Mention`)
.addField(`الاعلان`, `${name}`)
  .addField(`رابط الاعلان`, `${x.url}`)
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})
})
    })              
})
    }
  if (!interaction.isModalSubmit()) return;
    if (interaction.customId === "modal_ev_discount") {

    
      const name = interaction.fields.getTextInputValue()

      let channel = client.channels.cache.get(client.config.adsroom)
      
      await channel.send({content:`${name}\n||@everyone||`}).then(async x => {
    await interaction.message.delete().then(async s =>{
await interaction.reply({content:`** تم نشر اعلانك بنجاح** `}).then(async l=> {
  let log = client.channels.cache.get(client.config.logbuy)
  await log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()
    .setTitle("نشر اعلان")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`نوع الاعلان`, `Everyone`)
.addField(`الاعلان`, `${name}`)
  .addField(`رابط الاعلان`, `${x.url}`)
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})
})
    })              
})
    }

      if (interaction.customId === "modal_here_discount") {
      const name = interaction.fields.getTextInputValue()
      let channel = client.channels.cache.get(client.config.adsroom)
      
      await channel.send({content:`${name}\n||@here||`}).then(async x => {
    await interaction.message.delete().then(async s =>{
await interaction.reply({content:`** تم نشر اعلانك بنجاح**`}).then(async l=> {
  let log = client.channels.cache.get(client.config.logbuy)
  await log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()
    .setTitle("نشر اعلان")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`نوع الاعلان`, `Here`)
.addField(`الاعلان`, `${name}`)
  .addField(`رابط الاعلان`, `${x.url}`)
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})
})
    })              
})
      }
  

 })


//////// / / /  // / / / / / / /

////////////////////  