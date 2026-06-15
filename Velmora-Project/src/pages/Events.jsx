import { useState } from "react";
import HeaderSec from "../components/Header.jsx";
import FooterSec from "../components/Footer.jsx";

import bg_image from '../assets/table_one.webp'


const eventCards = [
  {
    title: "Intimate Celebrations",
    text: "Birthdays, anniversaries, and milestones in an intimate private setting.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lg:w-6 lg:h-6 w-7 h-7 text-[#C09D59]">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    title: "Corporate Events",
    text: "Impress your clients and teams with a bespoke dining experience.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lg:w-6 lg:h-6 w-7 h-7 text-[#C09D59]">
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>
    ),
  },
  {
    title: "Wine & Dine",
    text: "Curated tasting events with our sommelier and multi-course pairings.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lg:w-6 lg:h-6 w-7 h-7 text-[#C09D59]">
        <path d="M8 22h8" /><path d="M7 10h10" /><path d="M12 15v7" />
        <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
      </svg>
    ),
  },
  {
    title: "Wedding Receptions",
    text: "Your most precious celebration deserves the most exquisite setting.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lg:w-6 lg:h-6 w-7 h-7 text-[#C09D59]">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
        <path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" />
      </svg>
    ),
  },
  {
    title: "Social Gatherings",
    text: "From cocktail parties to seated dinners for up to 60 guests.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lg:w-6 lg:h-6 w-7 h-7 text-[#C09D59]">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];



function EventCard(props) {
  return (
    <div data-reveal data-delay={props.delay} className="flex flex-col gap-3 pt-10 pb-10 pr-7 pl-7 lg:p-10 border border-[rgba(50,46,42,0.3)] hover:border-[#735E35] transition-all duration-300">
      {props.icon}
      <h3 className="text-[23px] lg:text-xl font-normal text-[#F8F6F1] font-cormorant">
        {props.title}
      </h3>
      <p className="text-[16px] leading-7 lg:text-sm font-normal lg:leading-5 text-[#988C81] font-inter">
        {props.text}
      </p>
    </div>
  );
}


function FormField(props) {
  return (
    <div className="flex flex-col gap-2.25">
      <label
        htmlFor={props.id}
        className="uppercase text-[12px] leading-4 font-normal tracking-[2.4px] text-[#988C81] font-inter"
      >
        {props.label}
      </label>
      {props.textarea ? (
        <textarea
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          className="w-full min-w-full max-w-full min-h-25 p-3.75 bg-[#0A0A0A] text-[15px] leading-6 text-[#f8f6f1] border-0 rounded-lg outline-none placeholder:text-[#988C81] focus:shadow-[0_0_0_1px_#C09D59] font-inter"
        />
      ) : (
        <input
          id={props.id}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          className="w-full p-3.75 bg-[#0A0A0A] text-[14px] leading-5 text-[#f8f6f1] border-0 rounded-lg outline-none placeholder:text-[#988C81] focus:shadow-[0_0_0_1px_#C09D59] font-inter"
        />
      )}
    </div>
  );
}




function Events() {
     const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted:", formData);
  }

  
  return (
    <>
      <HeaderSec />

      <section style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${bg_image})` }} className="w-full bg-cover bg-center bg-no-repeat pt-70 pl-6 lg:pt-65 pb-12.5 pr-0 lg:pl-12.5">
        <div className="flex flex-col gap-3.75">
            <p data-reveal className="text-[10px] lg:text-[12px] leading-4 font-normal tracking-[4.8px] text-[#C09D59] uppercase font-inter">Private Events</p>
            <h1 data-reveal data-delay="80" className="text-[53px] lg:text-[60px] lg:text-[72px] leading-18 font-light text-[#F8F6F1] font-cormorant">Bespoke <span className="italic">Gatherings</span></h1>
        </div>
      </section>

      <section className="w-full bg-[#0A0A0A] flex flex-col items-center gap-20 py-30 lg:py-50">

      {/* Header */}
      <div className="w-[90%] flex flex-col items-center gap-5 text-center">
        <p data-reveal className="text-xs uppercase tracking-[4.8px] text-[#C09D59] font-inter">
          Occasions
        </p>
        <h1 data-reveal data-delay="80" className="text-[31px] lg:text-[48px] font-light leading-12 text-[#F8F6F1] font-cormorant">
          Every Moment <span className="italic">Elevated</span>
        </h1>
        {/* Decorator */}
        <div data-reveal data-delay="160" className="flex items-center gap-3.75">
          <div className="w-11.75 h-px bg-linear-to-r from-[#0A0A0A] to-[#735E35]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#735E35]" />
          <div className="w-11.75 h-px bg-linear-to-l from-[#0A0A0A] to-[#735E35]" />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 lg:gap-7.5">
        {eventCards.map((card, i) => (
          <EventCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            text={card.text}
            delay={String((i % 3) * 80)}
          />
        ))}
      </div>

    </section>


    <section className="w-full py-27 lg:py-37.5 bg-[rgb(22,20,19)] flex flex-col items-center justify-center gap-12.5">

      {/* Header */}
      <div className="w-[90%] flex flex-col items-center gap-5 text-center">
        <p data-reveal className="text-xs uppercase tracking-[4.8px] text-[#C09D59] font-inter">
          Private Events
        </p>
        <h1 data-reveal data-delay="80" className="text-[33px] lg:text-[36px] font-light leading-10 text-[#F8F6F1] font-cormorant">
          Plan Your Event
        </h1>
        {/* Decorator */}
        <div data-reveal data-delay="160" className="flex items-center gap-3.75">
          <div className="w-11.75 h-px bg-linear-to-r from-[#0A0A0A] to-[#735E35]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#735E35]" />
          <div className="w-11.75 h-px bg-linear-to-l from-[#0A0A0A] to-[#735E35]" />
        </div>
        <p data-reveal data-delay="240" className="text-[14.7px] lg:text-[16px] leading-6 text-[#988C81] max-w-125 font-inter">
          Share your vision and our team will curate every detail.
        </p>
      </div>

      {/* Form */}
      <div data-reveal data-delay="320" className="lg:w-[40%] w-[90%]">
        <form className="flex flex-col gap-7.5" onSubmit={handleSubmit}>

          <FormField
            id="inquiry-name"
            name="name"
            label="Name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />

          <FormField
            id="inquiry-email"
            name="email"
            label="Email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
          />

          <FormField
            id="inquiry-phone"
            name="phone"
            label="Phone"
            type="tel"
            placeholder="+1 (212) 555-0000"
            value={formData.phone}
            onChange={handleChange}
          />

          <FormField
            id="inquiry-message"
            name="message"
            label="Tell us about your event"
            placeholder="Type of event, number of guests, preferred date, any special requirements..."
            value={formData.message}
            onChange={handleChange}
            textarea
          />

          <button
            type="submit"
            className="w-full h-12 bg-[#C09D59] text-[12px] font-normal tracking-[2.4px] text-[#0A0A0A] uppercase flex items-center justify-center gap-1.75 cursor-pointer border-0 transition-colors duration-300 hover:bg-[#E8B978] font-inter"
          >
            Submit Inquiry
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>

        </form>
      </div>

    </section>
      <FooterSec />
    </>
  );
}

export default Events;