const xml2js = require('xml2js');

const convertRecord = (record) => {
    const flatRecord = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const prop in record) {
        if (prop === '$') {
          // eslint-disable-next-line guard-for-in, no-restricted-syntax
          for (const innerProp in record[prop]) {
              flatRecord[innerProp] = record[prop][innerProp];
            }
          } else {
            // Use the first element of the array for other properties
            // eslint-disable-next-line prefer-destructuring
            flatRecord[prop] = record[prop][0];
          }
    }
    
    return flatRecord;
};
  
const convertResults = (records) => {
    return records.map(convertRecord);
};

const xmlParser = async (xmlDataBuffer) => {
  const parser = new xml2js.Parser();
    
  // Parse XML
  const results = parser.parseStringPromise(xmlDataBuffer).then(function (result) {
    return convertResults(result.records.record);
  })

  return results;
};
  
module.exports = { xmlParser };
