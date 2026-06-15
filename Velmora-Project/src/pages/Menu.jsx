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
  return(
  <div data-reveal data-delay={props.delay} className="flex flex-col gap-5 h-100 w-full overflow-hidden group relative">
    <div className="w-full h-full overflow-hidden group relative">
      <img src={props.imageText} alt="" className="h-full  w-full block object-cover transition-all duration-500 ease-in-out group-hover:scale-105" />
      <button className='border-0 bg-[#C09D59] text-[black] p-3 rounded-4xl absolute bottom-6 right-6'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-5 h-5"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
      </button>
    </div>

    <div className="flex flex-col gap-1">
      <div className="flex justify-between">
        <h1 className="text-[20px] font-light leading-7 text-[#F8F6F1] font-cormorant">{props.header}</h1>
        <h1 className="text-[21px] leading-7 font-normal text-[#C09D59] font-cormorant">{props.price}</h1>
      </div>
      <p className="text-[12px] leading-5 font-normal text-[#988C81]">{props.text}</p>
    </div>
  </div>
  )
}


function Menu() {
  return (
    <>
      <HeaderSec />
      <section className="w-full bg-[#0A0A0A] flex flex-col items-center gap-15 py-50">
          <div className="w-[90%] flex flex-col items-center gap-5 text-center">
  
              <p data-reveal className="text-[12px] leading-4 font-normal uppercase text-[#C09D59] tracking-[4.8px]  font-inter">
                  The Collection
              </p>
  
              <h1 data-reveal data-delay="80" className="text-[60px] font-thin leading-18 text-[#F8F6F1]  font-cormorant">
                  Our <span className="italic">Menu</span>
              </h1>
  
              <div data-reveal data-delay="160" className="flex items-center justify-center gap-3.75">
                  <div className="w-11.75 h-px bg-linear-to-r from-[#0A0A0A] to-[#735E35]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#735E35]" />
                  <div className="w-11.75 h-px bg-linear-to-l from-[#0A0A0A] to-[#735E35]" />
              </div>
  
              <p data-reveal data-delay="240" className="text-[16px] leading-7 font-normal  text-[#988c81]  font-inter max-w-125">Each dish is a testament to our pursuit of culinary perfection, crafted from the world's finest ingredients.</p>
  
  
          </div>

          <div className="w-[90%] flex flex-col gap-5 border-t border-b-0 border-l-0 justify-center border-r-0 border-[#322e2a]">
              <h1 data-reveal className="text-[17px] font-normal tracking-[1.8px] uppercase text-[#988C81] py-5">Appetizers</h1>
              <div className="grid grid-cols-3 gap-7.5">
                  <Halfcomp 
                      imageText={one}
                      header='Toro Sashimi'
                      price='$68'
                      text='Japanese Bluefin tuna belly, aged soy, yuzu kosho, micro shiso, 24K gold leaf'
                      delay="0"
                  />
                  <Halfcomp 
                      imageText={two}
                      header='Burrata & Heirloom Tomato'
                      price='$28'
                      text='Puglia burrata, heritage tomatoes, aged balsamic, basil oil, sourdough crisps'
                      delay="80"
                  />
                  <Halfcomp 
                      imageText={three}
                      header='Beef Tartare'
                      price='$32'
                      text='Hand-cut Prime beef, quail egg, capers, cornichons, truffle aioli, toast points'
                      delay="160"
                  />
              </div>
          </div>

          <div className="w-[90%] flex flex-col gap-5 border-t border-b-0 border-l-0 justify-center border-r-0 border-[#322e2a]">
              <h1 data-reveal className="text-[17px] font-normal tracking-[1.8px] uppercase text-[#988C81] py-5">Main Courses</h1>
              <div className="grid grid-cols-3 gap-7.5">
                  <Halfcomp 
                      imageText={four}
                      header='Herb-Crusted Lamb Rack'
                      price='$78'
                      text='Colorado lamb, rosemary crust, pomme purée, red wine reduction, seasonal vegetables'
                      delay="0"
                  />
              </div>
          </div>

          <div className="w-[90%] flex flex-col gap-5 border-t border-b-0 border-l-0 justify-center border-r-0 border-[#322e2a]">
              <h1 data-reveal className="text-[17px] font-normal tracking-[1.8px] uppercase text-[#988C81] py-5">seafood</h1>
              <div className="grid grid-cols-3 gap-7.5">
                  <Halfcomp 
                      imageText={five}
                      header='Lobster Thermidor'
                      price='$96'
                      text='Nova Scotia lobster, Gruyère gratin, black truffle, champagne beurre blanc'
                      delay="0"
                  />
                  <Halfcomp 
                      imageText={six}
                      header='Chilean Sea Bass'
                      price='$62'
                      text='Miso-glazed sea bass, dashi broth, baby bok choy, crispy shallots lorem'
                      delay="80"
                  />
                  <Halfcomp 
                      imageText={seven}
                      header='Grilled Octopus'
                      price='$36'
                      text='Spanish octopus, romesco, charred lemon, olive tapenade, smoked paprika oil'
                      delay="160"
                  />
              </div>
          </div>

          <div className="w-[90%] flex flex-col gap-5 border-t border-b-0 border-l-0 justify-center border-r-0 border-[#322e2a]">
              <h1 data-reveal className="text-[17px] font-normal tracking-[1.8px] uppercase text-[#988C81] py-5">chef's specials</h1>
              <div className="grid grid-cols-3 gap-7.5">
                  <Halfcomp 
                      imageText={eight}
                      header='Wagyu A5 Striploin'
                      price='$195'
                      text='Miyazaki Prefecture A5 wagyu, charcoal grilled, truffle jus, bone marrow butter'
                      delay="0"
                  />
                  <Halfcomp 
                      imageText={one}
                      header='Seasonal Tasting Menu'
                      price='$145'
                      text='Seven-course journey through Chef Morettis seasonal inspirations. Wine pairing available.'
                      delay="80"
                  />
              </div>
          </div>

          <div className="w-[90%] flex flex-col gap-5 border-t border-b-0 border-l-0 justify-center border-r-0 border-[#322e2a]">
              <h1 data-reveal className="text-[17px] font-normal tracking-[1.8px] uppercase text-[#988C81] py-5">desserts</h1>
              <div className="grid grid-cols-3 gap-7.5">
                  <Halfcomp 
                      imageText={nine}
                      header='Noir Chocolate Soufflé'
                      price='$38'
                      text='Valrhona 72% dark chocolate, Tahitian vanilla crème anglaise, gold dust'
                      delay="0"
                  />
                  <Halfcomp 
                      imageText={ten}
                      header='Classic Tiramisu'
                      price='$22'
                      text='Mascarpone cream, espresso-soaked ladyfingers, Valrhona cocoa, amaretto'
                      delay="80"
                  />
              </div>
          </div>

          <div className="w-[90%] flex flex-col gap-5 border-t border-b-0 border-l-0 justify-center border-r-0 border-[#322e2a]">
              <h1 data-reveal className="text-[17px] font-normal tracking-[1.8px] uppercase text-[#988C81] py-5">cocktails</h1>
              <div className="grid grid-cols-3 gap-7.5">
                  <Halfcomp 
                      imageText={eleven}
                      header='The Aurelian Negroni'
                      price='$24'
                      text='Aged gin, Campari, sweet vermouth, expressed orange, smoked rosemary'
                      delay="0"
                  />
                  <Halfcomp 
                      imageText={twelve}
                      header='The Old Fashioned'
                      price='$22'
                      text='Woodford Reserve, hand-carved ice sphere, Angostura, Demerara, orange peel'
                      delay="80"
                  />
              </div>
          </div>

           <div className="w-[90%] flex flex-col gap-5 border-t border-b-0 border-l-0 justify-center border-r-0 border-[#322e2a]">
              <h1 data-reveal className="text-[17px] font-normal tracking-[1.8px] uppercase text-[#988C81] py-5">wine</h1>
              <div className="grid grid-cols-3 gap-7.5">
                  <Halfcomp 
                      imageText={thirteen}
                      header='Château Margaux 2015'
                      price='$180'
                      text='Premier Grand Cru Classé, Bordeaux. Notes of cassis, violet, and cedar. Full-bodied elegance.'
                      delay="0"
                  />
              </div>
          </div>
      </section>
      <FooterSec />
    </>
  );
}

export default Menu;