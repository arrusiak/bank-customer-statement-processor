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

exports.xmlParser = async (dataBuffer) => {
  try {
    const parser = new xml2js.Parser();

    const results = parser.parseStringPromise(dataBuffer).then(function (result) {
      return convertResults(result.records.record);
    })

    return results;
  } catch (error) {
    throw new Error(error);
  }
};
