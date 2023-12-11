import logger from './logger';

class AppError extends Error {
    constructor(message, statusCode) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
}

const handleError = (err, req, res, next) => {
    const {statusCode = 500, message} = err;

    logger.error(`${statusCode} - ${message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

    return res.status(statusCode).json({
        status: 'error',
        statusCode,
        message
    });
};

export {
    AppError,
    handleError
};
