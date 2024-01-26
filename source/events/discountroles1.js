const client = require('../../main.js');
const config = require(`../../config.json`)
const db = require('pro.db')
const { MessageEmbed , MessageActionRow , MessageSelectMenu, MessageButton} = require('discord.js');
const { Permissions } = require('discord.js');
const {  Modal, TextInputComponent } = require('discord.js');
const data = require('../../data/discount.js');

let transfer = client.config.transfer
let probot = client.config.probotid
let line = client.config.lineurl;
let title = client.config.title
let color = client.config.color
//Buy Discount
client.on("interactionCreate", async interaction => {
    if (interaction.customId === "discount_roles1") {

      let dis = await db.get(`disticket_${interaction.channel.id}`)
  let disa = await data.findOne({discountcode: dis})
    let discountamount = disa.amount
      
          let vale = interaction.values[0];
      if(vale === "1"){


        const originalPriceAngel = client.config.angelroleprice;
  
const discountAmountAngel = (originalPriceAngel * discountamount) / 100;   
     
const finalPriceAngel = originalPriceAngel - discountAmountAngel;
        
  let price = finalPriceAngel


        
        let finalprice = Math.floor(price *(20) / (19) + (1))
        
let roleid = client.config.angelroleid

//Close
let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`discount_back`)
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
   
    if(interaction.member.roles.cache.some((role) => role.id === roleid)) return interaction.reply(`**انت بالفعل لديك هذه الرتبة  .. **`)
        
  await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {
//buy
await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء رتبة")
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
    //done
  await interaction.channel.send({content:`<@${interaction.member.id}>`, embeds:[
    new MessageEmbed()
    .setTitle(title)
    .addField(`** تم شراء الرتبة بواسطة **`, `<@${interaction.member.id}>`)
   .addField(`** تم شراء رتبة **`, `<@&${roleid}>`)
        .addField(`** تم استخدام كود خصم **` , `${dis}`)
     .addField(`** يرجى قراءة القوانين لتجنب التحذيرات و سحب الرتبة **`, `** **`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row] }).then(async kk => {   
  db.delete(`disticket_${interaction.channel.id}`)
interaction.member.roles.add(roleid).catch((err)=> {  
  interaction.reply("I Cant give You the role Please Call the High role in this ticket")})
    await last.delete()

//log
    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء رتبة")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`تم شراء رتبة`, `<@&${roleid}>`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
       .addField(`تم استخدام كود خصم` , `${dis}`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
 
    log.send({files:[line]})
   })

    
   }).catch(async () => {
        //end
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
  });
    ///
 })
   })
      }

if(vale === "2"){
  //Close
let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`discount_back`)
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
  
  const originalPriceBest = client.config.greatroleprice;
  
const discountAmountBest = (originalPriceBest * discountamount) / 100;   
     
const finalPriceBest = originalPriceBest - discountAmountBest;
        
  let price = finalPriceBest

  
  
        let finalprice = Math.floor(price *(20) / (19) + (1))

let roleid = client.config.greatroleid
if(interaction.member.roles.cache.some((role) => role.id === roleid)) return interaction.reply(`**انت بالفعل لديك هذه الرتبة  .. **`)
  
  await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {
    
  
//buy
await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء رتبة")
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
    
    //done
  await interaction.channel.send({content:`<@${interaction.member.id}>`, embeds:[
    new MessageEmbed()
    .setTitle(title)
    .addField(`** تم شراء الرتبة بواسطة **`, `<@${interaction.member.id}>`)
   .addField(`** تم شراء رتبة **`, `<@&${roleid}>`)
        .addField(`** تم استخدام كود خصم **` , `${dis}`)
     .addField(`** يرجى قراءة القوانين لتجنب التحذيرات و سحب الرتبة **`, `** **`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row] }).then(async kk => {
    
interaction.member.roles.add(roleid).catch((err)=> {
  
  interaction.reply("I Cant give You the role Please Call the High role in this ticket")})
    await last.delete()

    //log
    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء رتبة")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`تم شراء رتبة`, `<@&${roleid}>`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
        .addField(`تم استخدام كود خصم` , `${dis}`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
 
    log.send({files:[line]})
   })

    
   }).catch(async () => {
        //end
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
  });
    ///
 })
   })
}
      if(vale === "3"){
        //Close
let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`discount_back`)
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
        
  const originalPriceBest = client.config.perfectroleprice;
  
