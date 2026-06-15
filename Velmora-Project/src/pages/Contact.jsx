// import { useState } from "react";
// import HeaderSec from "../components/Header.jsx";
// import FooterSec from "../components/Footer.jsx";

// function Decorator() {
//   return (
//     <div className="flex items-center gap-3.75">
//       <div className="w-11.75 h-px bg-linear-to-r from-[#0A0A0A] to-[#735E35]" />
//       <div className="w-1.5 h-1.5 rounded-full bg-[#735E35]" />
//       <div className="w-11.75 h-px bg-linear-to-l from-[#0A0A0A] to-[#735E35]" />
//     </div>
//   );
// }

// function InfoRow(props) {
//   return (
//     <div className="flex gap-7.5 items-center">
//       {props.icon}
//       <div className="flex flex-col gap-.75">
//         <h3 className="text-xl font-normal text-[#F8F6F1] font-cormorant">
//           {props.title}
//         </h3>
//         {props.lines.map((line, i) => (
//           <p key={i} className="text-sm font-normal leading-5 text-[#988C81] font-inter">
//             {line}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// }

// function FormField(props) {
//   return (
//     <div className="flex flex-col gap-2.25">
//       <label
//         htmlFor={props.id}
//         className="uppercase text-[12px] leading-4 font-normal tracking-[2.4px] text-[#988C81] font-inter"
//       >
//         {props.label}
//       </label>
//       {props.textarea ? (
//         <textarea
//           id={props.id}
//           name={props.name}
//           placeholder={props.placeholder}
//           value={props.value}
//           onChange={props.onChange}
//           className="w-full min-w-full max-w-full min-h-25 p-3.75 bg-[#2C2826] text-[15px] leading-6 text-[#f8f6f1] border-0 rounded-lg outline-none placeholder:text-[#988C81] focus:shadow-[0_0_0_1px_#C09D59] font-inter"
//         />
//       ) : (
//         <input
//           id={props.id}
//           name={props.name}
//           type={props.type}
//           placeholder={props.placeholder}
//           value={props.value}
//           onChange={props.onChange}
//           className="w-full p-3.75 bg-[#2C2826] text-[15px] leading-6 text-[#f8f6f1] border-0 rounded-lg outline-none placeholder:text-[#988C81] focus:shadow-[0_0_0_1px_#C09D59] font-inter"
//         />
//       )}
//     </div>
//   );
// }

// function Contact() {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });

//   function handleChange(e) {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("Submitted:", formData);
//   }

//   return (
//     <>
//       <HeaderSec />

//       <section className="w-full bg-[#0A0A0A] flex flex-col items-center gap-20 py-40">

//         {/* Header */}
//         <div className="w-[90%] flex flex-col items-center gap-5 text-center">
//           <p className="text-[12px] leading-4 font-normal uppercase tracking-[4.8px] text-[#C09D59] font-inter">
//             Get in Touch
//           </p>
//           <h1 className="text-[60px] font-thin leading-18 text-[#F8F6F1] font-cormorant">
//             <span className="italic">Contact</span> Us
//           </h1>
//           <Decorator />
//         </div>

//         {/* Two Column Layout */}
//         <div className="w-[90%] flex justify-between items-start">

//           {/* Left — Visit Info */}
//           <div className="w-[47%] flex flex-col gap-8">
//             <h2 className="text-[40px] font-light leading-12 text-[#F8F6F1] font-cormorant">
//               Visit <span className="italic">Velmora</span>
//             </h2>

//             <InfoRow
//               title="Address"
//               lines={["42 Gold Street", "New York, NY 10038"]}
//               icon={
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C09D59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0">
//                   <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
//                   <circle cx="12" cy="10" r="3" />
//                 </svg>
//               }
//             />

//             <InfoRow
//               title="Hours"
//               lines={["Tue — Sun: 5:30 PM — 12:00 AM", "Monday: Closed"]}
//               icon={
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C09D59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0">
//                   <circle cx="12" cy="12" r="10" />
//                   <polyline points="12 6 12 12 16 14" />
//                 </svg>
//               }
//             />

//             <InfoRow
//               title="Phone"
//               lines={["+1 (212) 555-0184"]}
//               icon={
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C09D59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0">
//                   <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//                 </svg>
//               }
//             />

//             <InfoRow
//               title="Email"
//               lines={["hello@velmora.com"]}
//               icon={
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C09D59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0">
//                   <rect width="20" height="16" x="2" y="4" rx="2" />
//                   <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//                 </svg>
//               }
//             />

//             {/* <Decorator /> */}
//           </div>

//           {/* Right — Form */}
//           <div className="w-[47%]">
//             <form className="flex flex-col gap-7.5" onSubmit={handleSubmit}>

//               <FormField
//                 id="inquiry-name"
//                 name="name"
//                 label="Name"
//                 type="text"
//                 placeholder="Your name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />

//               <FormField
//                 id="inquiry-email"
//                 name="email"
//                 label="Email"
//                 type="email"
//                 placeholder="your@email.com"
//                 value={formData.email}
//                 onChange={handleChange}
//               />

