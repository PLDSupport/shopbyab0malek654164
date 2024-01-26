require('events').EventEmitter.defaultMaxListeners = Infinity;

const client = require('../../main.js');
const config = require(`../../config.json`)
const db = require('pro.db')
const { MessageEmbed , MessageActionRow , MessageSelectMenu, MessageButton} = require('discord.js');
const { Permissions } = require('discord.js');
const {  Modal, TextInputComponent } = require('discord.js');
const data = require('../../data/discount.js');

let prefix = client.config.prefix
let color = client.config.color
let title = client.config.title

client.on(`messageCreate`, async message => {
if(message.content.startsWith(prefix + "buy")){

let cat = client.config.buycategoryId
let ch = message.channel
  
if(ch.name.includes(`ticket-`)){
if(ch.parent.id === cat){
const menu = new MessageActionRow()
.addComponents( new MessageSelectMenu()
.setCustomId('menu_help')
.setPlaceholder('اضغط هنا لـ الشراء')
.setMinValues(1)
.setMaxValues(1)
.addOptions({
label: 'رتب بائعين' ,
value: "1",
},
{
label: 'رتب نادرة' ,
value: '2',
},
{
label : "الرومات خاصة",  
value: "3",
},
{
label: 'المنشورات مميزة' ,
value: '4',
},
{
label: 'الاعلانات' ,
value: '5',
},
),
);

let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`discount`)
        .setLabel("كود خصم")
        .setEmoji("💲")
        .setStyle('SUCCESS'))
     	.addComponents(   new MessageButton()
        .setCustomId(`closetic`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER')
      );
 message.channel.send({content:`<@${message.author.id}>`, 
      embeds: [
        new MessageEmbed()
        .setTitle(`${title}・عـمـلـيـة شـراء`)
        .setDescription(`**- رتب بائعين : لشراء رتبة بيع
- رتب نادرة : لشراء رتبة نادرة
- الرومات الخاصة: لشراء روم بيع خاص بك
- المنشورات المميزة : لشراء منشور مميز
- الاعلانات : لشراء اعلان لسيرفرك**`)
        .setColor(color)
        //.setThumbnail(message.guild.iconURL({dynamic:true}))
      ], components: [menu, row]})
}
}else return message.reply(`** This Command Only Works In Tickets **`)
}
})

