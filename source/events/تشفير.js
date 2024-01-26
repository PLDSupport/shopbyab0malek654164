require('events').EventEmitter.defaultMaxListeners = Infinity;
//const client = require('../../main.js');
const config = require(`../../config.json`)
const db = require('pro.db')
const {Discord, Client, MessageEmbed, MessageActionRow, MessageButton, Modal, TextInputComponent} = require("discord.js")
const client = new Client({intents: 7753})

let line = config.lineurl
let color = config.color

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.username}!`)
}).login(process.env.token)

const prefix = "$"

 replace = [
  {
    word: "ديسكورد",
    replace: "ديـ-ـكورد"
  },
   {
    word: "متجر",
    replace: "مـ-ـجر"
  }, 
    {
    word: "شوب",
    replace: "شـ-ـب"
  },  
  {
      word: "متوفر",
      replace: "مـ-ـوفر"
  },
{
    word: "بوست",
    replace: "بو-ـت"
  },
{
    word: "نيترو",
    replace: "نيـ-ـرو"
  },
{
    word: "حساب",
    replace: "حـ-ـاب"
  },
{
    word: "سيرفر",
    replace: "سـ-ـرفر"
  },
{
    word: "سعر",
    replace: "سـ-ـر"
  },
   {
    word: "شراء",
    replace: "شـ-اء"
  },
   {
     word: "نصاب",
    replace: "نـ-ـاب"
   },
   {
    word: "بيع",
    replace: "بـ-ـع"
  },
   {
         word: "الديسكورد",
    replace: "الديـ-ـكورد"
  },
  {
    word: "المتجر",
    replace: "المـ-ـجر"
  }, 
  {
    word: "الشوب",
    replace: "الشـ-ـب"
  },  
  {
      word: "المتوفر",
      replace: "المـ-ـوفر"
  },
{
    word: "البوست",
    replace: "البو-ـت"
  },
{
    word: "النيترو",
    replace: "النيـ-ـرو"
  },
{
    word: "الحساب",
    replace: "الحـ-ـاب"
  },
{
    word: "السيرفر",
    replace: "السـ-ـرفر"
  },
{
    word: "السعر",
    replace: "السـ-ـر"
  },
   {
    word: "الشراء",
    replace: "الشـ-اء"
  },
   {
     word: "النصاب",
    replace: "النـ-ـاب"
   },
   {
    word: "البيع",
    replace: "البـ-ـع"
  },
]

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "تشفير")) {
  if(!message.member.permissions.has("ADMINISTRATOR")) return;
    const embed = new MessageEmbed()
    .setTitle(config.title)
    .setDescription(`** لتشفير منشورك  : 
   يرجى الضغط على زر تشفير**`)
    .setThumbnail(message.guild.iconURL())
 .setColor(color)   
    
      const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle("SECONDARY")
            .setLabel("تشفير")
            .setCustomId('replace')
        
        )
  
    message.channel.send({embeds: [embed], components: [row]})
  }
})


client.on("interactionCreate", async i => {
  if (!i.isButton()) return;
  if (i.customId == "replace") {
            const modal = new Modal()
            .setTitle('تشفير منشور')
            .setCustomId('rep')

   const replacer = new TextInputComponent()
            .setCustomId('replacetext')
            .setLabel(`المنشور`)
     .setPlaceholder(`ضع المنشور الخاص بك هنا`)
            .setMaxLength(4000)
            .setRequired(true)
            .setStyle("PARAGRAPH")
    
       const rows = [replacer].map(
                (component) => new MessageActionRow().addComponents(component)
            )
            modal.addComponents(...rows);
            i.showModal(modal);
        
  }
  
})

client.on("interactionCreate", async i => {
  if (!i.isModalSubmit()) return;
  if (i.customId == "rep") {
let text = i.fields.getTextInputValue('replacetext');
let rep = i.fields.getTextInputValue('replacetext');
    let replaced = false;

    replace.forEach(t => {
      const regex = new RegExp(t.word, 'g');
      if (regex.test(text)) {
        text = text.replace(regex, t.replace);
        replaced = true;
      }
    });


    if (replaced) {
i.reply({content: `- __ تم تشفير منشورك __\n\n${text}`,ephemeral: true})
      
let log = client.channels.cache.get(config.log_rep)
  if(log) log.send({embeds: [
    new MessageEmbed()
    .setTitle(`تشفير منشور جديد`)
    .addField(`المنشور قبل التشفير :`,`${rep}`)
   .addField(`المنشور بعد التشفير :`,`${text}`)
    .addField(`الشخص :`,`<@${i.member.id}>`)
    
    .setColor(color)
.setThumbnail(i.guild.iconURL({dynamic:true}))
    .setTimestamp()
    
  ]})
log.send({files:[line]})
    
    } else {
      i.reply({content: "> ** منشورك زي الفل يسطا مش محتاج تشفير**", ephemeral: true})
    }
  }
  
})
process.on("unhandledRejection", e => {
  console.log(e)
})