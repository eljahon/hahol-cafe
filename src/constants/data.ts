import { ISelectData, TLocale } from "@/types";
import { StaticImageData } from "next/image";

import bannerImg from "@/assets/imgs/banner-img.png";
import bannerImg2 from "@/assets/imgs/banner-img-2.png";
import bannerImg3 from "@/assets/imgs/banner-img-3.png";
import {
  cardImg1,
  cardImg2,
  cardImg3,
  cardImg4,
  cardImg5,
  cardImg6,
  cardImg7,
  cardImg8,
} from "@/constants";
import CategoryImg1 from "@/assets/imgs/category-img.png";
import CategoryImg2 from "@/assets/imgs/category-img-2.png";
import CategoryImg3 from "@/assets/imgs/category-img-3.png";
import CategoryImg4 from "@/assets/imgs/category-img-4.png";
import CategoryImg5 from "@/assets/imgs/category-img-5.png";
import CategoryImg6 from "@/assets/imgs/category-img-6.png";
import CategoryImg7 from "@/assets/imgs/category-img-7.png";
import CategoryImg8 from "@/assets/imgs/category-img-8.png";
import CategoryImg9 from "@/assets/imgs/category-img-9.png";
import CategoryImg10 from "@/assets/imgs/category-img-10.png";
import CategoryImg11 from "@/assets/imgs/category-img-11.png";
import CategoryImg12 from "@/assets/imgs/category-img-12.png";

export const categoryImages = [
  {
    id: 1,
    src: CategoryImg1,
    title: "dessert",
  },
  {
    id: 2,
    src: CategoryImg2,
    title: "arab",
  },
  {
    id: 3,
    src: CategoryImg3,
    title: "turksih",
  },
  {
    id: 4,
    src: CategoryImg4,
    title: "middleEast",
  },
  {
    id: 5,
    src: CategoryImg5,
    title: "wrap",
  },
  {
    id: 6,
    src: CategoryImg6,
    title: "pizza",
  },
  {
    id: 7,
    src: CategoryImg7,
    title: "burger",
  },
  {
    id: 8,
    src: CategoryImg8,
    title: "chicken",
  },
  {
    id: 9,
    src: CategoryImg9,
    title: "kebab",
  },
  {
    id: 10,
    src: CategoryImg10,
    title: "plov",
  },
  {
    id: 11,
    src: CategoryImg11,
    title: "steak",
  },
  {
    id: 12,
    src: CategoryImg12,
    title: "somsa",
  },
];
export const locales: TLocale[] = ["uz", "en", "ru"];
export const localesData: ISelectData<TLocale>[] = [
  { value: "uz", label: "Uz", icon: "uz" },
  { value: "ru", label: "Ru", icon: "ru" },
  { value: "en", label: "En" , icon: "gb"},
];

export const loadingMockData: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
];

export const radioData = [
  {label: "small", value: "extraFree", price: 'extraFree'},
  {label: "medium", value: "medium", price: '+1.500'},
  {label: "large", value: "large", price: '+2.500'},
  {label: "extraLarge", value: "extraLarge", price: '+3.500'},
]
export const checkboxData = [
  {label: "original", value: "original", price: 'extraFree'},
  {label: "onion", value: "onion", price: '+1.500'},
  {label: "olives", value: "olives", price: '+2.500'},
  {label: "souse", value: "souse", price: '+3.500'},
]
export const bannerData: StaticImageData[] = [
  bannerImg,
  bannerImg2,
  bannerImg3,
];
export interface IProductCardItemsType {
  id: number;
  img: string | StaticImageData;
  title: string;
  price: string;
  salePrice: string;
  restaurantName: string;
}
export const productCardItems: IProductCardItemsType[] = [
  {
    id: 1,
    img: cardImg1,
    title: "biryani",
    price: "15 000",
    salePrice: "12 500",
    restaurantName: "kebabHose",
  },
  {
    id: 2,
    img: cardImg2,
    title: "shawarma",
    price: "12 000",
    salePrice: "9 500",
    restaurantName: "asianHalal",
  },
  {
    id: 3,
    img: cardImg3,
    title: "shashlik",
    price: "8 000",
    salePrice: "5 500",
    restaurantName: "samarkandCafe",
  },
  {
    id: 4,
    img: cardImg4,
    title: "mediterranean",
    price: "18 000",
    salePrice: "10 900",
    restaurantName: "tashkentBurger",
  },
  {
    id: 5,
    img: cardImg5,
    title: "chickenbiryani",
    price: "12 5000",
    salePrice: "10 500",
    restaurantName: "cairoHalal",
  },
  {
    id: 6,
    img: cardImg6,
    title: "satayset",
    price: "15 000",
    salePrice: "18 000",
    restaurantName: "noodleHalal",
  },
  {
    id: 7,
    img: cardImg7,
    title: "hummus",
    price: "10 000",
    salePrice: "7 500",
    restaurantName: "cairoHalal",
  },
  {
    id: 8,
    img: cardImg8,
    title: "hummusset",
    price: "13 500",
    salePrice: "18 000",
    restaurantName: "asianHalal",
  },
];

