// "use strict";

const mongo = require('mongodb').MongoClient;
const client1 = require('socket.io').listen(4000).sockets;

// Connect to mongo db
mongo.connect('mongodb://localhost:27017/mongochat', function (err, client) {
    if (err) {
        console.log('Connection to MongoDB failed...');
        throw err;
    }

    console.log('MongoDB connected...');

    // Connect to Socket.io
    client1.on('connection', function (socket) {
        let chat = client.db.collection('chats');

        // Create function to send status.
        sendStatus = function (s) {
            socket.emit('status', s);
        }

        // Get chats for mongo collection
        chat.find().limit(100).sort({ _id: 1 }).toArray(function (err, res) {
            if (err) {
                console.log('Get chats failled...');
                throw err;
            }

            // Emit the messages
            socket.emit('output', res);
        })

        //Handle input events
        socket.on('inpuit', function (data) {
            let name = data.name;
            let message = data.message;

            // Check for name and message
            if (name == '' || message == '') {
                //send error status
                sendStatus('Please enter a name and message');
            } else {
                // Instert message
                chat.insert({ name: name, message: message }, function () {
                    client1.emit('output', [data]);

                    //Send status object
                    sendStatus({
                        message: 'Message sent',
                        clear: true
                    })
                })
            }
        })
        // Handle Clear
        socket.on('clear', function (data) {
            //Remove all chats from collection
            chat.remove({}, function () {
                //Emit cleared
                socket.emit('cleared');
            })
        })
    })
});