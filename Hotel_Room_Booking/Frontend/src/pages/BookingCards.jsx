import React, { useEffect, useState } from 'react'
import BookingCard from '../components/BookingCard';

const BookingCards = () => {

    const [booking, setBooking] = useState([]);

    useEffect(() => {
  
        const fetchBooking = async () => {
            try {
                const res = await fetch('/api/bookings');
                const data = await res.json()
                setBooking(data)
            } catch (error) {
                console.log('error', error)
            }
        };
        fetchBooking()
    },[])
  return (
    <>
        <h1 className='text-center text-violet-700 text-5xl mt-2 font-serif	'>All Bookings</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
                {booking.map((booking) => (
                    <BookingCard key={booking._id} booking={booking} />
                ))}
            </div>
    </>
  )
}

export default BookingCards