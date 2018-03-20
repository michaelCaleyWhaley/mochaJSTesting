
// simple server for testing with SuperTest
const express = require('express');

var app = express();
app.get('/', (req, res) => {
    // res.send('Hello');
    res.status(200).send({
        message: 'hello'
    });
});

app.get('/users', (req, res) => {
    res.send([{
        name: 'Mike',
        age: 29
    },
    {
        name: 'Jen',
        age: 26
    }]);
});

app.listen(3000);

module.exports = {
    app
};