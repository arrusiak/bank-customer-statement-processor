const express = require('express');

const router = express.Router();

const CustomerStatementController = require('../controllers/customer-statement.controller')
// Require the upload middleware
const upload = require('../middleware/ upload');


router.post('/',  upload.single('file'), CustomerStatementController.uploadFile)

module.exports = router;
