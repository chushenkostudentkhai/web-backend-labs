const express = require('express');
const routes = require('./product.routes');
const { logRequest } = require('./middleware');
const { errorResponder } = require('./error.middleware');

const app = express();
app.use(logRequest);
app.get('/', (req, res) => res.type('text').send('Express HTTP server - Lab 6'));
app.use(routes);
app.use(errorResponder);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server listening on port ' + port));
