const express = require('express');
const cors = require ('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

/*const staticServerPathWeb = './web';
app.use(express.static(staticServerPathWeb));*/

app.get('/', function (req, res) {
    res.send('Hello World!');
  });
