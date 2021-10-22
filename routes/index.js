const router = require('express').Router();
const apiRoutes = require('./api')

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('SOMETHING HAS GONE TERRIBLY WRONG!')
});

module.exports = router;