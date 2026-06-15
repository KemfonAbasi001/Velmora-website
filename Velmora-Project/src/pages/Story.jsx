// import HeaderSec from "../components/Header.jsx";
// import FooterSec from "../components/Footer.jsx";

// import headerimg from '../assets/13e627c52_generated_2c69d77a.png'
// import chefImage from "../assets/table_three_(2).png";

// const timelineItems = [
//   {
//     year: "2008",
//     title: "The Beginning",
//     text: "Chef Alessandro Moretti opens a 12-seat supper club in SoHo, driven by a vision to redefine luxury dining.",
//     yearLeft: true,
//   },
//   {
//     year: "2012",
//     title: "The Beginning",
//     text: "Chef Alessandro Moretti opens a 12-seat supper club in SoHo, driven by a vision to redefine luxury dining.",
//     yearLeft: false,
//   },
//   {
//     year: "2016",
//     title: "First Michelin Star",
//     text: "Aurelian earns its first Michelin star, recognizing our commitment to culinary excellence and innovation.",
//     yearLeft: true,
//   },
//   {
//     year: "2019",
//     title: "Second Star",
//     text: "We unveil our flagship restaurant on Gold Street — 80 seats, rooftop terrace, private dining, and sommelier cellar.",
//     yearLeft: false,
//   },
//   {
//     year: "2023",
//     title: "The Atelier",
//     text: "Launch of our culinary atelier — a teaching kitchen, tasting lab, and incubator for the next generation of chefs.",
//     yearLeft: true,
//   },
//   {
//     year: "2026",
//     title: "New Horizons",
//     text: "Aurelian at Home launches, bringing our cuisine to your door with the same precision and artistry.",
//     yearLeft: false,
//   },
// ];

// function Decorator() {
//   return (
//     <div className="flex items-center gap-3.75 self-end">
//       <div className="w-11.75 h-px bg-linear-to-r from-[#0A0A0A] to-[#735E35]" />
//       <div className="w-1.5 h-1.5 rounded-full bg-[#735E35]" />
//       <div className="w-11.75 h-px bg-linear-to-l from-[#0A0A0A] to-[#735E35]" />
//     </div>
//   );
// }

// function TimelineItem(props) {
//   const year = (
//     <h2 className="text-[40px] font-light leading-12 text-[#4D3F24] font-cormorant">
//       {props.year}
//     </h2>
//   );

//   const content = (
//     <div className="flex flex-col gap-.75 max-w-100">
//       <h3 className="text-xl font-normal text-[#F8F6F1] font-cormorant">
//         {props.title}
//       </h3>
//       <p className="text-sm font-normal leading-5 text-[#988C81] font-inter">
//         {props.text}
//       </p>
//     </div>
//   );

//   return (
//     <div className="w-full flex items-center justify-center gap-20">
//       {props.yearLeft ? year : content}
//       {props.yearLeft ? content : year}
//     </div>
//   );
// }

// function Story() {
//   return (
//     <>
//       <HeaderSec />

//       {/* Hero */}
//       <section
//         className="w-full pt-65 pb-12.5 pl-12.5"
//         style={{
//           backgroundImage: `
//             linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.5) 60%, rgba(10,10,10,.95) 100%),
//              url(${headerimg})
//           `,
//           backgroundSize: "cover",
//           backgroundPosition: "top",
//           backgroundRepeat: "no-repeat",
//           backgroundAttachment: "fixed",
//         }}
//       >
//         <div className="flex flex-col gap-3.75">
//           <p className="text-[12px] leading-4 font-normal tracking-[4.8px] text-[#C09D59] uppercase font-inter">
//             Our Story
//           </p>
//           <h1 className="text-[72px] font-light leading-18 text-[#F8F6F1] font-cormorant">
//             The <span className="italic">Artisan</span>
//           </h1>
//         </div>
//       </section>

//       {/* Chef Section */}
//       <section className="w-full bg-[#0A0A0A] flex flex-col items-center gap-20 py-50">
//         <div className="w-[90%] flex justify-between items-center">

//           <div className="w-[47%] flex flex-col gap-3.75">
//             <p className="text-[12px] leading-4 font-normal uppercase tracking-[4.8px] text-[#C09D59] font-inter">
//               Executive Chef
//             </p>
//             <h2 className="text-[48px] font-light leading-12 text-[#F8F6F1] font-cormorant">
//               Alessandro <span className="italic"><br/>Moretti</span>
//             </h2>
//             <p className="text-[16px] leading-6 font-normal text-[#988C81] font-inter">
//               Born in the rolling hills of Piedmont, Chef Moretti's culinary journey began in his grandmother's kitchen, where he first understood that food is the language of love, memory, and culture.
//             </p>
//             <p className="text-[16px] leading-6 font-normal text-[#988C81] font-inter">
//               After training under the tutelage of three-Michelin-starred masters in Lyon, Tokyo, and Copenhagen, he developed a philosophy that bridges Old World tradition with New World innovation.
//             </p>
//             <p className="text-[16px] leading-6 font-normal text-[#988C81] font-inter">
//               His cuisine is defined by restraint and reverence — letting each ingredient speak its truth while elevating it through technique that borders on alchemy.
//             </p>
//             <Decorator />
//           </div>

