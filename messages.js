var http = require('http');

var firstLine = [
   { id: '1', msg: "The answer is..." },
   { id: '1', msg: "I'm thinking..." },
   { id: '1', msg: "I'll go with..." },
   { id: '1', msg: "Let's say..." },
   { id: '1', msg: "How about..." },
   { id: '1', msg: "What about..." },
   { id: '1', msg: "Consider..." },
   { id: '1', msg: "1 possibility..." },
   { id: '1', msg: "If I must..." },
   { id: '1', msg: "That's easy..." },
   { id: '1', msg: "Hmmmm..." },
   { id: '1', msg: "Ethically..." },
   { id: '1', msg: "It can be only..."} 
];

var secondLine = [
   { id: '1', msg: "42" },
   { id: '1', msg: "2 points" },
   { id: '1', msg: "It's not ready" },
   { id: '1', msg: "You need a spike" },
   { id: '1', msg: "Let John decide" },
   { id: '1', msg: "Thang's pickle" },
   { id: '1', msg: "No Wei Wei" },
   { id: '1', msg: "No Wei Bro" },
   { id: '1', msg: "Vodka first" },
   { id: '1', msg: "Break it down" },
   { id: '1', msg: "Delete it" },
   { id: '1', msg: "Invalid use case" },
   { id: '1', msg: "Swarm on this" },
   { id: '1', msg: "Vote on it" },
   { id: '1', msg: "Scrum Poker" },
   { id: '1', msg: "Move to ready" },
   { id: '1', msg: "3 points" },
   { id: '1', msg: "8 points" },
   { id: '1', msg: "Whatever" },
   { id: '1', msg: "No way" },
   { id: '1', msg: "That's easy" },
   { id: '1', msg: "It's blocking" },
   { id: '1', msg: "Bad user story" },
   { id: '1', msg: "I'm no Genie" },
   { id: '1', msg: "Need beer" },
   { id: '1', msg: "Need ACs" },
   { id: '1', msg: "Need ATs" },
   { id: '1', msg: "No test case" },
   { id: '1', msg: "Mike's right" },
   { id: '1', msg: "Nick's Wright" },
   { id: '1', msg: "No API" },
   { id: '1', msg: "Do the API" },
   { id: '1', msg: "CbQoS FTW" },
   { id: '1', msg: "Lenny Ha-Ha" },
   { id: '1', msg: "GFDISDTS" },
   { id: '1', msg: "Relax, its over" },
   { id: '1', msg: "Move to backlog" },
   { id: '1', msg: "Burn this down"}
];

var lfm = function(host, port, path) {
    getMessages(host, port, path, handleFirstMessages);
};
exports.loadFirstMessages = lfm;

function handleFirstMessages(messages) {
    console.log("first messages:");
    console.log(messages);
    firstLine = messages;
}

var lsm = function(host, port, path) {
    getMessages(host, port, path, handleSecondMessages);
};
exports.loadSecondMessages = lsm;

function handleSecondMessages(messages) {
    console.log("second messages:");
    console.log(messages);
    secondLine = messages;
}


function getMessages(host, port, path, callback) {

   headers = {
      'Content-Type': 'application/json'
   };

   var options = {
      host: host,
      path: path,
      port: port,
      method: 'GET',
      headers: headers
   };

   http.request(options, function (res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
         var response = JSON.parse(chunk);
         callback(response);
      });
   }).end();
}

var grfl = function() {
   firstMessageIndex = Math.floor((Math.random() * firstLine.length));
   return firstLine[firstMessageIndex]['msg'];
};
exports.getRandomFirstLine = grfl;

var grsl = function() {
  secondMessageIndex = Math.floor((Math.random() * secondLine.length));
  return secondLine[secondMessageIndex]['msg'];
};
exports.getRandomSecondLine = grsl;

exports.getRandomAnswer = function getRandomMessage() {
    return grfl() + grsl();
};

