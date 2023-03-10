import ChannelDM from '../Structures/ChannelDM';
import Channel from '../Structures/ChannelGuild';
import VoiceChannel from '../Structures/VoiceChannel';

export default class ChannelCreate {
  constructor(d, client) {
    if (d.type == 0) {
      const channel = client.channels.find((c) => c.id == d.id);
      channel._guild.channels.slice(channel._guild.channel.indexOf(channel), 1);
      client.channels.splice(client.channels.indexOf(channel), 1);
      client.emit('channelDelete', channel);
    } else {
      const channel = client.dmchannels.find((c) => c.id == d.id);
      client.dmchannels.splice(client.dmchannels.indexOf(channel), 1);
      client.emit('channelDelete', channel);
    }
  }
}
