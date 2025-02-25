import React from "react";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: 120,
    type: 1,
    available: true,
    img: "/pics/room (1).jpeg",
  },
  {
    id: 2,
    name: "Family Suite",
    price: 200,
    type: 2,
    available: false,
    img: "/pics/room (2).jpeg",
    
  },
  {
    id: 3,
    name: "Presidential Suite",
    price: 350,
    type: 3,
    available: true,
    img: "/pics/room (3).jpeg",

  },
  {
    id: 4,
    name: "Standard Room",
    price: 80,
    type: 1,
    available: true,
    img: "/pics/room (4).jpeg",
  },
  ,
  {
    id: 4,
    name: "Standard Room",
    price: 80,
    type: 1,
    available: true,
    img: "/pics/room (5).jpeg",
  },
  ,
  {
    id: 4,
    name: "Standard Room",
    price: 80,
    type: 1,
    available: true,
    img: "/pics/room (6).jpeg",
  },
  ,
  {
    id: 4,
    name: "Standard Room",
    price: 80,
    type: 1,
    available: true,
    img: "/pics/room (7).jpeg",
  },
  ,
  {
    id: 4,
    name: "Standard Room",
    price: 80,
    type: 1,
    available: true,
    img: "/pics/room (8).jpeg",
  },
  ,
  {
    id: 4,
    name: "Standard Room",
    price: 80,
    type: 1,
    available: true,
    img: "/pics/room (9).jpeg",
  },
  ,
  {
    id: 4,
    name: "Standard Room",
    price: 80,
    type: 1,
    available: false,
    img: "/pics/room (10).jpeg",
  },
  
];

const getType = (type) => {
  switch (type) {
    case 1:
      return "Single";
    case 2:
      return "Double";
    case 3:
      return "Triple";
    default:
      return "Unknown";
  }
};

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Available Rooms</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={room.img} alt={room.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-700">{room.name}</h3>
              <p className="text-gray-500">Type: {getType(room.type)}</p>
              <p className="text-gray-700 font-semibold">${room.price}/night</p>
              <p className={`text-sm w-fit mt-2 font-semibold ps-2 pe-2 rounded-md ${room.available ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                {room.available ? "Available" : "Not Available"}
              </p>
              <button className="mt-3 w-full px-4 py-2 text-white bg-[#FEA116] rounded-lg hover:bg-white border-2  hover:text-[#FEA116] hover:border-[#FEA116]  transition">
                View Room
              </button>
              <button className="mt-3 w-full px-4 py-2 bg-blue-950 text-white border-2 border-blue-950 rounded-lg  hover:text-white transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
