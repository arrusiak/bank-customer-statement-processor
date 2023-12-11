import {createLogger} from 'winston';
import {loggerFormat, loggerTransports, level} from '../config/logger';

const logger = createLogger({
    level,
    format: loggerFormat,
    transports: loggerTransports
});

module.exports = logger;
