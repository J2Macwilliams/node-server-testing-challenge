const dB = require('../model/PicklesDB');
module.exports = (req, res, next) => {
	const { id } = req.params;

	if (!id) {
		res.status(400).json({ message: 'Missing the Pickle id!' });
	} else {
		dB.getBy(id)
			.then(picked => {
				next();
			})
			.catch(err => {
				res.status(404).json({ message: 'Wrong Pickle id!' });
			});
	}
};
