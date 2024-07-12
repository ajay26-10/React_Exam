import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddBooking = () => {
  const [roomnumber, setRoomnumber] = useState('');
  const [bookingname, setBookingname] = useState('')
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');

  const navigate = useNavigate()

  const submitForm = (e) => {
    e.preventDefault()
    const newBooking = {
      roomnumber,
      bookingname,
      checkin,
      checkout,
     
    }
    const res = addBookingSubmit(newBooking)
    toast.success('Booking done successfully')
    navigate('/home')
  }

  const addBookingSubmit = async (newBooking) => {
    const res = await fetch('http://localhost:5000/new-booking', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(newBooking)
    })
    return res;
  }

  return (
    <>

      <section className="bg-white mb-20">
        <div className="container m-auto max-w-2xl py-2">
          <div className="bg-purple-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">

            <form onSubmit={submitForm}>
              <h2 className="text-3xl text-purple-800 text-center font-semibold mb-6">
                New Booking
              </h2>

              <div className="mb-4">
                <label 
                htmlFor="roomnumber"
                className="block text-gray-700 font-bold mb-2">
                  Room Number
                </label>
                <input
                  type="text"
                  id="roomnumber"
                  name="roomnumber"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Enter Room Number"
                  required
                  value={roomnumber}
                  onChange={(e) => setRoomnumber(e.target.value)}

                />
              </div>


              <div className="mb-4">
                <label 
                htmlFor="bookingname"
                className="block text-gray-700 font-bold mb-2">
                  Booking Name
                </label>
                <input
                  type="text"
                  id="bookingname"
                  name="bookingname"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Enter Booking Name"
                  required
                  value={bookingname}
                  onChange={(e) => setBookingname(e.target.value)}

                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Check In Date
                </label>
                <input
                  type="date"
                  id="checkin"
                  name="checkin"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Select Check-In Date"
                  required
                  value={checkin}
                  onChange={(e) => setCheckin(e.target.value)}

                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Check Out Date
                </label>
                <input
                  type="date"
                  id="checkout"
                  name="checkout"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Select Check-Out Date"
                  required
                  value={checkout}
                  onChange={(e) => setCheckout(e.target.value)}

                />
              </div>



{/* 
              <div className="mb-4">
                <label
                  htmlFor="ingredients"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Ingredients
                </label>
                <textarea
                  id="ingredients"
                  name="ingredients"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Ingredients Required"
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Description of cooking process"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div> */}


              <div>
                <button
                  className="bg-purple-500 hover:bg-purple-600 my-10  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Book A Room
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddBooking