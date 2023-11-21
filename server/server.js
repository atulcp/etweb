const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Booking = require('./bookingModel');

const app = express();
const PORT = 5004;

// Connect to MongoDB
// mongoose.connect('mongodb+srv://coreymarshpm:i5wEUa7Glk75rvTa@cluster0.0l8zlyh.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Booking API!');
    
});

// app.get('/bookings', async (req, res) => {
//     try {
//         const bookings = await Booking.find();
//         res.json(bookings);
//     } catch (error) {
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// Create a new booking
// app.post('/bookings', async (req, res) => {
//      console.log("Received booking data:", req.body);
//     // Data validation
//       const { 
//         date,
//         user,
//         Start,
//         End 
//     } = req.body;
//       if (!date || !user || !Start || !End) {
//           return res.status(400).json({ message: 'Missing required fields' });
//       }
  
//     try {
//         const newBooking = new Booking(req.body);
//         await newBooking.save();
//         res.status(201).json(newBooking);
//     } catch (error) {
//         res.status(500).json({ message: 'Failed to create booking' });
//     }
    
// });

// Other CRUD routes like DELETE or UPDATE can be added similarly

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


