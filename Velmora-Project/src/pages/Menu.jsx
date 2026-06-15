// import HeaderSec from "../components/Header.jsx";

// import one from '../assets/one.png'
// import two from '../assets/a4c727928_generated_dd6995e2.png'
// import three from '../assets/65c01923e_generated_cd58aee3.png'
// import four from '../assets/6f2ed860a_generated_1002ad9c.png'
// import five from '../assets/d1405d55c_generated_b5ca51b0.png'
// import six from '../assets/ed2c5b96f_generated_383e0f66.png'
// import seven from '../assets/85a96ff92_generated_fa0e12a8.png'
// import eight from '../assets/steak.png'
// import nine from '../assets/box.png'
// import ten from '../assets/3be3bc411_generated_8adc2511.png'
// import eleven from '../assets/281eda289_generated_5b04b80e.png'
// import twelve from '../assets/b7278a40c_generated_a8df767c.png'
// import thirteen from '../assets/table_wine.png'

// import FooterSec from "../components/Footer.jsx";


// function Halfcomp(props) {
//   return(
//   <div className="flex flex-col gap-5 h-100 w-full overflow-hidden group relative">
//     <div className="w-full h-full overflow-hidden group relative">
//       <img src={props.imageText} alt="" className="h-full  w-full block object-cover transition-all duration-500 ease-in-out group-hover:scale-105" />
//       <button className='border-0 bg-[#C09D59] text-[black] p-3 rounded-4xl absolute bottom-6 right-6'>
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-5 h-5"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
//       </button>
//     </div>

//     <div className="flex flex-col gap-1">
//       <div className="flex justify-between">
//         <h1 className="text-[20px] font-light leading-7 text-[#F8F6F1] font-cormorant">{props.header}</h1>
//         <h1 className="text-[21px] leading-7 font-normal text-[#C09D59] font-cormorant">{props.price}</h1>
//       </div>
//       <p className="text-[12px] leading-5 font-normal text-[#988C81]">{props.text}</p>
//     </div>
//   </div>
//   )
// }


// function Menu() {
//   return (
//     <>
//       <HeaderSec />
//       <section className="w-full bg-[#0A0A0A] flex flex-col items-center gap-15 py-50">
//           <div className="w-[90%] flex flex-col items-center gap-5 text-center">
  
//               <p className="text-[12px] leading-4 font-normal uppercase text-[#C09D59] tracking-[4.8px]  font-inter">
//                   The Collection
//               </p>
  
//               <h1 className="text-[60px] font-thin leading-18 text-[#F8F6F1]  font-cormorant">
//                   Our <span className="italic">Menu</span>
//               </h1>
  
//               <div className="flex items-center justify-center gap-3.75">
//                   <div className="w-11.75 h-px bg-linear-to-r from-[#0A0A0A] to-[#735E35]" />
//                   <div className="w-1.5 h-1.5 rounded-full bg-[#735E35]" />
//                   <div className="w-11.75 h-px bg-linear-to-l from-[#0A0A0A] to-[#735E35]" />
//               </div>
  
//               <p className="text-[16px] leading-7 font-normal  text-[#988c81]  font-inter max-w-125">Each dish is a testament to our pursuit of culinary perfection, crafted from the world's finest ingredients.</p>
  
  
//           </div>

//           <div className="w-[90%] flex flex-col gap-5 border-t border-b-0 border-l-0 justify-center border-r-0 border-[#322e2a]">
//               <h1 className="text-[17px] font-normal tracking-[1.8px] uppercase text-[#988C81] py-5">Appetizers</h1>
//               <div className="grid grid-cols-3 gap-7.5">
//                   <Halfcomp 
//                       imageText={one}
//                       header='Toro Sashimi'
//                       price='$68'
//                       text='Japanese Bluefin tuna belly, aged soy, yuzu kosho, micro shiso, 24K gold leaf'
//                   />
//                   <Halfcomp 
//                       imageText={two}
//                       header='Burrata & Heirloom Tomato'
//                       price='$28'
//                       text='Puglia burrata, heritage tomatoes, aged balsamic, basil oil, sourdough crisps'
//                   />
//                   <Halfcomp 
//                       imageText={three}
//                       header='Beef Tartare'
//                       price='$32'
//                       text='Hand-cut Prime beef, quail egg, capers, cornichons, truffle aioli, toast points'
//                   />
//               </div>
//           </div>

