import express from 'express';

import CustomerStatementRouter from './customer-statement';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello');
});

router.use('/customer-statement', CustomerStatementRouter);

module.exports = router;
