const { Schema, model } = require('mongoose');

// To do all
// Schema to create Thought model
const reactionsSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
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
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
  }
);

userSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
})

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;
