const router = require('express').Router();

//Pull in knex helper models
const dB = require('../model/PicklesDB');

// Pull in custom Middleware
const validateId = require('../middleware/validateId');
const validatePost = require('../middleware/validatePost');

//Global GET
router.get('/', (req, res) => {
	dB.get()
		.then(found => {
			res.status(200).json(found);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

//GET by id
router.get('/:id', validateId, (req, res) => {
	const { id } = req.params;

	dB.getBy(id)
		.then(found => {
			res.status(200).json(found);
		})
		.catch(err => {
			res.status(500).json({ message: 'Error gettin that Pickle', err });
		});
});

//POST
router.post('/', validatePost, (req, res) => {
	let pickle = req.body;

	dB.add(pickle)
		.then(addedPickle => {
			res.status(201).json(addedPickle);
		})
		.catch(err => {
			res.status(500).json({ message: 'Problem Adding Pickle', err });
		});
});

//DELETE by id
router.delete('/:id', validateId, (req, res) => {
	const { id } = req.params;

	dB.getBy(id)
		.then(found => {
			dB.remove(id, found)
				.then(deletedPickle => {
					res
						.status(200)
						.json({ message: `Pickle with id: ${id} was deleted`, found });
				})
				.catch(err => {
					res
						.status(500)
						.json({ message: 'Could not delete the Pickle!', err });
				});
		})
		.catch(err => {
			res.status(500).json({ message: 'Could not find that Pickle', err });
		});
});

module.exports = router;
