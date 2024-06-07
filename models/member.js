
const { Sequelize,DataTypes } = require('sequelize');
// กำหนดการเชื่อมต่อฐานข้อมูล
const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// ตรวจสอบการเชื่อมต่อฐานข้อมูล
sequelize
  .authenticate()
  .then(() => {
    
  })
  .catch((err) => {
    console.log(err);
  });

const Member = sequelize.define('member', {
  member_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  balance: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Member;
