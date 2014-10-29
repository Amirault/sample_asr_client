#!/bin/bash
curl --header "Connection: keep-alive"\
  --header "Transfer-Encoding: chunked"\
  --header "Content-type: audio/wav"\
  --header "X-Audio-Language: en-US"\
  --header "X-Call-ID: 1234567890ABCDEF"\
  -X POST\
  --data-binary @fixtures/wav/1min.wav\
  104.131.64.26:1337/transcript
