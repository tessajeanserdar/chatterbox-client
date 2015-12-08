// YOUR CODE HERE:
//display messages retrieved from parse server

var app = {};

app.server = 'https://api.parse.com/1/classes/chatterbox';

app.init = function() {

};

app.send = function(message) {

  // var message = {message: text,
  //               username: username,
  //               };
  $.ajax({
  url: this.server,
  type: 'POST',
  data: JSON.stringify(message),
  contentType: 'application/json',
  success: function (data) {
    console.log("Chatterbox: Added Message");
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message');
  }});
  };

  app.send(somecontent);
  

app.fetch = function() {
  $.ajax({
    url: this.server,
  type: 'GET',
  //data: JSON.stringify(message),
  contentType: 'application/json',
  success: function (data) {

  data.results.forEach(function(item){
   // get the text of the chat
   // wrap it in some sort of div or span
     $chat = $('<div></div>');
     $chat.addClass("chat");
     var chatName = item.username;
     var chatBody = item.text;
     if( chatName && chatBody) {
        if ((chatBody.indexOf('src') ===-1 && chatName.indexOf('src') ===-1) 
          && chatBody.indexOf('script') ===-1 && chatName.indexOf('script') ===-1){
          $chat.text(chatName + " : " + chatBody);
        // var safeChat = ESAPI.encoder().encodeForHTML($chat);
      // append that do the #chat id
          $('#chats').append($chat);
       //console.log(data);
        }
     }


   });
},
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    //console.error('chatterbox: Failed to receive message');
  }
});
  };



  app.clearMessages = function() {
      // $.ajax({
     //  url: 'https://api.parse.com/1/classes/chatterbox',
     //  type: 'DELETE',
     //  data: JSON.stringify(somecontent),
     //  contentType: 'application/json',
     //  success: function (data) {
     //    console.log(data);
     //  },
     //  error: function (data) {
     //    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
     //    console.error('chatterbox: Failed to send message');
     //  }})

  };

  app.addMessage = function() {


  };



//hold off on retrieving for a second
$(document).ready(function() {

   // get all the chats
   var $refreshButton = $('<button></button>');
   $refreshButton.addClass("refresh");
   $refreshButton.text("Refresh Chats");
   $('#main').append($refreshButton);

   $('.refresh').on('click', function() {
    app.fetch();
   });

  var login = document.getElementById('login');
  var userName = document.getElementById('username');

   $('#firstlogin').on('click', function() {
    $('#login').text("Welcome, " + userName.value);
   });


   var form = document.getElementById('form');
   var userMessage = document.getElementById('message');

   $('#submit').on('click', function() {
    var messageContents = userMessage.value;
    var toSend = {};
    toSend.text = messageContents;
    toSend.username = userName.value;
    app.send(toSend);
   });


  app.fetch();
   // var chats = chats.results;
   // chats.forEach(function(item){
   // // get the text of the chat
   // // wrap it in some sort of div or span
   // $chat = $('<div></div>');
   // $chat.text(item.username + " " + item.text);
   // // append that do the #chat id
   // $('#chats').append($chat);

   // })
   
  

//get into this returned object;
	//we want the inner object inside responseJSON
	//log that
  // for (key in Object.keys(chatstatus)) {
  // 	console.log(key, chatstatus[key]);
  // }
});

//let's try to 
var username = "Max";
var somecontent = {username: "Max",
                text: "Hey there",
				roomname: "4chan"};

