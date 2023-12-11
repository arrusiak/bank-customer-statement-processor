import multer from 'multer';
import appConfig from '../config';
import {AppError} from '../helpers/error';

// Accept only CSV and XML files
const fileFilter = (req, file, cb) => {
    if (appConfig.acceptFileMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new AppError('Invalid file type. Only CSV and XML files are allowed.', 400));
    }
};

// Create the multer instance
const upload = multer({
    fileFilter
});

export default upload;
