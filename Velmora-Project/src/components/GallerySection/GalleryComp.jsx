// // import { useState } from "react";
// // import galleryData from "../../Feature"
// // // import galleryData from "../Feature.js";

// // // === FILTER BUTTONS CONFIG ===
// // const FILTERS = [
// //     { label: "All",          key: "all"     },
// //     { label: "Cuisine",      key: "cuisine" },
// //     { label: "Ambience",     key: "ambience"},
// //     { label: "Bar & Cellar", key: "bar"     },
// //     { label: "The Kitchen",  key: "kitchen" },
// // ];

// // // ─────────────────────────────────────────────
// // // CELL COMPONENT
// // // Renders either a solo image or a .larger stack
// // // ─────────────────────────────────────────────
// // function GalleryCell({ cell }) {

// //     if (cell.type === "solo") {
// //         return (
// //             <div className="w-full overflow-hidden">
// //                 <img
// //                     src={cell.src}
// //                     alt={cell.alt}
// //                     className="w-full block object-cover transition-transform duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.07]"
// //                 />
// //             </div>
// //         );
// //     }

// //     if (cell.type === "larger") {
// //         return (
// //             <div className="flex flex-col gap-3.75">
// //                 {cell.images.map(function(img, i) {
// //                     return (
// //                         <div key={i} className="w-full overflow-hidden">
// //                             <img
// //                                 src={img.src}
// //                                 alt={img.alt}
// //                                 className="w-full block object-cover transition-transform duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.07]"
// //                             />
// //                         </div>
// //                     );
// //                 })}
// //             </div>
// //         );
// //     }
// // }

// // // ─────────────────────────────────────────────
// // // MAIN GALLERY COMPONENT
// // // ─────────────────────────────────────────────
// // function Gallery() {

// //     const [activeFilter, setActiveFilter] = useState("all");
// //     const [fading, setFading] = useState(false);
// //     const [visibleCells, setVisibleCells] = useState(galleryData["all"]);

// //     // On button click: fade out → swap data → fade in
// //     function handleFilter(key) {
// //         if (key === activeFilter) return;

// //         setFading(true);

// //         setTimeout(function() {
// //             setActiveFilter(key);
// //             setVisibleCells(galleryData[key]);
// //             setFading(false);
// //         }, 250);
// //     }

// //     return (
// //         <section className="w-full bg-[#0A0A0A] flex flex-col items-center gap-20 py-50">

// //             {/* === HEADER === */}
// //             <div className="w-[90%] flex flex-col items-center gap-5 text-center">

// //                 <p className="text-[12px] leading-4 font-normal uppercase text-[#C09D59] tracking-[4.8px]  font-inter">
// //                     Visual Journal
// //                 </p>

// //                 <h1 className="text-[60px] font-thin leading-18 text-[#F8F6F1]  font-cormorant">
// //                     The <span className="italic">Gallery</span>
// //                 </h1>

// //                 {/* Decorator */}
// //                 <div className="flex items-center justify-center gap-3.75">
// //                     <div className="w-11.75 h-px bg-linear-to-r from-[#0A0A0A] to-[#735E35]" />
// //                     <div className="w-1.5 h-1.5 rounded-full bg-[#735E35]" />
// //                     <div className="w-11.75 h-px bg-linear-to-l from-[#0A0A0A] to-[#735E35]" />
// //                 </div>

// //             </div>

// //             {/* === BUTTONS + GRID WRAPPER === */}
// //             <div className="w-[90%] flex flex-col items-center gap-12.5">

// //                 {/* Filter Buttons */}
// //                 <div className="flex gap-1.75">
// //                     {FILTERS.map(function(filter) {
// //                         const isActive = activeFilter === filter.key;
// //                         return (
// //                             <button
// //                                 key={filter.key}
// //                                 onClick={function() { handleFilter(filter.key); }}
// //                                 className={[
// //                                     "text-[12px] font-normal leading-4 tracking-[1.8px] uppercase px-5 py-2.5 border-0 transition-all duration-500 cursor-pointer",
// //                                     isActive
// //                                         ? "bg-[#C09D59] text-[#0A0A0A]"
// //                                         : "bg-transparent text-[#988C81] hover:text-white"
// //                                 ].join(" ")}
// //                             >
// //                                 {filter.label}
// //                             </button>
// //                         );
// //                     })}
// //                 </div>

// //                 {/* Image Grid */}
// //                 <div
// //                     className="w-full grid grid-cols-3 gap-3.75 transition-opacity duration-250 ease-in-out"
// //                     style={{ opacity: fading ? 0 : 1 }}
// //                 >
// //                     {visibleCells.map(function(cell, i) {
// //                         return <GalleryCell key={i} cell={cell} />;
// //                     })}
// //                 </div>

