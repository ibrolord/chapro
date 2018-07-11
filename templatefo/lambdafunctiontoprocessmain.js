var AWS = require('aws-sdk');
var ses = new AWS.SES();
 
var RECEIVER = 'ibroniagara@gmail.com';
var SENDER = 'ibroniagara@gmail.com';
var client_response = "Thanks Bitch";
var clientEmail;
var response = {
 "isBase64Encoded": false,
 "headers": { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': "*"},
 "statusCode": 200,
 "body": "{\"result\": \"Success.\"}"
};

exports.handler = function (event, context) {
    console.log('Received event:', event);
    
        sendEmail(event, function (err, data) {
            context.done(err, null);

            sendto_client (event, function (err, data) {
                context.done(err, null);
            })
        });
    
        

};

// 1. send to Charles
function sendEmail (event, done) {
    clientEmail = event.email;
    var params = {
        Destination: {
            ToAddresses: [
                RECEIVER
            ]
        },
        Message: {
            Body: {
                Text: {
                    Data: 'name: ' + event.name + '\nphone: ' + event.phone + '\nemail: ' + event.email + '\ndesc: ' + event.desc,
                    Charset: 'UTF-8'
                }
            },
            Subject: {
                Data: 'Website Referral Form: ' + event.name,
                Charset: 'UTF-8'
            }
        },
        Source: SENDER
    };
    ses.sendEmail(params, done);
}
// 2. send to Client
function sendto_client (event, done) {
    var params = {
        Destination: {
            ToAddresses: [
                event.email
            ]
        },
        Message: {
            Body: {
                Text: {
                    Message: client_response,
                    Charset: 'UTF-8'
                }
            },
            Subject: {
                Data: 'Thank You: ' + "Charles Omonuah",
                Charset: 'UTF-8'
            }
        },
        Source: SENDER
    };
    ses.sendto_client(params, done);
}
