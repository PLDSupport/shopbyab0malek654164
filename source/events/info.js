require('events').EventEmitter.defaultMaxListeners = Infinity;

const client = require('../../main.js');
const config = require(`../../config.json`)
const db = require('pro.db')
const { MessageEmbed , MessageActionRow , MessageSelectMenu, MessageButton} = require('discord.js');
const { Permissions } = require('discord.js');
const {  Modal, TextInputComponent } = require('discord.js');

let prefix = client.config.prefix
let transfer = client.config.transfer
let color = client.config.color
client.on(`messageCreate`, async message => {
  if(message.content.startsWith(prefix + "sendinfo")){
    
    let owner = client.config.ownerID
    if(!owner.includes(message.member.id)) return;
    
const menu_i = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
                    .setCustomId('menu_info')
                    .setPlaceholder('اختار من هنا')
          .setMinValues(1)
          .setMaxValues(1)
                    .addOptions(
                        {
                            label: `الرتب العامة`,
                          value: "1",
                    
                        },
                        {
                            label: 'الرتب النادرة' ,
                            value: '2',
                        },
                      {
   label : "الرومات الخاصة",  
          value: "3",
                         
                      },
                        {
label: 'الاعلانات' ,

                            value: '4',
                        
                      },{
          label: 'المنشورات' ,

                            value: '5',
                      },{
                          label: 'الاضافات' ,

                            value: '6',
                          
                      },

               ),
        );

  message.channel.send({
      embeds: [
        new MessageEmbed()
        .setTitle(config.title)
        .setDescription(`- **الرتب العامة : لرؤية معلومات الرتب العامة**
- **الرتب النادرة : لرؤية معلومات الرتب النادرة**
- **الرومات الخاصة : لرؤية معلومات الرومات الخاصة**
- **الاعلانات : لرؤية معلومات الاعلانات**
- **المنشوات : لرؤية معلومات المنشوات المميزة**
- **الاضافات : لرؤية معلومات الاضافات **`)
        .setColor(color)
       .setImage('').
        setThumbnail(message.guild.iconURL({dynamic:true}))
      ], components: [menu_i]})

                      
}
})

      client.on("interactionCreate", async interaction => {
    if (interaction.customId === "menu_info") {
          let vale = interaction.values[0];
      if(vale === "1"){
      interaction.reply({embeds:[
      new MessageEmbed()
      .setTitle(`__ Normal Roles Informations・ معلومات الرتب العامة  __`)

.setDescription(`\n- ** S **
[ Pirce : ${client.config.angelinfo} ]
\`Perms ' الخصائص\`
- إمكانية نشر بكل الرومات
- إمكانية المنشن بكل الرومات
- إمكانية نشر الصور بكل الرومات 

- **Perfect S **
[ Pirce : ${client.config.perfectinfo} ]
\`Perms ' الخصائص\`
- إمكانية نشر بكل الرومات عدا [ برمجيات - تصاميم ] 
- إمكانية المنشن بكل الرومات 
- إمكانية نشر الصور بكل الرومات

- **Great S **
[ Pirce : ${client.config.greatinfo} ]
\`Perms ' الخصائص\`
- إمكانية النشر بكل الرومات عدا [ برمجيات - تصاميم ] 
- إمكانيه المنشن بكل الرومات 
- إمكانية نشر الصور برومات حسابات - ديس فقط

- **Excellent S **
[ Pirce : ${client.config.excellentinfo} ]
\`Perms ' الخصائص\`
- إمكانية النشر بكل الرومات عدا [ برمجيات - تصاميم ] 
- إمكانية المنشن بكل الرومات 
- عدم إمكانية نشر الصور 

- **Good S **
[ Pirce : ${client.config.goodinfo} ]
\`Perms ' الخصائص\`
- إمكانية نشر بكل الرومات عدا [ برمجيات - تصاميم ] 
- عدم إمكانية المنشن 
- عدم إمكانية نشر الصور

- **Designer S **
[ Pirce : ${client.config.designerinfo} ]
\`Perms ' الخصائص\`
- إمكانية النشر بروم [ تصاميم ] فقط 
- إمكانية المنشن 
- إمكانية نشر صور 

- **Developer S **
[ Pirce : ${client.config.developerinfo} ]
\`Perms ' الخصائص\`
- إمكانية نشر بروم [ برمجيات ] فقط
- إمكانية المنشن 
- إمكانية نشر صور 

**ملاحظات :**
- لطلب رتبة يرجى التواصل مع : <#1156713855511183450>
- التحويل لـ : <@${transfer}>
- ان قمت بالتحويل لشخص غير الحساب المذكور اعلاه فلن يتم تسليمك الرتبة و لن نتحمل المسؤولية
`)
.setColor(color)
    // .setImage('https://media.discordapp.net/attachments/1125706707608289351/1147483431937261678/1693651735181.png')
      ],ephemeral:true
        })

                        }
    }
    if (interaction.customId === "menu_info") {
          let vale = interaction.values[0];
      if(vale === "2"){
      interaction.reply({embeds:[
      new MessageEmbed()
      .setTitle(`__ Rare Roles Informations・ معلومات الرتب النادرة  __`)

.setDescription(`\n- **Vip S **
[ Pirce : ${client.config.vipinfo} ]
\`Perms ' الخصائص\` 
- إمكانية النشر بكل الرومات
- إمكانيه نشر الصور بكل الرومات
- إمكانية المنشن هير بكل الرومات
- منشن ايفري مرة باليوم بروم <#1156713801933131836> 
- منشور مميز كل 5 ايام
- نشر كل ساعه بروم <#1156713801933131836>

- ** S **
[ Pirce : ${client.config.info} ]
\`Perms ' الخصائص\`
- إمكانية النشر بكل الرومات
- إمكانية نشر الصور بكل الرومات
- إمكانية المنشن هير بكل الرومات
- منشن ايفري ون مرتين باليوم بروم <#1156713801933131836> 
- منشور مميز كل يومين
- خصم 50% على الاعلانات بدون قيف اواي
- نشر كل ساعة بروم <#1156713801933131836>

**ملاحظات :**
- لطلب رتبة يرجى التواصل مع : <#1156713855511183450>
- التحويل لـ : <@${transfer}>
- ان قمت بالتحويل لشخص غير الحساب المذكور اعلاه فلن يتم تسليمك الرتبة و لن نتحمل المسؤولية`)
.setColor(color)
    //.setImage('https://media.discordapp.net/attachments/1125706707608289351/1147587728268070992/1693668608414.png')
        
      ],ephemeral:true
        })

                        }
    }

  if (interaction.customId === "menu_info") {
          let vale = interaction.values[0];
      if(vale === "3"){
      interaction.reply({embeds:[
      new MessageEmbed()
      .setTitle(`__ Privte  Rooms Informations・ معلومات الرومات الخاصة  __`)

.setDescription(`\n
- **Private S **
[ Pirce : ${client.config.roombuyinfo}  ]
[ Renew Pirce : ${client.config.roomrenewalinfo} ]
- روم خاص باسمك 
- إمكانية المنشن 
- إمكانية نشر الصور
- إمكانية الطلب و البيع
- نشر كل 30 دقيقة مع منشن هير

**ملاحظات** :
- الصلاحيات دي مسموحة فقط في الروم ما تختلط مع رومات النشر
- لطلب روم يرجى التواصل مع : <#1156713855511183450>
- التحويل لـ : <@${transfer}>
- ان قمت بالتحويل لشخص غير الحساب المذكور اعلاه فلن يتم تسليمك الروم و لن نتحمل المسؤولية`)
.setColor(color)
 //.setImage('https://media.discordapp.net/attachments/1125706707608289351/1147587727655698513/1693668813780.png')     
      ],ephemeral:true

        })

                        }}
    if (interaction.customId === "menu_info") {
          let vale = interaction.values[0];
      if(vale === "4"){
      interaction.reply({embeds:[
      new MessageEmbed()
      .setTitle(`__ Ads Informations・ معلومات الاعلانات __`)

.setDescription(`\n
**بدون منشن | No Mention
- 40,000 Credit

منشن هير | Here
- 65,000 Credit

منشن للكل | Everyone
- 100,000 Credit

هدايا الاعلانات | Ads Gifts 
- 200,000 Credit

روم خاص بدون قيف اواي | Private Room
- 300,000 Credit

روم خاص مع قيف اواي | Private Room
- 500,000 Credit **

**قوانين الاعلانات :

- في حال اعلانك 18+ سيتم مسح اعلانك
- مسموح نسوي reroll في حال لم يطبق الشروط كل الفائزين ، تنويه : reroll مره واحدة
- لا يوجد ضمان دخول اعضاء
- في حال وصلنا بلاغين نصب عن سيرفرك مع الدلائل سيتم مسح اعلانك بدون تعويض
- اعلانات الرومات الخاصة مع منشن افري ون و لمدة ثلاث ايام 
- اي اعلان يخص الكريدت ممنوع | بيع و شراء
- اي اعلان  يخص نظام الريوارد ممنوع
- اي اعلان فيه رابط بوت ممنوع**

**ملاحظات : **
- لطلب اعلان يرجى التواصل مع : <#1156713855511183450>
- التحويل لـ : <@${transfer}>
- ان قمت بالتحويل لشخص غير الحساب المذكور اعلاه فلن يتم عمل الاعلان و لن نتحمل المسؤولية**`)
.setColor(color)
// .setImage('https://media.discordapp.net/attachments/1125706707608289351/1147587416702599189/1693668920021.png')
      ],ephemeral:true
        })

                        }}
            if (interaction.customId === "menu_info") {
          let vale = interaction.values[0];
      if(vale === "5"){
      interaction.reply({embeds:[
      new MessageEmbed()
      .setTitle(`__ Special Posts Informations・ معلومات المنشورات المميزة __`)

.setDescription(`\n

**Mention Here | منشن هير
${client.config.hereinfo}
                    
Mention Everyone | منشن ايفريون
${client.config.everyoneinfo}**

**ملاحظات :**
لطلب منشور يرجى التواصل مع : <#1156713855511183450>
- التحويل لـ : <@${transfer}>
- اذا قمت بالتحويل لشخص غير الحساب المذكور أعلاه فلن يتم عمل المنشور و لن نتحمل المسؤولية
`)
.setColor(color)
// .setImage('https://media.discordapp.net/attachments/1125706707608289351/1147587727940919367/1693668721632.png')
      ],ephemeral:true
        })

                        }}
                    if (interaction.customId === "menu_info") {
          let vale = interaction.values[0];
      if(vale === "6"){
      interaction.reply({embeds:[
      new MessageEmbed()
     // .setTitle(`__ Special Posts Informations・ معلومات المنشورات المميزة __`)

.setDescription(`\n

** **`)
.setColor(color)
  //.setImage('')
      ],ephemeral:true
        })

                        }}
      })