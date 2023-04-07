import chair1 from "./images/chair-1.jpg";
import chair2 from "./images/chair-2.jpg";
import chair3 from "./images/chair-3.jpg";
import { BeakerIcon, FaceSmileIcon, HeartIcon, SparklesIcon, ClockIcon , GlobeAltIcon, CubeIcon } from "@heroicons/react/24/outline";

export const ethicsData = [
  {
    id: 1,
    title: "Science meets design",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus similique adipisci praesentium",
    icons: <BeakerIcon className="feature__icon" />,
  },
  {
    id: 2,
    title: "Maximal comfort",
    content:
      "Reprehenderit optio placeat quasi excepturi architecto, explicabo facilis perspiciatis error maxime magnam.",
    icons: <FaceSmileIcon className="feature__icon" />,
  },
  {
    id: 3,
    title: "Ethical and sustainable",
    content:
      "Deleniti recusandae quidem nesciunt, eos dolorum iure, quaerat omnis est laudantium voluptatem voluptas!",
    icons: <HeartIcon className="feature__icon" />,
  },
];


export const featuredProducts = [
  {
    id: 1,
    image: chair1,
    title: "The Laid Back",
    featureIcons: [
      <SparklesIcon className="chair__icon" />,
      <ClockIcon className="chair__icon" />,
      <GlobeAltIcon className="chair__icon" />,
      <CubeIcon className="chair__icon" />,
    ],
    purpose: [
      "Leisure and relaxing",
      "Comfortable for 4h",
      "Vegan leather",
      "Weighs 16 kg",
    ],
    price: "$250",
    btnName: "Add to Cart",
  },
  {
    id: 2,
    image: chair2,
    title: "The Worker Bee",
    featureIcons: [
      <SparklesIcon className="chair__icon" />,
      <ClockIcon className="chair__icon" />,
      <GlobeAltIcon className="chair__icon" />,
      <CubeIcon className="chair__icon" />,
    ],
    purpose: ["Work", "Comfortable for 8h", "Vegan leather", "Weighs 22 kg"],
    price: "$525",
    btnName: "Add to Cart",
  },
  {
    id: 3,
    image: chair3,
    title: "The Chair 4/2",
    featureIcons: [
      <SparklesIcon className="chair__icon" />,
      <ClockIcon className="chair__icon" />,
      <GlobeAltIcon className="chair__icon" />,
      <CubeIcon className="chair__icon" />,
    ],
    purpose: [
      "Leisure and relaxing",
      "Comfortable all day!",
      "Organic cotton",
      "Weighs 80 kg",
    ],
    price: "$1450",
    btnName: "Add to Cart",
  },
];