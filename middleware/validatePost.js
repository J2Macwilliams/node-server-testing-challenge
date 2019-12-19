module.exports = (req, res, next) => {
	const postInfo = req.body;

	if (!postInfo.name) {
		res.status(404).json({ message: 'Missing Pickle Name!' });
	} else {
		next();
	}
};
