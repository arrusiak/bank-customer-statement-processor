const app = require('./src/app');
const { port } = require('./src/config');

const server = app.listen(port, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
