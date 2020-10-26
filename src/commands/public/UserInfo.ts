import { Command } from 'discord-akairo'
import { Message, MessageEmbed } from 'discord.js'

export default class PingCommand extends Command {
    public constructor() {
        super('userinfo', {
            aliases: ['userinfo'],
            category: 'public',
            description: {
                context: 'Get user statistics.',
                usage: 'userinfo',
                examples: [
                    'userinfo'
                ]
            },
            ratelimit: 3,

        })
    }
    public exec(message: Message): Promise<Message>{

        let member = message.mentions.members.first() || message.member,
        user = member.user;

        const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(member.user.username)
	.setThumbnail(member.user.avatarURL())
	.addFields(
        { name: 'Status: ', value: user.presence.activities[0] },
		{ name: 'Joined discord on: ', value: (member.user.createdAt.getUTCMonth()+1) + '-' + member.user.createdAt.getUTCDate() + '-' + member.user.createdAt.getUTCFullYear(), inline: true },
        { name: 'Joined server on: ', value: (member.joinedAt.getUTCMonth()+1) + '-' + member.joinedAt.getUTCDate() + '-' + member.joinedAt.getUTCFullYear(), inline: true },
        { name: 'Roles: ', value: 'Coming soon' },
	)
	.setTimestamp()
	.setFooter('BuffBot 2.0', this.client.user.avatarURL());

        // return message.util.send(member.user.username)

        return message.util.send(exampleEmbed)
    }
}