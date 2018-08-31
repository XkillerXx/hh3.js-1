

const Discord = require('discord.js');

const client = new Discord.Client();

 const prefix = "+";

client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message', message => {

    if (message.content === 'ping') {

        message.reply('pong');

      }

});






 client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (!message.member.voiceChannel) return;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];

if (command === prefix+ `join`) {

        message.member.voiceChannel.join()
    message.channel.send('**Joined**')
};

});  





client.on('message', msg => {

  if (msg.content === '+help') {

    msg.reply('✉ | تم ارسال الرساله في الخاص');

  }

});

client.on("message", message => { 

if (message.content === "+help") {

 const embed = new Discord.RichEmbed() 

.setColor("#ffff00") .setThumbnail(message.author.avatarURL) .setDescription(` 

+ds | مسح السيرفر

    

+ss | يسوي السيرفر 

+bc | ارسال لجميع الاعضا 

+ban | باند

+kick | كك

+uban | فك الباند

+mute | ميوت للعضو

+unmute | فك ميوت 

+roles | يوريك الرتب

+clear | يمسح الشات

`) 

 message.author.sendEmbed(embed) 

} 

}); 

client.on('ready',  () => {

  console.log('By : loster ');

  console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);

  console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);

  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);

});

client.on('message', message => {

   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');

     if(!message.channel.guild) return;

if(message.content.split(' ')[0] == '+bc') { //الامر

         message.react("✔️")

          let embed = new Discord.RichEmbed()

    .setColor("#FF00FF")

    .setThumbnail(message.author.avatarURL)   

                                      .addField('تم الارسال بواسطة :', "<@" + message.author.id + ">")

                 message.channel.sendEmbed(embed);

        message.guild.members.forEach(m => {

            var bc = new Discord.RichEmbed()

.addField('**● المرسل  :**', `*** → ${message.author.username}#${message.author.discriminator}***`)

            .addField('***● السيرفر  :***', `*** → ${message.guild.name}***`)               

    .setColor('#ff0000')

                 .addField('ّ', args)

            m.send(``,{embed: bc});

        });

    }

})

    

client.on('message', eyad => {

  if (eyad.content.startsWith('+mute')) {

if (!eyad.member.hasPermission("ADMINISTRATOR")) return eyad.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");

let men = eyad.mentions.users.first()

let mas = eyad.author

if(!men) return eyad.channel.send('`منشن الشخص الذي تريد ان تعطيه ميوت كتابي` ');

eyad.guild.channels.forEach(c => {

c.overwritePermissions(men.id, {

          SEND_MESSAGES: false

})

    })

const embed = new Discord.RichEmbed()

.setColor("RANDOM")

.setDescription(`**

 <@${men.id}>

لقد تم اعطائك ميوت كتابي

بواسطة : <@${eyad.author.id}> **`)

.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")

client.users.get(men.id).sendEmbed(embed)

const Embed11 = new Discord.RichEmbed()

.setColor("RANDOM")

.setAuthor(eyad.guild.name, eyad.guild.iconURL)

.setDescription(`          <@${men.id}>

لقد تم اعطائه الميوت الكتابي بنجاح

بواسطة : <@${eyad.author.id}> `)

.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")

eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(20000)})

    }

})

 

 

client.on('message', eyad => {

  if (eyad.content.startsWith('+unmute')) {

if (!eyad.member.hasPermission("ADMINISTRATOR")) return eyad.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");

 let men = eyad.mentions.users.first()

 let mas = eyad.author

 if(!men) return eyad.channel.send('`منشن الشخص الذي تريد فك الميوت عنه `');

 eyad.guild.channels.forEach(c => {

 c.overwritePermissions(men.id, {

         SEND_MESSAGES: true

         })

    })

const embed = new Discord.RichEmbed()

.setColor("RANDOM")

.setDescription(`**

 <@${men.id}>

تم فك الميوت الكتابي

بواسطة : <@${eyad.author.id}> **`)

.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")

client.users.get(men.id).sendEmbed(embed)

const Embed11 = new Discord.RichEmbed()

.setColor("RANDOM")

.setAuthor(eyad.guild.name, eyad.guild.iconURL)

.setDescription(`          <@${men.id}>

تم فك الميوت الكتابي

بواسطة : <@${eyad.author.id}>

`)

.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")

eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(20000)})

    }

})

client.on('message' , message => {

    

    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])

    if(message.content.startsWith(prefix + 'uban')) {

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');

        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);

        message.guild.unban(user);

        message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)

        var embed = new Discord.RichEmbed()

        .setThumbnail(message.author.avatarURl)

        .setColor("RANDOM")

        .setTitle('**●Unban** !')

        .addField('**●User Unban :** ', `${user}` , true)

        .addField('**●By :**' ,       ` <@${message.author.id}> ` , true)

        .setAuthor(message.guild.name)

        message.channel.sendEmbed(embed)

    }

});

client.on("message", (message) => {

    if (message.content.startsWith("+kick")) {

      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('⚠ ماعندك الصلاحيات');

        var member= message.mentions.members.first();

        member.ban().then((member) => {

            message.channel.send(member.displayName + " لقد تم طرده بنجاح :wave: ");

        }).catch(() => {

            message.channel.send(":x: هناك خطاء حاول مره أخرى:x: ");

        });

    }

});




