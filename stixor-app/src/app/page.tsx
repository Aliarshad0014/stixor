import React from 'react';
import { FiGrid } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 pl-24 pr-24 bg-gray-50">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

      </div>

      <div className="flex items-center justify-between w-full mb-24">
        {/* Left Div */}
        <div className="flex flex-col items-center bg-white min-h-screen p-4 rounded-full">
          <div className="hover:bg-ECEAFF rounded-full p-2 mt-4 bg-gray-100">
            <FiGrid className="text-2xl text-gray-400" />
          </div>
          <div className="hover:bg-ECEAFF rounded-full p-2 bg-gray-100 mt-4">
            <FaRegHeart className="text-2xl text-gray-400" />
          </div>
        </div>
        {/* Center Div */}
        <div className="w-1/2 bg-red-50">
          <table className="w-full">
            <thead>
              <tr>
                <th className="border border-gray-300">Number</th>
                <th className="border border-gray-300">Name</th>
                <th className="border border-gray-300">Time</th>
                <th className="border border-gray-300">Date</th>
                <th className="border border-gray-300">Location</th>
              </tr>
            </thead>
            <tbody>
              {/* Dummy data */}
              <tr>
                <td className="border border-gray-300">1</td>
                <td className="border border-gray-300">Event 1</td>
                <td className="border border-gray-300">10:00 AM</td>
                <td className="border border-gray-300">2024-04-05</td>
                <td className="border border-gray-300">Location 1</td>
              </tr>
              <tr>
                <td className="border border-gray-300">2</td>
                <td className="border border-gray-300">Event 2</td>
                <td className="border border-gray-300">11:00 AM</td>
                <td className="border border-gray-300">2024-04-06</td>
                <td className="border border-gray-300">Location 2</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Right Div */}
        <div className="w-1/4 bg-yellow-50">
          <div className="flex flex-col items-center justify-center w-full">
            <h2 className="mb-4">Upcoming Events</h2>
            {/* Dummy data */}
            <div className="w-full mb-4">
              <div>
                <strong>Upcoming Event 1</strong>
              </div>
              <p>2024-04-08 - 1:00 PM</p>
              <p>Location 4</p>
            </div>
            <div className="w-full">
              <div>
                <strong>Upcoming Event 2</strong>
              </div>
              <p>2024-04-09 - 2:00 PM</p>
              <p>Location 5</p>
            </div>
            <div className="w-full mt-4 p-4 bg-gray-200 rounded-xl">
              Rounded Box
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
