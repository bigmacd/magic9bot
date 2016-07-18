var Botkit = require('botkit');
var answer = require('./messages');

var teammembers = [
   "Proctor",
   "Weixin",
   "Martin",
   "Nick",
   "Giles",
   "Thang"];

var controller = Botkit.slackbot();

#answer.loadFirstMessages('localhost', '3000', '/1');
#answer.loadSecondMessages('localhost', '3000', '/2');

controller.hears('',["direct_mention", "mention", "direct_message"],function(bot,message) {
  // do something to respond to message
  // all of the fields available in a normal Slack message object are available
  // https://api.slack.com/events/message

    var response = answer.getRandomFirstLine();
    var wasSaid = message['text'];

    if (/\b[p|P]oints\b/.test(wasSaid)) {
        response += Math.floor((Math.random() * 20) + 1) + " points";
    }
    else if (/\b[w|W]ho\b/.test(wasSaid)) {
        response += teammembers[Math.floor((Math.random() * teammembers.length))];
    }
    else {
        response += answer.getRandomSecondLine();
    }
    reply(message, response);
});


var bot = controller.spawn({
  #token: require('./config').token
  token: process.env.token
});


bot.startRTM(function(err,bot,payload) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});


function reply(message, answer) {
  bot.reply(message, answer);
}
