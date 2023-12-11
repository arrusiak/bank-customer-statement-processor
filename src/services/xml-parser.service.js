import xml2js from 'xml2js';

const convertRecord = (record) => {
    const flatRecord = {};
    for (const prop in record) {
        if (prop === '$') {
            for (const innerProp of Object.keys(record[prop])) {
                flatRecord[innerProp] = record[prop][innerProp];
            }
        } else {
            [flatRecord[prop]] = record[prop];
        }
    }
    return flatRecord;
};

const convertResults = records => records.map(convertRecord);

const xmlParser = async (dataBuffer) => {
    try {
        const parser = new xml2js.Parser();

        const result = await parser.parseStringPromise(dataBuffer);

        return convertResults(result.records.record);
    } catch (error) {
        throw new Error(error);
    }
};

export {
    xmlParser
};
