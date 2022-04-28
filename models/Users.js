const { Schema, model } = require('mongoose');
const thoughtsSchema = require('./Thoughts');
// To do add thoughts schema and fix below to be in line with read me add friends arrary
// Schema to create Student model
const usersSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/, // TEST This
      max_length: 50,
    },
    thoughts: [thoughtsSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Users = model('users', usersSchema);

module.exports = Users;
