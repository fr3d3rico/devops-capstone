const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/:name', (req, res) => {
    res.send(`Hello ${req.params.name}!`);
});

module.exports = router;