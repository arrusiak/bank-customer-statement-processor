import express from 'express';

const router = express.Router();

import CustomerStatementController from '../controllers/customer-statement.controller.js';

// Require the upload middleware
const upload = require('../middleware/ upload');


router.post('/',  upload.single('file'), CustomerStatementController.uploadFile)

export default router;
