export async function ping (message) {
  message.delete().catch(console.error)
  return message.author.createDM()
    .then(ch => ch.send("pong"))
    .catch(() => message.reply('pong'))
}