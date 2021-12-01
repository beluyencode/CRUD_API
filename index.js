const express = require('express');
const port = 5000;
const app = express();
const user = require('./routes/user');


app.use(express.urlencoded({extended: true}));
app.use(express.json())


app.use('/',user);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
