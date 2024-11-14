// index.js
const express = require('express');
const sequelize = require('./database/db');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const teamRoutes = require('./routes/teamRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/users', userRoutes);      
app.use('/events', eventRoutes);      
app.use('/teams', teamRoutes);        

//aws health check
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});


sequelize.sync()
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on 0.0.0.0:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
