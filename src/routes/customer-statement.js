import express from 'express';

import * as CustomerStatementController from '../controllers/customer-statement.controller';

import upload from '../middleware/upload';

const router = express.Router();

router.post('/',  upload.single('file'), CustomerStatementController.validateRecords);

export default router;
