import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const FindBooking = () => {

    const [checkin, setCheckin] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await fetch(`http://localhost:5000/bookings/${checkin}`);
      if (!res.ok) {
        throw new Error('Booking not found');
      }
      const data = await res.json();
      navigate(`/bookings/${checkin}`, { state: { bookingdata: data } });
    } catch (err) {
      console.error(err.message);
    }
  };


  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gray-50">
      <h1 className="font-extrabold text-3xl mb-7 text-gray-800 mt-[-15%]">Search For A Booking</h1>
        <input
        type="date"
        id="checkin"
        name="checkin"
        className="border-2 border-gray-800 p-2 mb-4 rounded"
        placeholder="Enter Date to Check Bookings"
        value={checkin}
        onChange={(e) => setCheckin(e.target.value)}
      />
      <button
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  )
}

export default FindBooking