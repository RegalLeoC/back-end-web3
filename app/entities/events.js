// models/Event.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('scheduled', 'ongoing', 'completed', 'canceled'),
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  date_of_event: {
    type: DataTypes.DATE,
    allowNull: false
  },
  created_by: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  event_coord_x: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  event_coord_y: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
}, {
  tableName: 'events',
  timestamps: false 
});

module.exports = Event;