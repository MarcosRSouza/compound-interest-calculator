const express = require('express');

const app = express();
const port = 8000;
const routes = express.Router();

routes.get('/hello', (req, res) => {
    return res.json({ "Hello": "world" });
});

app.use(routes);

app.listen(port, () => {
    console.log('listening on port ' + port);
});