import {AppError} from '../helpers/error';
import {
    XmlParserService,
    ValidatorService,
    CsvParserService
} from '../services';

const validateRecords = async (req, res, next) => {
    try {
        const {file} = req;

        if (!file) {
            throw new AppError('File required.', 400);
        }

        // TODO: use read stream for large files (fs.createReadStream...)
        const dataBuffer = file.buffer.toString();

        const typeParserMapping = {
            'text/csv': CsvParserService.parseCsv,
            'application/xml': XmlParserService.xmlParser
        };

        const parserFn = typeParserMapping[file.mimetype];

        if (!parserFn) {
            throw new AppError(`${file.mimetype} parser not implemented`);
        }

        const data = await parserFn(dataBuffer);
        const validationResult = await ValidatorService.validateData(data);
        res.json(validationResult);
    } catch (error) {
        next(error);
    }
};

export {
    validateRecords
};
