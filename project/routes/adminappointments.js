const express = require('express');
const router = express.Router();

const Appointment = require('../models/appointmentform');

router.get('/', (req, res) =>{
     Appointment.find((error, docs) => {
        res.render('adminappointments.ejs', {rndv: docs});
        //console.log("rendez-vous : "+ docs)
     });
    
});


module.exports = router;