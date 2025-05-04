"use client";

import {
  FaHardHat,
  FaTasks,
  FaSmile,
  FaCity,
  FaAward,
  FaUserTie,
  FaRulerCombined,
  FaUsers,
} from "react-icons/fa";

const stats = [
  { title: "Projects Completed", value: "128+", icon: FaTasks },
  { title: "Happy Clients", value: "95+", icon: FaSmile },
  { title: "Years of Experience", value: "12", icon: FaHardHat },
  { title: "Cities Covered", value: "7", icon: FaCity },
  { title: "Team Members", value: "60+", icon: FaUsers },
  { title: "Built-up Area", value: "1.4M sq.ft", icon: FaRulerCombined },
  { title: "Awards", value: "5", icon: FaAward },
  { title: "Site Engineers", value: "18", icon: FaUserTie },
];

export default function StatsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Company Statistics</h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Trusted by hundreds across Karnataka — we build with passion and precision.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white shadow-md hover:shadow-lg transition rounded-xl p-5 flex flex-col items-center text-center"
              >
                <div className="bg-gray-200 text-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-3 text-xl">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{stat.value}</h3>
                <p className="text-sm text-gray-500">{stat.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
