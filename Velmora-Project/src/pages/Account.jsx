import HeaderSec from "../components/Header.jsx";
import FooterSec from "../components/Footer.jsx";

function Account() {
  return (
    <>
      <HeaderSec />
      <section className="w-full bg-[#0A0A0A] flex flex-col items-center gap-20 py-50">
        <div className="w-[90%] flex flex-col items-center gap-5 text-center">
          <p data-reveal className="text-[12px] leading-4 font-normal uppercase text-[#C09D59] tracking-[4.8px] font-inter">
            Personal Settings
          </p>
          <h1 data-reveal data-delay="80" className="text-[60px] font-thin leading-18 text-[#F8F6F1] font-cormorant">
            My <span className="italic">Account</span>
          </h1>
          <p data-reveal data-delay="160" className="text-lg leading-7 font-normal text-[#988c81] font-inter max-w-125">
            Manage your profile, preferences, and dining history.
          </p>
        </div>
      </section>
      <FooterSec />
    </>
  );
}

export default Account;