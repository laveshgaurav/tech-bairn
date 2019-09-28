const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const workshop = require('./modals/workshop');
const training = require('./modals/training');
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

// app.get('/training', (req, res) => {
//     Training.find((err,docs)=>{
//         if(!err){
//             console.log(docs);
//             res.render("training",{data:docs});
//         }
//         else{
//             res.send("Error")
//         }
//     });
// });

app.get('/training', (req, res) => {
    res.render('training');
});


app.get('/', (req, res) => {
            res.render('index');       
});
app.get('/workshop_register', (req, res) => {
    res.render('workshop_register');
});
app.get('/training_register', (req, res) => {
    res.render('training_register');
});

app.get('/workshop', (req, res) => {
    res.render('workshop');
});
app.get('/project', (req, res) => {
    res.render('project');
});
app.get('/R&D', (req, res) => {
    res.render('R&D');
});
app.get('/contact_us', (req, res) => {
    res.render('contact_us');
});
app.get('/addtraining', (req, res) => {
    res.render('add_training');
});


app.post('/addWorkshop', async (req, res) => {
    console.log(req.body);
    const workshopNew = new workshop(req.body);

    try {
        const savedworkshop = await workshopNew.save();
        res.render('thankyou', {
            name: req.body.name,
            course: req.body.course
        })
    } catch (err) {
        res.json({
            message: err
        });
    }
});

app.post('/addTraining', async (req, res) => {
    console.log(req.body);
    const trainingNew = new training(req.body);

    try {
        const savedtraining = await trainingNew.save();
        res.render('thankyou', {
            name: req.body.name,
            course: req.body.course
        })
    } catch (err) {
        res.json({
            message: err
        });
    }
})