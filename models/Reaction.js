const { default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

// To do all
// Schema to create Thought model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
  }
);


const Reaction = model('reactions', reactionSchema);

module.exports = Reaction;
