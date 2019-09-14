// const express = require('express');
// const mongoose = require('mongoose');
// const Training = require('../modals/training');
// const TrainingModal = mongoose.model('Training')
// const router = express.Router();

// router.get('/', (req, res) => {
//     res.render('index');
// })

// router.get('/list',(req,res)=>{
//     TrainingModal.find((err,docs)=>{
//         if(!err){
//             console.log(docs);
//             res.render('training');
//         }
//         else{
//             res.send("Error")
//         }
//     });
// });

// app.post('/contactCollege', async (req, res) => {
//     console.log(req.body);
//     const CollegeNew = new College(req.body);

//     try {
//         const savedCollege = await CollegeNew.save();
//         res.json(savedCollege);
//     } catch (err) {
//         res.json({
//             message: err
//         });
//     }
// });

// // router.get('/training', (req, res) => {
// //     myObj = {
// //         "name": "John",
// //         "age": 30,
// //         "car": null
// //     };
// //     res.render('training');
// // });

// module.exports = router;