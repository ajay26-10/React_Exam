const express = require ('express')
const router = express.Router()
const hotel = require('../model/hotelbooking')
const verifyToken = require ('../middleware/authmw')

router.get('/bookings', verifyToken, async (req,res) => {
    const bookingdetails = await hotel.find({});
    res.json(bookingdetails);
})

router.post('/new-booking', async (req,res) => {
    try{
        const newbooking = req.body;
        const result = await hotel.create(newbooking);
        res.status(201).json(result);
    }catch(error){
        console.log(error);
        res.status(500).json();
    }
});

router.get('/bookings/:id', async (req, res) => {
    try {
      const bookdate = req.params.id;
      const details = await hotel.findOne({ id: bookdate });
      if (!details) {
        return res.status(404).json({ error: 'Booking not found' });
      }
      res.json(details);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router;
