
var firstLine = [
   "The answer is...",
   "I'm thinking...",
   "I'll go with...",
   "Let's say...",
   "How about...",
   "What about...",
   "Consider...",
   "1 possibility...",
   "If I must...",
   "That's easy...",
   "Hmmmm...",
   "Ethically...",
   "It can be only..."];

var secondLine = [
   "42",
   "2 points",
   "It's not ready",
   "You need a spike",
   "Let John decide",
   "Thang's pickle",
   "No Wei Wei",
   "No Wei Bro",
   "Vodka first",
   "Break it down",
   "Delete it",
   "Invalid use case",
   "Swarm on this",
   "Vote on it",
   "Scrum Poker",
   "Move to ready",
   "3 points",
   "8 points",
   "Whatever",
   "No way",
   "That's easy",
   "It's blocking",
   "Bad user story",
   "I'm no Genie",
   "Need beer",
   "Need ACs",
   "Need ATs",
   "No test case",
   "Mike's right",
   "Nick's Wright",
   "No API",
   "Do the API",
   "CbQoS FTW",
   "Lenny Ha-Ha",
   "GFDISDTS",
   "Relax, its over",
   "Move to backlog",
   "Burn this down"];

var grfl = function() {
   firstMessageIndex = Math.floor((Math.random() * firstLine.length));
   return firstLine[firstMessageIndex];
};
exports.getRandomFirstLine = grfl;

var grsl = function() {
  secondMessageIndex = Math.floor((Math.random() * secondLine.length));
  return secondLine[secondMessageIndex];
};
exports.getRandomSecondLine = grsl;

exports.getRandomAnswer = function getRandomMessage() {
    return grfl() + grsl();
};
