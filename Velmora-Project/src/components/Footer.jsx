
import { Link, useNavigate } from "react-router-dom";

function FooterSec() {
  const navigate = useNavigate();

  // Navigate to a route and smoothly scroll to the top
  function goTo(path) {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Refresh the current page and scroll to top (Gift Cards, Privacy, Terms)
  function refreshAndScrollTop(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Small timeout so the scroll fires before any re-render
    setTimeout(() => window.location.reload(), 300);
  }

  return (
    <footer className="w-full flex justify-center items-center bg-[#0A0A0A] py-12.5 border-t border-[#322e2a]" id="contact">
      <div className="w-[90%] flex flex-col gap-5">

        <div className="gris-cols-1 grid lg:grid-cols-4 gap-10 py-9">

          {/* Logo */}
          <div data-reveal className="flex flex-col gap-5">
            <button
              onClick={() => goTo("/")}
              className="text-[#F8F6F1] hover:opacity-80 transition-opacity duration-300 bg-transparent border-0 cursor-pointer text-left p-0"
            >
              <h1 className="font-cormorant text-[30px] leading-9 font-light tracking-[4.5px] text-[#F8F6F1]">Velmora</h1>
            </button>
          </div>

          {/* Navigate */}
          <div data-reveal data-delay="80" className="flex flex-col gap-6 lg:gap-3.75">
            <p className="text-[15px] lg:text-[12px] uppercase text-[#C09D59] tracking-[4.8px] font-normal font-inter">Navigate</p>
            <button onClick={() => goTo("/menu")}        className="text-[15.7px] lg:text-[14px] font-normal leading-5 text-[#988C81] hover:text-white transition-all duration-200 font-inter bg-transparent border-0 cursor-pointer text-left p-0">Menu</button>
            <button onClick={() => goTo("/reservation")} className="text-[15.7px] lg:text-[14px] font-normal leading-5 text-[#988C81] hover:text-white transition-all duration-200 font-inter bg-transparent border-0 cursor-pointer text-left p-0">Reservations</button>
            <button onClick={() => goTo("/experience")}  className="text-[15.7px] lg:text-[14px] font-normal leading-5 text-[#988C81] hover:text-white transition-all duration-200 font-inter bg-transparent border-0 cursor-pointer text-left p-0">Experiences</button>
            <button onClick={() => goTo("/story")}       className="text-[15.7px] lg:text-[14px] font-normal leading-5 text-[#988C81] hover:text-white transition-all duration-200 font-inter bg-transparent border-0 cursor-pointer text-left p-0">Our Story</button>
          </div>

          {/* Experience */}
          <div data-reveal data-delay="160" className="flex flex-col gap-6 lg:gap-3.75">
            <p className="text-[15px] lg:text-[12px] uppercase text-[#C09D59] tracking-[4.8px] font-normal font-inter">Experience</p>
            <button onClick={() => goTo("/events")}  className="text-[15.7px] lg:text-[14px] font-normal leading-5 text-[#988C81] hover:text-white transition-all duration-200 font-inter bg-transparent border-0 cursor-pointer text-left p-0">Private Dining</button>
            <button onClick={() => goTo("/story")}   className="text-[15.7px] lg:text-[14px] font-normal leading-5 text-[#988C81] hover:text-white transition-all duration-200 font-inter bg-transparent border-0 cursor-pointer text-left p-0">Chef's Table</button>
            <button onClick={() => goTo("/events")}  className="text-[15.7px] lg:text-[14px] font-normal leading-5 text-[#988C81] hover:text-white transition-all duration-200 font-inter bg-transparent border-0 cursor-pointer text-left p-0">Events</button>
            <button onClick={() => goTo("/menu")}    className="text-[15.7px] lg:text-[14px] font-normal leading-5 text-[#988C81] hover:text-white transition-all duration-200 font-inter bg-transparent border-0 cursor-pointer text-left p-0">Delivery</button>
            <button onClick={refreshAndScrollTop}    className="text-[15.7px] lg:text-[14px] font-normal leading-5 text-[#988C81] hover:text-white transition-all duration-200 font-inter bg-transparent border-0 cursor-pointer text-left p-0">Gift Cards</button>
          </div>

          {/* Visit */}
          <div data-reveal data-delay="240" className="flex flex-col gap-6 lg:gap-3.75">
            <p className="text-[15.7px] lg:text-[14px] uppercase text-[#C09D59] tracking-[4.8px] font-normal font-inter">Visit</p>
            <p className="text-[15.7px] lg:text-[14px] font-normal leading-6 text-[#988C81] font-inter">42 Gold Street<br />New York, NY 10038</p>
            <p className="text-[15.7px] lg:text-[14px] font-normal leading-6 text-[#988C81] font-inter">Tue — Sun: 5:30 PM — 12:00 AM<br />Monday: Closed</p>
            <p className="text-[15.7px] lg:text-[14px] font-normal leading-5 text-[#988C81] font-inter">+1 (212) 555-0184</p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-3.75 border-t border-[#322e2a] flex-col lg:flex-row gap-5 flex justify-between items-center">
          <p className="text-[14px] font-normal leading-5 text-[#988C81] font-inter">© {new Date().getFullYear()} VELMORA. All rights reserved.</p>
          <div className="flex gap-5">
            <button onClick={refreshAndScrollTop} className="text-[14px] font-normal leading-5 text-[#988C81] hover:text-white transition-all duration-200 font-inter bg-transparent border-0 cursor-pointer p-0">Privacy</button>
            <button onClick={refreshAndScrollTop} className="text-[14px] font-normal leading-5 text-[#988C81] hover:text-white transition-all duration-200 font-inter bg-transparent border-0 cursor-pointer p-0">Terms</button>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default FooterSec;