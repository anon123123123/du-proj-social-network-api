const { connect, connection } = require('mongoose');
// Config for db conn
const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/socialDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
