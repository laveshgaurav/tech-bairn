const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const Training = require('./modals/training');
const hbs = require('express-handlebars');
var path = require('path')
const Routing = require("./controllers/routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine('hbs',hbs({
    extname:'hbs',
    defaultLayout:'main',
    layoutsDir:__dirname+'/views/layouts'
}));

app.set('views',(__dirname,'views'));
app.set('view engine','hbs');


app.use('/assets', express.static('assets'));
app.use('/CSS', express.static('Css'));
app.use('/JS', express.static('Js'));
app.use('/Documents', express.static('Documents'));


const port = process.env.PORT || '3000';
app.listen(port,()=>console.log("Listening to port "+port));

mongoose.connect('mongodb+srv://lavesh:Lavrsh@1998@cluster0-ftdqa.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
}, () => console.log('Connected To MongoDB'));

app.get('/training', (req, res) => {
    Training.find((err,docs)=>{
        if(!err){
            console.log(docs);
            res.render("training",{data:docs});
        }
        else{
            res.send("Error")
        }
    });
});

app.get('/', (req, res) => {
            res.render('index');       
});

app.get('/IOT', (req, res) => {
    res.sendFile(__dirname+'/Documents/1. Internet of Things Workshop.pdf')
})

app.get('/workshop', (req, res) => {
    res.render('workshop');
});
app.get('/addtraining', (req, res) => {
    res.render('add_training');
});


app.post('/addTrainingCourse', async (req, res) => {
    console.log(req.body);
    const TrainingNew = new Training(req.body);

    try {
        const savedTraining = await TrainingNew.save();
        res.render('add_training', {
            name: req.body.name,
            email: req.body.email
        })
    } catch (err) {
        res.json({
            message: err
        });
    }
});

