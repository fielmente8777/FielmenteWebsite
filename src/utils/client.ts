import { StaticImageData } from "next/image";
import Client1 from "../../public/images/ALLURE-NAINITAL-LOGO.png";
import Client2 from "../../public/images/Client2.png";
import Client3 from "../../public/images/Client3.png";
import Client4 from "../../public/images/BG-logo.jpg";
import Client5 from "../../public/images/BURKEY-BLACK-LOGO-01.png";
import Client6 from "../../public/images/Client6.png";
// import Client7 from "../../public/images/D&G-logo-03-1.png";
import Client8 from "../../public/images/DOUBLE-TREE-LOGO-01.png";
import Client9 from "../../public/images/Dunagiri-Logo-Square.png";
// import Client10 from "../../public/images/HUMRAHI-TRAVELS-LOGO.jpg";
import Client11 from "../../public/images/Hyatt-regency-logo.jpg";
import Client12 from "../../public/images/JW-Mariott-logo.png";
import Client13 from "../../public/images/Novotel-Logo.png";
import Client14 from "../../public/images/Radisson-Logo.png";
import Client15 from "../../public/images/Ramada-Logo.jpg";
import Client16 from "../../public/images/Taj-hotel-logo.png";
// import Client17 from "../../../public/images/The_Park_Hotels.jpg";
import Client18 from "../../public/images/peace@peak.jpg";
import Client19 from "../../public/images/logo_uv-removebg-preview-e1701685619775.webp";
import Client20 from "../../public/images/bunker-house.jpg";
import Client21 from "../../public/images/Red-Rock-villa.jpg";
import Client22 from "../../public/images/wabi-sabi.jpg";
import Client23 from "../../public/images/ebc.jpg";
import Client24 from "../../public/images/Riviera.jpg";
import Client25 from "../../public/images/footerspicelogo.png";
import Client26 from "../../public/images/chefkenzo.png";
import Client27 from "../../public/images/eracamp.png";
import Client28 from "../../public/images/Grandview_resort.jpg";
import Client29 from "../../public/clientsLogo/468F.png";
import Client30 from "../../public/clientsLogo/Aaoji.png";
import Client31 from "../../public/clientsLogo/STERNWHEELER.jpg";
import Client32 from "../../public/clientsLogo/Season-suites.png";
import Client33 from "../../public/clientsLogo/emeraldtrail.png";
import Client34 from "../../public/clientsLogo/kiyostay.png";
import Client35 from "../../public/clientsLogo/lakehill.png";
import Client36 from "../../public/clientsLogo/maati.png";
import Client37 from "../../public/clientsLogo/sprav.jpg";
import Client38 from "../../public/clientsLogo/Park Cafe.png";
import Client39 from "../../public/clientsLogo/deuropa.png";
import Client40 from "../../public/clientsLogo/dhruvees.png";
import Client41 from "../../public/clientsLogo/dunagiri-retreat.png";
import Client42 from "../../public/clientsLogo/hilton.png";
import Client43 from "../../public/clientsLogo/hotel-platinum-shravasti.png";
import Client44 from "../../public/clientsLogo/mahabir-palace.png";
import Client45 from "../../public/clientsLogo/oak-climbing.png";
import Client46 from "../../public/clientsLogo/peace@peak.png";
import Client47 from "../../public/clientsLogo/tents&trails.png";
import Client48 from "../../public/clientsLogo/minimalist.png";

export interface ClientData {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  show?: boolean;
}

export interface ChooseCardProsData {
  title: string;
  subtitle: string;
  Icon: React.ReactNode;
}

export const ClientImages: ClientData[] = [
  {
    src: Client1,
    alt: "Client1",
    className: "#000000",
    show: true,
  },
  {
    src: Client2,
    alt: "Client2",
    className: "#ffffff",
  },
  {
    src: Client3,
    alt: "Client3",
  },
  {
    src: Client4,
    alt: "Client4",
  },
  {
    src: Client5,
    alt: "Client5",
    show: false,
  },
  {
    src: Client6,
    alt: "Client6",
  },
  {
    src: Client8,
    alt: "Client8",
  },
  {
    src: Client9,
    alt: "Client9",
  },
  // {
  //   src: Client10,
  //   alt: "Client10",
  // },
  {
    src: Client11,
    alt: "Client11",
  },
  {
    src: Client12,
    alt: "Client12",
  },
  {
    src: Client13,
    alt: "Client13",
  },
  {
    src: Client14,
    alt: "Client14",
  },
  {
    src: Client15,
    alt: "Client15",
  },
  {
    src: Client16,
    alt: "Client16",
  },
  // {
  //   src: Client17,
  //   alt: "Client17",
  // },
  {
    src: Client18,
    alt: "Client18",
  },
  {
    src: Client19,
    alt: "Client19",
    show: false,
  },
  {
    src: Client20,
    alt: "Client20",
    show: false,
  },
  {
    src: Client21,
    alt: "Client21",
  },
  {
    src: Client22,
    alt: "Client22",
  },
  {
    src: Client23,
    alt: "Client23",
  },
  {
    src: Client24,
    alt: "Client24",
  },
  {
    src: Client25,
    alt: "Client25",
    className: "#21413e",
    show: false,
  },
  {
    src: Client26,
    alt: "Client26",
    show: false,
  },
  {
    src: Client27,
    alt: "Client27",
  },
  {
    src: Client28,
    alt: "Client28",
  },
  {
    src: Client29,
    alt: "Client29",
    show: false,
  },
  {
    src: Client30,
    alt: "Client30",
    className: "#000000",
    show: false,
  },
  {
    src: Client31,
    alt: "Client31",
  },
  {
    src: Client32,
    alt: "Client32",
  },
  {
    src: Client33,
    alt: "Client33",
  },
  {
    src: Client34,
    alt: "Client34",
  },
  {
    src: Client35,
    alt: "Client35",
    
  },
  {
    src: Client36,
    alt: "Client36",
    className: "#000000",
  },
  {
    src: Client37,
    alt: "Client37",
    className: "#000000",
  },
  {
    src: Client38,
    alt: "Client38",
    className: "#ffffff",
    show: false,
  },
  {
    src: Client39,
    alt: "Client39",
  },
  {
    src: Client40,
    alt: "Client40",
    className: "#000000",
    show: false,
  },
  {
    src: Client41,
    alt: "Client41",
  },
  {
    src: Client42,
    alt: "Client42",
  },
  {
    src: Client43,
    alt: "Client43",
  },
  {
    src: Client44,
    alt: "Client44",
    className: "#fff",
  },
  {
    src: Client45,
    alt: "Client45",
  },
  {
    src: Client46,
    alt: "Client46",
  },
  {
    src: Client47,
    alt: "Client47",
  },
  {
    src: Client48,
    alt: "Client48",
    className: "#ffffffbe",
  },
  {
    src: "/clientsLogo/magnolia.png",
    alt: "Client49",
    className: "#000000",
  },
  {
    src: "/clientsLogo/white-ridge.png",
    alt: "Client50",
  },
  {
    src: "/clientsLogo/avr.jpg",
    alt: "Client51",
    className: "#ffffff",
  },
  {
    src: "/clientsLogo/tulipInn.png",
    alt: "Client52",
  },
  {
    src: "/clientsLogo/Hotel-Green-Castle.jpg",
    alt: "Client53",
  },
  {
    src: "/clientsLogo/aqua-dunhinda.jpg",
    alt: "Client54",
  },
  {
    src: "/clientsLogo/shreeiyengar.png",
    alt: "Client55",
    show: false,
  },
  {
    src: "/clientsLogo/kamalfarms.png",
    alt: "Client56",
  },
  {
    src: "/clientsLogo/petal-panyaram.png",
    alt: "Client57",
    show: false,
  },
  {
    src: "/clientsLogo/7Mile.png",
    alt: "Client58",
    show: false,
  },
  {
    src: "/clientsLogo/The-Jharna.png",
    alt: "Client59",
  },
  {
    src: "/clientsLogo/chocolate-room.png",
    alt: "Client60",
    show: false,
  },
  {
    src: "/clientsLogo/kumaon-bliss.jpg",
    alt: "Client61",
  },
  {
    src: "/clientsLogo/tailgaters.png",
    alt: "Client63",
    show: false,
  },
  {
    src: "/clientsLogo/outer-ring.png",
    alt: "Client64",
  },
  {
    src: "/clientsLogo/luxuryvibes.jpg",
    alt: "Client65",
  },
  {
    src: "/clientsLogo/Mango_grove_Logo.avif",
    alt: "Client66",
    className: "#FFCD62",
  },
  {
    src: "/clientsLogo/naturoville.png",
    alt: "Client67",
    className: "#004c5b",
  },
  {
    src: "/clientsLogo/maira.jpeg",
    alt: "Client68",
  },
  {
    src: "/clientsLogo/campton.png",
    alt: "Client69",
  },
  {
    src: "/clientsLogo/ahistay-logo.png",
    alt: "Client70",
  },
  {
    src: "/clientsLogo/muktkeshi-logo.png",
    alt: "Client71",
  },
  {
    src: "/clientsLogo/MIRAMAR-logo.jpg",
    alt: "Client72",
  },
  {
    src: "/clientsLogo/nature-on-the-rocks.webp",
    alt: "Client73",
  },
  {
    src: "/clientsLogo/one-off.png",
    alt: "Client74",
    className: "#FBF6E3",
  },
  {
    src: "/clientsLogo/AravatLogo.png",
    alt: "Client75",
  },
  {
    src: "/clientsLogo/opera-house.png",
    alt: "Client76",
    className: "#B39C4D",
  },
  {
    src: "/clientsLogo/colonels-resort.png",
    alt: "Client77",
    className: "#2F4B26",
  },
];