//           <div className="w-[47%]">
//             <img src={chefImage} alt="Chef Alessandro Moretti" className="w-full block" />
//           </div>

//         </div>
//       </section>

//       {/* Philosophy Quote */}
//       <section className="w-full py-37.5 bg-[rgb(22,20,19)] flex flex-col items-center justify-center gap-12.5">
//         <div className="w-[90%] flex flex-col items-center gap-5 text-center">
//           <p className="text-[12px] leading-4 font-normal uppercase tracking-[4.8px] text-[#C09D59] font-inter">
//             Philosophy
//           </p>
//           <h2 className="text-[40px] font-light leading-12 text-[#F8F6F1] font-cormorant max-w-175 italic">
//             "We do not cook food. We compose experiences. Every plate is a movement in a symphony — precise, emotional, and unrepeatable."
//           </h2>
//           <p className="text-[12px] leading-4 font-normal uppercase tracking-[4.8px] text-[#C09D59] font-inter">
//             — Chef Alessandro Moretti
//           </p>
//         </div>
//       </section>

//       {/* Heritage Timeline */}
//       <section className="w-full bg-[#0A0A0A] flex flex-col items-center gap-20 py-50">

//         <div className="w-[90%] flex flex-col items-center gap-5 text-center">
//           <p className="text-[12px] leading-4 font-normal uppercase tracking-[4.8px] text-[#C09D59] font-inter">
//             Journey
//           </p>
//           <h1 className="text-[48px] font-thin leading-18 text-[#F8F6F1] font-cormorant">
//             Our <span className="italic">Heritage</span>
//           </h1>
//         </div>

//         <div className="w-[90%] flex flex-col items-center gap-25">
//           {/* <Decorator /> */}
//           {timelineItems.map((item) => (
//             <TimelineItem
//               key={item.year}
//               year={item.year}
//               title={item.title}
//               text={item.text}
//               yearLeft={item.yearLeft}
//             />
//           ))}
//         </div>

//       </section>

//       <FooterSec />
//     </>
//   );
// }

// export default Story;












import HeaderSec from "../components/Header.jsx";
import FooterSec from "../components/Footer.jsx";

import headerimg from '../assets/13e627c52_generated_2c69d77a.png'
import chefImage from "../assets/table_three_(2).png";

const timelineItems = [
  {
    year: "2008",
    title: "The Beginning",
    text: "Chef Alessandro Moretti opens a 12-seat supper club in SoHo, driven by a vision to redefine luxury dining.",
    yearLeft: true,
  },
  {
    year: "2012",
    title: "The Beginning",
    text: "Chef Alessandro Moretti opens a 12-seat supper club in SoHo, driven by a vision to redefine luxury dining.",
    yearLeft: false,
  },
  {
    year: "2016",
    title: "First Michelin Star",
    text: "Aurelian earns its first Michelin star, recognizing our commitment to culinary excellence and innovation.",
    yearLeft: true,
  },
  {
    year: "2019",
    title: "Second Star",
    text: "We unveil our flagship restaurant on Gold Street — 80 seats, rooftop terrace, private dining, and sommelier cellar.",
    yearLeft: false,
  },
  {
    year: "2023",
    title: "The Atelier",
    text: "Launch of our culinary atelier — a teaching kitchen, tasting lab, and incubator for the next generation of chefs.",
    yearLeft: true,
  },
  {
    year: "2026",
    title: "New Horizons",
    text: "Aurelian at Home launches, bringing our cuisine to your door with the same precision and artistry.",
    yearLeft: false,
  },
];

function Decorator() {
  return (
    <div className="flex items-center gap-3.75 self-end">
      <div className="w-11.75 h-px bg-linear-to-r from-[#0A0A0A] to-[#735E35]" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#735E35]" />
      <div className="w-11.75 h-px bg-linear-to-l from-[#0A0A0A] to-[#735E35]" />
    </div>
  );
}

