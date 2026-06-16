import { useNavigate } from "react-router-dom";
import HeaderSec from "../components/Header.jsx";
import FooterSec from "../components/Footer.jsx";

import imgone from '../assets/table_three_(2).webp'
import bg_image from '../assets/steak.webp'
import nine from '../assets/box.webp'

import one from '../assets/one.webp'
import five from '../assets/d1405d55c_generated_b5ca51b0.webp'


function Fullcomp(props) {
    return (
        <div data-reveal data-delay={props.delay} className="flex overflow-hidden group relative flex-col gap-5">
            <div className="w-full h-72 lg:h-100 overflow-hidden group relative">
                <img src={props.imageText} loading="lazy" alt="" className="h-full w-full block object-cover transition-all duration-500 ease-in-out group-hover:scale-105" />
                <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                    <h1 className="text-[24px] lg:text-[30px] leading-7 lg:leading-9 font-light text-[#F8F6F1] font-cormorant">{props.header}</h1>
                    <p className="text-[13px] lg:text-[12px] leading-4 font-normal tracking-[.6px] text-[#988C81]">{props.paragraph}</p>
                </div>
            </div>
            <div className="flex justify-between">
                <h1 className="text-[25px] lg:text-[20px] leading-7 font-normal text-[#C09D59] font-cormorant">{props.price}</h1>
                <a href="/menu" className="text-[13px] lg:text-[12px] leading-4 font-normal tracking-[2.4px] text-[#988C81] uppercase">View dish</a>
            </div>
        </div>
    )
}