client.on('message', message => {

  if (message.author.x5bz) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {

               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");

  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");

  let user = message.mentions.users.first();

  let reason = message.content.split(" ").slice(2).join(" ");

  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/

  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");

  if(!reason) return message.reply ("**اكتب سبب الطرد**");

  if (!message.guild.member(user)

  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()

  .setAuthor(`BANNED!`, user.displayAvatarURL)

  .setColor("RANDOM")

  .setTimestamp()

  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')

  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')

  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')

  message.channel.send({

    embed : banembed

  })

}

});

 

client.on('message', message => {

    if (message.content === "+ss") {

    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')

            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);

        

     message.guild.createChannel('「 O W N E R 」', 'voice')

     message.guild.createChannel('「 C O - L E A D E R 」', 'voice')

     message.guild.createChannel('「ADMINSTRATOR」', 'voice')

     message.guild.createChannel('𖦲₁PARTY | بارتي𖦲', 'voice')

     message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')

     message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')

     message.guild.createChannel('✬ʝuşτ-1✬', 'voice')

 message.guild.createChannel('✬ʝuşτ-2✬', 'voice')

     message.guild.createChannel('✬ʝuşτ-3✬', 'voice')

     message.guild.createChannel('✬ʝuşτ-4✬', 'voice')

     message.guild.createChannel('✬ʝuşτ-5✬', 'voice')

     message.guild.createChannel('😴sleep', 'voice')

          message.guild.createChannel('༆كَبّـآرَ آلَشّـخٌـصِـيّآتُ༆', 'voice')

     message.guild.createChannel('welcome', 'text')

     message.guild.createChannel('info', 'text')

     message.guild.createChannel('bot', 'text')

     message.guild.createChannel('chat', 'text')

     message.guild.createChannel('Youtube', 'text')

     message.guild.createChannel('bo7', 'text')

     message.guild.createChannel('party', 'text')

     message.guild.createChannel('pic', 'text')

message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعة السيرفر**')

}

});

 

 

client.on('message', message => {

    if (message.content === "+ss") {

    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')

            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "Owner", color: "#ffffff", permissions: [] })

                     message.guild.createRole({ name: "Co-Owner", color: "#ffffff", permissions: [] })

                     message.guild.createRole({ name: "Leader", color: "#ffffff", permissions: [] })

                     message.guild.createRole({ name: "Co-Leader", color: "#ffffff", permissions: [] })

                     message.guild.createRole({ name: "King", color: "#ffffff", permissions: [] })

                     message.guild.createRole({ name: "Qween", color: "#ffffff", permissions: [] })

                     message.guild.createRole({ name: "HighNiss", color: "#ffffff", permissions: [] })

                     message.guild.createRole({ name: "Pros", color: "#ffffff", permissions: [] })

                     message.guild.createRole({ name: "VIP+", color: "#ffffff", permissions: [] })

                     message.guild.createRole({ name: "VIP", color: "#ffffff", permissions: [] })

                     message.guild.createRole({ name: "Actve", color: "#ffffff", permissions: [] })

                     message.guild.createRole({ name: "Members", color: "#ffffff", permissions: [] })

        

message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعه الرتب **')

}

});

client.on('message' , message => {

    

    let user = message.mentions.users.first() || message.author;

if(message.content.startsWith(prefix+"roles")) {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");

    const embed = new Discord.RichEmbed()

  .setThumbnail(user.displayAvatarURL)

.addField('User :', `**${user.username}**`)

  .addField(`Roles For User :`, message.guild.members.get(user.id).roles.array(role => role.name).slice(1).join('\n'))

  .setAuthor(`${user.username}`, user.displayAvatarURL)

  .setColor('RANDOM')

    message.channel.send({embed});

}

});

  

client.on("message", message => {

   

            var args = message.content.substring(prefix.length).split(" ");

            if (message.content.startsWith(prefix + "clear")) {

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');

        var msg;

        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);

      message.channel.sendMessage("", {embed: {

        title: "Done | تــم",

        color: 0x06DF00,

        description: "تم مسح الرسائل بنجاح",

        footer: {

          text: "{FN THE BEST}"

        }

      }}).then(msg => {msg.delete(3000)});

                          }

});

 

        

                    

  

const devs = ['336773905043685390' , '469164572960358420' , '' , ''];

const adminprefix = "+";

client.on('message', message => {

    var argresult = message.content.split(` `).slice(1).join(' ');

      if (!devs.includes(message.author.id)) return;

  if (message.content.startsWith(adminprefix + 'ply')) {

    client.user.setGame(argresult);

      message.channel.sendMessage(`**✅   ${argresult}**`)

  } else

  if (message.content.startsWith(adminprefix + 'wt')) {

  client.user.setActivity(argresult, {type:'WATCHING'});

      message.channel.sendMessage(`**✅   ${argresult}**`)

  } else

  if (message.content.startsWith(adminprefix + 'ls')) {

  client.user.setActivity(argresult , {type:'LISTENING'});

      message.channel.sendMessage(`**✅   ${argresult}**`)

  } else

  if (message.content.startsWith(adminprefix + 'st')) {

    client.user.setGame(argresult, "https://www.twitch.tv/idk");

      message.channel.sendMessage(`**✅   ${argresult}**`)

  }

  });

            

            

            

            

            

            

                

client.on('message', ra3d => {   

 if (ra3d.content.startsWith("+ds")) {

    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('**⚠  لايوجد لديك صلاحية**');

     ra3d.guild.roles.forEach(r => { r.delete() }) 

     ra3d.guild.channels.forEach(c => { c.delete() })

                let embed = new Discord.RichEmbed()

            .setColor('#fd0101')

            .setDescription('تم حذف كل شي في السيرفر✅')

           ra3d.author.sendEmbed(embed);

 }

 });

 

 





client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا  
