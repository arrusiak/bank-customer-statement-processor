import app from './src/app';
import appConfig from './src/config';
import logger from './src/helpers/logger';

app.listen(appConfig.port, () => {
    logger.info(`Server is running on port ${appConfig.port}`);
});
