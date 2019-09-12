const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: process.env.Page_Access_Token,
  verifyToken: process.env.Verify_Token,
  appSecret: process.env.App_Secret
});

bot.start();

module.exports={
    bot
}