//           <div className="w-[90%] flex flex-col gap-5 border-t border-b-0 border-l-0 justify-center border-r-0 border-[#322e2a]">
//               <h1 className="text-[17px] font-normal tracking-[1.8px] uppercase text-[#988C81] py-5">Main Courses</h1>
//               <div className="grid grid-cols-3 gap-7.5">
//                   <Halfcomp 
//                       imageText={four}
//                       header='Herb-Crusted Lamb Rack'
//                       price='$78'
//                       text='Colorado lamb, rosemary crust, pomme purée, red wine reduction, seasonal vegetables'
//                   />
//               </div>
//           </div>

//           <div className="w-[90%] flex flex-col gap-5 border-t border-b-0 border-l-0 justify-center border-r-0 border-[#322e2a]">
//               <h1 className="text-[17px] font-normal tracking-[1.8px] uppercase text-[#988C81] py-5">seafood</h1>
//               <div className="grid grid-cols-3 gap-7.5">
//                   <Halfcomp 
//                       imageText={five}
//                       header='Lobster Thermidor'
//                       price='$96'
//                       text='Nova Scotia lobster, Gruyère gratin, black truffle, champagne beurre blanc'
//                   />
//                   <Halfcomp 
//                       imageText={six}
//                       header='Chilean Sea Bass'
//                       price='$62'
//                       text='Miso-glazed sea bass, dashi broth, baby bok choy, crispy shallots lorem'
//                   />
//                   <Halfcomp 
//                       imageText={seven}
//                       header='Grilled Octopus'
//                       price='$36'
//                       text='Spanish octopus, romesco, charred lemon, olive tapenade, smoked paprika oil'
//                   />
//               </div>
//           </div>

//           <div className="w-[90%] flex flex-col gap-5 border-t border-b-0 border-l-0 justify-center border-r-0 border-[#322e2a]">
//               <h1 className="text-[17px] font-normal tracking-[1.8px] uppercase text-[#988C81] py-5">chef's specials</h1>
//               <div className="grid grid-cols-3 gap-7.5">
//                   <Halfcomp 
//                       imageText={eight}
//                       header='Wagyu A5 Striploin'
//                       price='$195'
//                       text='Miyazaki Prefecture A5 wagyu, charcoal grilled, truffle jus, bone marrow butter'
//                   />
//                   <Halfcomp 
//                       imageText={one}
//                       header='Seasonal Tasting Menu'
//                       price='$145'
//                       text='Seven-course journey through Chef Morettis seasonal inspirations. Wine pairing available.'
//                   />
//               </div>
//           </div>

//           <div className="w-[90%] flex flex-col gap-5 border-t border-b-0 border-l-0 justify-center border-r-0 border-[#322e2a]">
//               <h1 className="text-[17px] font-normal tracking-[1.8px] uppercase text-[#988C81] py-5">desserts</h1>
//               <div className="grid grid-cols-3 gap-7.5">
//                   <Halfcomp 
//                       imageText={nine}
//                       header='Noir Chocolate Soufflé'
//                       price='$38'
//                       text='Valrhona 72% dark chocolate, Tahitian vanilla crème anglaise, gold dust'
//                   />
//                   <Halfcomp 
//                       imageText={ten}
//                       header='Classic Tiramisu'
//                       price='$22'
//                       text='Mascarpone cream, espresso-soaked ladyfingers, Valrhona cocoa, amaretto'
//                   />
//               </div>
//           </div>

