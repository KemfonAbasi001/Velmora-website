// // import ExpSec    from "../components/Experience/ExperienceSection";
// import HeaderSec from "../components/Header";
// import FooterSec from "../components/Footer";

// // import table from '../assets'
// import table_three1 from "../assets/table_three_(1).png";
// import table_two    from "../assets/table_two.png";
// import table_three2 from "../assets/table_three_(2).png";
// import table_one    from "../assets/table_one.png";



// function CardExp(props) {
//     return(
//         <div className="flex gap-0 items-stretch" id="experience-card">
//             <div className="w-[50%] overflow-hidden">
//                 <img src={props.picone} alt="The Bar" className="w-full h-full object-cover block" />
//             </div>
//             <div className="w-[50%] flex flex-col gap-5 p-15 bg-[#2c28264d] justify-center">
//                 <p className="leading-4 font-normal uppercase  font-inter tracking-[4.8px] text-[12px] text-[#c09d59]">{props.smalltext}</p>
//                 <h2 className="text-[40px] font-extralight leading-12 text-[#F8F6F1]  font-cormorant">{props.bigtext}</h2>
//                 <p className="leading-7 font-normal  font-inter text-[16px] text-[#988c81]">{props.midtext}</p>
//                 <a href="#bar" className="tracking-[2.4px] flex items-center uppercase mt-2.5 text-2xl- text-[#C09D59] w-fit gap-2.5 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:text-[#e8b978] gap-2.5]">
//                     {props.paragraphtext}
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4">
//                         <path d="M5 12h14"></path>
//                         <path d="m12 5 7 7-7 7"></path>
//                     </svg>
//                 </a>
//             </div>
//         </div>
//     )
// }


// function Experience() {
//   return (
//     <>
//       <HeaderSec />
//       <section className="w-full bg-[#0A0A0A] flex flex-col items-center gap-20 py-50">
//           {/* === HEADER === */}
//           <div className="w-[90%] flex flex-col items-center gap-5 text-center">
  
//               <p className="text-[12px] leading-4 font-normal uppercase text-[#C09D59] tracking-[4.8px]  font-inter">
//                   Curated Journeys
//               </p>
  
//               <h1 className="text-[60px] font-thin leading-18 text-[#F8F6F1]  font-cormorant">
//                   Dining <span className="italic">Experiences</span>
//               </h1>
  
//               {/* Decorator */}
//               <div className="flex items-center justify-center gap-3.75">
//                   <div className="w-11.75 h-px bg-linear-to-r from-[#0A0A0A] to-[#735E35]" />
//                   <div className="w-1.5 h-1.5 rounded-full bg-[#735E35]" />
//                   <div className="w-11.75 h-px bg-linear-to-l from-[#0A0A0A] to-[#735E35]" />
//               </div>
  
//               <p className="text-[16px] leading-7 font-normal  text-[#988c81]  font-inter max-w-125">Each experience is thoughtfully designed to transport you into a world of culinary wonder.</p>
  
  
//           </div>
  
//           <div className="w-[90%] flex flex-col gap-25">
//               <CardExp 
//                   // picone = "table_three1"
//                   picone = {table_three1}
//                   smalltext="Cocktail Atelier"
//                   bigtext="The Bar"
//                   midtext="Our award-winning mixologists craft cocktails that mirror the precision and artistry of our kitchen. Small plates complement each creation."
//                   paragraphtext="Explore Cocktails"
//               />
//               <CardExp 
//                   // picone = "table_two"
//                   picone = {table_two}
//                   smalltext="Rooftop Dining"
//                   bigtext="Starlit Terrace"
//                   midtext="Ascend to our panoramic rooftop where the city skyline becomes your backdrop. Seasonal menus paired with craft cocktails under open skies."
//                   paragraphtext="Reserve Rooftop"
//               />
//               <CardExp 
//                   picone = {table_three2}
//                   smalltext="Signature Dining"
//                   bigtext="The Grand Room"
//                   midtext="Our flagship dining room where candlelight, fine linens, and impeccable service set the stage for an unforgettable culinary evening."
//                   paragraphtext="Reserve Table"
//               />
  
//               <CardExp 
//                   picone = {table_one}
//                   smalltext="Private Dining"
//                   bigtext="The Salon Privé"
//                   midtext="An exclusive chamber for intimate gatherings, celebrations, and discerning soirées. Bespoke menus, dedicated service, absolute privacy."
//                   paragraphtext="Inquire"
//               />
//           </div>
          
//       </section>
//       <FooterSec />
//     </>
//   )
// }

// export default Experience;










// // import ExpSec    from "../components/Experience/ExperienceSection";
// import HeaderSec from "../components/Header";
// import FooterSec from "../components/Footer";