// //             </div>

// //         </section>

        
// //     );
// // }

// // export default Gallery;













// import { useState, useEffect } from "react";
// import galleryData from "../../Feature"
// import { refreshScrollReveal } from "../../lib/scrollReveal.js";
// // import galleryData from "../Feature.js";

// // === FILTER BUTTONS CONFIG ===
// const FILTERS = [
//     { label: "All",          key: "all"     },
//     { label: "Cuisine",      key: "cuisine" },
//     { label: "Ambience",     key: "ambience"},
//     { label: "Bar & Cellar", key: "bar"     },
//     { label: "The Kitchen",  key: "kitchen" },
// ];

// // ─────────────────────────────────────────────
// // CELL COMPONENT
// // Renders either a solo image or a .larger stack
// // ─────────────────────────────────────────────
// function GalleryCell({ cell, delay }) {

//     if (cell.type === "solo") {
//         return (
//             <div data-reveal data-delay={delay} className="w-full overflow-hidden">
//                 <img
//                     src={cell.src}
//                     alt={cell.alt}
//                     className="w-full block object-cover transition-transform duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.07]"
//                 />
//             </div>
//         );
//     }

//     if (cell.type === "larger") {
//         return (
//             <div data-reveal data-delay={delay} className="flex flex-col gap-3.75">
//                 {cell.images.map(function(img, i) {
//                     return (
//                         <div key={i} className="w-full overflow-hidden">
//                             <img
//                                 src={img.src}
//                                 alt={img.alt}
//                                 className="w-full block object-cover transition-transform duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.07]"
//                             />
//                         </div>
//                     );
//                 })}
//             </div>
//         );
//     }
// }

// // ─────────────────────────────────────────────
// // MAIN GALLERY COMPONENT
// // ─────────────────────────────────────────────
// function Gallery() {

//     const [activeFilter, setActiveFilter] = useState("all");
//     const [fading, setFading] = useState(false);
//     const [visibleCells, setVisibleCells] = useState(galleryData["all"]);

//     // Re-scan for [data-reveal] elements whenever the grid content changes
//     // (initial mount + every filter swap)
//     useEffect(() => {
//         refreshScrollReveal();
//     }, [visibleCells]);

//     // On button click: fade out → swap data → fade in
//     function handleFilter(key) {
//         if (key === activeFilter) return;

//         setFading(true);

//         setTimeout(function() {
//             setActiveFilter(key);
//             setVisibleCells(galleryData[key]);
//             setFading(false);
//         }, 250);
//     }

//     return (
//         <section className="w-full bg-[#0A0A0A] flex flex-col items-center gap-20 py-50">

//             {/* === HEADER === */}
//             <div className="w-[90%] flex flex-col items-center gap-5 text-center">

//                 <p data-reveal className="text-[12px] leading-4 font-normal uppercase text-[#C09D59] tracking-[4.8px]  font-inter">
//                     Visual Journal
//                 </p>

//                 <h1 data-reveal data-delay="80" className="text-[60px] font-thin leading-18 text-[#F8F6F1]  font-cormorant">
//                     The <span className="italic">Gallery</span>
//                 </h1>

//                 {/* Decorator */}
//                 <div data-reveal data-delay="160" className="flex items-center justify-center gap-3.75">
//                     <div className="w-11.75 h-px bg-linear-to-r from-[#0A0A0A] to-[#735E35]" />
//                     <div className="w-1.5 h-1.5 rounded-full bg-[#735E35]" />
//                     <div className="w-11.75 h-px bg-linear-to-l from-[#0A0A0A] to-[#735E35]" />
//                 </div>

//             </div>

//             {/* === BUTTONS + GRID WRAPPER === */}
//             <div className="w-[90%] flex flex-col items-center gap-12.5">

//                 {/* Filter Buttons */}
//                 <div data-reveal data-delay="240" className="flex gap-1.75">
//                     {FILTERS.map(function(filter) {
//                         const isActive = activeFilter === filter.key;
//                         return (
//                             <button
//                                 key={filter.key}
//                                 onClick={function() { handleFilter(filter.key); }}
//                                 className={[
//                                     "text-[12px] font-normal leading-4 tracking-[1.8px] uppercase px-5 py-2.5 border-0 transition-all duration-500 cursor-pointer",
//                                     isActive
//                                         ? "bg-[#C09D59] text-[#0A0A0A]"
//                                         : "bg-transparent text-[#988C81] hover:text-white"
//                                 ].join(" ")}
//                             >
//                                 {filter.label}
//                             </button>
//                         );
//                     })}
//                 </div>

