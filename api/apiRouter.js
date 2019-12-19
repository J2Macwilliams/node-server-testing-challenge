const router = require('express').Router();

const companyRouter = require('../router/companyRouter');

router.use('/api', companyRouter);

// Global test endpoint
router.get('/', (req, res) => {
res.send(`<h3>I've got a Pickle! HEY HEY HEY!</h3>`)
});

module.exports = router;