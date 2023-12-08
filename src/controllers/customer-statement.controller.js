const XmlParserService = require('../services/xml-parser.service')   
const CsvParserService = require('../services/csv-parser.service') 

// eslint-disable-next-line import/prefer-default-export
const uploadFile = async (req, res) => {
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
};
  
module.exports = { uploadFile };