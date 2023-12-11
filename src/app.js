import express from 'express';
import {handleError} from './helpers/error';

import routes from './routes/index';

const app = express();

app.use('/', routes);

app.use(handleError);

export default app;
