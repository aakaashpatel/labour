import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaRupeeSign,
  FaSearch,
  FaTools,
} from "react-icons/fa";

const workersData = [
  {
    id: 1,
    name: "Ramesh Kumar",
    skill: "AC Technician",
    location: "Noida",
    salary: "₹500/day",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Suresh Yadav",
    skill: "Electrician",
    location: "Delhi",
    salary: "₹400/day",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Amit Sharma",
    skill: "Plumber",
    location: "Ghaziabad",
    salary: "₹450/day",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Rahul Verma",
    skill: "Painter",
    location: "Noida",
    salary: "₹400/day",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Vikas Singh",
    skill: "Carpenter",
    location: "Delhi",
    salary: "₹550/day",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Deepak Kumar",
    skill: "Mason",
    location: "Faridabad",
    salary: "₹400/day",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const FindLabour = () => {
  const [skillSearch, setSkillSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");

  const filteredWorkers = workersData.filter((worker) => {
    return (
      worker.skill.toLowerCase().includes(skillSearch.toLowerCase()) &&
      worker.location.toLowerCase().includes(locationSearch.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Find Skilled Workers Near You
      </h1>

      {/* 🔍 Filters UI */}
      <div className="max-w-4xl mx-auto mb-12 bg-white p-6 rounded-2xl shadow-md grid md:grid-cols-2 gap-4">
        {/* Skill Input */}
        <div className="flex items-center border rounded-xl px-4">
          <FaTools className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search skill (Plumber, Mason...)"
            value={skillSearch}
            onChange={(e) => setSkillSearch(e.target.value)}
            className="w-full p-3 outline-none"
          />
        </div>

        {/* Location Input */}
        <div className="flex items-center border rounded-xl px-4">
          <FaMapMarkerAlt className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Enter location (Noida, Delhi...)"
            value={locationSearch}
            onChange={(e) => setLocationSearch(e.target.value)}
            className="w-full p-3 outline-none"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredWorkers.length > 0 ? (
          filteredWorkers.map((worker) => (
            <div
              key={worker.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <img
                src={worker.image}
                alt={worker.name}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <h2 className="text-xl font-semibold">{worker.name}</h2>

                <div className="flex items-center gap-2 text-gray-600 mt-1">
                  <FaTools className="text-sm" />
                  {worker.skill}
                </div>

                <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                  <FaMapMarkerAlt />
                  {worker.location}
                </div>

                <div className="flex items-center gap-2 text-green-600 font-medium mt-2">
                  <FaRupeeSign />
                  {worker.salary}
                </div>

                {/* Button */}
                <button className="mt-5 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition flex items-center justify-center gap-2">
                  <FaSearch />
                  Apply Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No workers found 😢
          </p>
        )}
      </div>
    </div>
  );
};

export default FindLabour;