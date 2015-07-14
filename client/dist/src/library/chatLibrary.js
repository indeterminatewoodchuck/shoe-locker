var chatButton = document.getElementById("chat-button");

var createChatSession = function() {
  // should we pass in company name or other identifier?
  var comm = new Icecomm('NEED AN API KEY HERE');
  var chatWindow = document.createElement('div');
  chatButton.parentNode.appendChild(chatWindow);

  // Change this to our server url
  var socket = io('http://localhost:3000');

  // will need to emit some kind of customer number?
  socket.emit('customerRequest');

  socket.on('joinRoom', function(data) {
    comm.on('connected', function(peer) {
      chatWindow.appendChild(peer.getVideo());
    });

    comm.on('disconnect', function() {
      comm.leave(true);
    });

    // figure out what format data is being sent back with
    comm.connect(data.SOMETHING);
  });


};

chatButton.addEventListener('click', createChatSession, false);
