import { Link } from 'react-router-dom';
import Logout from './Logout';
const Navbar = () => {
    return (
        <>
            <div className='bg-purple-100 text-purple-950 grid grid-cols-1 md:grid-cols-2 p-3 shadow-md'>
                <div className='flex items-center'>



                </div>
                <div className='flex justify-center md:justify-end items-center mt-2 md:mt-0 space-x-5 md:space-x-10'>
                    <Link to="/" className='ml-20'>Home</Link>
                    <Link to="/bookings" className='ml-20'>Bookings</Link>
                    <Link to="/new-booking" className='ml-20'>Book A Room</Link>
                    <Link to="/findbooking" className='ml-20'>Find Bookings</Link>
                    <Logout />
                </div>
            </div>
        </>
    )
}

export default Navbar;