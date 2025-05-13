"use client"
import React from "react";
import Slider from "react-slick";
import ShotCard from "./useable/ShotCard"; // Adjust the import path if needed

const shots = [
  {
    id: 1,
    image:
      "https://cdn.dribbble.com/userupload/8706683/file/original-02a1378ce51d0e443da1ea708c64794d.png?format=webp&resize=400x300&vertical=center",
    title: "Dashboard - Web Builder",
    user: {
      name: "Vektora",
      avatar:
        "https://cdn.dribbble.com/users/6567474/avatars/small/b849c692c6c9fc9cfdca178b90e354d2.png?1607746416",
      badge: "Team",
    },
    likes: 282,
    views: "87.8k",
    pro: false,
    team: true,
    href: "/shots/22047902-Dashboard-Web-Builder",
  },
  {
    id: 2,
    image:
      "https://cdn.dribbble.com/userupload/4090779/file/original-8c94552f7e96817366246cf942b81d42.png?format=webp&resize=400x300&vertical=center",
    title: "Writing dashboard exploration (2)",
    user: {
      name: "Eugen Eşanu",
      avatar:
        "https://cdn.dribbble.com/users/930637/avatars/small/469a65680bb255b4b5211b428513a495.jpg?1513888254",
      badge: "Pro",
    },
    likes: 184,
    views: "53.1k",
    pro: true,
    team: false,
    href: "/shots/20039963-Writing-dashboard-exploration-2",
  },
  {
    id: 3,
    image:
      "https://cdn.dribbble.com/userupload/8706683/file/original-02a1378ce51d0e443da1ea708c64794d.png?format=webp&resize=400x300&vertical=center",
    title: "Analytics Dashboard UI",
    user: {
      name: "Pixel True",
      avatar:
        "https://cdn.dribbble.com/users/6567474/avatars/small/b849c692c6c9fc9cfdca178b90e354d2.png?1607746416",
      badge: "Team",
    },
    likes: 321,
    views: "91.2k",
    pro: false,
    team: true,
    href: "/shots/22047903-Analytics-Dashboard-UI",
  },
  {
    id: 4,
    image:
      "https://cdn.dribbble.com/userupload/4090779/file/original-8c94552f7e96817366246cf942b81d42.png?format=webp&resize=400x300&vertical=center",
    title: "Fintech App Concept",
    user: {
      name: "Lina Bell",
      avatar:
        "https://cdn.dribbble.com/users/6567474/avatars/small/b849c692c6c9fc9cfdca178b90e354d2.png?1607746416",
      badge: "Pro",
    },
    likes: 210,
    views: "60.0k",
    pro: true,
    team: false,
    href: "/shots/22047904-Fintech-App-Concept",
  },
  {
    id: 5,
    image:
      "https://cdn.dribbble.com/userupload/8706683/file/original-02a1378ce51d0e443da1ea708c64794d.png?format=webp&resize=400x300&vertical=center",
    title: "E-commerce Product Page",
    user: {
      name: "Designify",
      avatar:
        "https://cdn.dribbble.com/users/6567474/avatars/small/b849c692c6c9fc9cfdca178b90e354d2.png?1607746416",
      badge: "Team",
    },
    likes: 178,
    views: "42.7k",
    pro: false,
    team: true,
    href: "/shots/22047905-Ecommerce-Product-Page",
  },
  {
    id: 6,
    image:
      "https://cdn.dribbble.com/userupload/4090779/file/original-8c94552f7e96817366246cf942b81d42.png?format=webp&resize=400x300&vertical=center",
    title: "Crypto Wallet UI",
    user: {
      name: "CryptoArt",
      avatar:
        "https://cdn.dribbble.com/users/6567474/avatars/small/b849c692c6c9fc9cfdca178b90e354d2.png?1607746416",
      badge: "Pro",
    },
    likes: 199,
    views: "48.3k",
    pro: true,
    team: false,
    href: "/shots/22047906-Crypto-Wallet-UI",
  },
  {
    id: 7,
    image:
      "https://cdn.dribbble.com/userupload/8706683/file/original-02a1378ce51d0e443da1ea708c64794d.png?format=webp&resize=400x300&vertical=center",
    title: "Fitness App Dashboard",
    user: {
      name: "FitDesign",
      avatar:
        "https://cdn.dribbble.com/users/6567474/avatars/small/b849c692c6c9fc9cfdca178b90e354d2.png?1607746416",
      badge: "Team",
    },
    likes: 246,
    views: "77.9k",
    pro: false,
    team: true,
    href: "/shots/22047907-Fitness-App-Dashboard",
  },
  {
    id: 8,
    image:
      "https://cdn.dribbble.com/userupload/4090779/file/original-8c94552f7e96817366246cf942b81d42.png?format=webp&resize=400x300&vertical=center",
    title: "Travel Booking UI",
    user: {
      name: "TravelGo",
      avatar:
        "https://cdn.dribbble.com/users/6567474/avatars/small/b849c692c6c9fc9cfdca178b90e354d2.png?1607746416",
      badge: "Pro",
    },
    likes: 153,
    views: "36.4k",
    pro: true,
    team: false,
    href: "/shots/22047908-Travel-Booking-UI",
  },
  {
    id: 9,
    image:
      "https://cdn.dribbble.com/userupload/8706683/file/original-02a1378ce51d0e443da1ea708c64794d.png?format=webp&resize=400x300&vertical=center",
    title: "Food Delivery App",
    user: {
      name: "Foodies",
      avatar:
        "https://cdn.dribbble.com/users/6567474/avatars/small/b849c692c6c9fc9cfdca178b90e354d2.png?1607746416",
      badge: "Team",
    },
    likes: 165,
    views: "58.1k",
    pro: false,
    team: true,
    href: "/shots/22047909-Food-Delivery-App",
  },
  {
    id: 10,
    image:
      "https://cdn.dribbble.com/userupload/4090779/file/original-8c94552f7e96817366246cf942b81d42.png?format=webp&resize=400x300&vertical=center",
    title: "Banking App UI",
    user: {
      name: "Bankify",
      avatar:
        "https://cdn.dribbble.com/users/6567474/avatars/small/b849c692c6c9fc9cfdca178b90e354d2.png?1607746416",
      badge: "Pro",
    },
    likes: 134,
    views: "29.9k",
    pro: true,
    team: false,
    href: "/shots/22047910-Banking-App-UI",
  },
  {
    id: 11,
    image:
      "https://cdn.dribbble.com/userupload/8706683/file/original-02a1378ce51d0e443da1ea708c64794d.png?format=webp&resize=400x300&vertical=center",
    title: "Portfolio Website",
    user: {
      name: "Portfolia",
      avatar:
        "https://cdn.dribbble.com/users/6567474/avatars/small/b849c692c6c9fc9cfdca178b90e354d2.png?1607746416",
      badge: "Team",
    },
    likes: 198,
    views: "41.5k",
    pro: false,
    team: true,
    href: "/shots/22047911-Portfolio-Website",
  },
  {
    id: 12,
    image:
      "https://cdn.dribbble.com/userupload/4090779/file/original-8c94552f7e96817366246cf942b81d42.png?format=webp&resize=400x300&vertical=center",
    title: "Education Platform UI",
    user: {
      name: "EduPro",
      avatar:
        "https://cdn.dribbble.com/users/6567474/avatars/small/b849c692c6c9fc9cfdca178b90e354d2.png?1607746416",
      badge: "Pro",
    },
    likes: 177,
    views: "33.2k",
    pro: true,
    team: false,
    href: "/shots/22047912-Education-Platform-UI",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 3 } },
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const LastSection = () => (
  <section className="w-full py-12 bg-[#F9FAFB]">
    <div className="max-w-[1600px] mx-auto px-4">
      <Slider {...settings}>
        {shots.map((shot) => (
          <div key={shot.id} className="flex justify-center">
            <div className="max-w-[400px] w-full">
              <ShotCard shot={shot} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
    {/* Slick dots styling */}
   
  </section>
);

export default LastSection;
