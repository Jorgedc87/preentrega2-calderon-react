import { CatChow, CatOldPrince, CatProPlan, CatVitalCan, DogEukanuba, DogExcellent, DogOldPrince, DogProPlan } from "../assets/images/items";

export const catStoreItems = [
  {
    id: 1,
    name: "Cat Chow",
    price: 13900,
    description: "Alimentá a tu gato con el mejor alimento",
    image: CatChow,
    contain: "3kg",
    category: "gatos",
  },
  {
    id: 2,
    name: "Pro Plan",
    price: 48000,
    description: "Alimento Premium para gatos adultos",
    image: CatProPlan,
    contain: "3kg",
    category: "gatos",
  },
  {
    id: 3,
    name: "Old Prince",
    price: 15900,
    description: "Alimento para gatos adultos",
    image: CatOldPrince,
    contain: "3kg",
    category: "gatos",
  },
  {
    id: 4,
    name: "Vital Can",
    price: 47000,
    description: "Completo alimento para gatos adultos",
    image: CatVitalCan,
    contain: "14kg",
    category: "gatos",
  },
]

export const dogStoreItems = [
  {
    id: 5,
    name: "DogEukanuba",
    price: 12100,
    description: "Alimentá a tu perro con el mejor alimento",
    image: DogEukanuba,
    contain: "3kg",
    category: "perros",
  },
  {
    id: 6,
    name: "Pro Plan",
    price: 14000,
    description: "Alimento Premium para perros adultos",
    image: DogProPlan,
    contain: "3kg",
    category: "perros",
  },
  {
    id: 7,
    name: "Old Prince",
    price: 31900,
    description: "Alimento para perros adultos",
    image: DogOldPrince,
    contain: "14kg",
    category: "perros",
  },
  {
    id: 8,
    name: "Excellent",
    price: 32000,
    description: "Completo alimento para perros adultos",
    image: DogExcellent,
    contain: "14kg",
    category: "perros",
  },
]