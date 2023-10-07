import * as express from 'express';

const router = express.Router();
router.get('/accounts', (req, res) => {
    res.send('Hello World!');
});

module.exports = router;
