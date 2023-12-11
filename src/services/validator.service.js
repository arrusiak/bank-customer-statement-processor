const ERROR_INVALID_END_BALANCE = 'Invalid End Balance';
const ERROR_DUBLICATE_VALUE = 'Duplicate';

const validateData = async (data) => {
    const referenceSet = new Set();

    return data.map((record) => {
        const reference = record.reference || record.Reference;
        const endBalance = parseFloat(record['End Balance'] || record.endBalance);
        record.errors = [];

        // Check if the "Reference" is unique
        if (referenceSet.has(reference)) {
            record.errors.push(ERROR_DUBLICATE_VALUE);
        } else {
            referenceSet.add(reference);
        }

        // Check if "End Balance" is negative
        if (isNaN(endBalance) || endBalance < 0) {
            record.errors.push(ERROR_INVALID_END_BALANCE);
        }

        return record;
    });
};

export {
    validateData
};
