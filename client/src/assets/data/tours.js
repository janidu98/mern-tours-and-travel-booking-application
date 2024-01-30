import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpeg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpeg";

const tours = [
  {
    id: "01",
    title: "Temple of The Tooth",
    city: "Kandy",
    address: "Kandy",
    distance: 115,
    price: 99,
    maxGroupSize: 10,
    desc: "The most revered site in Sri Lanka, it is locally known as the Sri Dalada Maligawa and is a place of worship established in the 16th century AD. Situated adjacent to the royal palace complex of the former Kingdom of Kandy, the shrine overlooks the vast expanse of the Kandy Lake.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Sigiriya",
    city: "Dambulla",
    address: "Dambulla",
    distance: 400,
    price: 99,
    maxGroupSize: 8,
    desc: "Sigiriya is a fifth century fortress in Sri Lanka which has been carved out of an inselberg, a hill of hard volcanic rock. It towers around 600 feet (182.8m) from the forest and gardens below, and has a flat top. This is where the palace of King Kasyapa once stood, reachable up a winding stone staircase.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Gangarama Buddist Temple",
    city: "Colombo",
    address: "Colombo",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "As suggested by the world-famous CNN Travel, Colombo is among one of the best places to visit in Sri Lanka in 2022. Although Sri Lanka’s dynamic capital is often overlooked by other major touristic cities, there are several wonderful places to visit in Colombo. It is a historical place with great multicultural landmarks including the Gangaramaya Buddhist Temple, the photogenic Red Mosque, and the ancient Hindu Temple.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Yala",
    city: "Tissamaharam",
    address: "Tissamaharam",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Located in the south eastern corner of Sri Lanka, Yala National Park is one of the best known wildlife parks.  Home to one of the world's largest population of leopards, it is the second largest national park on the island, behind Wilpattu National Park. It is roughly a 5 hour drive from Colombo, by vehicle, so get ready for an early morning start if you haven't made camp anywhere nearby!",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Haggala Flower Garden",
    city: "Nuwala Eliya",
    address: "Nuwara Eliya",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Often referred to as ‘Little England’, this genteel highland community does have a rose-tinted, vaguely British-country-village feel to it, with its colonial-era bungalows, Tudor-style hotels, well-tended hedgerows and pretty gardens. Indeed, Nuwara Eliya was once was the favored cool-climate escape for the hard-working and hard-drinking English and Scottish pioneers of Sri Lanka’s tea industry.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Nine Arch Bridge",
    city: "Ella",
    distance: 500,
    address: "Ella",
    price: 99,
    maxGroupSize: 8,
    desc: "One of the worth seeing highlights in the Mountain village of Ella! The Nine Arch Bridge in Demodara near Ella is a clear-cut example of the railway construction in Sri Lanka during the British colonial era. Also called as the Bridge in the sky, it is a beautiful and unsophisticated viaduct train bridge that stretches across around 91 meters with a total of 9 spans amidst the lushly vegetated foliage on both sides. The so-called most beautiful train ride in the world, the Ella to Kandy train ride runs near the Nine Arch Bridge. The spectacle of greenery in the surroundings and the architectural wow-factors of the bridge draw large hoards of tourists here.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Mirissa",
    city: "Galle",
    address: "Galle",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Mirissa is a small heaven located in the South Coast of Sri Lanka, only about 200km away from the Equator. The small town is ever-famous for it's natural beaches which are mostly untouched by any man-made modernization, which makes it well-loved and very sought after when it comes to holidays and vacations, even—honeymoons.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Hikkaduwa",
    city: "Hikkaduwa",
    address: "Hikkaduwa",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Hikkaduwa is a coastal town in south-west of Sri Lanka. It's a world famous beach holiday destination, well known for its scenic beaches [1], coral reef sanctuary, surfing and nightlife. Hikkaduwa might be the most popular surf spot on the Sri Lankan south-west coast.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg08,
    featured: true,
  },
];

export default tours;
