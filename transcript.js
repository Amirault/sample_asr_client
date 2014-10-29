#!/usr/bin/node

var fs = require('fs');
var http = require('http');
var assert = require('assert');

var options = {
    port: 1337,
    path: '/transcript',
    method: 'POST',
    headers: {
        Connection: 'keep-alive',
        'Transfer-Encoding': 'chunked',
        'Content-Type': 'audio/x-flac',
        'X-Audio-Language': 'en-US',
        'X-Call-ID': '1234567890ABCDEF'
    }
};

var request = http.request(options);

request.on('response', function (response) {
    assert.equal(response.statusCode, 200, 'status should be 200!');

    response.on('end', function () {
        console.log('request ended');
    });

    response.on('data', function (data) {
        console.log(data.toString());
    });
});

var read = fs.createReadStream('./test/fixtures/flac/1min.flac');

read.pipe(request);
