// === GALLERY DATA ===

import steak        from "./assets/steak.webp";
import one          from "./assets/one.webp";
import box          from "./assets/box.webp";
import table_two    from "./assets/table_two.webp";
import table_wine   from "./assets/table_wine.webp";
import table_three2 from "./assets/table_three_(2).webp";
import d1405d       from "./assets/d1405d55c_generated_b5ca51b0.webp";
import img13e627    from "./assets/13e627c52_generated_2c69d77a.webp";
import table_three1 from "./assets/table_three_(1).webp";
import img281eda    from "./assets/281eda289_generated_5b04b80e.webp";
import img6f2ed     from "./assets/6f2ed860a_generated_1002ad9c.webp";
import table_one    from "./assets/table_one.webp";

const features = {

    all: [
        { type: "larger", images: [
            { src: steak,     alt: "Steak dish"    },
            { src: one,       alt: "Plated dish"   }
        ]},
        { type: "larger", images: [
            { src: box,       alt: "Boxed dish"    },
            { src: table_two, alt: "Table setting" }
        ]},
        { type: "solo", src: table_wine,   alt: "Wine on table" },
        { type: "larger", images: [
            { src: table_three2, alt: "Table three" },
            { src: d1405d,       alt: "Interior"    }
        ]},
        { type: "solo", src: img13e627, alt: "Kitchen" },
        { type: "larger", images: [
            { src: table_three1, alt: "Table setting" }
        ]},
        { type: "solo", src: img281eda, alt: "Bar" },
        { type: "larger", images: [
            { src: img6f2ed,  alt: "Cuisine"   },
            { src: table_one, alt: "Table one" }
        ]}
    ],

    cuisine: [
        { type: "larger", images: [
            { src: steak, alt: "Steak dish"  },
            { src: one,   alt: "Plated dish" }
        ]},
        { type: "larger", images: [
            { src: d1405d, alt: "Interior"   },
            { src: box,    alt: "Boxed dish" }
        ]},
        { type: "solo", src: img6f2ed, alt: "Cuisine" }
    ],

    ambience: [
        { type: "larger", images: [
            { src: table_three2, alt: "Table setting" },
            { src: table_two,    alt: "Table two"     }
        ]},
        { type: "larger", images: [
            { src: table_one,    alt: "Table one"   },
            { src: table_three1, alt: "Table three" }
        ]}
    ],

    bar: [
        { type: "larger", images: [
            { src: img281eda, alt: "Bar" }
        ]},
        { type: "larger", images: [
            { src: table_wine, alt: "Wine cellar" }
        ]}
    ],

    kitchen: [
        { type: "larger", images: [
            { src: img13e627, alt: "The kitchen" }
        ]}
    ]
};

export default features;