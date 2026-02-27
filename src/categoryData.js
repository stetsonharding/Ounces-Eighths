// src/data/categoryData.js
import preRoll from "../src/assets/products/preRoll.svg"
import Concentrates from "../src/assets/products/concentrates.svg"
import Edibles from "../src/assets/products/Edibles.svg"
import Flower from "../src/assets/products/Flower.svg"
import Tinctures from "../src/assets/products/Tinctures.svg"
import Vape from "../src/assets/products/Vape.svg"
import Topicals from "../src/assets/products/Topicals.svg"



export const categories = [
  { id: "flower", name: "Flower", image: Flower, href: "https://selection.thekushery.rocks/orderOnline/evergreenWay/menu" },
  { id: "preroll", name: "Pre-Roll", image: preRoll, href: ""  },
  { id: "edibles", name: "Edibles", image: Edibles, href: "https://selection.thekushery.rocks/orderOnline/evergreenWay/menu/edible"  },
  { id: "concentrates", name: "Concentrates", image: Concentrates, href: ""  },
  { id: "tinctures", name: "Tinctures", image: Tinctures, href: ""  },
  { id: "topicals", name: "Topicals", image: Topicals, href: ""  },
  { id: "vape", name: "Vape", image: Vape, href: ""  },
  { id: "liquid-edibles", name: "Liquid Edibles", image: Concentrates, href: ""  },
  { id: "deals", name: "Deals", image: preRoll, href: ""  },
];
