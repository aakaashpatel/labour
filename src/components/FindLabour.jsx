import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaRupeeSign,
  FaSearch,
  FaTools,
  FaStar,
  FaUserTie,
} from "react-icons/fa";

const workersData = [
  {
    id: 1,
    name: "Ramesh Kumar",
    skill: "AC Technician",
    location: "Noida",
    salary: "₹500/day",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 4.8,
    experience: "7 years",
  },
  {
    id: 2,
    name: "Suresh Yadav",
    skill: "Electrician",
    location: "Delhi",
    salary: "₹400/day",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 4.6,
    experience: "5 years",
  },
  {
    id: 3,
    name: "Amit Sharma",
    skill: "Plumber",
    location: "Ghaziabad",
    salary: "₹450/day",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 4.9,
    experience: "8 years",
  },
  {
    id: 4,
    name: "Rahul Verma",
    skill: "Painter",
    location: "Noida",
    salary: "₹400/day",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 4.4,
    experience: "4 years",
  },
  {
    id: 5,
    name: "Vikas Singh",
    skill: "Carpenter",
    location: "Delhi",
    salary: "₹550/day",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 4.7,
    experience: "6 years",
  },
  {
    id: 6,
    name: "Deepak Kumar",
    skill: "Mason",
    location: "Faridabad",
    salary: "₹400/day",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    rating: 4.5,
    experience: "9 years",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-8 pb-12 px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          Find Skilled Workers Near You
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Trusted local technicians & laborers — verified & ready to work
        </p>
      </div>

      {/* Search Filters */}
      <div className="max-w-4xl mx-auto mb-12 bg-white p-8 rounded-3xl shadow-lg">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Skill Search */}
          <div className="relative">
            <div className="flex items-center border-2 border-gray-200 focus-within:border-blue-500 rounded-2xl px-5 py-4 transition-all duration-200">
              <FaTools className="text-blue-500 text-2xl mr-4" />
              <input
                type="text"
                placeholder="Search skill (AC Technician, Plumber...)"
                value={skillSearch}
                onChange={(e) => setSkillSearch(e.target.value)}
                className="w-full bg-transparent outline-none text-lg placeholder-gray-400"
              />
            </div>
          </div>

          {/* Location Search */}
          <div className="relative">
            <div className="flex items-center border-2 border-gray-200 focus-within:border-blue-500 rounded-2xl px-5 py-4 transition-all duration-200">
              <FaMapMarkerAlt className="text-blue-500 text-2xl mr-4" />
              <input
                type="text"
                placeholder="Location (Noida, Delhi, Ghaziabad...)"
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
                className="w-full bg-transparent outline-none text-lg placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto">
        {filteredWorkers.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorkers.map((worker) => (
              <div
                key={worker.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative h-56">
                  <img
                    src={worker.image}
                    alt={worker.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay Rating */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow">
                    <FaStar className="text-yellow-500" />
                    <span className="font-semibold text-sm">{worker.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900">{worker.name}</h2>
                      <p className="text-blue-600 font-medium flex items-center gap-2 mt-1">
                        <FaTools /> {worker.skill}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-green-600 font-bold text-xl">
                        <FaRupeeSign className="text-lg" />
                        {worker.salary.replace("₹", "")}
                      </div>
                      <p className="text-xs text-gray-500">per day</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 mt-4">
                    <FaMapMarkerAlt className="text-lg" />
                    <span>{worker.location}</span>
                    <span className="mx-2">•</span>
                    <FaUserTie className="text-lg" />
                    <span>{worker.experience} exp.</span>
                  </div>

                  {/* Hire Button */}
                  <button className="mt-7 w-full bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white py-4 rounded-2xl font-medium text-lg flex items-center justify-center gap-3 transition-all active:scale-95">
                    <FaSearch />
                    Hire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-7xl mb-6">😢</div>
            <h3 className="text-2xl font-semibold text-gray-700">No workers found</h3>
            <p className="text-gray-500 mt-2">Try changing your search filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindLabour;