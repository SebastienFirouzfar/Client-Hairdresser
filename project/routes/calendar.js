const express = require('express');
const router = express.Router();

//DateApp Model
const DateApp = require('../models/dateapp');
const { param } = require('./appointmentform');

router.get('/', (req, res) => {
    res.render('calendar.ejs');

});


router.post('/', (req, res) => {

    const { fulldate } = req.body;
    res.render('appointmentform.ejs', {data: fulldate})
    /* //save dates in db
    const newDateApp = new DateApp({
        date:fulldate
    });
    newDateApp.save();
    */
   
});



module.exports = { router: router };