//               <FormField
//                 id="inquiry-message"
//                 name="message"
//                 label="Message"
//                 placeholder="How can we assist you?"
//                 value={formData.message}
//                 onChange={handleChange}
//                 textarea
//               />

//               <button
//                 type="submit"
//                 className="w-full h-12 bg-[#C09D59] text-[12px] font-normal tracking-[2.4px] text-[#0A0A0A] uppercase flex items-center justify-center gap-1.75 cursor-pointer border-0 transition-colors duration-300 hover:bg-[#E8B978] font-inter"
//               >
//                 Send Message
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//                   <path d="M5 12h14" />
//                   <path d="m12 5 7 7-7 7" />
//                 </svg>
//               </button>

//             </form>
//           </div>

//         </div>

//       </section>

//       <FooterSec />
//     </>
//   );
// }

// export default Contact;












import { useState } from "react";
import HeaderSec from "../components/Header.jsx";
import FooterSec from "../components/Footer.jsx";

function Decorator() {
  return (
    <div className="flex items-center gap-3.75">
      <div className="w-11.75 h-px bg-linear-to-r from-[#0A0A0A] to-[#735E35]" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#735E35]" />
      <div className="w-11.75 h-px bg-linear-to-l from-[#0A0A0A] to-[#735E35]" />
    </div>
  );
}

function InfoRow(props) {
  return (
    <div data-reveal data-delay={props.delay} className="flex gap-7.5 items-center">
      {props.icon}
      <div className="flex flex-col gap-.75">
        <h3 className="text-[22px] lg:text-xl font-normal text-[#F8F6F1] font-cormorant">
          {props.title}
        </h3>
        {props.lines.map((line, i) => (
          <p key={i} className="text-[15px] lg:text-sm font-normal leading-5 text-[#988C81] font-inter">
            {line}
          </p>
        ))}
      </div>
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
          className="w-full min-w-full max-w-full min-h-25 p-3.75 bg-[#2C2826] text-[15px] leading-6 text-[#f8f6f1] border-0 rounded-lg outline-none placeholder:text-[#988C81] focus:shadow-[0_0_0_1px_#C09D59] font-inter"
        />
      ) : (
        <input
          id={props.id}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          className="w-full p-3.75 bg-[#2C2826] text-[15px] leading-6 text-[#f8f6f1] border-0 rounded-lg outline-none placeholder:text-[#988C81] focus:shadow-[0_0_0_1px_#C09D59] font-inter"
        />
      )}
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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

      <section className="w-full bg-[#0A0A0A] flex flex-col items-center gap-20 py-40">

        {/* Header */}
        <div className="w-[90%] flex flex-col items-center gap-5 text-center">
          <p data-reveal className="text-[10px] lg:text-[12px] leading-4 font-normal uppercase tracking-[4.8px] text-[#C09D59] font-inter">
            Get in Touch
          </p>
          <h1 data-reveal data-delay="80" className="text-[55px] lg:text-[60px] font-thin leading-18 text-[#F8F6F1] font-cormorant">
            <span className="italic">Contact</span> Us
          </h1>
          <div data-reveal data-delay="160">
            <Decorator />
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="w-[90%] flex-col gap-20 lg:gap-0 lg:flex-row flex justify-between items-start">

          {/* Left — Visit Info */}
          <div className="w-full lg:w-[47%] flex flex-col gap-8">
            <h2 data-reveal className="text-[35px] lg:text-[40px] font-light leading-12 text-[#F8F6F1] font-cormorant">
              Visit <span className="italic">Velmora</span>
            </h2>

            <InfoRow
              delay="0"
              title="Address"
              lines={["42 Gold Street", "New York, NY 10038"]}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#C09D59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 h-6 w-6 lg:h-4 lg:w-4">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              }
            />

            <InfoRow
              delay="80"
              title="Hours"
              lines={["Tue — Sun: 5:30 PM — 12:00 AM", "Monday: Closed"]}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#C09D59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 h-6 w-6 lg:h-4 lg:w-4">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              }
            />

            <InfoRow
              delay="160"
              title="Phone"
              lines={["+1 (212) 555-0184"]}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#C09D59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 h-6 w-6 lg:h-4 lg:w-4">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              }
            />

            <InfoRow
              delay="240"
              title="Email"
              lines={["hello@velmora.com"]}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#C09D59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 h-6 w-6 lg:h-4 lg:w-4">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              }
            />

            {/* <Decorator /> */}
          </div>

          {/* Right — Form */}
          <div data-reveal data-delay="120" className="w-full lg:w-[47%]">
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
                id="inquiry-message"
                name="message"
                label="Message"
                placeholder="How can we assist you?"
                value={formData.message}
                onChange={handleChange}
                textarea
              />

              <button
                type="submit"
                className="w-full h-12 bg-[#C09D59] text-[12px] font-normal tracking-[2.4px] text-[#0A0A0A] uppercase flex items-center justify-center gap-1.75 cursor-pointer border-0 transition-colors duration-300 hover:bg-[#E8B978] font-inter"
              >
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>

            </form>
          </div>

        </div>

      </section>

      <FooterSec />
    </>
  );
}

export default Contact;