const Discord = require('discord.js')

exports.run = (client, message, args) => { 
if(message.author.id == "939214465000407140" || message.author.id == "919140948083081216" || message.author.id == "910571121215160322" || message.author.id == "967109760379912202"){
	const aktifEmbed = new Discord.MessageEmbed()
		.setColor("GREEN")
		.setTitle("**Sunucumuz sorunsuz bir şekilde aktif edilmiştir. Aktif olan herkesi sunucumuza bekliyoruz. \nSunucumuzun IP Adresi: '217.195.207.167'**")
		.setImage("https://cdn.discordapp.com/attachments/874868999995916330/947444493618143252/aktif.gif")
		.setTimestamp()
		.setFooter("©Client");
		message.channel.send({content: "||@everyone||", embed: aktifEmbed})
}else return message.reply(`:x: Bunu yapabilmek için yetkin yok!`)
};

exports.conf = {
    aliases: ['aktif']
}
exports.help = {
    name: "aktif"
}