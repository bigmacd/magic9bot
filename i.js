var wolfram = require('wolfram-alpha').createClient("V66LW7-2447QJTY66", null);

var answerCallback;

function wolfCallback(response) {
    answerCallback(response)
}

var wolfQuery = function (err, results) {
    var response = {};
    if (!err) {
        if (results.length == 0) {
            response["no data"] = "Sorry, I don't know."
        }
        else {
            for (var i = 0; i < results.length; i++) {
                var result = results[i];
                var item = result.primary ? "Primary" : i.toString();
                var subpods = result['subpods'];
                var subpodItem = {};
                var subpodData = "";
                for (var ii = 0; ii < subpods.length; ii++) {
                    sp = subpods[ii];
                    subpodData += sp['text'];
                    subpodData += ' ';
                }
                subpodItem[result.title] = subpodData
                response[item] = subpodItem;
            }
        }
        wolfCallback(response);
    }
    else {
        response["error"] = err;
        wolfCallback(response);
    }
};

function askTheWolf(wasSaid, answerCb) {
  answerCallback = answerCb;
  // take what was said and get some data from WA
  wolfram.query(wasSaid, wolfQuery);
}

function acb(response) {
    console.log(response);
}


var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that
    // with toString() and then trim()
    askTheWolf(d.toString().trim(), acb);
//    console.log("you entered: [" +
//        d.toString().trim() + "]");
});







