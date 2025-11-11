import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Testimonials from "./pages/Testimonials.jsx";   // ✅ ensure this is present
import About from "./pages/About";
import Contact from "./pages/Contact.jsx";
import AddReview from "./pages/AddReview.jsx";       // ✅ ensure this is present
import BookingPage from "./pages/BookingPage.jsx";   // (if used)

export default function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/testimonials" element={<Testimonials />} />   {/* ✅ */}
          <Route path="/add-review" element={<AddReview />} />       {/* ✅ */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<BookingPage/>}/>          {/* if exists */}
        </Routes>
      </Router>
    </>
  );
}
