// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize(process.env.DB_URL, {
//   dialect: "postgres",
//   logging: false,
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// });

// sequelize
//   .authenticate()
//   .then(() => {
   
//   })
//   .catch((err) => {
//     console.log(err);
//   });




// const Teacher = sequelize.define('teachers', {
//     teacher_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     firstname: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastname: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     rate: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     Bio: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     img: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     subject: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });
  
//   module.exports = Teacher;
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Teacher = sequelize.define('teachers', {
      teacher_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Bio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

// Define relation with timetables
Teacher.hasMany(require('./timetable'), { foreignKey: 'teacher_id' });
require('./timetable').belongsTo(Teacher, { foreignKey: 'teacher_id' });

module.exports = Teacher;