//           <div className="w-[90%] flex flex-col gap-5 border-t border-b-0 border-l-0 justify-center border-r-0 border-[#322e2a]">
//               <h1 className="text-[17px] font-normal tracking-[1.8px] uppercase text-[#988C81] py-5">cocktails</h1>
//               <div className="grid grid-cols-3 gap-7.5">
//                   <Halfcomp 
//                       imageText={eleven}
//                       header='The Aurelian Negroni'
//                       price='$24'
//                       text='Aged gin, Campari, sweet vermouth, expressed orange, smoked rosemary'
//                   />
//                   <Halfcomp 
//                       imageText={twelve}
//                       header='The Old Fashioned'
//                       price='$22'
//                       text='Woodford Reserve, hand-carved ice sphere, Angostura, Demerara, orange peel'
//                   />
//               </div>
//           </div>

//            <div className="w-[90%] flex flex-col gap-5 border-t border-b-0 border-l-0 justify-center border-r-0 border-[#322e2a]">
//               <h1 className="text-[17px] font-normal tracking-[1.8px] uppercase text-[#988C81] py-5">wine</h1>
//               <div className="grid grid-cols-3 gap-7.5">
//                   <Halfcomp 
//                       imageText={thirteen}
//                       header='Château Margaux 2015'
//                       price='$180'
//                       text='Premier Grand Cru Classé, Bordeaux. Notes of cassis, violet, and cedar. Full-bodied elegance.'
//                   />
//               </div>
//           </div>
//       </section>
//       <FooterSec />
//     </>
//   );
// }

// export default Menu;












// import HeaderSec from "../components/Header.jsx";

// import one from '../assets/one.png'
// import two from '../assets/a4c727928_generated_dd6995e2.png'
// import three from '../assets/65c01923e_generated_cd58aee3.png'
// import four from '../assets/6f2ed860a_generated_1002ad9c.png'
// import five from '../assets/d1405d55c_generated_b5ca51b0.png'
// import six from '../assets/ed2c5b96f_generated_383e0f66.png'
// import seven from '../assets/85a96ff92_generated_fa0e12a8.png'
// import eight from '../assets/steak.png'
// import nine from '../assets/box.png'
// import ten from '../assets/3be3bc411_generated_8adc2511.png'
// import eleven from '../assets/281eda289_generated_5b04b80e.png'
// import twelve from '../assets/b7278a40c_generated_a8df767c.png'
// import thirteen from '../assets/table_wine.png'

// import FooterSec from "../components/Footer.jsx";


// function Halfcomp(props) {
//   return(
//   <div data-reveal data-delay={props.delay} className="flex flex-col gap-5 h-100 w-full overflow-hidden group relative">
//     <div className="w-full h-full overflow-hidden group relative">
//       <img src={props.imageText} alt="" className="h-full  w-full block object-cover transition-all duration-500 ease-in-out group-hover:scale-105" />
//       <button className='border-0 bg-[#C09D59] text-[black] p-3 rounded-4xl absolute bottom-6 right-6'>
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-5 h-5"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
//       </button>
//     </div>

//     <div className="flex flex-col gap-1">
//       <div className="flex justify-between">
//         <h1 className="text-[20px] font-light leading-7 text-[#F8F6F1] font-cormorant">{props.header}</h1>
//         <h1 className="text-[21px] leading-7 font-normal text-[#C09D59] font-cormorant">{props.price}</h1>
//       </div>
//       <p className="text-[12px] leading-5 font-normal text-[#988C81]">{props.text}</p>
//     </div>
//   </div>
//   )
// }


// function Menu() {
//   return (
//     <>
//       <HeaderSec />
//       <section className="w-full bg-[#0A0A0A] flex flex-col items-center gap-15 py-50">
//           <div className="w-[90%] flex flex-col items-center gap-5 text-center">
  
