module.exports = {
    createEvent(member) {
        if (member.bot) return
        
        const channel = member.guild.channels.cache.find(channel => channel.id === member.guild.systemChannelId)
        channel.send(`Seja bem-vindo (a) <@!${member.user.id}> à nossa amada **${member.guild.name}** !!! Agora somos ${member.guild.memberCount} membros no server.\nLembre-se de ler as <#775088287626428416>, fazer seus <#854065444812881960> e aproveitar ao máximo! <:senjougahara:775725327908601936>`)
    }
}