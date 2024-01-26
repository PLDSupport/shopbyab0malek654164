const client = require('../../main.js');
const config = require(`../../config.json`)
const db = require('pro.db')
const { MessageEmbed , MessageActionRow , MessageSelectMenu, MessageButton} = require('discord.js');
const { Permissions } = require('discord.js');
const {  Modal, TextInputComponent } = require('discord.js');
const ms = require("ms")
const data = require('../../data/discount.js');

let color = client.config.color
///

client.on("interactionCreate", async interaction => {
  if (interaction.customId === "discount_help"){
let vale = interaction.values[0];
let name = await db.get(`disticket_${interaction.channel.id}`)
  const disdata = await data.findOne({discountcode: name})
  let amount = disdata.amount

    const discountamount = amount; 

   if(vale === "1"){

///Angel S
const originalPriceAngel = client.config.angelroleprice;
     
const discountAmountAngel = (originalPriceAngel * discountamount) / 100;
    
const finalPriceAngel = originalPriceAngel - discountAmountAngel;
     
     let priceangel = finalPriceAngel

     let finalpriceangel = Math.floor(priceangel *(20) / (19))
    
////Great S 
const originalPriceGreat = client.config.greatroleprice;
     
const discountAmountGreat = (originalPriceGreat * discountamount) / 100;
    
const finalPriceGreat = originalPriceGreat - discountAmountGreat;
     
     let pricegreat = finalPriceGreat

     let finalpricegreat = Math.floor(pricegreat *(20) / (19))
     
/////Perfect S 
const originalPricePerfect = client.config.perfectroleprice;
  
const discountAmountPerfect = (originalPricePerfect * discountamount) / 100;   
     
const finalPricePerfect = originalPricePerfect - discountAmountPerfect;

let priceperfect = finalPricePerfect
     
     let finalpriceperfect = Math.floor(priceperfect *(20) / (19))

///Excellent S 
     const originalPriceExcellent = client.config.excellentroleprice;
   
const discountAmountExcellent = (originalPriceExcellent * discountamount) / 100;
    
const finalPriceExcellent = originalPriceExcellent - discountAmountExcellent;

let priceexcellent = finalPriceExcellent
     
     let finalpriceexcellent = Math.floor(priceexcellent *(20) / (19))
  
///Good S
 const originalPriceGood = client.config.goodroleprice;
    
const discountAmountGood = (originalPriceGood * discountamount) / 100;
     
const finalPriceGood = originalPriceGood - discountAmountGood;
     
let pricegood = finalPriceGood

     let finalpricegood = Math.floor(pricegood *(20) / (19))
     
///Design S
    const originalPriceDesign = client.config.designerroleprice;
     
const discountAmountDesign = (originalPriceDesign * discountamount) / 100;
    
const finalPriceDesign = originalPriceDesign - discountAmountDesign;

  let pricedesign = finalPriceDesign

     let finalpricedesign = Math.floor(pricedesign *(20) / (19))
     
///Developer S 
     const originalPriceDeveloper = client.config.developerroleprice;
     
const discountAmountDeveloper = (originalPriceDeveloper * discountamount) / 100;
    
const finalPriceDeveloper = originalPriceDeveloper - discountAmountDeveloper;

     let pricedeveloper = finalPriceDeveloper

     let finalpricedeveloper = Math.floor(pricedeveloper *(20) / (19))
     
     //////////////

     const disrolemenu = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
                    .setCustomId('discount_roles1')
.setPlaceholder('قم بأختيار الرتبة')
          .setMinValues(1)
          .setMaxValues(1)
                    .addOptions(
                                                         {
                            label: `℘・Angel S`,



                  
                  value: "1",
                    
                        },             {
                            label: `℘・Perfect S`,



                        
                          value: "2",
                    
                        },
                        {
                            label: `℘・Great S`,



                  
                          value: "3",
                    
                        },
                        {
                            label: '℘・Excellent S' ,
 
                          
                            value: '4',
                        },
                      {
   label : "℘・Good S",  
        
          value: "5",
                         
                      },
                        {
label: '℘・Designer S' ,

                           
                          
                            value: '6',
                        
                      },
                      {
label: '℘・Developer S' ,
                             
                            value: '7',
                        
                      }
               ),
        );


let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`discount_back`)
        .setLabel("رجوع")
        .setEmoji("↩️")
        .setStyle('PRIMARY'))
        	.addComponents( 
            new MessageButton()
        .setCustomId(`close_tic`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER')
      );
 await interaction.reply({content:`**تم تعديل الرسالة و تم وضع اسعار الرتب مع الخصم  .. **`,ephemeral:true}).then(async s => {
    await interaction.message.edit({embeds:[
      new MessageEmbed()
      .setColor(color)
      .setTitle(`__ Roles Informations・ معلومات الرتب  __`)
      .setThumbnail(interaction.guild.iconURL({dynamic:true}))
      .setTimestamp()
.addField(`Angel S`, `[ Price : ${finalpriceangel} ]`)
.addField(`Perfect S`,`[ Price : ${finalpriceperfect} ]`)
  .addField(`Great S`, `[ Price : ${finalpricegreat} ]`)
.addField(`Excellent S`, `[ Price : ${finalpriceexcellent} ] `)
.addField(`Good S`, `[ Price : ${finalpricegood} ]`)
.addField(`Designer S`, `[ Price : ${finalpricedesign} ]`)
  .addField(`Developer S`, `[ Price : ${finalpricedeveloper} ]`)

    ] ,components: [row, disrolemenu]})
 })
   }

    if(vale === "2"){

      
      const menu2 = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
                    .setCustomId('discount_roles2')
.setPlaceholder('قم بأختيار الرتبة')
          .setMinValues(1)
          .setMaxValues(1)
                    .addOptions(
                                                         {
label: `Vip S`,



                  
                  value: "1",
                    
                        },             {
                            label: ` S`,



                        
                          value: "2",
                    
                        }
               ),
        );



let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`discount_back`)
        .setLabel("رجوع")
        .setEmoji("↩️")
        .setStyle('PRIMARY'))
        	.addComponents( 
            new MessageButton()
        .setCustomId(`close_tic`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER')
      );

     await interaction.reply({content:`**تم تعديل الرسالة و تم وضع اسعار الرتب النادرة   .. **`,ephemeral:true}).then(async s => {
    await interaction.message.edit({embeds:[
      new MessageEmbed()
      .setColor(color)
      .setTitle(`__ Special Roles Informations・ معلومات الرتب النادرة __`)
      .setThumbnail(interaction.guild.iconURL({dynamic:true}))
      .setTimestamp()

.addField(`Vip S`, `[ Price : ${client.config.viproleprice} ]`)
.addField(` S`, `[ Price : ${client.config.price} ]`)

    ] ,components: [row, menu2]})



       })
                      }
  if(vale === "3"){

//Buy Room
const originalPriceBuy = client.config.roombuy;
  
const discountAmountBuy = (originalPriceBuy * discountamount) / 100;   
     
const finalPriceBuy = originalPriceBuy - discountAmountBuy;

    let pricebuy = finalPriceBuy

     let finalpricebuy = Math.floor(pricebuy *(20) / (19))
    
  //Renwal Room
    const originalPriceRenwal = client.config.roomrenewal;
  
const discountAmountRenwal = (originalPriceRenwal * discountamount) / 100;   
     
const finalPriceRenwal = originalPriceRenwal - discountAmountRenwal;

let pricerenwal = finalPriceRenwal

let finalpricerenwal = Math.floor(pricerenwal *(20) / (19))

let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`buyroom_dis`)
        .setLabel("شراء")
        .setEmoji("💲")
        .setStyle("SECONDARY"), 
