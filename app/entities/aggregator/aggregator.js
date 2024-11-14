// models/index.js
const User = require('../users'); 
const Team = require('../teams');
const Event = require('../events');

const db = {
  User,
  Team,
  Event
};

module.exports = db;
