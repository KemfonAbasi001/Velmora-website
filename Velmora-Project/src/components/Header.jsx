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









// import { Link, useLocation } from "react-router-dom";

// function HeaderSec() {
//   const location = useLocation();

//   function isActive(path) {
//     return location.pathname === path;
//   }

//   function scrollToTop() {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }

//   const navLinks = [
//     { path: "/menu",        label: "Menu"        },
//     { path: "/reservation", label: "Reservation" },
//     { path: "/experience",  label: "Experiences" },
//     { path: "/story",       label: "Our Story"   },
//     { path: "/gallery",     label: "Gallery"     },
//     { path: "/events",      label: "Events"      },
//     { path: "/contact",     label: "Contact"     },
//   ];

//   return (
//     <header className="w-full fixed top-0 z-50 flex justify-center items-center bg-[#0A0A0A] py-6.25 border-b border-[#322e2a]/60">
//       <nav className="w-[90%] mx-auto flex justify-between items-center">

//         <Link to="/" onClick={scrollToTop} className="text-[#F8F6F1] hover:opacity-80 transition-all duration-300">
//           <h1 className="font-cormorant text-[30px] leading-9 font-light tracking-[4.5px] text-[#F8F6F1]">
//             Velmora
//           </h1>
//         </Link>

//         <ul className="hidden lg:flex gap-8.75 list-none">
//           {navLinks.map(function(link) {
//             return (
//               <li key={link.path}>
//                 <Link
//                   to={link.path}
//                   onClick={scrollToTop}
//                   className={`font-inter text-[13px] leading-6 uppercase font-normal tracking-[1.7px] transition-all duration-700 ${
//                     isActive(link.path)
//                       ? "text-[#C09D59]"
//                       : "text-[#988C81] hover:text-white"
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>

//         <div className="flex gap-6.25 items-center">
//           <Link to="/bookings" onClick={scrollToTop} className="font-inter text-[13px] leading-6 text-[#988C81] uppercase font-normal tracking-[1.7px] transition-all duration-700 hover:text-white">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.75 h-4.75 text-[#AEACA9] hover:text-[#C09D59] transition-all duration-700 cursor-pointer">
//               <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
//               <path d="M3 6h18" />
//               <path d="M16 10a4 4 0 0 1-8 0" />
//             </svg>
//           </Link>
//           <Link to="/account" onClick={scrollToTop} className="font-inter text-[13px] leading-6 text-[#988C81] uppercase font-normal tracking-[1.7px] transition-all duration-700 hover:text-white">Account</Link>
//         </div>

//       </nav>
//     </header>
//   );
// }

// export default HeaderSec;







































