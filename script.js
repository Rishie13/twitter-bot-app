
var Twit= require('twit'); //importing the modeule 'twit'to the project

module.exports = function(res, query, numb){

var T = new Twit({
  consumer_key:         '**********************************',
  consumer_secret:      '**********************************',
  access_token:         '**********************************',
  access_token_secret:  '**********************************',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});


var tweetsarray=[];

function callback(err, data, res2){
  var tweetext = data.statuses;

  for (var i=0; i<tweetext.length; i++) {
    tweetsarray.push(tweetext[i].text);
  }

  //console.log(tweetsarray);
  res.render('display', { results: tweetsarray }); // Render the array of tweets to the front-end
}

var n=numb;

var obj = { q: query, count: n}

T.get('search/tweets', obj, callback);

}
