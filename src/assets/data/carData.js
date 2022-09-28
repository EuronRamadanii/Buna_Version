// import all images from assets/images directory
// import img01 from "../all-images/cars-img/nissan-offer.png";
// import img02 from "../all-images/cars-img/offer-toyota.png";
// import img03 from "../all-images/cars-img/bmw-offer.png";
// import img04 from "../all-images/cars-img/nissan-offer.png";
// import img05 from "../all-images/cars-img/offer-toyota.png";
// import img06 from "../all-images/cars-img/mercedes-offer.png";
// import img07 from "../all-images/cars-img/toyota-offer-2.png";
// import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "Lorem Ipsum",
    rating: 112,
    carName: "Lorem Ipsum",
    imgUrl:
      "https://previews.123rf.com/images/hollygraphic/hollygraphic1510/hollygraphic151000055/46527906-man-in-business-suit-icon-vector-symbol.jpg",
    model: "Model 3",
    // price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
  {
    id: 2,
    brand: "Lorem Ipsum",
    rating: 102,
    carName: "Lorem Ipsum",
    imgUrl:
      "https://previews.123rf.com/images/hollygraphic/hollygraphic1510/hollygraphic151000055/46527906-man-in-business-suit-icon-vector-symbol.jpg",
    model: "Model-2022",
    // price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 3,
    brand: "Lorem Ipsum",
    rating: 132,
    carName: "Lorem Ipsum",
    imgUrl:
      "https://previews.123rf.com/images/hollygraphic/hollygraphic1510/hollygraphic151000055/46527906-man-in-business-suit-icon-vector-symbol.jpg",
    model: "Model-2022",
    // price: 65,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 4,
    brand: "Lorem Ipsum",
    rating: 102,
    carName: "Lorem Ipsum",
    imgUrl:
      "https://previews.123rf.com/images/hollygraphic/hollygraphic1510/hollygraphic151000055/46527906-man-in-business-suit-icon-vector-symbol.jpg",
    model: "Model-2022",
    price: 70,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 5,
    brand: "Lorem Ipsum",
    rating: 94,
    carName: "Lorem Ipsum",
    imgUrl:
      "https://previews.123rf.com/images/hollygraphic/hollygraphic1510/hollygraphic151000055/46527906-man-in-business-suit-icon-vector-symbol.jpg",
    model: "Model-2022",
    price: 45,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 6,
    brand: "Lorem Ipsum",
    rating: 119,
    carName: "Lorem Ipsum",
    imgUrl:
      "https://previews.123rf.com/images/hollygraphic/hollygraphic1510/hollygraphic151000055/46527906-man-in-business-suit-icon-vector-symbol.jpg",
    model: "Model-2022",
    price: 85,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  // {
  //   id: 7,
  //   brand: "Lorem Ipsum",
  //   rating: 82,
  //   carName: "Lorem Ipsum",
  //   imgUrl: img07,
  //   model: "Model 3",
  //   price: 50,
  //   speed: "20kmpl",
  //   gps: "GPS Navigation",
  //   seatType: "Heated seats",
  //   automatic: "Automatic",
  //   description:
  //     " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  // },

  // {
  //   id: 8,
  //   brand: "Lorem Ipsum",
  //   rating: 52,
  //   carName: "Lorem Ipsum",
  //   imgUrl: img08,
  //   model: "Model 3",
  //   price: 50,
  //   speed: "20kmpl",
  //   gps: "GPS Navigation",
  //   seatType: "Heated seats",
  //   automatic: "Automatic",
  //   description:
  //     " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  // },
];

export default carData;
