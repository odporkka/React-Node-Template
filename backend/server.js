const app = require('./src/app');

const port = process.env.PORT || 3000;

console.log('Starting server on port:', port);

app.listen(port);