//               <p data-reveal className="text-[12px] leading-4 font-normal uppercase text-[#C09D59] tracking-[4.8px]  font-inter">
//                   The Collection
//               </p>
  
//               <h1 data-reveal data-delay="80" className="text-[60px] font-thin leading-18 text-[#F8F6F1]  font-cormorant">
//                   Our <span className="italic">Menu</span>
//               </h1>
  
//               <div data-reveal data-delay="160" className="flex items-center justify-center gap-3.75">
//                   <div className="w-11.75 h-px bg-linear-to-r from-[#0A0A0A] to-[#735E35]" />
//                   <div className="w-1.5 h-1.5 rounded-full bg-[#735E35]" />
//                   <div className="w-11.75 h-px bg-linear-to-l from-[#0A0A0A] to-[#735E35]" />
//               </div>
  
//               <p data-reveal data-delay="240" className="text-[16px] leading-7 font-normal  text-[#988c81]  font-inter max-w-125">Each dish is a testament to our pursuit of culinary perfection, crafted from the world's finest ingredients.</p>
  
  
//           </div>

//           <div className="w-[90%] flex flex-col gap-5 border-t border-b-0 border-l-0 justify-center border-r-0 border-[#322e2a]">
//               <h1 data-reveal className="text-[17px] font-normal tracking-[1.8px] uppercase text-[#988C81] py-5">Appetizers</h1>
//               <div className="grid grid-cols-3 gap-7.5">
//                   <Halfcomp 
//                       imageText={one}
//                       header='Toro Sashimi'
//                       price='$68'
//                       text='Japanese Bluefin tuna belly, aged soy, yuzu kosho, micro shiso, 24K gold leaf'
//                       delay="0"
//                   />
//                   <Halfcomp 
//                       imageText={two}
//                       header='Burrata & Heirloom Tomato'
//                       price='$28'
//                       text='Puglia burrata, heritage tomatoes, aged balsamic, basil oil, sourdough crisps'
//                       delay="80"
//                   />
//                   <Halfcomp 
//                       imageText={three}
//                       header='Beef Tartare'
//                       price='$32'
//                       text='Hand-cut Prime beef, quail egg, capers, cornichons, truffle aioli, toast points'
//                       delay="160"
//                   />
//               </div>
//           </div>

//           <div className="w-[90%] flex flex-col gap-5 border-t border-b-0 border-l-0 justify-center border-r-0 border-[#322e2a]">
//               <h1 data-reveal className="text-[17px] font-normal tracking-[1.8px] uppercase text-[#988C81] py-5">Main Courses</h1>
//               <div className="grid grid-cols-3 gap-7.5">
//                   <Halfcomp 
//                       imageText={four}
//                       header='Herb-Crusted Lamb Rack'
//                       price='$78'
//                       text='Colorado lamb, rosemary crust, pomme purée, red wine reduction, seasonal vegetables'
//                       delay="0"
//                   />
//               </div>
//           </div>

//           <div className="w-[90%] flex flex-col gap-5 border-t border-b-0 border-l-0 justify-center border-r-0 border-[#322e2a]">
//               <h1 data-reveal className="text-[17px] font-normal tracking-[1.8px] uppercase text-[#988C81] py-5">seafood</h1>
//               <div className="grid grid-cols-3 gap-7.5">
//                   <Halfcomp 
//                       imageText={five}
//                       header='Lobster Thermidor'
//                       price='$96'
//                       text='Nova Scotia lobster, Gruyère gratin, black truffle, champagne beurre blanc'
//                       delay="0"
//                   />
//                   <Halfcomp 
//                       imageText={six}
//                       header='Chilean Sea Bass'
//                       price='$62'
//                       text='Miso-glazed sea bass, dashi broth, baby bok choy, crispy shallots lorem'
//                       delay="80"
//                   />
//                   <Halfcomp 
//                       imageText={seven}
//                       header='Grilled Octopus'
//                       price='$36'
//                       text='Spanish octopus, romesco, charred lemon, olive tapenade, smoked paprika oil'
//                       delay="160"
//                   />
//               </div>
//           </div>