function HomeSection() {
    const navigate = useNavigate();

    function goTo(path) {
        navigate(path);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <>
            <HeaderSec />

            {/* Hero Section */}
            <section
                style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${bg_image})` }}
                className='w-full py-55 lg:py-50 flex items-center justify-center flex-col text-center gap-5 bg-cover bg-center bg-no-repeat'
            >
                <h1
                    data-reveal
                    className='text-[50px] leading-[44px] tracking-[3.2px] lg:text-[90px] lg:leading-[96px] lg:tracking-[6.4px] font-light text-[#F8F6F1] font-cormorant px-4'
                >
                    Where Every <br /><span className='text-[#AD8D50] italic'>Flavour</span> Tells a Story
                </h1>

                <p
                    data-reveal
                    data-delay="80"
                    className="font-normal leading-6 tracking-[1.2px] lg:tracking-[1.6px] text-[#988C81] font-inter text-[14px] lg:text-[18px] max-w-[90%] lg:max-w-135 px-4"
                >
                    An immersive journey through the world's finest ingredients, crafted with precision by our visionary chefs.
                </p>

                <div data-reveal data-delay="160" className="flex flex-col sm:flex-row gap-4 lg:gap-5 mt-3 px-4 w-full sm:w-auto items-center">
                    <button
                        onClick={() => goTo("/reservation")}
                        className="uppercase border border-solid font-medium box-border text-[#0A0A0A] bg-[#C09D59] text-[11px] lg:text-[12px] leading-4 tracking-[3.6px] py-4 px-8 lg:px-10 cursor-pointer w-full sm:w-auto"
                    >
                        reserve a table
                    </button>
                    <button
                        onClick={() => goTo("/menu")}
                        className="uppercase text-[11px] lg:text-[12px] leading-4 font-medium tracking-[3.6px] bg-inherit text-[#FFFFFF] py-4 px-8 lg:px-10 border border-solid border-[#977c46] cursor-pointer w-full sm:w-auto"
                    >
                        explore the menu
                    </button>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="w-full bg-[#0a0a0a] flex justify-center py-20 lg:py-50">
                <div className="w-[90%] flex flex-col justify-center items-center gap-12 lg:gap-20">
                    <div className="w-full flex flex-col justify-center items-center gap-12 lg:gap-20 text-center">
                        <div className="flex flex-col gap-6 lg:gap-8 w-full justify-center items-center">

                            <p data-reveal className="text-[11px] lg:text-[12px] leading-4 font-normal uppercase text-[#C09D59] tracking-[4.8px] font-inter">
                                The Philosophy
                            </p>

                            <h1 data-reveal data-delay="80" className="text-[40px] leading-[44px] lg:text-[60px] lg:leading-18 font-thin text-[#F8F6F1] font-cormorant">
                                An Art Form <span className="italic"><br />Beyond Cuisine</span>
                            </h1>

                            {/* Decorator */}
                            <div data-reveal data-delay="160" className="flex items-center justify-center gap-3.75">
                                <div className="w-11.75 h-px bg-linear-to-r from-[#0A0A0A] to-[#735E35]" />
                                <div className="w-1.5 h-1.5 rounded-full bg-[#735E35]" />
                                <div className="w-11.75 h-px bg-linear-to-l from-[#0A0A0A] to-[#735E35]" />
                            </div>

                            <p data-reveal data-delay="240" className="text-[15px] lg:text-[18px] leading-7 font-normal text-[#988c81] font-inter max-w-[95%] lg:max-w-180">
                                At Aurelian, we believe dining transcends nourishment. It is theatre, intimacy, and artistry converging on a single plate. Every ingredient is sourced from the world's finest purveyors, every technique refined through generations of culinary mastery.
                            </p>

                        </div>
                    </div>

                    <div data-reveal className="relative w-full">
                        <img src={imgone} loading="lazy" alt="" className="w-full object-cover" />
                        <div className="absolute flex flex-col gap-2 lg:gap-3 bottom-4 left-4 lg:bottom-20 lg:left-20 max-w-[80%] lg:max-w-none">
                            <h1 className="text-[#DFDDD9] font-cormorant italic text-[20px] leading-6 lg:text-[36px] lg:leading-10 font-light">
                                "The finest ingredients deserve the finest stage."
                            </h1>
                            <p className="text-[10px] lg:text-[12px] font-normal tracking-[3.6px] font-inter text-[#C09D59] uppercase">
                                — Chef Alessandro Moretti
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Signature Collection Section */}
            <section className="w-full bg-[#0a0a0a] flex justify-center py-20 lg:py-50">
                <div className="w-[90%] flex flex-col justify-center items-center gap-12 lg:gap-20">
                    <div className="w-full flex flex-col justify-center items-center gap-12 lg:gap-20 text-center">
                        <div className="flex flex-col gap-6 lg:gap-8 w-full justify-center items-center">

                            <p data-reveal className="text-[10px] lg:text-[12px] leading-4 font-normal uppercase text-[#C09D59] tracking-[4.8px] font-inter">
                                Signature Collection
                            </p>

                            <h1 data-reveal data-delay="80" className="text-[37px] leading-[44px] lg:text-[60px] lg:leading-18 font-thin text-[#F8F6F1] font-cormorant">
                                Chef's <span className="italic">Masterpieces</span>
                            </h1>

                        </div>
                    </div>

                    {/* Cards grid: 1 col mobile, 2 col sm, 3 col lg */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
                        <Fullcomp
                            imageText={one}
                            header='Toro Sashimi'
                            paragraph='Japanese Bluefin · Yusu · Gold Leaf'
                            price='$68'
                            delay="0"
                        />
                        <Fullcomp
                            imageText={five}
                            header='Lobster Thermidor'
                            paragraph='Nova Scotia Lobster · Gruyere · Black Truffle'
                            price='$96'
                            delay="80"
                        />
                        <Fullcomp
                            imageText={nine}
                            header='Noir Chocolate Souffle'
                            paragraph='Valrhona 72% · Tahitian Vanilla · Gold Dust'
                            price='$38'
                            delay="160"
                        />
                    </div>

                    <div data-reveal className="flex items-center justify-center gap-3.75">
                        <div className="w-11.75 h-px bg-linear-to-r from-[#0A0A0A] to-[#735E35]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#735E35]" />
                        <div className="w-11.75 h-px bg-linear-to-l from-[#0A0A0A] to-[#735E35]" />
                    </div>

                    <button
                        data-reveal
                        onClick={() => goTo("/menu")}
                        className="text-[11px] lg:text-[12px] font-normal tracking-[3px] text-[#C09D59] uppercase flex gap-1 justify-center items-center cursor-pointer bg-transparent border-0"
                    >
                        Explore full menu
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </button>

                </div>
            </section>

            <FooterSec />
        </>
    );
}

export default HomeSection;