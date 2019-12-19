const router = require('express').Router();

const PicklesRouter = require('../router/PicklesRouter');

router.use('/api', PicklesRouter);

// Global test endpoint
router.get('/', (req, res) => {
res.send(`<h3>I've got a Pickle! HEY HEY HEY!</h3>`)
});

module.exports = router;