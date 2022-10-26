const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const courses = require('./data/courses.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Course data running ');
});
app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(courses);
    }
    else {
        const category_courses = courses.filter(n => n.id === id);
        res.send(category_courses);
    }
})
app.listen(port, () => { console.log('This is skill development course from server'), port })