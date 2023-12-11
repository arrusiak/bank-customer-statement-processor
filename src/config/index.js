import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT || 3000,
    acceptFileMimeTypes: ['text/csv', 'application/xml']
};