// export const regions = [
//   {
//     id: 1,
//     label: 'Andijon',
//     value: 'Andijon',
//   },
//   {
//     id: 2,
//     label: 'Buxoro',
//     value: 'Buxoro',
//   },
//   {
//     id: 3,
//     label: "Farg'ona",
//     value: "Farg'ona",
//   },
//   {
//     id: 4,
//     label: 'Jizzax',
//     value: 'Jizzax',
//   },
//   {
//     id: 5,
//     label: 'Namangan',
//     value: 'Namangan',
//   },
//   {
//     id: 6,
//     label: 'Navoiy',
//     value: 'Navoiy',
//   },
//   {
//     id: 7,
//     label: 'Qashqadaryo',
//     value: 'Qashqadaryo',
//   },
//   {
//     id: 8,
//     label: "Qoraqalpog'iston",
//     value: "Qoraqalpog'iston",
//   },
//   {
//     id: 9,
//     label: 'Samarqand',
//     value: 'Samarqand',
//   },
//   {
//     id: 10,
//     label: 'Sirdaryo',
//     value: 'Sirdaryo',
//   },
//   {
//     id: 11,
//     label: 'Surxondaryo',
//     value: 'Surkhandarya',
//   },
//   {
//     id: 13,
//     label: 'Toshkent viloyati',
//     value: 'Toshkent viloyati',
//   },
//   {
//     id: 12,
//     label: 'Toshkent shahri',
//     value: 'Toshkent shahri',
//   },
//   {
//     id: 14,
//     label: 'Xorazm',
//     value: 'Xorazm',
//   },
// ];
// export const subRegions = [
//   {
//     id: 'Andijon',
//     subregion: [
//       {
//         id: 1,
//         label: 'PAXTAOBOD BTS',
//         value: 'PAXTAOBOD BTS',
//       },
//       {
//         id: 2,
//         label: 'ANDIJON ESKI SHAHAR',
//         value: 'ANDIJON ESKI SHAHAR',
//       },
//       {
//         id: 3,
//         label: 'IZBOSKAN',
//         value: 'IZBOSKAN',
//       },
//       {
//         id: 4,
//         label: 'ASAKA BTS',
//         value: 'ASAKA BTS',
//       },
//       {
//         id: 5,
//         label: 'SHAXRIXON BTS',
//         value: 'SHAXRIXON BTS',
//       },
//       {
//         id: 6,
//         label: 'ANDIJON AVTOVOKZAL',
//         value: 'ANDIJON AVTOVOKZAL',
//       },
//     ],
//   },
//   {
//     id: 'Buxoro',
//     subregion: [
//       {
//         id: 1,
//         label: 'BUXORO GORGAZ',
//         value: 'BUXORO GORGAZ',
//       },
//       {
//         id: 2,
//         label: 'KOGON BTS',
//         value: 'KOGON BTS',
//       },
//       {
//         id: 3,
//         label: 'BUXORO BTS',
//         value: 'BUXORO BTS',
//       },
//       {
//         id: 4,
//         label: 'BUXORO 5-MKR',
//         value: 'BUXORO 5-MKR',
//       },
//     ],
//   },
//   {
//     id: "Farg'ona",
//     subregion: [
//       {
//         id: 1,
//         label: 'BESHARIQ BTS',
//         value: 'BESHARIQ BTS',
//       },
//       {
//         id: 2,
//         label: 'QO`QON (CAVUM)',
//         value: 'QO`QON (CAVUM)',
//       },
//       {
//         id: 3,
//         label: 'QO`QON BTS',
//         value: 'QO`QON BTS',
//       },
//       {
//         id: 4,
//         label: 'QO`QON YANGI BOZOR',
//         value: 'QO`QON YANGI BOZOR',
//       },
//       {
//         id: 5,
//         label: 'QUVASOY BTS',
//         value: 'QUVASOY BTS',
//       },
//       {
//         id: 6,
//         label: 'TOSHLOQ',
//         value: 'TOSHLOQ',
//       },
//       {
//         id: 7,
//         label: "MARG'ILON BTS",
//         value: "MARG'ILON BTS",
//       },
//       {
//         id: 8,
//         label: 'FARG`ONA BTS',
//         value: 'FARG`ONA BTS',
//       },
//     ],
//   },
//   {
//     id: 'Jizzax',
//     subregion: [
//       {
//         id: 1,
//         label: 'JIZZAX',
//         value: 'JIZZAX',
//       },
//     ],
//   },
//   {
//     id: 'Namangan',
//     subregion: [
//       {
//         id: 1,
//         label: 'KOSONSOY BTS',
//         value: 'KOSONSOY BTS',
//       },
//       {
//         id: 2,
//         label: 'CHUST BTS',
//         value: 'CHUST BTS',
//       },
//       {
//         id: 3,
//         label: "TO'RAQO'RG'ON BTS",
//         value: "TO'RAQO'RG'ON BTS",
//       },
//       {
//         id: 4,
//         label: 'NAMANGAN BTS',
//         value: 'NAMANGAN BTS',
//       },
//     ],
//   },
//   {
//     id: 'Navoiy',
//     subregion: [
//       {
//         id: 1,
//         label: 'NAVOI (VOSXOD)',
//         value: 'NAVOI (VOSXOD)',
//       },
//       {
//         id: 2,
//         label: 'ZARAFSHON BTS',
//         value: 'ZARAFSHON BTS',
//       },
//       {
//         id: 3,
//         label: 'NAVOI BTS',
//         value: 'NAVOI BTS',
//       },
//     ],
//   },
//   {
//     id: 'Qashqadaryo',
//     subregion: [
//       {
//         id: 1,
//         label: 'SHAHRISABZ BTS',
//         value: 'SHAHRISABZ BTS',
//       },
//       {
//         id: 2,
//         label: "G'UZOR BTS",
//         value: "G'UZOR BTS",
//       },
//       {
//         id: 3,
//         label: 'KARSHI BTS',
//         value: 'KARSHI BTS',
//       },
//     ],
//   },
//   {
//     id: "Qoraqalpog'iston",
//     subregion: [
//       {
//         id: 1,
//         label: 'NUKUS BTS',
//         value: 'NUKUS BTS',
//       },
//       {
//         id: 2,
//         label: "QO'NG'IROT BTS",
//         value: "QO'NG'IROT BTS",
//       },
//     ],
//   },
//   {
//     id: 'Samarqand',
//     subregion: [
//       {
//         id: 1,
//         label: 'JOMBOY BTS',
//         value: 'JOMBOY BTS',
//       },
//       {
//         id: 2,
//         label: 'PAYARIQ BTS',
//         value: 'PAYARIQ BTS',
//       },
//       {
//         id: 3,
//         label: "KATTAQO'RG'ON BTS",
//         value: "KATTAQO'RG'ON BTS",
//       },
//       {
//         id: 4,
//         label: 'URGUT BTS NEW',
//         value: 'URGUT BTS NEW',
//       },
//       {
//         id: 5,
//         label: 'BULUNG`UR',
//         value: 'BULUNG`UR',
//       },
//       {
//         id: 6,
//         label: 'SAMARKAND BTS',
//         value: 'SAMARKAND BTS',
//       },
//       {
//         id: 7,
//         label: 'BTS DAHBET PVZ',
//         value: 'BTS DAHBET PVZ',
//       },
//       {
//         id: 8,
//         label: 'SAMARKAND (M BARAKA)',
//         value: 'SAMARKAND (M BARAKA)',
//       },
//       {
//         id: 9,
//         label: 'OQDARYO',
//         value: 'OQDARYO',
//       },
//     ],
//   },
//   {
//     id: 'Sirdaryo',
//     subregion: [
//       {
//         id: 1,
//         label: 'GULISTON BTS',
//         value: 'GULISTON BTS',
//       },
//     ],
//   },
//   {
//     id: 'Surxondaryo',
//     subregion: [
//       {
//         id: 1,
//         label: 'TERMEZ BTS',
//         value: 'TERMEZ BTS',
//       },
//       {
//         id: 2,
//         label: 'DENOV BTS',
//         value: 'DENOV BTS',
//       },
//     ],
//   },
//   {
//     id: 'Toshkent shahri',
//     subregion: [
//       {
//         id: 1,
//         label: 'CHILONZOR',
//         value: 'CHILONZOR',
//       },
//       {
//         id: 2,
//         label: 'QUSHBEGI BTS',
//         value: 'QUSHBEGI BTS',
//       },
//       {
//         id: 3,
//         label: 'FARHOD BTS',
//         value: 'FARHOD BTS',
//       },
//       {
//         id: 4,
//         label: 'YUNUSOBOD (UNIVERSAM)',
//         value: 'YUNUSOBOD (UNIVERSAM)',
//       },
//       {
//         id: 5,
//         label: 'PARKENT BTS',
//         value: 'PARKENT BTS',
//       },
//       {
//         id: 6,
//         label: 'SHAYXONTOHUR BTS',
//         value: 'SHAYXONTOHUR BTS',
//       },
//       {
//         id: 7,
//         label: 'OLMAZOR BTS',
//         value: 'OLMAZOR BTS',
//       },
//       {
//         id: 8,
//         label: 'ABU SAXIY',
//         value: 'ABU SAXIY',
//       },
//       {
//         id: 9,
//         label: 'BEK BARAKA',
//         value: 'BEK BARAKA',
//       },
//       {
//         id: 10,
//         label: 'MALIKA BOZOR',
//         value: 'MALIKA BOZOR',
//       },
//       {
//         id: 11,
//         label: "O'RIKZOR1 BTS",
//         value: "O'RIKZOR1 BTS",
//       },
//       {
//         id: 12,
//         label: 'UCHTEPA BTS',
//         value: 'UCHTEPA BTS',
//       },
//       {
//         id: 13,
//         label: 'YAKKASAROY BTS',
//         value: 'YAKKASAROY BTS',
//       },
//       {
//         id: 14,
//         label: 'MIROBOD BTS',
//         value: 'MIROBOD BTS',
//       },
//       {
//         id: 15,
//         label: 'SERGELI BTS',
//         value: 'SERGELI BTS',
//       },
//       {
//         id: 16,
//         label: 'OQTEPA BTS',
//         value: 'OQTEPA BTS',
//       },
//       {
//         id: 17,
//         label: "QO'YLIQ BTS",
//         value: "QO'YLIQ BTS",
//       },
//       {
//         id: 18,
//         label: 'MAKSIM GORKIY BTS',
//         value: 'MAKSIM GORKIY BTS',
//       },
//       {
//         id: 19,
//         label: 'YUNUSOBOD (SHAXRISTON)',
//         value: 'YUNUSOBOD (SHAXRISTON)',
//       },
//     ],
//   },
//   {
//     id: 'Toshkent viloyati',
//     subregion: [
//       {
//         id: 1,
//         label: 'ANGREN BTS',
//         value: 'ANGREN BTS',
//       },
//       {
//         id: 2,
//         label: 'OLMALIQ BTS',
//         value: 'OLMALIQ BTS',
//       },
//       {
//         id: 3,
//         label: 'CHIRCHIQ BTS',
//         value: 'CHIRCHIQ BTS',
//       },
//     ],
//   },
//   {
//     id: 'Xorazm',
//     subregion: [
//       {
//         id: 1,
//         label: 'XIVA',
//         value: 'XIVA',
//       },
//       {
//         id: 2,
//         label: 'URGENCH BTS',
//         value: 'URGENCH BTS',
//       },
//     ],
//   },
// ];
