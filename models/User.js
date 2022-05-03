const { Schema, model } = require('mongoose');
const thoughtsSchema = require('./Thought').schema;
// To do add thoughts schema and fix below to be in line with read me add friends arrary
// Schema to create Student model
const userSchema = new Schema(
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
      match: /.+\@.+\..+/,
      max_length: 50,
    },
    thoughts: [thoughtsSchema],
    // TO DO fix 
     friends: {type: Array, ref: 'User'},
    //friends: {type: Schema.Types.ObjectId, ref: 'User'}
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
})

const Users = model('users', userSchema);

module.exports = Users;