new MessageButton()
        .setCustomId(`renewal_dis`)
        .setLabel("تجديد")
        .setEmoji("♾️")
        .setStyle('SECONDARY')
 

      
      );


let row3 = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`discount_back`)
        .setLabel("رجوع")
        .setEmoji("↩️")
        .setStyle('PRIMARY'))
        	.addComponents( 
            new MessageButton()
        .setCustomId(`close_tic`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER')
      );


  await interaction.reply({content:`** تم تعديل الرسالة و تم وضع اسعار الرومات الخاصة مع الخصم  .. **`, ephemeral:true}).then(async d => {
    await interaction.message.edit({
            content: `<@${interaction.member.id}>`, 
embeds: [
      new MessageEmbed()
      .setColor(color)
      .setTitle(`__Private Room’s Informations・ معلومات الرومات الخاصة__`)
  .setThumbnail(interaction.guild.iconURL({dynamic:true}))
      .setTimestamp()
  .addField(`** **` , `**قم بالاختيار من الازرار الاتية**`)
.addField(`سعر شراء الروم الخاصة`, `[ Price : ${finalpricebuy} ]`)
.addField(`سعر تجديد الروم الخاصة`, `[ Price : ${finalpricerenwal} ]`)

], components:[row, row3]})
  })

    
    
  
    
  }

  if(vale === "4"){

const originalPriceEvery = client.config.everyonepricesh;
  
const discountAmountEvery = (originalPriceEvery * discountamount) / 100;   
     
const finalPriceEvery = originalPriceEvery - discountAmountEvery;

//////////////

    const originalPricehere = client.config.hereshareprice;
  
const discountAmounthere = (originalPricehere * discountamount) / 100;   
     
const finalPricehere = originalPricehere - discountAmounthere;

    


    
let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`discount_everyone`)
        .setLabel("Everyone")
        .setEmoji("✔️")
        .setStyle('DANGER'), 
