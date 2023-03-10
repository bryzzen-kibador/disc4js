export default class MessageDelete {
  constructor(d, client) {
    const channel =
      client.channels.find((c) => c.id == d.channel_id) ||
      client.dmchannels.find((c) => c.id == d.channel_id);
    if (channel) {
      const message = channel.messages.find((m) => m.id == d.id);
      if (message) {
        channel.messages.splice(channel.messages.indexOf(message), 1);
        client.emit('messageDeleted', message);
      }
    }
  }
}