const discountAmountBest = (originalPriceBest * discountamount) / 100;   
     
const finalPriceBest = originalPriceBest - discountAmountBest;
        
  let price = finalPriceBest
        let finalprice = Math.floor(price *(20) / (19) + (1))

let roleid = client.config.perfectroleid
        if(interaction.member.roles.cache.some((role) => role.id === roleid)) return interaction.reply(`**انت بالفعل لديك هذه الرتبة  .. **`)

  await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {
    
  

    //buy
await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء رتبة")
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
    //done
  await interaction.channel.send({content:`<@${interaction.member.id}>`, embeds:[
    new MessageEmbed()
    .setTitle(color)
    .addField(`** تم شراء الرتبة بواسطة **`, `<@${interaction.member.id}>`)
   .addField(`** تم شراء رتبة **`, `<@&${roleid}>`)
        .addField(` **تم استخدام كود خصم **` , `${dis}`)
     .addField(`** يرجى قراءة القوانين لتجنب التحذيرات و سحب الرتبة **`, `** **`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row] }).then(async kk => {
    
interaction.member.roles.add(roleid).catch((err)=> {
  
  interaction.reply("I Cant give You the role Please Call the High role in this ticket")})
    await last.delete()

    //log
    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء رتبة")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`تم شراء رتبة`, `<@&${roleid}>`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
        .addField(`تم استخدام كود خصم` , `${dis}`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
 
    log.send({files:[line]})
   })

    
   }).catch(async () => {
        //end
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
  });
    ///
 })
   })
      }

      if(vale === "4"){
        //Close
let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`discount_back`)
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
  const originalPriceBest = client.config.excellentroleprice;
 
const discountAmountBest = (originalPriceBest * discountamount) / 100;   
     
const finalPriceBest = originalPriceBest - discountAmountBest;
        
  let price = finalPriceBest
        let finalprice = Math.floor(price *(20) / (19) + (1))

let roleid = client.config.excellentroleid
if(interaction.member.roles.cache.some((role) => role.id === roleid)) return interaction.reply(`**انت بالفعل لديك هذه الرتبة  .. **`)
  await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {
    
  
//buy
await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء رتبة")
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
  //done
  await interaction.channel.send({content:`<@${interaction.member.id}>`, embeds:[
    new MessageEmbed()
    .setTitle(title)
    .addField(`** تم شراء الرتبة بواسطة **`, `<@${interaction.member.id}>`)
   .addField(`** تم شراء رتبة **`, `<@&${roleid}>`)
  .addField(`** تم استخدام كود خصم ** `, `${dis}`)
     .addField(`** يرجى قراءة القوانين لتجنب التحذيرات و سحب الرتبة **`, `** **`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row] }).then(async kk => {
    
interaction.member.roles.add(roleid).catch((err)=> {
  
  interaction.reply("I Cant give You the role Please Call the High role in this ticket")})
    await last.delete()

//log
    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء رتبة")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`تم شراء رتبة`, `<@&${roleid}>`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
  .addField(`** تم استخدام كود خصم ** `, `${dis}`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
 
    log.send({files:[line]})  
   })

    
   }).catch(async () => {
        //end
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
  });
    ///
 })
   })
      }

      if(vale === "5"){
         //Close
let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`discount_back`)
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
const originalPriceBest = client.config.goodroleprice;
  
const discountAmountBest = (originalPriceBest * discountamount) / 100;   
     
const finalPriceBest = originalPriceBest - discountAmountBest;
        
  let price = finalPriceBest
        let finalprice = Math.floor(price *(20) / (19) + (1))

