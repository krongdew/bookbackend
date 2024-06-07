// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const bookingService = require('./services');

// GET /api/bookings
const getAllbookings = async (req, res) => {
  try {
    const bookings = await bookingService.getAllbookings();
    res.json(bookings);
  } catch (err) {
    console.error('Error fetching bookings', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// GET /api/bookings/:id
const getbookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await bookingService.getbookingById(id);
    if (booking) {
      res.json(booking);
    } else {
      res.status(404).json({ error: 'booking not found' });
    }
  } catch (err) {
    console.error('Error fetching booking', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// POST /api/bookings
const createbooking = async (req, res) => {
  try {
    const newbookingData = req.body;
    const createdbooking = await bookingService.createbooking(newbookingData);
    res.status(201).json(createdbooking);
  } catch (err) {
    console.error('Error creating booking', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// PUT /api/bookings/:id
const updatebooking = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedbookingData = req.body;
    const updatedbooking = await bookingService.updatebooking(id, updatedbookingData);
    res.json(updatedbooking);
  } catch (err) {
    if (err.message === 'booking not found') {
      res.status(404).json({ error: 'booking not found' });
    } else {
      console.error('Error updating booking', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

// DELETE /api/bookings/:id
const deletebooking = async (req, res) => {
  try {
    const { id } = req.params;
    await bookingService.deletebooking(id);
    res.json({ message: 'booking deleted successfully' });
  } catch (err) {
    if (err.message === 'booking not found') {
      res.status(404).json({ error: 'booking not found' });
    } else {
      console.error('Error deleting booking', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

// const checkUsernameExists = async (req, res) => {
//   try {
//     const { username } = req.params;
//     const booking = await bookingService.getbookingByUsername(username);
//     if (booking) {
//       res.json(true);
//     } else {
//       res.json(false);
//     }
//   } catch (err) {
//     console.error('Error checking username', err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// const login = async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const booking = await bookingService.getbookingByUsername(username);
//     if (!booking) {
//       return res.status(400).json({ error: 'Invalid username or password' });
//     }

//     const isMatch = await bcrypt.compare(password, booking.password);
//     if (!isMatch) {
//       return res.status(400).json({ error: 'Invalid username or password' });
//     }

//     const payload = {
//       booking: {
//         id: booking.booking_id
//       }
//     };

//     const token = jwt.sign(payload, 'secret_token', { expiresIn: '1h' });

//     // ส่งข้อมูลผู้ใช้กลับไปพร้อมกับ token
//     res.json({ token, user: { id: booking.booking_id, username: booking.username, name: booking.name, surname: booking.surname } });
//   } catch (err) {
//     console.error('Error logging in', err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };


module.exports = {
  getAllbookings,
  getbookingById,
  createbooking,
  updatebooking,
  deletebooking,
//   checkUsernameExists,
//   login
};