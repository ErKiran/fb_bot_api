const {bot} = require('./bot.js');

bot.on('message', (payload, chat) => {
    console.log(payload)
  const text = payload.message.text;
  chat.say(`Echo: ${text}`);
});