let roleid = client.config.goodroleid
if(interaction.member.roles.cache.some((role) => role.id === roleid)) return interaction.reply(`**انت بالفعل لديك هذه الرتبة  .. **`)
        
  await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {
    
  
//buy
await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء رتبة")
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
 
    //done
  await interaction.channel.send({content:`<@${interaction.member.id}>`, embeds:[
    new MessageEmbed()
    .setTitle(title)
    .addField(`** تم شراء الرتبة بواسطة **`, `<@${interaction.member.id}>`)
   .addField(`** تم شراء رتبة **`, `<@&${roleid}>`)
  .addField(`** تم استخدام كود خصم ** `, `${dis}`)
     .addField(`** يرجى قراءة القوانين لتجنب التحذيرات و سحب الرتبة **`, `** **`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row] }).then(async kk => {
    
interaction.member.roles.add(roleid).catch((err)=> {
  
  interaction.reply("I Cant give You the role Please Call the High role in this ticket")})
    await last.delete()

//log
    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء رتبة")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`تم شراء رتبة`, `<@&${roleid}>`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
  .addField(`**  تم استخدام كود خصم ** `, `${dis}`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
 
    log.send({files:[line]})
    
   })

    
   }).catch(async () => {
        //end
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
  });
    ///
 })
   })
      }
      if(vale === "6"){
        //Close
let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`discount_back`)
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
  const originalPriceBest = client.config.designerroleprice;
  
const discountAmountBest = (originalPriceBest * discountamount) / 100;   
     
const finalPriceBest = originalPriceBest - discountAmountBest;
        
  let price = finalPriceBest
        let finalprice = Math.floor(price *(20) / (19) + (1))

let roleid = client.config.designroleid
if(interaction.member.roles.cache.some((role) => role.id === roleid)) return interaction.reply(`**انت بالفعل لديك هذه الرتبة  .. **`)
        
  await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {
    
  
//buy
await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء رتبة")
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
    //done
  await interaction.channel.send({content:`<@${interaction.member.id}>`, embeds:[
    new MessageEmbed()
    .setTitle(tilte)
    .addField(`** تم شراء الرتبة بواسطة **`, `<@${interaction.member.id}>`)
   .addField(`** تم شراء رتبة **`, `<@&${roleid}>`)
.addField(`** تم استخدام كود خصم ** `, `${dis}`)
     .addField(`** يرجى قراءة القوانين لتجنب التحذيرات و سحب الرتبة **`, `** **`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row] }).then(async kk => {
    
interaction.member.roles.add(roleid).catch((err)=> {
  
  interaction.reply("I Cant give You the role Please Call the High role in this ticket")})
    await last.delete()

//log
    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء رتبة")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`تم شراء رتبة`, `<@&${roleid}>`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
 .addField(`تم استخدام كود خصم`, `${dis}`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
 
    log.send({files:[line]})
    
   })

    
   }).catch(async () => {
        //end
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
  });
    ///
 })
   })
      }
      if(vale === "7"){
        //Close
let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`discount_back`)
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
        
const originalPriceBest = client.config.developerroleprice;
  
const discountAmountBest = (originalPriceBest * discountamount) / 100;   
     
const finalPriceBest = originalPriceBest - discountAmountBest;
        
  let price = finalPriceBest
        let finalprice = Math.floor(price *(20) / (19) + (1))

let roleid = client.config.developerroleid
if(interaction.member.roles.cache.some((role) => role.id === roleid)) return interaction.reply(`**انت بالفعل لديك هذه الرتبة  .. **`)
        
  await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {
    
  //buy
await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء رتبة")
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
    //done
  await interaction.channel.send({content:`<@${interaction.member.id}>`, embeds:[
    new MessageEmbed()
    .setTitle(tilte)
    .addField(`** تم شراء الرتبة بواسطة **`, `<@${interaction.member.id}>`)
   .addField(`** تم شراء رتبة **`, `<@&${roleid}>`)
  .addField(`** تم استخدام كود خصم ** `, `${dis}`)
     .addField(`** يرجى قراءة القوانين لتجنب التحذيرات و سحب الرتبة **`, `** **`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row] }).then(async kk => {
    
interaction.member.roles.add(roleid).catch((err)=> {
  
  interaction.reply("I Cant give You the role Please Call the High role in this ticket")})
    await last.delete()


    //log
    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء رتبة")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`تم شراء رتبة`, `<@&${roleid}>`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
.addField(`تم استخدام كود خصم`, `${dis}`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
 
    log.send({files:[line]})
    
   })

    
   }).catch(async () => {
        //end
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
  });
    ///
 })
   })
      }
     }
})

////////////////////////////

