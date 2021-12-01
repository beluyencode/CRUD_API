const express = require('express');
const port = 5000;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())


app.get('/',(req,res) => {
    res.send("hello");
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
