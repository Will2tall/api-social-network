const router = require('express').Router();
const { addThought, removeThought, addReaction, removeReaction, getOneThought, updateThought } = require('../../controllers/thought-controller')

router.route('/:userId').post(addThought);

router.route('/:userId/:thoughtId').delete(removeThought);

router
.route('/:userId/:thoughtId')
.put(addReaction)

router.route('/:thoughtId').put(updateThought).get(getOneThought);

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction)

module.exports = router;