var gcm = require('../lib/node-gcm');

var message = new gcm.Message();

message.addData('hello', 'world');
message.addNotification('title', 'Hello');
message.addNotification('icon', 'ic_launcher');
message.addNotification('body', 'World');


//Add your mobile device registration tokens here
var regTokens = ['cy9G3Af59ko:APA91bHiIaDN7KfcN-JdrIhdQchYIiKmRZvfjWORF4X0IboN6pYD6ITJlLf_6djxbcINP8zaqk5W0pQFl7J4hY6o5x2I3qr4mD1iv-ZTK8_nwOLbnYWxj95TQ5fGhIy4ASnHVoEgCBVV'];
//Replace your developer API key with GCM enabled here
var sender = new gcm.Sender('AIzaSyDW5PnsQP-brJ0vWEs7wtgYUAkMX9VhIKY');

sender.send(message, regTokens, function (err, response) {
    if(err) {
      console.error(err);
    } else {
      console.log(response);
    }
});