client.on("interactionCreate", async interaction => {
if (interaction.customId === "menu_help") {
let vale = interaction.values[0];
if(vale === "1"){

const menu1 = new MessageActionRow()
.addComponents( new MessageSelectMenu()
.setCustomId('1roles')
.setPlaceholder('قم بأختيار الرتبة')
.setMinValues(1)
.setMaxValues(1)
.addOptions({
label: `℘・Angel S`,
value: "1",
},{
label: `℘・Perfect S`,
value: "2",
},{
label: `℘・Great S`,
value: "3",
},{
label: `℘・Excellent S`,
value: "4",
},{
label: `℘・Good S`,
value: "5",
},{
label: `℘・Designer S`,
value: "6",
},{
label: `℘・Developer S`,
value: "7",
},
),
);

let row = new MessageActionRow()
.addComponents( new MessageButton()
.setCustomId(`Back`)
.setLabel("رجوع")
.setEmoji("↩️")
.setStyle('PRIMARY'))
.addComponents( new MessageButton()
.setCustomId(`closetic`)
.setLabel("Close Ticket")
.setEmoji("🔒")
.setStyle('DANGER'));
  
await interaction.reply({content:`**تم تعديل الرسالة و تم وضع اسعار الرتب   .. **`,ephemeral:true}).then(async s => {
     
await interaction.message.edit({embeds:[
new MessageEmbed()
.setColor(color)
.setTitle(`__Normal Roles Informations・ معلومات الرتب__`)
.setTimestamp()
.addField(`Angel S`, `${client.config.angelinfo}`)
.addField(`Perfect S`,`${client.config.perfectinfo}`)
.addField(`Great S`, `${client.config.greatinfo}`)
.addField(`Excellent S`, `${client.config.excellentinfo}`)
.addField(`Good S`, `${client.config.goodinfo}`)
.addField(`Designer S`, `${client.config.designerinfo}`)
.addField(`Developer S`, `${client.config.developerinfo}`)] ,components: [row, menu1]})
})    
}
  
if(vale === "2"){
const menu2 = new MessageActionRow()
.addComponents( new MessageSelectMenu()
.setCustomId('2roles')
.setPlaceholder('قم بأختيار الرتبة')
.setMinValues(1)
.setMaxValues(1)
.addOptions({
label: `Vip S`,
value: "1",
},{
label: ` S`,
value: "2",
}
),
)

let row = new MessageActionRow()
.addComponents( new MessageButton()
.setCustomId(`Back`)
.setLabel("رجوع")
.setEmoji("↩️")
.setStyle('PRIMARY'))
.addComponents( new MessageButton()
.setCustomId(`closetic`)
.setLabel("Close Ticket")
.setEmoji("🔒")
.setStyle('DANGER'));
      
await interaction.reply({content:`**تم تعديل الرسالة و تم وضع اسعار الرتب النادرة   .. **`,ephemeral:true}).then(async s => {   
await interaction.message.edit({embeds:[ new MessageEmbed()
.setColor(color)
.setTitle(`__Special Roles Informations・ معلومات الرتب النادرة__`)
.setTimestamp()
.addField(`Vip S`, `${client.config.vipinfo}`)
.addField(` S`, `${client.config.info}`) ] ,components: [row, menu2]})
})
}
  
if(vale === "3"){
  
let row = new MessageActionRow()
.addComponents( new MessageButton()
.setCustomId(`buyroom`)
.setLabel("شراء")
.setEmoji("💲")
.setStyle("SECONDARY"), 
new MessageButton()
.setCustomId(`renewal`)
.setLabel("تجديد")
.setEmoji("♾️")
.setStyle('SECONDARY'));

let row3 = new MessageActionRow()
.addComponents( new MessageButton()
.setCustomId(`Back`)
.setLabel("رجوع")
.setEmoji("↩️")
.setStyle('PRIMARY'))
.addComponents( new MessageButton()
.setCustomId(`closetic`)
.setLabel("Close Ticket")
.setEmoji("🔒")
.setStyle('DANGER'));

await interaction.reply({content:`** تم تعديل الرسالة و تم وضع اسعار الرومات الخاصة   .. **`, ephemeral:true}).then(async d => {
await interaction.message.edit({
content: `<@${interaction.member.id}>`, embeds: [ new MessageEmbed()
.setColor(color)
.setTitle(`__Private Room Informations・ معلومات الرومات الخاصة__`)
.setTimestamp()
.addField(`سعر شراء الروم الخاصة`,`${client.config.roombuyinfo}`)
.addField(`سعر تجديد الروم الخاصة`, ` ${client.config.roomrenewalinfo}`)], components:[row, row3]
})
})
}
  
if(vale === "4"){
    
let row = new MessageActionRow()
.addComponents( new MessageButton()
.setCustomId(`everyone`)
.setLabel("Everyone")
.setEmoji("✔️")
.setStyle('DANGER'), 
new MessageButton()
.setCustomId(`here`)
.setLabel("Here")
.setEmoji("✔️")
.setStyle('DANGER'))
  
let row3 = new MessageActionRow()
.addComponents( new MessageButton()
.setCustomId(`Back`)
.setLabel("رجوع")
.setEmoji("↩️")
.setStyle('PRIMARY'))
.addComponents( new MessageButton()
.setCustomId(`closetic`)
.setLabel("Close Ticket")
.setEmoji("🔒")
.setStyle('DANGER'));
  
 await interaction.reply({content:`**تم تعديل الرسالة و تم وضع اسعار المنشورات المميزة   .. **`, ephemeral:true}).then(async d => {   
await interaction.message.edit({content:`<@${interaction.member.id}>`,embeds:[ new MessageEmbed()
.setTitle("__Special Posts Informations・ معلومات المنشوات المميزة__")
.addField(`Everyone`, `${client.config.everyoneinfo}`)
.addField(`**Here**`, `${client.config.hereinfo}`)
.setTimestamp()
.setColor(color)], components: [row, row3]})
}) 
}

if(vale === "5"){
const ad = new MessageActionRow()
.addComponents( new MessageSelectMenu()
.setCustomId('ads')
.setPlaceholder('قم بأختيار نوع الاعلان')
.setMinValues(1)
.setMaxValues(1)
.addOptions({
label: `بدون منشن`,
value: "1",
},{
label: `منشن هير`,
value: "2",
},{
label: `منشن ايفريون`,
value: "3",
},{
label: `هدايا الاعلانات`,
value: "4",
},{
label: `روم خاص بدون جيفاواي`,
value: "5",
},{
label: `روم خاص مع جيفاواي`,
value: "6",
},
),
);
  
let row3 = new MessageActionRow()
.addComponents( new MessageButton()
.setCustomId(`Back`)
.setLabel("رجوع")
.setEmoji("↩️")
.setStyle('PRIMARY'))
.addComponents( new MessageButton()
.setCustomId(`closetic`)
.setLabel("Close Ticket")
.setEmoji("🔒")
.setStyle('DANGER'));
    
await interaction.reply({content:`**تم تعديل الرسالة و تم وضع اسعار الاعلانات   .. **`, ephemeral:true}).then(async d => {   
await interaction.message.edit({content:`<@${interaction.member.id}>`,embeds:[ new MessageEmbed()
.setTitle("__Ads Informations・ معلومات الإعلانات__")
.addField(`No Mention`, `${client.config.nomadsinfo}`)
.addField(`**Here**`, `${client.config.hereadsinfo}`)
.addField(`**Everyone**`, `${client.config.everyoneadsinfo}`)
.addField(`**Gift Giveaway**`, `${client.config.giftadinfo}`)
.addField(`**Private Room**`, `${client.config.roomadinfo}`)
.addField(`**Private Room and Giveaway**`, `${client.config.roomadginfo}`)
.setTimestamp()
.setColor(color)], components: [ad, row3]})
}) 
}
}})