new MessageButton()
        .setCustomId(`discount_here`)
        .setLabel("Here")
        .setEmoji("✔️")
        .setStyle('DANGER')
 
)
    let row3 = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`discount_back`)
        .setLabel("رجوع")
        .setEmoji("↩️")
        .setStyle('PRIMARY'))
        	.addComponents( 
            new MessageButton()
        .setCustomId(`close_tic`)
        .setLabel("Close Ticket")
        .setEmoji("🔒")
        .setStyle('DANGER')
      );
 await interaction.reply({content:`**تم تعديل الرسالة و تم وضع اسعار المنشورات المميزة   .. **`, ephemeral:true}).then(async d => {   
await interaction.message.edit({content:`<@${interaction.guild.id}>`,embeds:[
  new MessageEmbed()
    .setTitle("__ Special Posts Informations・ معلومات المنشوات المميزة __")
  .addField(`** **` , `**قم بالاختيار من الازرار الاتية**`)
  .addField(`Everyone`, `${client.config.everyonepricesh}`)
  .addField(`**Here**`, `${client.config.hereshareprice}`)
  .setThumbnail(interaction.guild.iconURL({dynamic:true}))
  .setTimestamp()
  .setColor(color)
], components: [row, row3]})
      





})
  }
  if(vale === "5"){

//No Mention 
const originalPriceNo = client.config.nomads; 
const discountAmountNo = (originalPriceNo * discountamount) / 100;       
const finalPriceNo = originalPriceNo - discountAmountNo;
let priceno = finalPriceNo
let finalpriceno = Math.floor(priceno *(20) / (19))

//Here
const originalPricehere = client.config.hereads; 
const discountAmounthere = (originalPricehere * discountamount) / 100;       
const finalPricehere = originalPricehere -  discountAmounthere;
let pricehere = finalPricehere
let finalpricehere = Math.floor(pricehere *(20) / (19))

//Everyone
const originalPriceev = client.config.everyoneads; 
const discountAmountev = (originalPriceev * discountamount) / 100;       
const finalPriceev = originalPriceev -  discountAmountev;
let priceev = finalPriceev
let finalpriceev = Math.floor(priceev *(20) / (19))

const ad = new MessageActionRow()
.addComponents( new MessageSelectMenu()
.setCustomId('discount_ad')
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
await interaction.message.edit({content:`<@${interaction.guild.id}>`,embeds:[ new MessageEmbed()
.setTitle("__ Ads Informations・ معلومات الإعلانات __")
.addField(`** **` , `**قم بالاختيار من الازرار الاتية**`)
.addField(`Everyone`, `${client.config.everyoneads}`)
.addField(`**Here**`, `${client.config.hereads}`)
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
.setTimestamp()
.setColor(color)], components: [ad, row3]})
  })
  }}})