//Buy Rera Roles
client.on("interactionCreate", async interaction => { 
  
  if(interaction.customId === "discount_roles2"){
  let status = await db.get(`vipstatus_${interaction.guild.id}`)
    if(status === "Off" || !status)return interaction.reply({content:`** الرتب النادرة غير متوفرة حالياً **`, ephemeral:true })

    let dis = await db.get(`disticket_${interaction.channel.id}`)
  let disa = await data.findOne({discountcode: dis})
    let discountamount = disa.amount


    
   let vale = interaction.values[0];
    if(vale === "1"){
//Close
let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`discount_back`)
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
      
  let price = client.config.viproleprice
        let finalprice = Math.floor(price *(20) / (19) + (1))
      
let roleid = client.config.viproleid

      if(interaction.member.roles.cache.some((role) => role.id === roleid)) return interaction.reply(`**انت بالفعل لديك هذه الرتبة  .. **`).then(async c => {
        })
  await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {

//buy
await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء رتبة نادرة")
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
    //done
  await interaction.channel.send({content:`<@${interaction.member.id}>`, embeds:[
    new MessageEmbed()
    .setTitle(tilte)
    .addField(`** تم شراء الرتبة بواسطة **`, `<@${interaction.member.id}>`)
   .addField(`** تم شراء رتبة **`, `<@&${roleid}>`)
 //.addField(`** تم استخدام كود خصم ** `, `${dis}`)
     .addField(`** يرجى قراءة القوانين لتجنب التحذيرات و سحب الرتبة **`, `** **`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row] }).then(async kk => {   
interaction.member.roles.add(roleid).catch((err)=> {  
  interaction.reply("I Cant give You the role Please Call the High role in this ticket")})
    await last.delete()

//log
    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء رتبة نادرة")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`تم شراء رتبة`, `<@&${roleid}>`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
 //.addField(`تم استخدام كود خصم`, `${dis}`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
 
    log.send({files:[line]})
  
   })

    
   }).catch(async () => {
        //end
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
  });
    ///
 })
   })
      }

if(vale === "2"){
  //Close
let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`discount_back`)
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
  
  let price = client.config.price
        let finalprice = Math.floor(price *(20) / (19) + (1))

let roleid = client.config.roleid

  if(interaction.member.roles.cache.some((role) => role.id === roleid)) return interaction.reply(`**انت بالفعل لديك هذه الرتبة  .. **`).then(async c => {
        })
  await interaction.message.edit({content:`** **`, embeds:[], components:[]}).then(async c => {
    
  
//buy
await interaction.channel.send({content: `#credit <@${transfer}> ${finalprice}`, embeds: [
  new MessageEmbed()
  .setTitle("شراء رتبة نادرة")
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
  
    //done
  await interaction.channel.send({content:`<@${interaction.member.id}>`, embeds:[
    new MessageEmbed()
    .setTitle(tilte)
    .addField(`** تم شراء الرتبة بواسطة **`, `<@${interaction.member.id}>`)
   .addField(`** تم شراء رتبة **`, `<@&${roleid}>`)
//.addField(`** تم استخدام كود خصم ** `, `${dis}`)
     .addField(`** يرجى قراءة القوانين لتجنب التحذيرات و سحب الرتبة **`, `** **`)
     .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
    
  ], components: [row] }).then(async kk => {
    
interaction.member.roles.add(roleid).catch((err)=> {
  
  interaction.reply("I Cant give You the role Please Call the High role in this ticket")})
    await last.delete()

    //log
    let log = client.channels.cache.get(client.config.logbuy)
  if(log) log.send({content:`<@${interaction.member.id}> ~ ${interaction.member.id} `,embeds: [
    new MessageEmbed()

    .setTitle("شراء رتبة نادرة")
    .addField(`تم شراء بواسطة `, `<@${interaction.member.id}>`)
    .addField(`تم شراء رتبة`, `<@&${roleid}>`)
    .addField(`تم تحويل الى `, `<@${transfer}>`)
    .addField(`المبلغ`, `${price}`)
   // .addField(`تم استخدام كود خصم`, `${dis}`)
    
        .setColor(color)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
 
    log.send({files:[line]})
    
   })

    
   }).catch(async () => {
        //end
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
  });
    ///
 })
   })
}
  }
})