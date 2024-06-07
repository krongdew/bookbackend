const booking = require('../../models/bookings'); 


const getAllbookings = async () => {
  return await booking.findAll();
};

const getbookingById = async (booking_id) => {
  return await booking.findByPk(booking_id);
};

const createbooking = async (bookingData) => {
  return await booking.create(bookingData);
};

const updatebooking = async (bookingId, bookingData) => {
  const [numRowsUpdated, updatedRows] = await booking.update(bookingData, {
    where: { booking_id: bookingId },
    returning: true,
  });

  if (numRowsUpdated === 1) {
    return updatedRows[0];
  } else {
    throw new Error('booking not found');
  }
};

const deletebooking = async (bookingId) => {
  const numRowsDeleted = await booking.destroy({
    where: { booking_id: bookingId },
  });

  if (numRowsDeleted === 1) {
    return { message: 'booking deleted successfully' };
  } else {
    throw new Error('booking not found');
  }
};



module.exports = {
  getAllbookings,
  getbookingById,
  createbooking,
  updatebooking,
  deletebooking,
 
};
