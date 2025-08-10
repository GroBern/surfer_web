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

const App = () => {
  return (
    <BrowserRouter>
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
        <Route path='/faq' element={<Faq />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/imprint' element={<Imprint />} />
        <Route path='/policy' element={<Policy />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