//           <div className="w-[90%] flex flex-col gap-5 border-t border-b-0 border-l-0 justify-center border-r-0 border-[#322e2a]">
//               <h1 data-reveal className="text-[17px] font-normal tracking-[1.8px] uppercase text-[#988C81] py-5">chef's specials</h1>
//               <div className="grid grid-cols-3 gap-7.5">
//                   <Halfcomp 
//                       imageText={eight}
//                       header='Wagyu A5 Striploin'
//                       price='$195'
//                       text='Miyazaki Prefecture A5 wagyu, charcoal grilled, truffle jus, bone marrow butter'
//                       delay="0"
//                   />
//                   <Halfcomp 
//                       imageText={one}
//                       header='Seasonal Tasting Menu'
//                       price='$145'
//                       text='Seven-course journey through Chef Morettis seasonal inspirations. Wine pairing available.'
//                       delay="80"
//                   />
//               </div>
//           </div>

//           <div className="w-[90%] flex flex-col gap-5 border-t border-b-0 border-l-0 justify-center border-r-0 border-[#322e2a]">
//               <h1 data-reveal className="text-[17px] font-normal tracking-[1.8px] uppercase text-[#988C81] py-5">desserts</h1>
//               <div className="grid grid-cols-3 gap-7.5">
//                   <Halfcomp 
//                       imageText={nine}
//                       header='Noir Chocolate Soufflé'
//                       price='$38'
//                       text='Valrhona 72% dark chocolate, Tahitian vanilla crème anglaise, gold dust'
//                       delay="0"
//                   />
//                   <Halfcomp 
//                       imageText={ten}
//                       header='Classic Tiramisu'
//                       price='$22'
//                       text='Mascarpone cream, espresso-soaked ladyfingers, Valrhona cocoa, amaretto'
//                       delay="80"
//                   />
//               </div>
//           </div>

//           <div className="w-[90%] flex flex-col gap-5 border-t border-b-0 border-l-0 justify-center border-r-0 border-[#322e2a]">
//               <h1 data-reveal className="text-[17px] font-normal tracking-[1.8px] uppercase text-[#988C81] py-5">cocktails</h1>
//               <div className="grid grid-cols-3 gap-7.5">
//                   <Halfcomp 
//                       imageText={eleven}
//                       header='The Aurelian Negroni'
//                       price='$24'
//                       text='Aged gin, Campari, sweet vermouth, expressed orange, smoked rosemary'
//                       delay="0"
//                   />
//                   <Halfcomp 
//                       imageText={twelve}
//                       header='The Old Fashioned'
//                       price='$22'
//                       text='Woodford Reserve, hand-carved ice sphere, Angostura, Demerara, orange peel'
//                       delay="80"
//                   />
//               </div>
//           </div>

//            <div className="w-[90%] flex flex-col gap-5 border-t border-b-0 border-l-0 justify-center border-r-0 border-[#322e2a]">
//               <h1 data-reveal className="text-[17px] font-normal tracking-[1.8px] uppercase text-[#988C81] py-5">wine</h1>
//               <div className="grid grid-cols-3 gap-7.5">
//                   <Halfcomp 
//                       imageText={thirteen}
//                       header='Château Margaux 2015'
//                       price='$180'
//                       text='Premier Grand Cru Classé, Bordeaux. Notes of cassis, violet, and cedar. Full-bodied elegance.'
//                       delay="0"
//                   />
//               </div>
//           </div>
//       </section>
//       <FooterSec />
//     </>
//   );
// }

// export default Menu;










import HeaderSec from "../components/Header.jsx";