// // import table from '../assets'
// import table_three1 from "../assets/table_three_(1).png";
// import table_two    from "../assets/table_two.png";
// import table_three2 from "../assets/table_three_(2).png";
// import table_one    from "../assets/table_one.png";



// function CardExp(props) {
//     return(
//         <div data-reveal className="flex gap-0 items-stretch" id="experience-card">
//             <div className="w-[50%] overflow-hidden">
//                 <img src={props.picone} alt="The Bar" className="w-full h-full object-cover block" />
//             </div>
//             <div className="w-[50%] flex flex-col gap-5 p-15 bg-[#2c28264d] justify-center">
//                 <p className="leading-4 font-normal uppercase  font-inter tracking-[4.8px] text-[12px] text-[#c09d59]">{props.smalltext}</p>
//                 <h2 className="text-[40px] font-extralight leading-12 text-[#F8F6F1]  font-cormorant">{props.bigtext}</h2>
//                 <p className="leading-7 font-normal  font-inter text-[16px] text-[#988c81]">{props.midtext}</p>
//                 <p className="tracking-[2.4px] flex items-center uppercase mt-2.5 text-2xl- text-[#C09D59] w-fit gap-2.5 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:text-[#e8b978] gap-2.5]">
//                     {props.paragraphtext}
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4">
//                         <path d="M5 12h14"></path>
//                         <path d="m12 5 7 7-7 7"></path>
//                     </svg>
//                 </p>
//             </div>
//         </div>
//     )
// }


// function Experience() {
//   return (
//     <>
//       <HeaderSec />
//       <section className="w-full bg-[#0A0A0A] flex flex-col items-center gap-20 py-50">
//           {/* === HEADER === */}
//           <div className="w-[90%] flex flex-col items-center gap-5 text-center">
  
//               <p data-reveal className="text-[12px] leading-4 font-normal uppercase text-[#C09D59] tracking-[4.8px]  font-inter">
//                   Curated Journeys
//               </p>
  
//               <h1 data-reveal data-delay="80" className="text-[60px] font-thin leading-18 text-[#F8F6F1]  font-cormorant">
//                   Dining <span className="italic">Experiences</span>
//               </h1>
  
//               {/* Decorator */}
//               <div data-reveal data-delay="160" className="flex items-center justify-center gap-3.75">
//                   <div className="w-11.75 h-px bg-linear-to-r from-[#0A0A0A] to-[#735E35]" />
//                   <div className="w-1.5 h-1.5 rounded-full bg-[#735E35]" />
//                   <div className="w-11.75 h-px bg-linear-to-l from-[#0A0A0A] to-[#735E35]" />
//               </div>
  
//               <p data-reveal data-delay="240" className="text-[16px] leading-7 font-normal  text-[#988c81]  font-inter max-w-125">Each experience is thoughtfully designed to transport you into a world of culinary wonder.</p>
  
  
//           </div>
  
//           <div className="w-[90%] flex flex-col gap-25">
//               <CardExp 
//                   // picone = "table_three1"
//                   picone = {table_three1}
//                   smalltext="Cocktail Atelier"
//                   bigtext="The Bar"
//                   midtext="Our award-winning mixologists craft cocktails that mirror the precision and artistry of our kitchen. Small plates complement each creation."
//                   paragraphtext="Explore Cocktails"
//               />
//               <CardExp 
//                   // picone = "table_two"
//                   picone = {table_two}
//                   smalltext="Rooftop Dining"
//                   bigtext="Starlit Terrace"
//                   midtext="Ascend to our panoramic rooftop where the city skyline becomes your backdrop. Seasonal menus paired with craft cocktails under open skies."
//                   paragraphtext="Reserve Rooftop"
//               />
//               <CardExp 
//                   picone = {table_three2}
//                   smalltext="Signature Dining"
//                   bigtext="The Grand Room"
//                   midtext="Our flagship dining room where candlelight, fine linens, and impeccable service set the stage for an unforgettable culinary evening."
//                   paragraphtext="Reserve Table"
//               />
  
//               <CardExp 
//                   picone = {table_one}
//                   smalltext="Private Dining"
//                   bigtext="The Salon Privé"
//                   midtext="An exclusive chamber for intimate gatherings, celebrations, and discerning soirées. Bespoke menus, dedicated service, absolute privacy."
//                   paragraphtext="Inquire"
//               />
//           </div>
          
//       </section>
//       <FooterSec />
//     </>
//   )
// }

// export default Experience;










// import ExpSec    from "../components/Experience/ExperienceSection";
import HeaderSec from "../components/Header";
import FooterSec from "../components/Footer";

import table_three1 from "../assets/table_three_(1).png";
import table_two    from "../assets/table_two.png";
import table_three2 from "../assets/table_three_(2).png";
import table_one    from "../assets/table_one.png";