import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function HeaderSec() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(path) {
    return location.pathname === path;
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleNavClick() {
    setMenuOpen(false);
    scrollToTop();
  }

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
    <>
      <style>{`
        /* Full-screen drawer slides up from bottom */
        .mobile-drawer {
          position: fixed;
          inset: 0;
          z-index: 40;
          background: #0A0A0A;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transform: translateY(100%);
          transition: transform 0.65s cubic-bezier(0.76, 0, 0.24, 1);
          pointer-events: none;
        }
        .mobile-drawer.open {
          transform: translateY(0%);
          pointer-events: all;
        }

        /* Gold hairline rule that grows in */
        .drawer-rule {
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #C09D59, transparent);
          transition: width 0.7s cubic-bezier(0.76, 0, 0.24, 1) 0.3s;
          margin-bottom: 2.5rem;
        }
        .mobile-drawer.open .drawer-rule {
          width: 60%;
        }

        /* Each nav item fades + rises in with stagger */
        .drawer-link {
          opacity: 0;
          transform: translateY(18px);
          transition:
            opacity 0.5s ease,
            transform 0.5s ease;
        }
        .mobile-drawer.open .drawer-link {
          opacity: 1;
          transform: translateY(0);
        }
        .mobile-drawer.open .drawer-link:nth-child(1)  { transition-delay: 0.38s; }
        .mobile-drawer.open .drawer-link:nth-child(2)  { transition-delay: 0.44s; }
        .mobile-drawer.open .drawer-link:nth-child(3)  { transition-delay: 0.50s; }
        .mobile-drawer.open .drawer-link:nth-child(4)  { transition-delay: 0.56s; }
        .mobile-drawer.open .drawer-link:nth-child(5)  { transition-delay: 0.62s; }
        .mobile-drawer.open .drawer-link:nth-child(6)  { transition-delay: 0.68s; }
        .mobile-drawer.open .drawer-link:nth-child(7)  { transition-delay: 0.74s; }

        /* Bottom utility row fades in last */
        .drawer-footer {
          opacity: 0;
          transition: opacity 0.5s ease 0.82s;
        }
        .mobile-drawer.open .drawer-footer {
          opacity: 1;
        }

        /* Em-dash trigger button — two lines, minimal */
        .menu-trigger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
          background: none;
          border: none;
          outline: none;
        }
        .menu-trigger span {
          display: block;
          height: 1px;
          background: #AEACA9;
          transition: all 0.4s cubic-bezier(0.76, 0, 0.24, 1);
        }
        .menu-trigger span:first-child  { width: 24px; }
        .menu-trigger span:last-child   { width: 14px; margin-left: auto; }

        /* Morph into X when open */
        .menu-trigger.open span:first-child {
          width: 20px;
          transform: translateY(3px) rotate(45deg);
          background: #C09D59;
        }
        .menu-trigger.open span:last-child {
          width: 20px;
          transform: translateY(-3px) rotate(-45deg);
          background: #C09D59;
        }
      `}</style>

      {/* ── DESKTOP HEADER ── */}
      <header className="w-full fixed top-0 z-50 flex justify-center items-center bg-[#0A0A0A] py-6.25 border-b border-[#322e2a]/60">
        <nav className="w-[90%] mx-auto flex justify-between items-center">

          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="hover:opacity-80 transition-all duration-300">
            <h1 className="font-cormorant text-[30px] leading-9 font-light tracking-[4.5px] text-[#F8F6F1]">
              Velmora
            </h1>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex gap-8.75 list-none">
            {navLinks.map(function (link) {
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

          {/* Desktop right actions */}
          <div className="hidden lg:flex gap-6.25 items-center">
            <Link to="/bookings" onClick={scrollToTop}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.75 h-4.75 text-[#AEACA9] hover:text-[#C09D59] transition-all duration-700 cursor-pointer">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </Link>
            <Link to="/account" onClick={scrollToTop} className="font-inter text-[13px] leading-6 text-[#988C81] uppercase font-normal tracking-[1.7px] transition-all duration-700 hover:text-white">
              Account
            </Link>
          </div>

          {/* Mobile trigger — only visible below lg */}
          <button
            className={`lg:hidden menu-trigger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span />
            <span />
          </button>

        </nav>
      </header>

      {/* ── MOBILE FULL-SCREEN DRAWER ── */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>

        {/* Thin gold rule */}
        <div className="drawer-rule" />

        {/* Nav links — large serif, centered, staggered */}
        <nav className="flex flex-col items-center gap-7">
          {navLinks.map(function (link) {
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleNavClick}
                className={`drawer-link font-cormorant text-[36px] font-extralight leading-none tracking-[3px] transition-colors duration-300 ${
                  isActive(link.path)
                    ? "text-[#C09D59]"
                    : "text-[#F8F6F1] hover:text-[#C09D59]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom rule */}
        <div className="drawer-rule mt-10 mb-0" />

        {/* Footer utility row */}
        <div className="drawer-footer flex gap-10 items-center mt-8">
          <Link
            to="/bookings"
            onClick={handleNavClick}
            className="font-inter text-[11px] uppercase tracking-[2.5px] text-[#988C81] hover:text-[#C09D59] transition-colors duration-300"
          >
            Bookings
          </Link>
          <div className="w-px h-3 bg-[#322e2a]" />
          <Link
            to="/account"
            onClick={handleNavClick}
            className="font-inter text-[11px] uppercase tracking-[2.5px] text-[#988C81] hover:text-[#C09D59] transition-colors duration-300"
          >
            Account
          </Link>
        </div>

      </div>
    </>
  );
}

export default HeaderSec;











// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { useCart } from "./CartContext";

// function HeaderSec() {
//   const location = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { totalCount } = useCart();

//   function isActive(path) {
//     return location.pathname === path;
//   }

//   function scrollToTop() {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }

//   function handleNavClick() {
//     setMenuOpen(false);
//     scrollToTop();
//   }

//   useEffect(() => {
//     if (menuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [menuOpen]);

//   const navLinks = [
//     { path: "/menu",        label: "Menu"        },
//     { path: "/reservation", label: "Reservation" },
//     { path: "/experience",  label: "Experiences" },
//     { path: "/story",       label: "Our Story"   },
//     { path: "/gallery",     label: "Gallery"     },
//     { path: "/events",      label: "Events"      },
//     { path: "/contact",     label: "Contact"     },
//   ];

//   return (
//     <>
//       <style>{`
//         .mobile-drawer {
//           position: fixed;
//           inset: 0;
//           z-index: 40;
//           background: #0A0A0A;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           transform: translateY(100%);
//           transition: transform 0.65s cubic-bezier(0.76, 0, 0.24, 1);
//           pointer-events: none;
//         }
//         .mobile-drawer.open {
//           transform: translateY(0%);
//           pointer-events: all;
//         }
//         .drawer-rule {
//           width: 0;
//           height: 1px;
//           background: linear-gradient(90deg, transparent, #C09D59, transparent);
//           transition: width 0.7s cubic-bezier(0.76, 0, 0.24, 1) 0.3s;
//           margin-bottom: 2.5rem;
//         }
//         .mobile-drawer.open .drawer-rule {
//           width: 60%;
//         }
//         .drawer-link {
//           opacity: 0;
//           transform: translateY(18px);
//           transition: opacity 0.5s ease, transform 0.5s ease;
//         }
//         .mobile-drawer.open .drawer-link {
//           opacity: 1;
//           transform: translateY(0);
//         }
//         .mobile-drawer.open .drawer-link:nth-child(1)  { transition-delay: 0.38s; }
//         .mobile-drawer.open .drawer-link:nth-child(2)  { transition-delay: 0.44s; }
//         .mobile-drawer.open .drawer-link:nth-child(3)  { transition-delay: 0.50s; }
//         .mobile-drawer.open .drawer-link:nth-child(4)  { transition-delay: 0.56s; }
//         .mobile-drawer.open .drawer-link:nth-child(5)  { transition-delay: 0.62s; }
//         .mobile-drawer.open .drawer-link:nth-child(6)  { transition-delay: 0.68s; }
//         .mobile-drawer.open .drawer-link:nth-child(7)  { transition-delay: 0.74s; }
//         .drawer-footer {
//           opacity: 0;
//           transition: opacity 0.5s ease 0.82s;
//         }
//         .mobile-drawer.open .drawer-footer {
//           opacity: 1;
//         }
//         .menu-trigger {
//           display: flex;
//           flex-direction: column;
//           gap: 5px;
//           cursor: pointer;
//           padding: 4px;
//           background: none;
//           border: none;
//           outline: none;
//         }
//         .menu-trigger span {
//           display: block;
//           height: 1px;
//           background: #AEACA9;
//           transition: all 0.4s cubic-bezier(0.76, 0, 0.24, 1);
//         }
//         .menu-trigger span:first-child { width: 24px; }
//         .menu-trigger span:last-child  { width: 14px; margin-left: auto; }
//         .menu-trigger.open span:first-child {
//           width: 20px;
//           transform: translateY(3px) rotate(45deg);
//           background: #C09D59;
//         }
//         .menu-trigger.open span:last-child {
//           width: 20px;
//           transform: translateY(-3px) rotate(-45deg);
//           background: #C09D59;
//         }

//         /* Cart badge pop animation */
//         @keyframes badgePop {
//           0%   { transform: scale(0.5); opacity: 0; }
//           70%  { transform: scale(1.25); }
//           100% { transform: scale(1); opacity: 1; }
//         }
//         .cart-badge {
//           animation: badgePop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
//         }
//       `}</style>

//       {/* ── DESKTOP HEADER ── */}
//       <header className="w-full fixed top-0 z-50 flex justify-center items-center bg-[#0A0A0A] py-6.25 border-b border-[#322e2a]/60">
//         <nav className="w-[90%] mx-auto flex justify-between items-center">

//           {/* Logo */}
//           <Link to="/" onClick={scrollToTop} className="hover:opacity-80 transition-all duration-300">
//             <h1 className="font-cormorant text-[30px] leading-9 font-light tracking-[4.5px] text-[#F8F6F1]">
//               Velmora
//             </h1>
//           </Link>

//           {/* Desktop nav */}
//           <ul className="hidden lg:flex gap-8.75 list-none">
//             {navLinks.map(function (link) {
//               return (
//                 <li key={link.path}>
//                   <Link
//                     to={link.path}
//                     onClick={scrollToTop}
//                     className={`font-inter text-[13px] leading-6 uppercase font-normal tracking-[1.7px] transition-all duration-700 ${
//                       isActive(link.path)
//                         ? "text-[#C09D59]"
//                         : "text-[#988C81] hover:text-white"
//                     }`}
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>

//           {/* Desktop right actions */}
//           <div className="hidden lg:flex gap-6.25 items-center">

//             {/* Cart icon with badge */}
//             <Link to="/bookings" onClick={scrollToTop} className="relative">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="w-4.75 h-4.75 text-[#AEACA9] hover:text-[#C09D59] transition-all duration-700 cursor-pointer"
//               >
//                 <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
//                 <path d="M3 6h18" />
//                 <path d="M16 10a4 4 0 0 1-8 0" />
//               </svg>

//               {/* Badge — only visible when cart has items */}
//               {totalCount > 0 && (
//                 <span
//                   key={totalCount}
//                   className="cart-badge absolute -top-2 -right-2 min-w-[16px] h-4 px-[3px] rounded-full bg-[#C09D59] flex items-center justify-center font-inter text-[9px] font-semibold text-black leading-none"
//                 >
//                   {totalCount > 99 ? "99+" : totalCount}
//                 </span>
//               )}
//             </Link>

//             <Link
//               to="/account"
//               onClick={scrollToTop}
//               className="font-inter text-[13px] leading-6 text-[#988C81] uppercase font-normal tracking-[1.7px] transition-all duration-700 hover:text-white"
//             >
//               Account
//             </Link>
//           </div>

//           {/* Mobile trigger */}
//           <button
//             className={`lg:hidden menu-trigger ${menuOpen ? "open" : ""}`}
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label={menuOpen ? "Close menu" : "Open menu"}
//           >
//             <span />
//             <span />
//           </button>

//         </nav>
//       </header>

//       {/* ── MOBILE FULL-SCREEN DRAWER ── */}
//       <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>

//         <div className="drawer-rule" />

//         <nav className="flex flex-col items-center gap-7">
//           {navLinks.map(function (link) {
//             return (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 onClick={handleNavClick}
//                 className={`drawer-link font-cormorant text-[36px] font-extralight leading-none tracking-[3px] transition-colors duration-300 ${
//                   isActive(link.path)
//                     ? "text-[#C09D59]"
//                     : "text-[#F8F6F1] hover:text-[#C09D59]"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             );
//           })}
//         </nav>

//         <div className="drawer-rule mt-10 mb-0" />

//         <div className="drawer-footer flex gap-10 items-center mt-8">
//           {/* Mobile cart link with badge */}
//           <Link
//             to="/bookings"
//             onClick={handleNavClick}
//             className="relative font-inter text-[11px] uppercase tracking-[2.5px] text-[#988C81] hover:text-[#C09D59] transition-colors duration-300"
//           >
//             Bookings
//             {totalCount > 0 && (
//               <span
//                 key={totalCount}
//                 className="cart-badge absolute -top-2 -right-3 min-w-[15px] h-[15px] px-[3px] rounded-full bg-[#C09D59] flex items-center justify-center font-inter text-[8px] font-semibold text-black leading-none"
//               >
//                 {totalCount > 99 ? "99+" : totalCount}
//               </span>
//             )}
//           </Link>
//           <div className="w-px h-3 bg-[#322e2a]" />
//           <Link
//             to="/account"
//             onClick={handleNavClick}
//             className="font-inter text-[11px] uppercase tracking-[2.5px] text-[#988C81] hover:text-[#C09D59] transition-colors duration-300"
//           >
//             Account
//           </Link>
//         </div>

//       </div>
//     </>
//   );
// }

// export default HeaderSec;



// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// function HeaderSec() {
//   const location = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { totalCount } = useCart();

//   function isActive(path) {
//     return location.pathname === path;
//   }

//   function scrollToTop() {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }

//   function handleNavClick() {
//     setMenuOpen(false);
//     scrollToTop();
//   }

//   useEffect(() => {
//     if (menuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [menuOpen]);

//   const navLinks = [
//     { path: "/menu",        label: "Menu"        },
//     { path: "/reservation", label: "Reservation" },
//     { path: "/experience",  label: "Experiences" },
//     { path: "/story",       label: "Our Story"   },
//     { path: "/gallery",     label: "Gallery"     },
//     { path: "/events",      label: "Events"      },
//     { path: "/contact",     label: "Contact"     },
//   ];

//   return (
//     <>
//       <style>{`
//         .mobile-drawer {
//           position: fixed;
//           inset: 0;
//           z-index: 40;
//           background: #0A0A0A;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           transform: translateY(100%);
//           transition: transform 0.65s cubic-bezier(0.76, 0, 0.24, 1);
//           pointer-events: none;
//         }
//         .mobile-drawer.open {
//           transform: translateY(0%);
//           pointer-events: all;
//         }
//         .drawer-rule {
//           width: 0;
//           height: 1px;
//           background: linear-gradient(90deg, transparent, #C09D59, transparent);
//           transition: width 0.7s cubic-bezier(0.76, 0, 0.24, 1) 0.3s;
//           margin-bottom: 2.5rem;
//         }
//         .mobile-drawer.open .drawer-rule {
//           width: 60%;
//         }
//         .drawer-link {
//           opacity: 0;
//           transform: translateY(18px);
//           transition: opacity 0.5s ease, transform 0.5s ease;
//         }
//         .mobile-drawer.open .drawer-link {
//           opacity: 1;
//           transform: translateY(0);
//         }
//         .mobile-drawer.open .drawer-link:nth-child(1)  { transition-delay: 0.38s; }
//         .mobile-drawer.open .drawer-link:nth-child(2)  { transition-delay: 0.44s; }
//         .mobile-drawer.open .drawer-link:nth-child(3)  { transition-delay: 0.50s; }
//         .mobile-drawer.open .drawer-link:nth-child(4)  { transition-delay: 0.56s; }
//         .mobile-drawer.open .drawer-link:nth-child(5)  { transition-delay: 0.62s; }
//         .mobile-drawer.open .drawer-link:nth-child(6)  { transition-delay: 0.68s; }
//         .mobile-drawer.open .drawer-link:nth-child(7)  { transition-delay: 0.74s; }
//         .drawer-footer {
//           opacity: 0;
//           transition: opacity 0.5s ease 0.82s;
//         }
//         .mobile-drawer.open .drawer-footer {
//           opacity: 1;
//         }
//         .menu-trigger {
//           display: flex;
//           flex-direction: column;
//           gap: 5px;
//           cursor: pointer;
//           padding: 4px;
//           background: none;
//           border: none;
//           outline: none;
//         }
//         .menu-trigger span {
//           display: block;
//           height: 1px;
//           background: #AEACA9;
//           transition: all 0.4s cubic-bezier(0.76, 0, 0.24, 1);
//         }
//         .menu-trigger span:first-child { width: 24px; }
//         .menu-trigger span:last-child  { width: 14px; margin-left: auto; }
//         .menu-trigger.open span:first-child {
//           width: 20px;
//           transform: translateY(3px) rotate(45deg);
//           background: #C09D59;
//         }
//         .menu-trigger.open span:last-child {
//           width: 20px;
//           transform: translateY(-3px) rotate(-45deg);
//           background: #C09D59;
//         }

//         /* Cart badge pop animation */
//         @keyframes badgePop {
//           0%   { transform: scale(0.5); opacity: 0; }
//           70%  { transform: scale(1.25); }
//           100% { transform: scale(1); opacity: 1; }
//         }
//         .cart-badge {
//           animation: badgePop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
//         }
//       `}</style>

//       {/* ── DESKTOP HEADER ── */}
//       <header className="w-full fixed top-0 z-50 flex justify-center items-center bg-[#0A0A0A] py-6.25 border-b border-[#322e2a]/60">
//         <nav className="w-[90%] mx-auto flex justify-between items-center">

//           {/* Logo */}
//           <Link to="/" onClick={scrollToTop} className="hover:opacity-80 transition-all duration-300">
//             <h1 className="font-cormorant text-[30px] leading-9 font-light tracking-[4.5px] text-[#F8F6F1]">
//               Velmora
//             </h1>
//           </Link>

//           {/* Desktop nav */}
//           <ul className="hidden lg:flex gap-8.75 list-none">
//             {navLinks.map(function (link) {
//               return (
//                 <li key={link.path}>
//                   <Link
//                     to={link.path}
//                     onClick={scrollToTop}
//                     className={`font-inter text-[13px] leading-6 uppercase font-normal tracking-[1.7px] transition-all duration-700 ${
//                       isActive(link.path)
//                         ? "text-[#C09D59]"
//                         : "text-[#988C81] hover:text-white"
//                     }`}
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>

//           {/* Desktop right actions */}
//           <div className="hidden lg:flex gap-6.25 items-center">

//             {/* Cart icon with badge */}
//             <Link to="/bookings" onClick={scrollToTop} className="relative">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="w-4.75 h-4.75 text-[#AEACA9] hover:text-[#C09D59] transition-all duration-700 cursor-pointer"
//               >
//                 <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
//                 <path d="M3 6h18" />
//                 <path d="M16 10a4 4 0 0 1-8 0" />
//               </svg>

//               {/* Badge — only visible when cart has items */}
//               {totalCount > 0 && (
//                 <span
//                   key={totalCount}
//                   className="cart-badge absolute -top-2 -right-2 min-w-[16px] h-4 px-[3px] rounded-full bg-[#C09D59] flex items-center justify-center font-inter text-[9px] font-semibold text-black leading-none"
//                 >
//                   {totalCount > 99 ? "99+" : totalCount}
//                 </span>
//               )}
//             </Link>

//             <Link
//               to="/account"
//               onClick={scrollToTop}
//               className="font-inter text-[13px] leading-6 text-[#988C81] uppercase font-normal tracking-[1.7px] transition-all duration-700 hover:text-white"
//             >
//               Account
//             </Link>
//           </div>

//           {/* Mobile trigger */}
//           <button
//             className={`lg:hidden menu-trigger ${menuOpen ? "open" : ""}`}
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label={menuOpen ? "Close menu" : "Open menu"}
//           >
//             <span />
//             <span />
//           </button>

//         </nav>
//       </header>

//       {/* ── MOBILE FULL-SCREEN DRAWER ── */}
//       <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>

//         <div className="drawer-rule" />

//         <nav className="flex flex-col items-center gap-7">
//           {navLinks.map(function (link) {
//             return (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 onClick={handleNavClick}
//                 className={`drawer-link font-cormorant text-[36px] font-extralight leading-none tracking-[3px] transition-colors duration-300 ${
//                   isActive(link.path)
//                     ? "text-[#C09D59]"
//                     : "text-[#F8F6F1] hover:text-[#C09D59]"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             );
//           })}
//         </nav>

//         <div className="drawer-rule mt-10 mb-0" />

//         <div className="drawer-footer flex gap-10 items-center mt-8">
//           {/* Mobile cart link with badge */}
//           <Link
//             to="/bookings"
//             onClick={handleNavClick}
//             className="relative font-inter text-[11px] uppercase tracking-[2.5px] text-[#988C81] hover:text-[#C09D59] transition-colors duration-300"
//           >
//             Bookings
//             {totalCount > 0 && (
//               <span
//                 key={totalCount}
//                 className="cart-badge absolute -top-2 -right-3 min-w-[15px] h-[15px] px-[3px] rounded-full bg-[#C09D59] flex items-center justify-center font-inter text-[8px] font-semibold text-black leading-none"
//               >
//                 {totalCount > 99 ? "99+" : totalCount}
//               </span>
//             )}
//           </Link>
//           <div className="w-px h-3 bg-[#322e2a]" />
//           <Link
//             to="/account"
//             onClick={handleNavClick}
//             className="font-inter text-[11px] uppercase tracking-[2.5px] text-[#988C81] hover:text-[#C09D59] transition-colors duration-300"
//           >
//             Account
//           </Link>
//         </div>

//       </div>
//     </>
//   );
// }

// export default HeaderSec;