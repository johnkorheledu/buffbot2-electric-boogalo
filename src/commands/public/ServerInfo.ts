import { Command } from 'discord-akairo'
import { Message, MessageEmbed } from 'discord.js'
import { map, filter, scan } from 'rxjs/operators';
import { merge } from 'rxjs';










export default class ServerInfo extends Command {
    public constructor() {
        super('serverinfo', {
            aliases: ['serverinfo'],
            category: 'public',
            description: {
                context: 'Get server statistics.',
                usage: 'serverinfo',
                examples: [
                    'serverinfo'
                ]
            },
            ratelimit: 3,

        })
    }
    public exec(message: Message): Promise<Message>{

        const exampleEmbed = new MessageEmbed()


	.setColor('#c6b878')
	.setTitle(message.guild.name)
	.setThumbnail(message.guild.iconURL())
	.addFields(
        { name: 'Region', value: message.guild.region, inline: true },
        { name: 'Members', value: message.guild.memberCount, inline: true },
        { name: 'Text Channels', value: message.guild.channels.cache.filter(c => c.type === 'text').size, inline: true},
        { name: 'Voice Channels', value: message.guild.channels.cache.filter(c => c.type === 'voice').size, inline: true },
        { name: 'Roles', value: 'Coming soon.', inline: true },
        { name: 'Owner', value: message.guild.owner, inline: true },
	)
	.setTimestamp()
	.setFooter('BuffBot 2.0', message.guild.iconURL());

        // return message.util.send(member.user.username)

        return message.util.send(exampleEmbed)
    }
}