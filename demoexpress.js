const express = require('express')
const app = express();

//khai bao middleware

app.use((req, res, next) => {
    console.log("Middle Ware called at : " + Date.now());
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome home using GET method')
    console.log('Welcome home using GET method ')
});

app.get('/about', (req, res) => {
    res.send('Welcome about using GET method')
    console.log('Welcome about using GET method ')
});

//khoi dong server
let server = app.listen(3000, () => {
    const host = server.address().address
    const port = server.address().port
    console.log(`Server running at ${host}:${port}`)
})