// YOUR CODE HERE:
//display messages retrieved from parse server

window.rooms = {};
window.friends = {};

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
          var chatRoom = item.roomname;
          window.rooms[chatRoom] = true;

          var $username = $('<div></div>');
          $username.addClass("username");
          var $message = $('<div></div>')
          $username.text(chatName);
          $message.text(": " + chatBody);
          var $chat = $('<div></div>');
          $chat.append($username);
          $chat.append($message);
          $('#chats').append($chat);
       //console.log(data);
        }
     }


   });
    $('.username').on('click', function() {
    event.stopPropagation();
    var thisUser = $(this).text();
    app.addFriend(thisUser);
    // console.log($(this).text());
    //app.addFriend("Jane Doe");
   });

    var $roomList = $('<div></div>');
    $roomList.attr("id",'roomSelect');
    for (key in window.rooms) {
    var $room = $('<div></div>');
    $room.text(key);
    $roomList.append($room);
    };

   $('body').append($roomList);
},
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    //console.error('chatterbox: Failed to receive message');
  }
});
  };



  app.clearMessages = function() {
    var childArr = $('#chats').children();
    for (var i = 0; i < childArr.length; i++) {
      console.log(childArr[i]);
      childArr[i].remove();
    };
  };

  app.addMessage = function(message) {
    var $username = $('<div></div>');
    $username.addClass("username");
    var $message = $('<div></div>')
    $username.text(message.username);
    $message.text(message.message);
    var $chat = $('<div></div>');
    $chat.append($username);
    $chat.append($message);
    $('#chats').append($chat);
  };

app.addRoom = function(room) {
  console.log(window.rooms[room]);
  if (window.rooms[room] === undefined) {
    window.rooms[room] = true;
    var $room = $('<div></div>');
    $room.text(room);
    $('#roomSelect').append($room);
  }
};

app.addFriend = function(friend) {
  if (window.friends[friend] === undefined) {
    window.friends[friend] = true;
  }
};

app.handleSubmit = function() {
    var form = document.getElementById('form');
    var userMessage = document.getElementById('message');
    var messageContents = userMessage.value;
    var toSend = {};
    toSend.text = messageContents;
    toSend.username = userName.value;
    app.send(toSend);
};



//hold off on retrieving for a second
$(document).ready(function() {

   app.fetch();




   // get all the chats
   var $refreshButton = $('<button></button>');
   $refreshButton.addClass("refresh");
   $refreshButton.text("Refresh Chats");
   $('#main').append($refreshButton);

   $('.refresh').on('click', function() {
    app.clearMessages();
    $('#roomSelect').remove();
    app.fetch();
   });
   // clear chats
    var $clearButton = $('<button></button>');
   $clearButton.addClass("clear");
   $clearButton.text("Clear Chats");
   $('#main').append($clearButton);

   $('.clear').on('click', function() {
    app.clearMessages();
   });

  // get login information
  var login = document.getElementById('login');
  var userName = document.getElementById('username');

   $('#firstlogin').on('click', function() {
    $('#login').text("Welcome, " + userName.value);
   });

   // get chat body


   $('#submit').on('click', function() {
    app.handleSubmit();
   }); 

    var roomform = document.getElementById('roomform');
    var roomname = document.getElementById('newroom');

   $('#submitroom').on('click', function() {
    app.addRoom(roomname.value);
   }); 

});

//let's try to 
var username = "Max";
var somecontent = {username: "Max",
                text: "Hey there",
				roomname: "4chan"};

