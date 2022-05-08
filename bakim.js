const Discord = require('discord.js')

exports.run = (client, message, args) => { 
	if(message.author.id == "939214465000407140" || message.author.id == "919140948083081216" || message.author.id == "910571121215160322" || message.author.id == "967109760379912202"){
	const aktifEmbed = new Discord.MessageEmbed()
		.setColor("ff0000")
		.setTitle("**Sunucumuz Kısa Süreliğine Bakım Moduna Alınmıştır. Sizlere daha iyi bir hizmet verebilmek için çalışıyoruz...**")
		.setImage("https://media.discordapp.net/attachments/874868999995916330/939220853315485706/99roleplay5png.png")
		.setTimestamp()
		.setFooter("©Client");
		message.channel.send({content: "||@everyone||", embed: aktifEmbed})
}else return message.reply(`:x: Bunu yapabilmek için yetkin yok!`)
};

exports.conf = {
    aliases: ['bakim']
}
exports.help = {
    name: "bakım"
}