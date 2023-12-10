const csv = require('fast-csv');

exports.parseCsv = async (dataBuffer) => {
  try {
    return new Promise((resolve, reject) => {
      const results = [];

      csv
        .parseString(dataBuffer, { headers: true })
        .on('data', (data) => {
          results.push(data);
        })
        .on('end', () => {
          console.log(results, 1211);
          resolve(results);
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  } catch (error) {
    throw new Error(error);
  }
};
