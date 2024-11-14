const Team = require('../entities/teams'); 



async function createTeam(data) {
  return await Team.create(data);
}

async function getAllTeams() {
  return await Team.findAll();
}

async function getTeamById(id) {
  return await Team.findByPk(id);
}

async function updateTeam(id, data) {
  const team = await Team.findByPk(id);
  if (team) {
    await team.update(data);
    return team;
  }
  return null;
}

async function deleteTeam(id) {
  const team = await Team.findByPk(id);
  if (team) {
    await team.destroy();
    return team;
  }
  return null;
}

module.exports = { createTeam, getAllTeams, getTeamById, updateTeam, deleteTeam };
