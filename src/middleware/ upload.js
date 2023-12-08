const multer = require('multer');

// Accept only CSV and XML files
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'text/csv' || file.mimetype === 'application/xml') {
    cb(null, true);
    } else {
    cb(new Error('Invalid file type. Only CSV and XML files are allowed.'));
    }
};

// Create the multer instance
const upload = multer({   
    fileFilter, 
});

module.exports = upload;
