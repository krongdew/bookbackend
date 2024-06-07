require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // เพิ่มส่วนนี้
const sequelize = require('./config/database');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Routes
const teacherRoutes = require('./api/teachers/routes');
const timetableRoutes = require('./api/timetables/routes');
const memberRoutes = require('./api/members/routes');
const sendEmailController = require('./api/send-email/routes');

app.use('/api/teachers', teacherRoutes);
app.use('/api/timetables', timetableRoutes);
app.use('/api/members', memberRoutes);
app.use('/api/send-email', sendEmailController); // เพิ่มส่วนนี้


// Database connection
sequelize
  .sync({ force: false }) // Set force to true to drop existing tables
  .then(() => {
    console.log('Tables created successfully');
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Unable to sync database:', err);
  });
  
// require("dotenv").config();
// const express = require("express");
// const corsMiddleware = require('./corsMiddleware');
// const { Sequelize } = require('sequelize');

// // นำเข้าโมเดล
// const Member = require('./models/member');
// const Teacher = require('./models/teacher');
// const Timetable = require('./models/timetable');
// const Booking = require('./models/bookings');

// const app = express();
// const port = process.env.PORT || 3000;
// app.use(express.json());
// app.use(corsMiddleware);

// // กำหนดการเชื่อมต่อฐานข้อมูล
// const sequelize = new Sequelize(process.env.DB_URL, {
//   dialect: 'postgres',
//   logging: false,
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// });

// // ตรวจสอบการเชื่อมต่อฐานข้อมูล
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Database connected");
//   })
//   .catch((err) => {
//     console.error("Unable to connect to the database:", err);
//   });

// // สร้างตารางจากโมเดลที่นำเข้า
// sequelize.sync({ alter: true })
//   .then(() => {
//     console.log('Tables created successfully');
//   })
//   .catch(err => console.error('Error creating tables:', err));

// // ต่อจากนี้เป็นการนำเข้าและใช้งานเราท์
// const memberRoutes = require('./api/members/routes');
// app.use('/api/members', memberRoutes);

// const teachersRoutes = require('./api/teachers/routes');
// app.use('/api/teachers', teachersRoutes);

// const timetableRoutes = require('./api/timetables/routes');
// app.use('/api/timetables', timetableRoutes);

// const bookingRoutes = require('./api/bookings/routes');
// app.use('/api/bookings', bookingRoutes);

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });

