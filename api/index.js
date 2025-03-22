const express = require('express');
const cors = require ('cors');

const app = express();

app.use(cors());

app.get('/api/test', (req, res) => {
    res.json({body:'testss k23'});
  });

app.post('/api/transaction',(res,req) =>{

    res.json(req.body);

});
app.listen(4040);