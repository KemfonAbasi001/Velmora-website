// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import HomeSection  from "./pages/HomeSection.jsx";
// import Experience   from "./pages/Experience.jsx";
// import Gallery      from "./pages/Gallery.jsx";
// import Story        from "./pages/Story.jsx";
// import Events       from "./pages/Events.jsx";
// import Contact      from "./pages/Contact.jsx";
// import Menu         from "./pages/Menu.jsx";
// import Reservation  from "./pages/Reservation.jsx";
// import Bookings     from "./pages/Bookings.jsx";
// import Account      from "./pages/Account.jsx";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomeSection />} />
//         <Route path="/experience" element={<Experience />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/story" element={<Story />} />
//         <Route path="/events" element={<Events />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/menu" element={<Menu />} />
//         <Route path="/reservation" element={<Reservation />} />
//         <Route path="/bookings" element={<Bookings />} />
//         <Route path="/account" element={<Account />} />
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;










import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomeSection  from "./pages/HomeSection.jsx";
import Experience   from "./pages/Experience.jsx";
import Gallery      from "./pages/Gallery.jsx";
import Story        from "./pages/Story.jsx";
import Events       from "./pages/Events.jsx";
import Contact      from "./pages/Contact.jsx";
import Menu         from "./pages/Menu.jsx";
import Reservation  from "./pages/Reservation.jsx";
import Bookings     from "./pages/Bookings.jsx";
import Account      from "./pages/Account.jsx";
import { useScrollReveal } from "./lib/useScrollReveal.js";

function AppRoutes() {
  // Re-triggers scroll-reveal animations whenever the route changes
  useScrollReveal();

  return (
    <Routes>
      <Route path="/" element={<HomeSection />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/story" element={<Story />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/account" element={<Account />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;









// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import HomeSection  from "./pages/HomeSection.jsx";
// import Experience   from "./pages/Experience.jsx";
// import Gallery      from "./pages/Gallery.jsx";
// import Story        from "./pages/Story.jsx";
// import Events       from "./pages/Events.jsx";
// import Contact      from "./pages/Contact.jsx";
// import Menu         from "./pages/Menu.jsx";
// import Reservation  from "./pages/Reservation.jsx";
// import Bookings     from "./pages/Bookings.jsx";
// import Account      from "./pages/Account.jsx";
// import { useScrollReveal } from "./lib/useScrollReveal.js";
// import { CartProvider } from "./context/CartContext.jsx";

// function AppRoutes() {
//   useScrollReveal();

//   return (
//     <Routes>
//       <Route path="/"            element={<HomeSection />} />
//       <Route path="/experience"  element={<Experience />}  />
//       <Route path="/gallery"     element={<Gallery />}     />
//       <Route path="/story"       element={<Story />}       />
//       <Route path="/events"      element={<Events />}      />
//       <Route path="/contact"     element={<Contact />}     />
//       <Route path="/menu"        element={<Menu />}        />
//       <Route path="/reservation" element={<Reservation />} />
//       <Route path="/bookings"    element={<Bookings />}    />
//       <Route path="/account"     element={<Account />}     />
//       <Route path="*"            element={<Navigate to="/" replace />} />
//     </Routes>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <CartProvider>
//         <AppRoutes />
//       </CartProvider>
//     </BrowserRouter>
//   );
// }

// export default App;