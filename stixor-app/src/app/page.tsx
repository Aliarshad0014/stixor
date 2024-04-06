import React from 'react';
import { FiGrid } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

export default function Home() {
    // Define your event data
    const eventData = [
      { number: '01', name: 'Event 1', time: '10:00 AM', date: '2024-04-05', location: 'Location 1' },
      { number: '02', name: 'Event 2', time: '11:00 AM', date: '2024-04-06', location: 'Location 2' },
      { number: '02', name: 'Event 2', time: '11:00 AM', date: '2024-04-06', location: 'Location 2' }
    ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50">

      <div className="flex items-center justify-between w-full mt-20">
        {/* Left Div */}
        <div className="flex flex-col  bg-white p-4 h-[880px] w-[80px] ml-[24px] rounded-full" >
          <div className="hover-bg-ECEAFF rounded-full p-2 flex justify-center items-center w-[48px] h-[48px] transition-all duration-500 ease-in-out">
            <FiGrid className="text-2xl text-purple-900" />
          </div>
          <div className="hover-bg-ECEAFF rounded-full p-2 flex justify-center items-center mt-4 w-[48px] h-[48px] bg-gray-50 transition-all duration-500 ease-in-out">
            <FaRegHeart className="text-2xl text-gray-500" />
          </div>
        </div>
        {/* Center Div */}
        <div className="w-1/2 bg-red-50">
          <table className="w-full">
            <thead>
              <tr>
                <th className="border border-gray-300">#</th>
                <th className="border border-gray-300">Name</th>
                <th className="border border-gray-300">Time</th>
                <th className="border border-gray-300">Date</th>
                <th className="border border-gray-300">Location</th>
              </tr>
            </thead>
            <tbody>
              {/* Map over the event data array and generate table rows dynamically */}
              {eventData.map((event, index) => (
                <tr key={index}>
                  <td className="border border-gray-300">{event.number}</td>
                  <td className="border border-gray-300">{event.name}</td>
                  <td className="border border-gray-300">{event.time}</td>
                  <td className="border border-gray-300">{event.date}</td>
                  <td className="border border-gray-300">{event.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Dummy data */}
        {/* Right Div */}
        {/* Dummy data */}
        <div className="w-1/4 bg-yellow-50">
          {/* <div className="flex flex-col items-center justify-center w-full">
            <h2 className="mb-4">Upcoming Events</h2>
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
          </div> */}
        </div>
      </div>
    </main>
  );
}
