var chatButton = document.getElementById("chat-button");

var createChatSession = function() {
  var comm = new Icecomm('NEED AN API KEY HERE');
  var chatWindow = document.createElement('div');
  chatButton.parentNode.appendChild(chatWindow);

  // socket.emit -> emit ('customerRequest')


  // socket.on('customerRoom') - ok to enter room
    // comm.connect -> room that is sent back
  // comm.on('connected') -> add video to div
  // comm.on('disconnect') -> remove video from div
    // turn off listeners? comm.leave?

};

chatButton.addEventListener('click', createChatSession, false);


// Need to emit 'customerRequest' in order to add to customer queue
// listen for 'customerRoom' to get the room number
