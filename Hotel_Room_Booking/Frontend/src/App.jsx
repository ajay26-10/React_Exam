import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import AuthLayout from "./layout/AuthLayout"
import MainLayout from "./layout/MainLayout"
import Homepage from "./pages/Homepage"
import BookingCards from "./pages/BookingCards"
import NotFoundPage from "./pages/NotFoundpage"
import AddBooking from "./pages/AddBooking"
import LoginPage from "./pages/Loginpage"
import SignupPage from "./pages/Signuppage"
import FindBooking from "./pages/FindBooking"


function App() {

    const router = createBrowserRouter(
      createRoutesFromElements(
        <>
           <Route path="/" element={ <AuthLayout/>}>
           <Route index element= { <LoginPage /> }/>
           <Route path="/signup" element= {<SignupPage/>} />
           </Route>     

           <Route path="/" element = { <MainLayout/>}>
            <Route path="/home" element={<Homepage/>}/>
            <Route path="/bookings" element ={ <BookingCards/>}/>
            <Route path="/new-booking" element= {<AddBooking/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
            <Route path="/findbooking" element= {<FindBooking/>}/>
           </Route>
        
        </>
      )
    )
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
