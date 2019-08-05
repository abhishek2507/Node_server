var express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb+srv://abhi655:Abhi@2507@abhiscluster-tyxhs.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser: true
}, function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Connected to the database");
    }
});
app.use(express.json());
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
app.post('/api/courses', (req,res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course)
});
app.get('/api/courses/:id', (req,res) => {
   const course = courses.find(c => c.id === parseInt(req.params.id));
   if(!course) res.status(404).send('The course with the given ID was not found.')//404 not found
   res.send(course);
});
app.listen(process.env.PORT || 8081)