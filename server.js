prpl = require('prpl-server');
express = require('express');

const app = express()

//app.get('/api/launch', (req, res, next) => res.send('boom'));
// app.get('/', (req, res, next) => res.send('home'));
app.get('/*', prpl.makeHandler('.', {
    builds: [
        { name: '.', browserCapabilities: ['es2015', 'push'] },
        { name: '.' },
    ],
}));

app.listen(8081);