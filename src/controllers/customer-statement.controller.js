import {CsvParserService, XmlParserService} from '../services';

exports.uploadFile = async (req, res, next) => {
  try {
    const dataBuffer = req.file.buffer.toString();

    if (req.file.mimetype === 'text/csv') {
      await CsvParserService.parseCsv(dataBuffer).then((results) => {
        console.log(results, 44545);
      })
      .catch((error) => {
        console.error(error);
      });
    }

    if (req.file.mimetype === 'application/xml') {
      const result = await XmlParserService.xmlParser(dataBuffer)
      console.log(result, 'result');
    }

    res.json({ message: 'File uploaded successfully.' });
  } catch (error) {
    next(error);
  }
};
