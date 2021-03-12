const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
})
app.get('/profiles', (req, res) => {
    res.render('profiles');
})
app.get('/snaphots', (req, res) => {
    res.render('snaphots');
})
app.get('/users', (req, res) => {
    res.render('users');
})

app.use((req, res) => {
    res.status(404).render('404')
})
app.listen(port);

