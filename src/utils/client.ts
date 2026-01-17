// import Client7 from "../../public/images/D&G-logo-03-1.png";
// import Client10 from "../../public/images/HUMRAHI-TRAVELS-LOGO.jpg";
// import Client17 from "../../../public/images/The_Park_Hotels.jpg";

export interface ClientData {
  src: string ;
  alt: string;
  className?: string;
  show?: boolean;
  href?: string
}

export interface ChooseCardProsData {
  title: string;
  subtitle: string;
  Icon: React.ReactNode;
}

export const ClientImages: ClientData[] = [
  {
    src: "/clientsLogo/ALLURE-NAINITAL-LOGO.png",
    alt: "Client1",
    className: "#000000",
    show: true,
  },
  {
    src: "/clientsLogo/Client2.png",
    alt: "Client2",
    className: "#ffffff",
  },
  {
    src: "/clientsLogo/Client3.png",
    alt: "Client3",
    href:"https://marriott-hotels.marriott.com/"
  },
  {
    src: "/clientsLogo/BG-logo.jpg",
    alt: "Client4",
    href:"https://www.bhairahawagardenresort.com/"
  },
  {
    src: "/clientsLogo/BURKEY-BLACK-LOGO-01.png",
    alt: "Client5",
    show: false,
  },
  {
    src: "/clientsLogo/Client6.png",
    alt: "Client6",
    className: "#ffefef",
    href:"https://www.goldentulip.com/en-us/?sr=SEO_GOOGLE"
  },
  {
    src: "/clientsLogo/DOUBLE-TREE-LOGO-01.png",
    alt: "Client8",
    href:"https://www.hilton.com/en/brands/doubletree-by-hilton/"
  },
  {
    src: "/clientsLogo/Dunagiri-Logo-Square.png",
    alt: "Client9",
    href:"https://www.dunagiri.com/"
  },
  // {
  //   src: Client10,
  //   alt: "Client10",
  // },
  {
    src: "/clientsLogo/Hyatt-regency-logo.jpg",
    alt: "Client11",
    href:"https://www.hyatt.com/hyatt-regency/en-US"
  },
  {
    src: "/clientsLogo/JW-Mariott-logo.png",
    alt: "Client12",
    href:"https://jw-marriott.marriott.com/"
  },
  {
    src: "/clientsLogo/Novotel-Logo.png",
    alt: "Client13",
    href:"https://www.naturovillewellnessresort.com/"
  },
  {
    src: "/clientsLogo/Radisson-Logo.png",
    alt: "Client14",
  },
  {
    src: "/clientsLogo/Ramada-Logo.jpg",
    alt: "Client15",
    href:"https://www.wyndhamhotels.com/ramada"
  },
  {
    src: "/clientsLogo/Taj-hotel-logo.png",
    alt: "Client16",
    href:"https://www.tajhotels.com/en-in"
  },
  // {
  //   src: Client17,
  //   alt: "Client17",
  // },
  {
    src: "/clientsLogo/peace@peak.jpg",
    alt: "Client18",
  },
  {
    src: "/clientsLogo/logo_uv-removebg-preview-e1701685619775.webp",
    alt: "Client19",
    show: false,
    href:"https://www.urbanvenue.in/"
  },
  {
    src: "/clientsLogo/bunker-house.jpg",
    alt: "Client20",
    show: false,
    href:"https://thebunkerhouse.in/"
  },
  {
    src: "/clientsLogo/Red-Rock-villa.jpg",
    alt: "Client21",
  },
  {
    src: "/clientsLogo/wabi-sabi.jpg",
    alt: "Client22",
    href:"https://wabisabiresorts.com/"
  },
  {
    src: "/clientsLogo/ebc.jpg",
    alt: "Client23",
    href:"https://www.ebcmussoorie.com/"
  },
  {
    src: "/clientsLogo/Riviera.jpg",
    alt: "Client24",
    href:"https://www.rivieraresortrishikesh.com/"
  },
  {
    src: "/clientsLogo/footerspicelogo.png",
    alt: "Client25",
    className: "#21413e",
    show: false,
  },
  {
    src: "/clientsLogo/chefkenzo.png",
    alt: "Client26",
    show: false,
    href:"https://kenzok.com/"
  },
  {
    src: "/clientsLogo/eracamp.png",
    alt: "Client27",
    href:"https://eracamps.com/"
  },
  {
    src: "/clientsLogo/Grandview_resort.jpg",
    alt: "Client28",
  },
  {
    src: "/clientsLogo/468F.png",
    alt: "Client29",
    show: false,
    href:"https://468f.ca/"
  },
  {
    src: "/clientsLogo/Aaoji.png",
    alt: "Client30",
    className: "#000000",
    show: false,
    href:"https://www.aaojirestaurant.com/"
  },
  {
    src: "/clientsLogo/STERNWHEELER.jpg",
    alt: "Client31",
  },
  {
    src: "/clientsLogo/Season-suites.png",
    alt: "Client32",
    href:"https://www.seasonssuites.com/"
  },
  {
    src: "/clientsLogo/emeraldtrail.png",
    alt: "Client33",
    href:"https://www.emeraldtrail.in/"
  },
  {
    src: "/clientsLogo/kiyostay.png",
    alt: "Client34",
    href:"https://kiyostays.com/"
  },
  {
    src: "/clientsLogo/lakehill.png",
    alt: "Client35",
    href:"https://thelakehill.com/"
  },
  {
    src: "/clientsLogo/maati.png",
    alt: "Client36",
    className: "#000000",
  },
  {
    src: "/clientsLogo/sprav.jpg",
    alt: "Client37",
    className: "#000000",
    href:"https://www.sparvhospitality.com/"
  },
  {
    src:"/clientsLogo/Park Cafe.png",
    alt: "Client38",
    className: "#ffffff",
    show: false,
  },
  {
    src: "/clientsLogo/deuropa.png",
    alt: "Client39",
    href:"https://granddeeurope.com/"
  },
  {
    src: "/clientsLogo/dhruvees.png",
    alt: "Client40",
    className: "#000000",
    show: false,
    href:"https://www.dhruvees.com/home/"
  },
  {
    src: "/clientsLogo/dunagiri-retreat.png",
    alt: "Client41",
    href:"https://www.dunagiri.com"
  },
  {
    src: "/clientsLogo/hilton.png",
    alt: "Client42",
    href:"https://www.hilton.com/en/"
  },
  {
    src: "/clientsLogo/hotel-platinum-shravasti.png",
    alt: "Client43",
    href:"https://hotelplatinumshravasti.com/"
  },
  {
    src: "/clientsLogo/mahabir-palace.png",
    alt: "Client44",
    className: "#fff",
    href:"https://www.mahabirpalace.com/"
  },
  {
    src: "/clientsLogo/oak-climbing.png",
    alt: "Client45",
    href:"https://oakclimbingresort.com/"
  },
  {
    src: "/clientsLogo/peace@peak.png",
    alt: "Client46",
  },
  {
    src: "/clientsLogo/tents&trails.png",
    alt: "Client47",
  },
  {
    src: "/clientsLogo/minimalist.png",
    alt: "Client48",
    className: "#ffffffbe",
    href:"https://minimalisthotels.com/"
  },
  {
    src: "/clientsLogo/magnolia.png",
    alt: "Client49",
    className: "#000000",
  },
  {
    src: "/clientsLogo/white-ridge.png",
    alt: "Client50",
    href:"https://www.whiteridgehotel.com/"
  },
  {
    src: "/clientsLogo/avr.jpg",
    alt: "Client51",
    className: "#ffffff",
    href:"https://anandvardhanresorts.com/"
  },
  {
    src: "/clientsLogo/tulipInn.png",
    alt: "Client52",
    href:"https://hotelgreencastle.com/tulip-inn-green-castle-mussoorie.html"
  },
  {
    src: "/clientsLogo/Hotel-Green-Castle.jpg",
    alt: "Client53",
    href:"https://hotelgreencastle.com/hotel-green-castle.html"
  },
  {
    src: "/clientsLogo/aqua-dunhinda.jpg",
    alt: "Client54",
    href:"https://www.aquadunhinda.com/"
  },
  {
    src: "/clientsLogo/shreeiyengar.png",
    alt: "Client55",
    show: false,
    href:"https://shreeiyengarfoods.com/"
  },
  {
    src: "/clientsLogo/kamalfarms.png",
    alt: "Client56",
    href:"https://kamalfarms.com/"
  },
  {
    src: "/clientsLogo/petal-panyaram.png",
    alt: "Client57",
    show: false,
    href:"https://petalandpaniyaram.com/"
  },
  {
    src: "/clientsLogo/7Mile.png",
    alt: "Client58",
    show: false,
    href:"https://7milebar.com.au/"
  },
  {
    src: "/clientsLogo/The-Jharna.png",
    alt: "Client59",
  },
  {
    src: "/clientsLogo/chocolate-room.png",
    alt: "Client60",
    show: false,
    href:"https://www.thechocolateroomindia.com/"
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
    href:"https://luxuryvibesstay.com/"
  },
  {
    src: "/clientsLogo/Mango_grove_Logo.avif",
    alt: "Client66",
    className: "#FFCD62",
    href:"https://www.mangogrovehotel.com/"
  },
  {
    src: "/clientsLogo/naturoville.png",
    alt: "Client67",
    className: "#ffffff",
    href:"https://www.naturovillewellness.com/"
  },
  {
    src: "/clientsLogo/maira.jpeg",
    alt: "Client68",
    href:"https://www.mairaresort.com/"
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
    href:"https://www.muktkeshii.com/"
  },
  {
    src: "/clientsLogo/MIRAMAR-logo.jpg",
    alt: "Client72",
    className: "#ffffff",
  },
  {
    src: "/clientsLogo/nature-on-the-rocks.webp",
    alt: "Client73",
    href:"https://natureontherocks.in/"
  },
  {
    src: "/clientsLogo/one-off.png",
    alt: "Client74",
    className: "#FBF6E3",
    href:"https://oneoffhotels.com/"
  },
  {
    src: "/clientsLogo/AravatLogo.png",
    alt: "Client75",
  },
  {
    src: "/clientsLogo/opera-house.png",
    alt: "Client76",
    className: "#B39C4D",
    href:"https://operahouselonavala.com/"
  },
  {
    src: "/clientsLogo/colonels-resort.png",
    alt: "Client77",
    className: "#2F4B26",
    href:"https://www.colonelsresort.com/index.html"
  },
  {
    src: "/clientsLogo/umaid2.png",
    alt: "Client78",
    href:"https://www.umaidpalace.com/"
  },
  {
    src: "/clientsLogo/Manali-se.png",
    alt: "Client79",
    href:"https://manali-se.com/",
    className:"#2b3380"
  },
  {
    src: "/clientsLogo/soni-arena-hotel.png",
    alt: "Client80",
    href:"https://soniarenahotel.com/"
  },
  {
    src:"/clientsLogo/surbag.png",
    alt: "Client81",
    href:"https://www.suryabagh.com/"
  },
  {
    src: "/clientsLogo/soul-stories.png",
    alt: "Client82",
    href:"https://soulstorries.com/"
  },
  {
    src:"/clientsLogo/ZionHotel.png",
    alt: "Client83",
    className: "#ffffff",
    href:"https://www.thezionhotel.com/"
  },
  {
    src: "/clientsLogo/altin-stays.webp",
    alt: "Altin Stays",
    className: "#000000",
    href: "https://altinstays.com/",
  },
  {
    src: "/clientsLogo/anandha inn.webp",
    alt: "Anandha Inn",
    href: "https://www.anandhainn.com/",
  },
  {
    src: "/clientsLogo/DLSM.webp",
    alt: "DLSM",
    className: "#ffffff",
    href: "",
  },
  {
    src: "/clientsLogo/hotel-awadha-vilas.webp",
    alt: "Hotel Awadha Vilas",
    href: "https://www.hotelawadhvilasayodhya.com/",
  },
  {
    src: "/clientsLogo/infinity.webp",
    alt: "Infinity",
    className: "#ffffff",
    href: "",
  },
  {
    src: "/clientsLogo/la-mount.webp",
    alt: "La Mount",
    className: "#ffffff",
    href: "https://lamountladakh.in/",
  },
  {
    src: "/clientsLogo/lumi-logo.jpg",
    alt: "Lumi",
    className: "#ffffff",
    href: "",
  },
  {
    src: "/clientsLogo/moets-water.webp",
    alt: "Moets Water",
    className: "#ffffff",
    href: "https://waterfrontestatebymoets.com/",
  },
  {
    src: "/clientsLogo/moets.webp",
    alt: "Moets",
    className: "#ffffff",
    href: "",
  },
  {
    src: "/clientsLogo/nothern-nawab.webp",
    alt: "Northern Nawab",
    className: "#ffffff",
    href: "https://www.northernnawab.com/",
  },
  {
    src: "/clientsLogo/revtree.webp",
    alt: "Revtree",
    className: "#ffffff",
    href: "",
  },
  {
    src: "/clientsLogo/stone-hedge.webp",
    alt: "Stone Hedge",
    className: "#ffffff",
    href: "",
  },
];