///////discount code 
client.on('interactionCreate', async interaction => {
  if (!interaction.isModalSubmit()) return;
    if(interaction.customId === "0122222") {
     
      const name = interaction.fields.getTextInputValue()

     
      const des = await data.findOne({discountcode: name})

if (!des) {
  return interaction.reply({ content: `**هذا الكود غير صالح  .. ** `, ephemeral: true });
}
      
 
   

   if(des){


const menu = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
                    .setCustomId('discount_help')
.setPlaceholder('اضغط هنا لـ الشراء')
.setMinValues(1)
.setMaxValues(1)
.addOptions({
label: 'رتب بائعين' ,
value: "1",
},
{
label: 'رتب نادرة' ,
value: '2',
},
{
label : "الرومات خاصة",  
value: "3",
},
{
label: 'المنشورات مميزة' ,
value: '4',
},
{
label: 'الاعلانات' ,
value: '5',
},
),
);

let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`discount`)
        .setLabel("كود خصم")
        .setEmoji("💲")
        .setStyle('SUCCESS')
  .setDisabled(true))
     	.addComponents(   new MessageButton()
        .setCustomId(`closetic`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER')
      );

return interaction.reply({content: `تم استخدام الكود وتم خصم ${des.amount}` + `%`, ephemeral:true}).then(async d => {
await interaction.message.edit({content:`<@${interaction.member.id}>`, 
      embeds: [
        new MessageEmbed()
.setTitle(`${title}・عـمـلـيـة شـراء`)
        .addField(`**تم استخدام كود ${name}**`, `**وتم خصم ${des.amount}**` + `%`)
        .setDescription(`**- رتب بائعين : لشراء رتبة بيع
- رتب نادرة : لشراء رتبة نادرة
- الرومات الخاصة: لشراء روم بيع خاص بك
- المنشورات المميزة : لشراء منشور مميز
- الاعلانات : لشراء اعلان لسيرفرك**`)
        .setColor(color)
        //.setThumbnail(message.guild.iconURL({dynamic:true}))
  
      ], components: [menu, row]})

  db.set(`disticket_${interaction.channel.id}`, name)
})
     }
           }
})

//////
/////////

