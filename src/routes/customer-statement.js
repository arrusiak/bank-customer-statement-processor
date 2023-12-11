import express from 'express';

const CustomerStatementController = require('../controllers/customer-statement.controller');

const router = express.Router();

// Require the upload middleware
const upload = require('../middleware/ upload');

router.post('/',  upload.single('file'), CustomerStatementController.uploadFile)

module.exports = router;
