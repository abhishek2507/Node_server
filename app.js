var express = require('express');
const app = express();
const courses = [
    { id: 1, name : 'courses1'},
    { id: 2, name : 'courses2'},
    { id: 3, name : 'courses3'},
];
app.get('/', (req,res) => {
    res.send('Hello World');
});
app.get('/api/courses', (req,res) => {
    res.send(courses);
});
app.get('/api/courses/:id', (req,res) => {
   const course = courses.find(c => c.id === parseInt(req.params.id));
   if(!course) res.status(404).send('The course with the given ID was not found.')//404 not found
   res.send(course);
});
app.listen(process.env.PORT || 8081)