client.on("interactionCreate", async interaction => {
  ///button
if(interaction.customId === "discount"){
  const modal11 = new Modal()
			.setCustomId('0122222')
			.setTitle('قم بوضع كود الخصم !!')
  
  const name = new TextInputComponent()
			.setCustomId('0111111')
.setLabel(`كود الخصم`)
  .setPlaceholder("ضع هنا الكود")
  .setStyle('PARAGRAPH')
  const firstActionRow = new MessageActionRow().addComponents(name);
		
		// Add inputs to the modal
		modal11.addComponents(firstActionRow);
		// Show the
		await interaction.showModal(modal11);    
}
  if(interaction.customId == "Back"){
const menu = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
                    .setCustomId('menu_help')
.setPlaceholder('اضغط هنا لـ الشراء')
.setMinValues(1)
.setMaxValues(1)
.addOptions({
label: 'رتب بائعين' ,
value: "1",
},
{
label: 'رتب نادرة' ,
value: '2',
},
{
label : "الرومات خاصة",  
value: "3",
},
{
label: 'المنشورات مميزة' ,
value: '4',
},
{
label: 'الاعلانات' ,
value: '5',
},
),
);

let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`discount`)
        .setLabel("كود خصم")
        .setEmoji("💲")
        .setStyle('SUCCESS'))
     	.addComponents(   new MessageButton()
        .setCustomId(`closetic`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER')
      );
return interaction.reply({content:`**تم الرجوع اللي القائمة الرئيسيه   ..**`,ephemeral:true }).then(async f =>{ 

interaction.message. edit({content:`<@${interaction.member.id}>`, 
      embeds: [
        new MessageEmbed()
        .setTitle(`${title}・عـمـلـيـة شـراء`)
        .setDescription(`**- رتب بائعين : لشراء رتبة بيع
- رتب نادرة : لشراء رتبة نادرة
- الرومات الخاصة: لشراء روم بيع خاص بك
- المنشورات المميزة : لشراء منشور مميز
- الاعلانات : لشراء اعلان لسيرفرك**`)
        .setColor(color)
        //.setThumbnail(message.guild.iconURL({dynamic:true}))
      ], components: [menu, row]})


 })                  
    
  }

  if(interaction.customId === "discount_back"){
    const menu = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
                    .setCustomId('discount_help')
.setPlaceholder('اضغط هنا لـ الشراء')
.setMinValues(1)
.setMaxValues(1)
.addOptions({
label: 'رتب بائعين' ,
value: "1",
},
{
label: 'رتب نادرة' ,
value: '2',
},
{
label : "الرومات خاصة",  
value: "3",
},
{
label: 'المنشورات مميزة' ,
value: '4',
},
{
label: 'الاعلانات' ,
value: '5',
},
),
);
    let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`discount`)
        .setLabel("كود خصم")
        .setEmoji("💲")
        .setStyle('SUCCESS')
  .setDisabled(true))
     	.addComponents(   new MessageButton()
        .setCustomId(`closetic`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER')
      );
    
    let code = db.get(`disticket_${interaction.channel.id}`)

  let des = await data.findOne({discountcode: code})


    
return interaction.reply({content:`**تم الرجوع الى القائمة الرئيسيه   ..**`,ephemeral:true }).then(async f =>{ 

interaction.message. edit({content:`<@${interaction.member.id}>`, 
      embeds: [
        new MessageEmbed()
        .setTitle(`${title}・عـمـلـيـة شـراء`)
        .addField(`**تم استخدام كود ${name}**`, `**وتم خصم ${des.amount}**` + `%`)
        .setDescription(`**- رتب بائعين : لشراء رتبة بيع
- رتب نادرة : لشراء رتبة نادرة
- الرومات الخاصة: لشراء روم بيع خاص بك
- المنشورات المميزة : لشراء منشور مميز
- الاعلانات : لشراء اعلان لسيرفرك**`)
        .setColor(color)
        //.setThumbnail(message.guild.iconURL({dynamic:true}))
      ], components: [menu, row]})


 })                  
    
  }
    if(interaction.customId === "closetic"){
      
    if (interaction.message && interaction.message.delete) {
  await interaction.message.delete();
    }
      interaction.reply({content:`$close` })
    }

    })