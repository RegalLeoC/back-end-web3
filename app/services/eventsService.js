const Event = require('../entities/events');

async function createEvent(data) {
  return await Event.create(data);
}

async function getAllEvents() {
  return await Event.findAll();
}

async function getEventById(id) {
  return await Event.findByPk(id);
}

async function updateEvent(id, data) {
  const event = await Event.findByPk(id);
  if (event) {
    await event.update(data);
    return event;
  }
  return null;
}

async function deleteEvent(id) {
  const event = await Event.findByPk(id);
  if (event) {
    await event.destroy();
    return event;
  }
  return null;
}

module.exports = { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent };
