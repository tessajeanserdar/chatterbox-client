// YOUR CODE HERE:
//display messages retrieved from parse server
	//where do those messages come from?

//hold off on retrieving for a second
$(document).ready(function() {
	//$.post('https://api.parse.com/1/classes/chatterbox', somecontent, "application.JSON");
	// var $messages = $.get({url: 'https://api.parse.com/1/classes/chatterbox',
	// cache: false,
	// success: function(html) {
	// 	$('body').append(html);
	// }});
	// console.log($messages);
	$.ajax({
  url: 'https://api.parse.com/1/classes/chatterbox',
  type: 'POST',
  data: JSON.stringify(somecontent),
  contentType: 'application/json',
  success: function (data) {
    console.log(data);
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message');
  }});

	$.ajax({
  url: 'https://api.parse.com/1/classes/chatterbox',
  type: 'DELETE',
  data: JSON.stringify(somecontent),
  contentType: 'application/json',
  success: function (data) {
    console.log(data);
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message');
  }});

  var chatstatus = $.ajax({
  url: 'https://api.parse.com/1/classes/chatterbox',
  type: 'GET',
  data: JSON.stringify(somecontent),
  contentType: 'application/json',
  success: function (data) {
    console.log(data.results[0]);
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to receive message');
  }
});

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

