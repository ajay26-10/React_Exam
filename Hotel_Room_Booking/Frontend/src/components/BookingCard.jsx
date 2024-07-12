import React from 'react'
import { useState } from 'react'

const BookingCard = ({booking}) => {
  return (
    <>
         <div className=' bg-purple-100  rounded-md shadow-2xl flex flex-col items-center justify-center mx-5 my-5 py-10'>
        <h2 className=' font-bold text-lg text-purple-900 '>Room Number : {booking.roomnumber}</h2>
        <h2 className=' font-bold text-lg text-purple-900 '>Booking Name : {booking.bookingname}</h2>
        <h2 className=' font-bold text-lg text-purple-900 '>Check In Date : {booking.checkin}</h2>
        <h2 className=' font-bold text-lg text-purple-900 '>Check Out Date: {booking.checkout}</h2>
      
      </div>    
    </>
  )
}

export default BookingCard