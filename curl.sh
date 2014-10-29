#!/bin/bash
curl --header "Connection: keep-alive"\
  --header "Transfer-Encoding: chunked"\
  --header "Content-type: audio/flac"\
  --header "X-Audio-Language: en-US"\
  --header "X-Call-ID: 1234567890ABCDEF"\
  -X POST\
  --data-binary @fixtures/flac/1min.flac\
  104.131.64.26:1337/transcript
