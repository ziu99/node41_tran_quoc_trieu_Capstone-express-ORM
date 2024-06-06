const express = require('express');
const app = express();
const sequelize = require('./config/database');
const userRoutes = require('./routes/user');
const imageRoutes = require('./routes/image');
const commentRoutes = require('./routes/comment');
const saveImageRoutes = require('./routes/saveImage');

app.use(express.json());

app.use('/users', userRoutes);
app.use('/images', imageRoutes);
app.use('/comments', commentRoutes);
app.use('/save', saveImageRoutes);

sequelize.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => console.log(err));