function TimelineItem(props) {
  const year = (
    <h2 className="text-[40px] font-light leading-12 text-[#4D3F24] font-cormorant">
      {props.year}
    </h2>
  );

  const content = (
    <div className="flex flex-col gap-.75 max-w-100">
      <h3 className="text-xl font-normal text-[#F8F6F1] font-cormorant">
        {props.title}
      </h3>
      <p className="text-sm font-normal leading-5 text-[#988C81] font-inter">
        {props.text}
      </p>
    </div>
  );

  return (
    <div data-reveal className="w-full flex items-center justify-center gap-20">
      {props.yearLeft ? year : content}
      {props.yearLeft ? content : year}
    </div>
  );
}

function Story() {
  return (
    <>
      <HeaderSec />

      {/* Hero */}
      <section
        className="w-full pt-65 pb-12.5 pl-12.5"
        style={{
          backgroundImage: `
            linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.5) 60%, rgba(10,10,10,.95) 100%),
             url(${headerimg})
          `,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex flex-col gap-3.75">
          <p data-reveal className="text-[12px] leading-4 font-normal tracking-[4.8px] text-[#C09D59] uppercase font-inter">
            Our Story
          </p>
          <h1 data-reveal data-delay="80" className="text-[72px] font-light leading-18 text-[#F8F6F1] font-cormorant">
            The <span className="italic">Artisan</span>
          </h1>
        </div>
      </section>

      {/* Chef Section */}
      <section className="w-full bg-[#0A0A0A] flex flex-col items-center gap-20 py-50">
        <div className="w-[90%] flex justify-between items-center">

          <div data-reveal className="w-[47%] flex flex-col gap-3.75">
            <p className="text-[12px] leading-4 font-normal uppercase tracking-[4.8px] text-[#C09D59] font-inter">
              Executive Chef
            </p>
            <h2 className="text-[48px] font-light leading-12 text-[#F8F6F1] font-cormorant">
              Alessandro <span className="italic"><br/>Moretti</span>
            </h2>
            <p className="text-[16px] leading-6 font-normal text-[#988C81] font-inter">
              Born in the rolling hills of Piedmont, Chef Moretti's culinary journey began in his grandmother's kitchen, where he first understood that food is the language of love, memory, and culture.
            </p>
            <p className="text-[16px] leading-6 font-normal text-[#988C81] font-inter">
              After training under the tutelage of three-Michelin-starred masters in Lyon, Tokyo, and Copenhagen, he developed a philosophy that bridges Old World tradition with New World innovation.
            </p>
            <p className="text-[16px] leading-6 font-normal text-[#988C81] font-inter">
              His cuisine is defined by restraint and reverence — letting each ingredient speak its truth while elevating it through technique that borders on alchemy.
            </p>
            <Decorator />
          </div>

          <div data-reveal data-delay="120" className="w-[47%]">
            <img src={chefImage} alt="Chef Alessandro Moretti" className="w-full block" />
          </div>

        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="w-full py-37.5 bg-[rgb(22,20,19)] flex flex-col items-center justify-center gap-12.5">
        <div className="w-[90%] flex flex-col items-center gap-5 text-center">
          <p data-reveal className="text-[12px] leading-4 font-normal uppercase tracking-[4.8px] text-[#C09D59] font-inter">
            Philosophy
          </p>
          <h2 data-reveal data-delay="80" className="text-[40px] font-light leading-12 text-[#F8F6F1] font-cormorant max-w-175 italic">
            "We do not cook food. We compose experiences. Every plate is a movement in a symphony — precise, emotional, and unrepeatable."
          </h2>
          <p data-reveal data-delay="160" className="text-[12px] leading-4 font-normal uppercase tracking-[4.8px] text-[#C09D59] font-inter">
            — Chef Alessandro Moretti
          </p>
        </div>
      </section>

      {/* Heritage Timeline */}
      <section className="w-full bg-[#0A0A0A] flex flex-col items-center gap-20 py-50">

        <div className="w-[90%] flex flex-col items-center gap-5 text-center">
          <p data-reveal className="text-[12px] leading-4 font-normal uppercase tracking-[4.8px] text-[#C09D59] font-inter">
            Journey
          </p>
          <h1 data-reveal data-delay="80" className="text-[48px] font-thin leading-18 text-[#F8F6F1] font-cormorant">
            Our <span className="italic">Heritage</span>
          </h1>
        </div>

        <div className="w-[90%] flex flex-col items-center gap-25">
          {/* <Decorator /> */}
          {timelineItems.map((item) => (
            <TimelineItem
              key={item.year}
              year={item.year}
              title={item.title}
              text={item.text}
              yearLeft={item.yearLeft}
            />
          ))}
        </div>

      </section>

      <FooterSec />
    </>
  );
}

export default Story;