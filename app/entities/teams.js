// models/Team.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Team = sequelize.define('Team', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  team_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  team_coord_x: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  team_coord_y: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
}, {
  tableName: 'teams',
  timestamps: false 
});

module.exports = Team;
