import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BeachCamp from './pages/BeachCamp'
import TsCamp from './pages/TsCamp'
import WaveCamp from './pages/WaveCamp'
import StyleCamp from './pages/StyleCamp'
import Srilanka from './pages/Srilanka'
import Morocco from './pages/Morocco'
import ContactUs from './pages/ContactUs'
import Blogs from './pages/Blogs'
import Faq from './pages/Faq'
import Activities from './pages/Activities'
import Terms from './pages/Terms'
import Imprint from './pages/Imprint'
import Policy from './pages/Policy'
import Rates from './pages/Rates'
import SingleBlog from './pages/SingleBlog'

import Camp from './pages/booking_engine/Camp';
import BookingNavbar from './components/booking_engine/BookingNavbar';
import BookingFooter from './components/booking_engine/BookingFooter';
import Date from './pages/booking_engine/Date';
import Room from './pages/booking_engine/Room';
import Selection from './pages/booking_engine/Selection';
import Addon from './pages/booking_engine/Addon';
import Information from './pages/booking_engine/Information';
import Package from './pages/booking_engine/Package';
import PaymentRequest from './pages/booking_engine/PaymentRequest';
import CheckoutPage from './pages/booking_engine/CheckoutPage';
import ScrollToTop from "./components/booking_engine/ScrollToTop";
import PaymentSuccess from './pages/booking_engine/PaymentSuccess';
import Country from './pages/booking_engine/Country';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beach-camp' element={<BeachCamp />} />
        <Route path='/ts2-camp' element={<TsCamp />} />
        <Route path='/wave-camp' element={<WaveCamp />} />
        <Route path='/style-camp' element={<StyleCamp />} />
        <Route path='/srilanka' element={<Srilanka />} />
        <Route path='/morocco' element={<Morocco />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blog/:id' element={<SingleBlog />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/imprint' element={<Imprint />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/rates' element={<Rates />} />

        <Route path="/booking" element={<Country />} />
        <Route path="/camp" element={<Camp />} />
        <Route path="/date" element={<Date />} />
        <Route path="/room" element={<Room />} />
        <Route path="/package" element={<Package />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/air-port" element={<Addon />} />
        <Route path="/information" element={<Information />} />
        <Route path="/payment-request" element={<PaymentRequest />} />
        <Route path="/checkout/:bookingId" element={<CheckoutPage />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