import one from '../assets/one.png'
import two from '../assets/a4c727928_generated_dd6995e2.png'
import three from '../assets/65c01923e_generated_cd58aee3.png'
import four from '../assets/6f2ed860a_generated_1002ad9c.png'
import five from '../assets/d1405d55c_generated_b5ca51b0.png'
import six from '../assets/ed2c5b96f_generated_383e0f66.png'
import seven from '../assets/85a96ff92_generated_fa0e12a8.png'
import eight from '../assets/steak.png'
import nine from '../assets/box.png'
import ten from '../assets/3be3bc411_generated_8adc2511.png'
import eleven from '../assets/281eda289_generated_5b04b80e.png'
import twelve from '../assets/b7278a40c_generated_a8df767c.png'
import thirteen from '../assets/table_wine.png'

import FooterSec from "../components/Footer.jsx";


function Halfcomp(props) {
  return (
    <div
      data-reveal
      data-delay={props.delay}
      className="flex flex-col gap-4 w-full overflow-hidden group relative"
    >
      {/* Image container — fixed height on mobile, taller on desktop */}
      <div className="w-full h-56 sm:h-72 lg:h-100 overflow-hidden relative">
        <img
          src={props.imageText}
          alt={props.header}
          className="h-full w-full block object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
        />
        <button className="border-0 bg-[#C09D59] text-black p-2.5 lg:p-3 rounded-4xl absolute bottom-4 right-4 lg:bottom-6 lg:right-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 lg:w-5 lg:h-5"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </button>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start gap-2">
          <h1 className="text-[17px] lg:text-[20px] font-light leading-6 lg:leading-7 text-[#F8F6F1] font-cormorant">
            {props.header}
          </h1>
          <h1 className="text-[18px] lg:text-[21px] leading-6 lg:leading-7 font-normal text-[#C09D59] font-cormorant shrink-0">
            {props.price}
          </h1>
        </div>
        <p className="text-[11px] lg:text-[12px] leading-5 font-normal text-[#988C81]">
          {props.text}
        </p>
      </div>
    </div>
  );
}


