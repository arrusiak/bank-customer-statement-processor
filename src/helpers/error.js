import logger from './logger';

class AppError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

const handleError = (err, req, res, next) => {
    let {statusCode = 500, message, name} = err;

    logger.error(`${statusCode} - ${message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

    console.log(err);
    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message
    });
};

const notFoundError = (object, errMsg) => {
    if (!object) {
        throw new AppError(404, `${errMsg} not found`);
    }
};

const alreadyExistError = (object, errMsg) => {
    if (object) {
        throw new AppError(404, `${errMsg} already exists`);
    }
};

module.exports = {
    AppError,
    handleError,
    notFoundError,
    alreadyExistError
};
