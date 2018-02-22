# node-socket.io-mongo-chat
NodeJS, Socket.io, MongoDB, Chat server

# Pre Requisits
- install nodejs Ubuntu 16.04
sudo apt-get update
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

#install mongodb
https://www.youtube.com/watch?v=WH5GgHaEy7E
https://www.mongodb.com/
Ubuntu 16.04 x64 - mongodb-linux-x86_64-ubuntu1604-3.6.2.tgz
sudo apt-get install mongodb
sudo apt-get update


#Part 1 - building the server
https://www.youtube.com/watch?v=8Y6mWhcdSUM

#Part 2 - build the front end

bootstrap cdn
https://v4-alpha.getbootstrap.com/getting-started/introduction/
socketio cdn
https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js

Errors-
server runs until the client tries to connect then it gives an error at let chat = client.db.collection('chats'); on collection
supposed fix does not work.
https://stackoverflow.com/questions/47968259/my-script-trying-to-create-a-server-with-mongodb-and-nodejs-giving-error-db-co/47968313#47968313
https://github.com/mongodb/node-mongodb-native

full code from video does not work either.
https://github.com/bradtraversy/mongochat/blob/master/index.html
