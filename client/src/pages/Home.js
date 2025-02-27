import axios from "axios";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/");
        // const data = await response.body
        console.log(response);
        // setRooms(data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Available Rooms</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={room.image} alt={room.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-700">{room.title}</h3>
              <p className="text-gray-500">Type: {room.type}</p>
              <p className="text-gray-700 font-semibold">${room.price}/night</p>
              <button className="mt-3 w-full px-4 py-2 text-white bg-[#FEA116] rounded-lg hover:bg-white border-2 hover:text-[#FEA116] hover:border-[#FEA116] transition">
                View Room
              </button>
              <button className="mt-3 w-full px-4 py-2 bg-blue-950 text-white border-2 border-blue-950 rounded-lg hover:text-white transition">
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
