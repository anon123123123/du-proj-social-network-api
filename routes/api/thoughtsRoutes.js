const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateSingleThought,
  deleteSingleThought,
  createReaction,
  removeReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateSingleThought).delete(deleteSingleThought)

router.route('/:thoughtId/reactions').post(createReaction).delete(removeReaction)


module.exports = router;
