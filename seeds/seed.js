const sequelize = require('../config/connection');
const { User, HighScore } = require('../models');

const userData = require('./userData.json');
// const highscoreData = require('./highschoreData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  //adjusted because highscore was being called but not being used.
  // for (let i = 0; i < users.length; i++) {
  //   const user = users[i];
  //   const highscores = highscoreData.filter((hs) => hs.userId === user.id);
  //   await HighScore.bulkCreate(highscores.map((hs) => ({ ...hs, userId: user.id })));
  // }

  process.exit(0);
};


seedDatabase();
