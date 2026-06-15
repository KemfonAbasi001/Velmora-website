// import { Link, useLocation } from "react-router-dom";

// function HeaderSec(){
//   const location = useLocation();

//   const isActive = (path) => location.pathname === path;

//   const navLinks = [
//     { path: "/menu", label: "Menu" },
//     { path: "/reservation", label: "Reservation" },
//     { path: "/experience", label: "Experiences" },
//     { path: "/story", label: "Our Story" },
//     { path: "/gallery", label: "Gallery" },
//     { path: "/events", label: "Events" },
//     { path: "/contact", label: "Contact" },
//   ];

//   return(
//     <header className="w-full fixed top-0 z-50 flex justify-center items-center bg-[#0A0A0A] py-6.25 border-b border-[#322e2a]/60">
//       <nav className="w-[90%] mx-auto flex justify-between items-center">

//         <Link to="/" className="text-[#F8F6F1] hover:opacity-80 transition-all duration-300">
//           <h1 className="font-cormorant text-[30px] leading-9 font-light tracking-[4.5px] text-[#F8F6F1]">
//             Velmora
//           </h1>
//         </Link>

//         <ul className="flex gap-8.75 list-none">
//           {navLinks.map((link) => (
//             <li key={link.path}>
//               <Link 
//                 to={link.path}
//                 className={`font-inter text-[13px] leading-6 uppercase font-normal tracking-[1.7px] transition-all duration-700 ${
//                   isActive(link.path)
//                     ? "text-[#C09D59]"
//                     : "text-[#988C81] hover:text-white"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         <div className="flex gap-6.25 items-center">
//           <Link to="/bookings" className="font-inter text-[13px] leading-6 text-[#988C81] uppercase font-normal tracking-[1.7px] transition-all duration-700 hover:text-white">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.75 h-4.75 text-[#AEACA9] hover:text-[#C09D59] transition-all duration-700 cursor-pointer">
//               <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
//               <path d="M3 6h18" />
//               <path d="M16 10a4 4 0 0 1-8 0" />
//             </svg>
//           </Link>
//           <Link to="/account" className="font-inter text-[13px] leading-6 text-[#988C81] uppercase font-normal tracking-[1.7px] transition-all duration-700 hover:text-white">Account</Link>
//         </div>

//       </nav>
//     </header>
//   )
// }



// export default HeaderSec;









import { Link, useLocation } from "react-router-dom";

function HeaderSec() {
  const location = useLocation();

  function isActive(path) {
    return location.pathname === path;
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const navLinks = [
    { path: "/menu",        label: "Menu"        },
    { path: "/reservation", label: "Reservation" },
    { path: "/experience",  label: "Experiences" },
    { path: "/story",       label: "Our Story"   },
    { path: "/gallery",     label: "Gallery"     },
    { path: "/events",      label: "Events"      },
    { path: "/contact",     label: "Contact"     },
  ];

  return (
    <header className="w-full fixed top-0 z-50 flex justify-center items-center bg-[#0A0A0A] py-6.25 border-b border-[#322e2a]/60">
      <nav className="w-[90%] mx-auto flex justify-between items-center">

        <Link to="/" onClick={scrollToTop} className="text-[#F8F6F1] hover:opacity-80 transition-all duration-300">
          <h1 className="font-cormorant text-[30px] leading-9 font-light tracking-[4.5px] text-[#F8F6F1]">
            Velmora
          </h1>
        </Link>

        <ul className="hidden lg:flex gap-8.75 list-none">
          {navLinks.map(function(link) {
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={scrollToTop}
                  className={`font-inter text-[13px] leading-6 uppercase font-normal tracking-[1.7px] transition-all duration-700 ${
                    isActive(link.path)
                      ? "text-[#C09D59]"
                      : "text-[#988C81] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex gap-6.25 items-center">
          <Link to="/bookings" onClick={scrollToTop} className="font-inter text-[13px] leading-6 text-[#988C81] uppercase font-normal tracking-[1.7px] transition-all duration-700 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.75 h-4.75 text-[#AEACA9] hover:text-[#C09D59] transition-all duration-700 cursor-pointer">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </Link>
          <Link to="/account" onClick={scrollToTop} className="font-inter text-[13px] leading-6 text-[#988C81] uppercase font-normal tracking-[1.7px] transition-all duration-700 hover:text-white">Account</Link>
        </div>

      </nav>
    </header>
  );
}

export default HeaderSec;