//                 {/* Image Grid */}
//                 <div
//                     className="w-full grid grid-cols-3 gap-3.75 transition-opacity duration-250 ease-in-out"
//                     style={{ opacity: fading ? 0 : 1 }}
//                 >
//                     {visibleCells.map(function(cell, i) {
//                         return <GalleryCell key={i} cell={cell} delay={String((i % 3) * 80)} />;
//                     })}
//                 </div>

//             </div>

//         </section>

        
//     );
// }

// export default Gallery;










import { useState, useEffect } from "react";
import galleryData from "../../Feature";
import { refreshScrollReveal } from "../../lib/scrollReveal.js";

// === FILTER BUTTONS CONFIG ===
const FILTERS = [
    { label: "All",          key: "all"     },
    { label: "Cuisine",      key: "cuisine" },
    { label: "Ambience",     key: "ambience"},
    { label: "Bar & Cellar", key: "bar"     },
    { label: "The Kitchen",  key: "kitchen" },
];

// ─────────────────────────────────────────────
// CELL COMPONENT
// ─────────────────────────────────────────────
function GalleryCell({ cell, delay }) {

    if (cell.type === "solo") {
        return (
            <div data-reveal data-delay={delay} className="w-full overflow-hidden">
                <img
                    src={cell.src}
                    alt={cell.alt}
                    className="w-full block object-cover transition-transform duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.07]"
                />
            </div>
        );
    }

    if (cell.type === "larger") {
        return (
            <div data-reveal data-delay={delay} className="flex flex-col gap-2.5 md:gap-3.75">
                {cell.images.map(function(img, i) {
                    return (
                        <div key={i} className="w-full overflow-hidden">
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full block object-cover transition-transform duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.07]"
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}

// ─────────────────────────────────────────────
// MAIN GALLERY COMPONENT
// ─────────────────────────────────────────────
function Gallery() {

    const [activeFilter, setActiveFilter] = useState("all");
    const [fading, setFading]             = useState(false);
    const [visibleCells, setVisibleCells] = useState(galleryData["all"]);

    useEffect(() => {
        refreshScrollReveal();
    }, [visibleCells]);

    function handleFilter(key) {
        if (key === activeFilter) return;
        setFading(true);
        setTimeout(function() {
            setActiveFilter(key);
            setVisibleCells(galleryData[key]);
            setFading(false);
        }, 250);
    }

    return (
        <section className="w-full bg-[#0A0A0A] flex flex-col items-center gap-12 md:gap-20 py-16 md:py-50">

            {/* === HEADER === */}
            <div className="w-[90%] flex flex-col items-center gap-4 md:gap-5 text-center">

                <p
                    data-reveal
                    className="text-[10px] md:text-[12px] leading-4 font-normal uppercase text-[#C09D59] tracking-[4.8px] font-inter"
                >
                    Visual Journal
                </p>

                <h1
                    data-reveal
                    data-delay="80"
                    className="text-[40px] sm:text-[52px] md:text-[60px] font-thin leading-tight md:leading-18 text-[#F8F6F1] font-cormorant"
                >
                    The <span className="italic">Gallery</span>
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

            </div>

            {/* === BUTTONS + GRID WRAPPER === */}
            <div className="w-[90%] flex flex-col items-center gap-8 md:gap-12.5">

                {/* Filter Buttons — scrollable row on mobile */}
                <div
                    data-reveal
                    data-delay="240"
                    className="flex gap-1.5 md:gap-1.75 overflow-x-auto w-full justify-start md:justify-center pb-1 md:pb-0 scrollbar-none"
                >
                    {FILTERS.map(function(filter) {
                        const isActive = activeFilter === filter.key;
                        return (
                            <button
                                key={filter.key}
                                onClick={function() { handleFilter(filter.key); }}
                                className={[
                                    "text-[10px] md:text-[12px] font-normal leading-4 tracking-[1.8px] uppercase",
                                    "px-3.5 py-2 md:px-5 md:py-2.5",
                                    "border-0 transition-all duration-500 cursor-pointer whitespace-nowrap flex-shrink-0",
                                    isActive
                                        ? "bg-[#C09D59] text-[#0A0A0A]"
                                        : "bg-transparent text-[#988C81] hover:text-white"
                                ].join(" ")}
                            >
                                {filter.label}
                            </button>
                        );
                    })}
                </div>

                {/* Image Grid — 1 col mobile → 2 col tablet → 3 col desktop */}
                <div
                    className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-3.75 transition-opacity duration-250 ease-in-out"
                    style={{ opacity: fading ? 0 : 1 }}
                >
                    {visibleCells.map(function(cell, i) {
                        return (
                            <GalleryCell
                                key={i}
                                cell={cell}
                                delay={String((i % 3) * 80)}
                            />
                        );
                    })}
                </div>

            </div>

        </section>
    );
}

export default Gallery;