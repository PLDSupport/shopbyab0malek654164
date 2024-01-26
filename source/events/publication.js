const client = require('../../main.js');
const config = require(`../../config.json`)
const db = require('pro.db')
const { MessageEmbed , MessageActionRow , MessageSelectMenu, MessageButton} = require('discord.js');
const { Permissions } = require('discord.js');
const {  Modal, TextInputComponent } = require('discord.js');
const data = require('../../data/discount.js');

let transfer = client.config.transfer
let probot = client.config.probotid
let line = client.config.lineurl
let color = client.config.color
let title = client.config.title

client.on("interactionCreate", async interaction => {
    if (interaction.customId === "everyone"){    
let price = client.config.everyonepricesh
let finalprice = Math.floor(price *(20) / (19) + (1))

  await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {

await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء منشور مميز")
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
        .setCustomId(`everymsg`)
        .setLabel("Click here")
        .setEmoji("✨")
        .setStyle('SECONDARY')
      );  
        
  await interaction.channel.send({ embeds:[
    new MessageEmbed()
    .setTitle(title)
    .addField(`** تم شراء المنشور بواسطة **`, `<@${interaction.member.id}>`)
   .addField(`** تم شراء منشور**`, `Everyone`)
    .addField(`**اضغط على الزر **`, `**لكتابة منشورك **`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row3] }).then(async x =>{
    await last.delete()

    
    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء منشور مميز")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`** تم شراء منشور**`, `Everyone`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
.addField(`في انتظار نشر المنشور`, `<#${interaction.channel.id}>`)
    
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


      
         }
 if(interaction.customId === "here"){
let price = client.config.hereshareprice
let finalprice = Math.floor(price *(20) / (19) + (1))

     await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {

await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء منشور مميز")
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
        .setCustomId(`heremsg`)
        .setLabel("Click here")
        .setEmoji("✨")
        .setStyle('SECONDARY')
      );
  await interaction.channel.send({embeds:[
    new MessageEmbed()
    .setTitle(title)
    .addField(`** تم شراء المنشور بواسطة **`, `<@${interaction.member.id}>`)
   .addField(`** تم شراء منشور**`, `Here`)
    .addField(`**اضغط علي الزر **`, `**لكتابة منشورك **`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row3] }).then(async x =>{
    await last.delete()

    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء منشور مميز")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`** نوع المنشن**`, `Here`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
.addField(`في انتظار نشر المنشور`, `<#${interaction.channel.id}>`)
    
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

   
 }       
       
     })



//Send
client.on("interactionCreate", async interaction => {
    if (interaction.customId === "everymsg") {
const modal = new Modal()
			.setCustomId('modalEvery')
			.setTitle('منشور مميز')
  
  const name = new TextInputComponent()
			.setCustomId('nameevery')
.setLabel(`المنشور`)
  .setPlaceholder("ضع المنشورك هنا")
  .setStyle('PARAGRAPH')
  const firstActionRow = new MessageActionRow().addComponents(name);
		
		// Add inputs to the modal
		modal.addComponents(firstActionRow);
		// Show the
		await interaction.showModal(modal);   

     }
      if (interaction.customId === "heremsg") {
const modal = new Modal()
			.setCustomId('modalhere')
			.setTitle('منشور مميز')
  
  const name = new TextInputComponent()
			.setCustomId('namehere')
.setLabel(`المنشور`)
  .setPlaceholder("ضع منشورك هنا")
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
    if (interaction.customId === "modalEvery") {
  
let msg = new MessageActionRow()
.addComponents(new MessageButton()
.setCustomId(`msg`)
//.setLabel("")
.setEmoji("<:AS_Recycling:1155147875441975450>")
.setStyle('SECONDARY'));

      const name = interaction.fields.getTextInputValue()

      let channel = client.channels.cache.get(client.config.shareroom)
      
      await channel.send({content:`${name}\nتواصل مع <@${interaction.member.id}>\n||@everyone||`, components:[msg]}).then(async x => {
    await interaction.message.delete().then(async s =>{
await interaction.reply({content:`** تم نشر منشورك بنجاح** ..\n${x.url}`}).then(async l=> {
  let log = client.channels.cache.get(client.config.logbuy)
  await log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()
    .setTitle("نشر منشور مميز")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`نوع المنشن`, `Everyone`)
.addField(`المنشور`, `${name}`)
  .addField(`رابط المنشور`, `${x.url}`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})
})
    })              
})
    }

      if (interaction.customId === "modalhere") {
        
let msg = new MessageActionRow()
.addComponents(new MessageButton()
.setCustomId(`msg`)
//.setLabel("")
.setEmoji("<:AS_Recycling:1155147875441975450> ")
.setStyle('SECONDARY'));
        
      const name = interaction.fields.getTextInputValue()
      let channel = client.channels.cache.get(client.config.shareroom)
      
      await channel.send({content:`${name}\nتواصل مع <@${interaction.member.id}>\n||@here||`,components:[msg]}).then(async x => {
    await interaction.message.delete().then(async s =>{
await interaction.reply({content:`** تم نشر منشورك بنجاح** ..\n${x.url}`}).then(async l=> {
let log = client.channels.cache.get(client.config.logbuy)
  await log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()
    .setTitle("نشر منشور مميز")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`نوع المنشن`, `Here`)
.addField(`المنشور`, `${name}`)
  .addField(`رابط المنشور`, `${x.url}`)
    
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

////////////////////  discount


client.on("interactionCreate", async interaction => {
    if (interaction.customId === "discount_everyone"){    
let dis = await db.get(`disticket_${interaction.channel.id}`)
  let disa = await data.findOne({discountcode: dis})
    let discountamount = disa.amount
      const originalPriceBest = client.config.everyonepricesh;
const discountAmountBest = (originalPriceBest * discountamount) / 100;   
const finalPriceBest = originalPriceBest - discountAmountBest;
let price = finalPriceBest
let finalprice = Math.floor(price *(20) / (19) + (1))

//Buy
await interaction.message.edit({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء منشور مميز")
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
        .setCustomId(`everymsg_discount`)
        .setLabel("Click here")
        .setEmoji("✨")
        .setStyle('SECONDARY')
      );
  await interaction.channel.send({embeds:[
    new MessageEmbed()
    .setTitle(title)
    .addField(`** تم شراء المنشور بواسطة **`, `<@${interaction.member.id}>`)
   .addField(`** تم شراء منشور**`, `Everyone`)
    .addField(`**اضغط على الزر **`, `**لكتابة منشورك **`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row3] }).then(async x =>{
    await last.delete()

    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء منشور مميز")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`نوع المنشن`, `Everyone`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
.addField(`في انتظار نشر المنشور`, `<#${interaction.channel.id}>`)
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
     }

    
if (interaction.customId === "discount_here"){
let dis = await  db.get(`disticket_${interaction.channel.id}`)
  let disa = await data.findOne({discountcode: dis})
    let discountamount = disa.amount
      const originalPriceBest = client.config.herepricesh;
const discountAmountBest = (originalPriceBest * discountamount) / 100;   
const finalPriceBest = originalPriceBest - discountAmountBest;
let price = finalPriceBest
let finalprice = Math.floor(price *(20) / (19) + (1))
  
//Buy
await interaction.message.edit({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء منشور مميز")
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
        .setCustomId(`heremsg_discount`)
        .setLabel("Click here")
        .setEmoji("✨")
        .setStyle('SECONDARY')
      );
  await interaction.channel.send({embeds:[
    new MessageEmbed()
    .setTitle(title)
    .addField(`** تم شراء المنشور بواسطة **`, `<@${interaction.member.id}>`)
   .addField(`** تم شراء منشور**`, `Here`)
    .addField(`**اضغط على الزر **`, `**لكتابة منشورك **`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row3] }).then(async x =>{
    await last.delete()

    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء منشور مميز")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`نوع المنشن`, `Here`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
.addField(`في انتظار نشر المنشور`, `<#${interaction.channel.id}>`)
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
}
})


/////modal
client.on("interactionCreate", async interaction => {
    if (interaction.customId === "everymsg_discount") {
const modal = new Modal()
			.setCustomId('modalEvery_discount')
			.setTitle('منشور مميز')
  
  const name = new TextInputComponent()
			.setCustomId('nameevery_discount')
.setLabel(`المنشور`)
  .setPlaceholder("ضع منشورك هنا")
  .setStyle('PARAGRAPH')
  const firstActionRow = new MessageActionRow().addComponents(name);
		
		// Add inputs to the modal
		modal.addComponents(firstActionRow);
		// Show the
		await interaction.showModal(modal);   

     }
      if (interaction.customId === "heremsg_discount") {
const modal = new Modal()
			.setCustomId('modalhere_discount')
				.setTitle('منشور مميز')
  
  const name = new TextInputComponent()
			.setCustomId('namehere_discount')
.setLabel(`المنشور`)
  .setPlaceholder("ضع منشورك هنا")
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
    if (interaction.customId === "modalEvery_discount") {

    
      const name = interaction.fields.getTextInputValue()

      let channel = client.channels.cache.get(client.config.shareroom)
      
      await channel.send({content:`${name}\nتواصل مع <@${interaction.member.id}>\n||@everyone||`}).then(async x => {
    await interaction.message.delete().then(async s =>{
await interaction.reply({content:`** تم نشر منشورك بنجاح** ..\n${x.url}`}).then(async l=> {
  let log = client.channels.cache.get(client.config.logbuy)
  await log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()
    .setTitle("نشر منشور مميز")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`نوع المنشن`, `Everyone`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
.addField(`المنشور`, `${name}`)
  .addField(`رابط المنشور`, `${x.url}`)
  .addField(`تم استخدام كود خصم `, `${dis}`)
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})
})
    })              
})
    }

      if (interaction.customId === "modalhere_discount") {
      const name = interaction.fields.getTextInputValue()
      let channel = client.channels.cache.get(client.config.shareroom)
      
      await channel.send({content:`${name}\nتواصل مع <@${interaction.member.id}>\n||@here||`}).then(async x => {
    await interaction.message.delete().then(async s =>{
await interaction.reply({content:`** تم نشر منشورك بنجاح** ..\n${x.url}`}).then(async l=> {
  let log = client.channels.cache.get(client.config.logbuy)
  await log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()
    .setTitle("نشر منشور مميز")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`نوع المنشن`, `Everyone`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
.addField(`المنشور`, `${name}`)
  .addField(`رابط المنشور`, `${x.url}`)
  .addField(`تم استخدام كود خصم `, `${dis}`)
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

////////////////////  discount