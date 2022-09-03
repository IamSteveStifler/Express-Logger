const express = require('express');
const app = express();

const logger = (req, res, next) => {
    console.log('Logged In');
    next();
}

const time = (req, res, next) => {
    const date = new Date(Date.now());
    console.log(`Time : ${date.getHours()}:${date.getMinutes()}`);
    next();
};

app.use(logger);
app.use(time);

app.get('/', (req, res)=>{
    res.send('Welcome to Node-Express Application');
});

app.listen(3000, ()=>console.log('Server is Running on Port 3000'));