module.exports = {
    name: 'ping',
    description: 'Ping test',
    execute(message) {
        message.channel.send(`🏓 Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }
}