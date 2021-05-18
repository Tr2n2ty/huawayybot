module.exports = {
  name: 'server',
  description: 'Server informations.',
  execute(message) {
    message.channel.send(`Server Name: ${message.guild.name}\nUser count : ${message.guild.memberCount}\nOwner : <@470317438203068416>`);
  }
};