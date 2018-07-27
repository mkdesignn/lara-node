let express = require('express');
let router = require('./app/router');
let app = express();
process.env = require('./env.js');

router.init(app);

app.listen(3000, () => console.log('Example app listening on port 3000!'))
