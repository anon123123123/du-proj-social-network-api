const Thoughts = require('../models/Thought');

module.exports = {
  // Get all Thoughts 
  getThoughts(req, res) {
    Thoughts.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  // Get Thought by Id
  getSingleThought(req, res) {
    Thoughts.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No Thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Create a new Thought
  createThought(req, res) {
    Thoughts.create(req.body)
      .then((dbThoughtsData) => res.json(dbThoughtsData))
      .catch((err) => res.status(500).json(err));
  },

  // update by ID
  updateSingleThought(req, res) {
    Thoughts.updateOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No Thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Delete Thought 
  deleteSingleThought(req, res) {
    Thoughts.findOneAndRemove({ _id: req.params.ThoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No Thought with that ID' })
          : res.json({ message: 'Thought removed' })
      )
      .catch((err) => res.status(500).json(err));
  },

};