function CardExp(props) {
  return (
    <div
      data-reveal
      className="flex flex-col lg:flex-row items-stretch gap-0"
      id="experience-card"
    >
      {/* Image — full width on mobile, half on desktop */}
      <div className="w-full md:w-[50%] h-65 md:h-auto overflow-hidden">
        <img
          src={props.picone}
          alt={props.bigtext}
          className="w-full h-full object-cover block"
        />
      </div>

      {/* Text block */}
      <div className="w-full md:w-[50%] flex flex-col gap-4 md:gap-5 p-6 sm:p-10 md:p-15 bg-[#2c28264d] justify-center">
        <p className="leading-4 font-normal uppercase font-inter tracking-[4.8px] text-[10px] md:text-[12px] text-[#c09d59]">
          {props.smalltext}
        </p>

        <h2 className="text-[32px] md:text-[40px] font-extralight leading-tight md:leading-12 text-[#F8F6F1] font-cormorant">
          {props.bigtext}
        </h2>

        <p className="leading-7 font-normal font-inter text-[14px] md:text-[16px] text-[#988c81]">
          {props.midtext}
        </p>

        <p className="tracking-[2.4px] flex items-center uppercase mt-2 text-[#C09D59] w-fit gap-2.5 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:text-[#e8b978] text-[11px] md:text-[13px]">
          {props.paragraphtext}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3.5 w-3.5 md:h-4 md:w-4"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </p>
      </div>
    </div>
  );
}


function Experience() {
  return (
    <>
      <HeaderSec />

      <section className="w-full bg-[#0A0A0A] flex flex-col items-center gap-12 md:gap-20 py-16 md:py-50">

        {/* === HEADER === */}
        <div className="w-[90%] flex flex-col items-center gap-4 md:gap-5 text-center">

          <p
            data-reveal
            className="text-[10px] md:text-[12px] leading-4 font-normal uppercase text-[#C09D59] tracking-[4.8px] font-inter"
          >
            Curated Journeys
          </p>

          <h1
            data-reveal
            data-delay="80"
            className="text-[40px] sm:text-[52px] md:text-[60px] font-thin leading-tight md:leading-18 text-[#F8F6F1] font-cormorant"
          >
            Dining <span className="italic">Experiences</span>
          </h1>

          {/* Decorator */}
          <div
            data-reveal
            data-delay="160"
            className="flex items-center justify-center gap-3"
          >
            <div className="w-10 md:w-11.75 h-px bg-linear-to-r from-[#0A0A0A] to-[#735E35]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#735E35]" />
            <div className="w-10 md:w-11.75 h-px bg-linear-to-l from-[#0A0A0A] to-[#735E35]" />
          </div>

          <p
            data-reveal
            data-delay="240"
            className="text-[14px] md:text-[16px] leading-7 font-normal text-[#988c81] font-inter max-w-[90%] md:max-w-125"
          >
            Each experience is thoughtfully designed to transport you into a world of culinary wonder.
          </p>

        </div>

        {/* === CARDS === */}
        <div className="w-[90%] flex flex-col gap-10 md:gap-25">
          <CardExp
            picone={table_three1}
            smalltext="Cocktail Atelier"
            bigtext="The Bar"
            midtext="Our award-winning mixologists craft cocktails that mirror the precision and artistry of our kitchen. Small plates complement each creation."
            paragraphtext="Explore Cocktails"
          />
          <CardExp
            picone={table_two}
            smalltext="Rooftop Dining"
            bigtext="Starlit Terrace"
            midtext="Ascend to our panoramic rooftop where the city skyline becomes your backdrop. Seasonal menus paired with craft cocktails under open skies."
            paragraphtext="Reserve Rooftop"
          />
          <CardExp
            picone={table_three2}
            smalltext="Signature Dining"
            bigtext="The Grand Room"
            midtext="Our flagship dining room where candlelight, fine linens, and impeccable service set the stage for an unforgettable culinary evening."
            paragraphtext="Reserve Table"
          />
          <CardExp
            picone={table_three2}
            smalltext="Signature Dining"
            bigtext="The Grand Room"
            midtext="Our flagship dining room where candlelight, fine linens, and impeccable service set the stage for an unforgettable culinary evening."
            paragraphtext="Reserve Table"
          />
          <CardExp
            picone={table_three2}
            smalltext="Signature Dining"
            bigtext="The Grand Room"
            midtext="Our flagship dining room where candlelight, fine linens, and impeccable service set the stage for an unforgettable culinary evening."
            paragraphtext="Reserve Table"
          />
          <CardExp
            picone={table_one}
            smalltext="Private Dining"
            bigtext="The Salon Privé"
            midtext="An exclusive chamber for intimate gatherings, celebrations, and discerning soirées. Bespoke menus, dedicated service, absolute privacy."
            paragraphtext="Inquire"
          />
        </div>

      </section>

      <FooterSec />
    </>
  );
}

export default Experience;