'use strict';

const express = require('express');
const compression = require('compression');
const json = require('body-parser').json;

const app = express();

app.use(json());
app.use(compression());

app.post('/gamestack', (req, res) => {
  // sample body
  // {
  //   "attachments": [],
  //   "avatar_url": "http://i.groupme.com/123456789",
  //   "created_at": 1302623328,
  //   "group_id": "1234567890",
  //   "id": "1234567890",
  //   "name": "John",
  //   "sender_id": "12345",
  //   "sender_type": "user",
  //   "source_guid": "GUID",
  //   "system": false,
  //   "text": "Hello world ☃☃",
  //   "user_id": "1234567890"
  // }
  const body = req.body;

  const message = body.text;
  const fromId = body.sender_id;
  const fromName = body.name;
  const messageTimestap = body.created_at;

  console.log('message', message);
  console.log('fromId', fromId);
  console.log('fromName', fromName);
  console.log('timestamp', messageTimestap);

  res.end();
});

module.exports = app.listen(80, () => {
  console.log('groupme server up on port 80');
});