function MenuSection({ title, children }) {
  return (
    <div className="w-[90%] flex flex-col gap-4 lg:gap-5 border-t border-[#322e2a]">
      <h1
        data-reveal
        className="text-[13px] lg:text-[17px] font-normal tracking-[1.8px] uppercase text-[#988C81] py-4 lg:py-5"
      >
        {title}
      </h1>
      {/* 1 col on mobile, 2 on sm, 3 on lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7.5 pb-2">
        {children}
      </div>
    </div>
  );
}


function Menu() {
  return (
    <>
      <HeaderSec />

      <section className="w-full bg-[#0A0A0A] flex flex-col items-center gap-12 lg:gap-15 py-36 lg:py-50">

        {/* Header */}
        <div className="w-[90%] flex flex-col items-center gap-4 lg:gap-5 text-center">

          <p
            data-reveal
            className="text-[10px] lg:text-[12px] leading-4 font-normal uppercase text-[#C09D59] tracking-[4.8px] font-inter"
          >
            The Collection
          </p>

          <h1
            data-reveal
            data-delay="80"
            className="text-[40px] sm:text-[52px] lg:text-[60px] font-thin leading-tight lg:leading-18 text-[#F8F6F1] font-cormorant"
          >
            Our <span className="italic">Menu</span>
          </h1>

          <div data-reveal data-delay="160" className="flex items-center justify-center gap-3">
            <div className="w-10 lg:w-11.75 h-px bg-linear-to-r from-[#0A0A0A] to-[#735E35]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#735E35]" />
            <div className="w-10 lg:w-11.75 h-px bg-linear-to-l from-[#0A0A0A] to-[#735E35]" />
          </div>

          <p
            data-reveal
            data-delay="240"
            className="text-[14px] lg:text-[16px] leading-7 font-normal text-[#988c81] font-inter max-w-[90%] lg:max-w-125"
          >
            Each dish is a testament to our pursuit of culinary perfection, crafted from the world's finest ingredients.
          </p>

        </div>

        {/* ── APPETIZERS ── */}
        <MenuSection title="Appetizers">
          <Halfcomp imageText={one}   header="Toro Sashimi"           price="$68" text="Japanese Bluefin tuna belly, aged soy, yuzu kosho, micro shiso, 24K gold leaf"              delay="0"   />
          <Halfcomp imageText={two}   header="Burrata & Heirloom Tomato" price="$28" text="Puglia burrata, heritage tomatoes, aged balsamic, basil oil, sourdough crisps"           delay="80"  />
          <Halfcomp imageText={three} header="Beef Tartare"           price="$32" text="Hand-cut Prime beef, quail egg, capers, cornichons, truffle aioli, toast points"            delay="160" />
        </MenuSection>

        {/* ── MAIN COURSES ── */}
        <MenuSection title="Main Courses">
          <Halfcomp imageText={four}  header="Herb-Crusted Lamb Rack" price="$78" text="Colorado lamb, rosemary crust, pomme purée, red wine reduction, seasonal vegetables"       delay="0"   />
        </MenuSection>

        {/* ── SEAFOOD ── */}
        <MenuSection title="Seafood">
          <Halfcomp imageText={five}  header="Lobster Thermidor"      price="$96" text="Nova Scotia lobster, Gruyère gratin, black truffle, champagne beurre blanc"                 delay="0"   />
          <Halfcomp imageText={six}   header="Chilean Sea Bass"       price="$62" text="Miso-glazed sea bass, dashi broth, baby bok choy, crispy shallots"                          delay="80"  />
          <Halfcomp imageText={seven} header="Grilled Octopus"        price="$36" text="Spanish octopus, romesco, charred lemon, olive tapenade, smoked paprika oil"                delay="160" />
        </MenuSection>

        {/* ── CHEF'S SPECIALS ── */}
        <MenuSection title="Chef's Specials">
          <Halfcomp imageText={eight} header="Wagyu A5 Striploin"     price="$195" text="Miyazaki Prefecture A5 wagyu, charcoal grilled, truffle jus, bone marrow butter"          delay="0"   />
          <Halfcomp imageText={one}   header="Seasonal Tasting Menu"  price="$145" text="Seven-course journey through Chef Moretti's seasonal inspirations. Wine pairing available." delay="80"  />
        </MenuSection>

        {/* ── DESSERTS ── */}
        <MenuSection title="Desserts">
          <Halfcomp imageText={nine}  header="Noir Chocolate Soufflé" price="$38" text="Valrhona 72% dark chocolate, Tahitian vanilla crème anglaise, gold dust"                   delay="0"   />
          <Halfcomp imageText={ten}   header="Classic Tiramisu"       price="$22" text="Mascarpone cream, espresso-soaked ladyfingers, Valrhona cocoa, amaretto"                   delay="80"  />
        </MenuSection>

        {/* ── COCKTAILS ── */}
        <MenuSection title="Cocktails">
          <Halfcomp imageText={eleven} header="The Aurelian Negroni"  price="$24" text="Aged gin, Campari, sweet vermouth, expressed orange, smoked rosemary"                      delay="0"   />
          <Halfcomp imageText={twelve} header="The Old Fashioned"     price="$22" text="Woodford Reserve, hand-carved ice sphere, Angostura, Demerara, orange peel"               delay="80"  />
        </MenuSection>

        {/* ── WINE ── */}
        <MenuSection title="Wine">
          <Halfcomp imageText={thirteen} header="Château Margaux 2015" price="$180" text="Premier Grand Cru Classé, Bordeaux. Notes of cassis, violet, and cedar. Full-bodied elegance." delay="0" />
        </MenuSection>

      </section>

      <FooterSec />
    </>
  );
}

export default Menu;












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