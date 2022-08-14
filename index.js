const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Join Us || https://discord.gg/HJsKfr7MBW'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


const botconfig = require(`./botconfig.json`);
const colors = require(`./colors.json`);
const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', () => {
    console.log(`${client.user.tag} is ready`);
});

client.on('guildMemberAdd', member => {
    let welcomeChannel = client.channels.cache.get("1007961463509499914") //inja vared kon
    let targetchannel = '1007967884296867870' //inja vared kon
    let targetchannel2 = '1007967918199423037'
    let targetchannel3 = '1007961654539059251'
    if(welcomeChannel){

        let welcomeEmbed = new discord.MessageEmbed()

        if(member.user.bot){

            welcomeEmbed.setColor(colors.aqua)
            welcomeEmbed.setAuthor(`${member.guild.name}`)
            welcomeEmbed.setDescription(`سلام <@${member.user.id}> عزیز به شاپ ما خوش امدید. برای اگاهی از اخبار سرور قسمت ${member.guild.channels.cache.get(targetchannel).toString()} را مطالعه کنید و حتما برای شرکت در قرعه کشی ها چنل ${member.guild.channels.cache.get(targetchannel2).toString()} را چک کنید. برای خرید محصولات شاپ نیز در قسمت ${member.guild.channels.cache.get(targetchannel3).toString()} اقدام کنید`)
            welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
welcomeEmbed.setTimestamp()

welcomeEmbed.setFooter(`${client.user.username} `)
            welcomeChannel.send(welcomeEmbed)
        }else{
            welcomeEmbed.setColor(colors.aqua)
            welcomeEmbed.setAuthor(`${member.guild.name}`)
            welcomeEmbed.setDescription(`سلام <@${member.user.id}> عزیز به شاپ ما خوش امدید. برای اگاهی از اخبار سرور قسمت ${member.guild.channels.cache.get(targetchannel).toString()} را مطالعه کنید و حتما برای شرکت در قرعه کشی ها چنل ${member.guild.channels.cache.get(targetchannel2).toString()} را چک کنید. برای خرید محصولات شاپ نیز در قسمت ${member.guild.channels.cache.get(targetchannel3).toString()} اقدام کنید`)
            welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
welcomeEmbed.setTimestamp()

welcomeEmbed.setFooter(`${client.user.username} `)
            welcomeChannel.send(welcomeEmbed)
        }
    }else{
        console.log("Welcome Channel Yaft Nashod")
    }
})

;

client.login('process.env.token');

