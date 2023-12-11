import * as csv from 'fast-csv';

const parseCsv = async dataBuffer => new Promise((resolve, reject) => {
    const results = [];

    csv
        .parseString(dataBuffer, {headers: true})
        .on('data', (data) => {
            results.push(data);
        })
        .on('end', () => {
            resolve(results);
        })
        .on('error', (error) => {
            reject(error);
        });
});

export {
    parseCsv
};
