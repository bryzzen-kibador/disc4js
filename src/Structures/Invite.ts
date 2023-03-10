import Channel from './ChannelGuild';
import Guild from './Guild';
import User from './User';

export default class Invite {
  uses: number;
  type: number;
  temporary: boolean;
  max_uses: number;
  inviter: User;
  guild: Guild;
  code: string;
  channel: Channel;
  expires_at: string;
  created_at: string;
  constructor(d, client) {
    this.uses = d.uses;
    this.type = d.type;
    this.temporary = d.temporary;
    this.max_uses = d.max_uses;
    this.inviter = client.users.find((u) => u.id == d.inviter.id);
    this.guild = client.guilds.find((g) => g.id == d.guild_id) || client.guilds.find((g) => g.id == d.guild.id);
    this.code = d.code;
    this.channel = client.channels.find((c) => c.id == d.channel_id) || client.channels.find((c) => c.id == d.channel.id);
    this.expires_at = d.expires_at;
    this.created_at = d.created_at;
  }
}
