import React from 'react';
import { FiGrid } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';

export default function Home() {
  // Define your event data
  const eventData = [
    { number: '01', name: 'Web Development', time: '10:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' },
    { number: '02', name: 'Hardware', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' },
    { number: '02', name: 'Web Development', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' },
    { number: '02', name: 'Web Development', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' },
    { number: '02', name: 'AI Integration', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' },
    { number: '02', name: 'Team Collaboration', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' },
    { number: '02', name: 'Team Collaboration', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' },
    { number: '02', name: 'Team Collaboration', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' },
    { number: '02', name: 'Team Collaboration', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' }
    ,
    { number: '02', name: 'Team Collaboration', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' }
    ,
    { number: '02', name: 'Team Collaboration', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' }
    ,
    { number: '02', name: 'Team Collaboration', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' }
    ,
    { number: '02', name: 'Team Collaboration', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' }
    ,
    { number: '02', name: 'Team Collaboration', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
      <div className="flex items-center justify-evenly w-full mt-20 space-x-6 pl-[24px]">
        {/* Left Div: Navigation */}
        <div className="flex flex-col bg-white p-4 h-[880px] w-[80px] ml-[24px] rounded-full">
          <div className="hover:bg-ECEAFF rounded-full p-2 flex justify-center items-center w-[48px] h-[48px] transition-all duration-500 ease-in-out">
            <FiGrid className="text-2xl text-purple-900" />
          </div>
          <div className="hover:bg-ECEAFF rounded-full p-2 flex justify-center items-center mt-4 w-[48px] h-[48px] bg-gray-50 transition-all duration-500 ease-in-out">
            <FaRegHeart className="text-2xl text-gray-500" />
          </div>
        </div>
        {/* Middle Div: Table */}
        <div className="overflow-hidden">
          <h2 className='font-semibold mb-4 text-[20px]'>Event list</h2>
          {/* Table Header */}
          <div className="flex w-[862px] h-[33px] border-b-2 mb-4">
            <div className="w-1/4 p-2 font-semibold">#</div>
            <div className="w-1/4 p-2 font-semibold">NAME</div>
            <div className="w-1/4 p-2 font-semibold">TIME</div>
            <div className="w-1/4 p-2 font-semibold">DATE</div>
            <div className="w-1/4 p-2 font-semibold">LOCATION</div>

          </div>
          {/* Table Content */}
          <div className="overflow-y-auto mb-4 w-[849px] h-[578px]" style={{ maxHeight: "calc(100vh - 200px)" }}>
            {eventData.map((event, index) => (
              <div key={index} className="flex bg-white justify-between items-center rounded-lg" style={{ marginBottom: "24px", height: "60px" }}>
                <div className="w-1/4 p-2 text-base font-extrabold ">{event.number}</div>
                <div className="w-1/4 p-2 text-base text-gray-400 font-medium">{event.name}</div>
                <div className="w-1/4 p-2 text-sm font-bold ">{event.time}</div>
                <div className="w-1/4 p-2 text-sm font-bold ">{event.date}</div>
                <div className="w-1/4 p-2 text-sm font-medium">{event.location}</div>

              </div>
            ))}
          </div>
          {/* New div with card-like elements */}
          <div className="flex justify-evenly mt-8 w-[849px]">
            <div className="w-[260px] h-[130px] bg-white mr-24 rounded-xl p-5">
              <h1 className='mb-2 text-gray-500 font-semibold text-xs'>All Events</h1>
              <p className='text-2xl font-bold'>{eventData.length}</p>
            </div>
            <div className="w-[260px] h-[130px] bg-white mr-24 rounded-xl p-5">
              <h1 className='mb-2 text-gray-500 font-semibold text-xs'>This Months Events</h1>
              {/* <p className='text-2xl font-bold'>{eventData.filter(event => .length}</p> */}
            </div>
            <div className="w-[260px] h-[130px] bg-white rounded-xl p-5"><h1 className='mb-2 text-gray-500 font-semibold text-xs'>Favourite Events</h1> <p className='font-bold text-2xl'>25</p></div>
          </div>
        </div>
        {/* Right Div: Upcoming Events */}
        <div className="bg-purple-500">
          {/* Content related to upcoming events */}kajsdl;kfjla;ksdjl;aks
        </div>
      </div>
    </main>
  );
}



// {/* Center Div */}
// <div className="flex-grow ml-4">
//   <div className="w-[849px] h-[578px] overflow-y-auto">
//     {/* Separate header */}
//     <div className="w-[862px] pb-4">
//       <div className="flex justify-between px-6">
//         <div className="w-[20%]">#</div>
//         <div className="w-[30%]">Name</div>
//         <div className="w-[30%]">Time</div>
//         <div className="w-[30%]">Date</div>
//         <div className="w-[40%]">Location</div>
//       </div>
//     </div>
//     {/* Separate body */}
//     {eventData.map((event, index) => (
//       <div key={index} className="w-[849px] bg-white rounded-lg mb-4">
//         <div className="flex justify-between px-6 py-4">
//           <div className="w-[20%]">{event.number}</div>
//           <div className="w-[30%]">{event.name}</div>
//           <div className="w-[30%]">{event.time}</div>
//           <div className="w-[30%]">{event.date}</div>
//           <div className="w-[40%]">{event.location}</div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
// {/* Right Div */}
// <div className="w-1/4 bg-yellow-50">
//   <div className="flex flex-col items-center justify-center w-full">
//     <h2 className="mb-4">Upcoming Events</h2>
//     <div className="w-full mb-4">
//       <div>
//         <strong>Upcoming Event 1</strong>
//       </div>
//       <p>2024-04-08 - 1:00 PM</p>
//       <p>Location 4</p>
//     </div>
//     <div className="w-full">
//       <div>
//         <strong>Upcoming Event 2</strong>
//       </div>
//       <p>2024-04-09 - 2:00 PM</p>
//       <p>Location 5</p>
//     </div>
//     <div className="w-full mt-4 p-4 bg-gray-200 rounded-xl">
//       Rounded Box
//     </div>
//   </div>
// </div>