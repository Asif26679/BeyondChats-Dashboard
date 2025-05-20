
// import { useState } from "react";
// import Modal from "./Modal";


// import rahullll from "../assets/rahullll.jpeg";
// import amit from "../assets/amit.jpeg";
// import priya from "../assets/priya.webp"
// import rohan from "../assets/rohan.webp"

// function DataTable({ searchTerm, isDarkMode }) {
//   const chat = [
//     {
//       id: 1,
//       name: "Rahul",
//       status: "Open",
//       lastMsg: "Need help with payment",
//       profile: rahullll,
//       isOnline:true
//     },
//     {
//       id: 2,
//       name: "Priya",
//       status: "Closed",
//       lastMsg: "Issue resolved",
//       profile: priya,
//       isOnline:false
//     },
//     {
//       id: 3,
//       name: "Amit",
//       status: "Open",
//       lastMsg: "Product enquiry",
//       profile:amit,
//       isOnline:false
      
//     },
//     {
//       id: 4,
//       name: "Rohan",
//       status: "Open",
//       lastMsg: "Product Quality",
//       isOnline:true,
//       profile:rohan
      
//     },
//   ];

//   const [selectedChat, setSelectedChat] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleRowClick = (chat) => {
//     setSelectedChat(chat);
//     setIsModalOpen(true);
//   };

//   const filteredData = chat.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     item.lastMsg.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <div
//         className={`flex flex-col rounded-lg shadow overflow-x-auto ${
//           isDarkMode ? "dark:bg-gray-800" : "bg-white"
//         }`}
//       >
//         <table className="min-w-[600px] w-full">
//           <thead className={isDarkMode ? "dark:bg-gray-700" : "bg-gray-50"}>
//             <tr>
//               <th className="p-3 text-left text-sm">Customer</th>
//               <th className="p-3 text-left text-sm">Status</th>
//               <th className="p-3 text-left text-sm">Last Message</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.map((chat) => (
//               <tr
//                 key={chat.id}
//                 onClick={() => handleRowClick(chat)}
//                 className={`cursor-pointer ${
//                   isDarkMode
//                     ? "dark:border-gray-700 dark:hover:bg-gray-700"
//                     : "hover:bg-gray-50"
//                 }`}
//               >
//                 <td className="p-3">
//                   <div className="flex items-center gap-3">
//                     <div className="relative w-9 h-9">
//                     <img
//                       src={chat.profile}
//                       alt={chat.name}
//                       className="w-9 h-9 rounded-full object-cover"
//                     />
//                     <span className={`absolute bottom-0 right-0 w-2.5 h-2.5  border-2  rounded-full 
//                     ${chat.isOnline ? "bg-green-400":"bg-gray-400"}
//                     ${isDarkMode ? "border-gray-800" : "border-white"}
//                     `}></span>
//                     </div>
//                     <span className={isDarkMode ? "text-white" : "text-gray-900"}>
//                       {chat.name}
//                     </span>
//                   </div>
//                 </td>
//                 <td className="p-3">
//                   <span
//                     className={`px-2 py-1 rounded-full text-xs ${
//                       chat.status === "Open"
//                         ? "bg-green-100 text-green-800"
//                         : "bg-gray-100 text-gray-800"
//                     }`}
//                   >
//                     {chat.status}
//                   </span>
//                 </td>
//                 <td
//                   className={`p-3 ${
//                     isDarkMode ? "dark:text-gray-300" : "text-gray-500"
//                   }`}
//                 >
//                   {chat.lastMsg}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal */}
//       <Modal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         selectedChat={selectedChat}
//         isDarkMode={isDarkMode}
//       />
//     </>
//   );
// }

// export default DataTable;
import React, { useState } from "react";
import Modal from "./Modal"; // Assuming this is in the same directory
//import { Link } from 'react-router-dom'; // Import Link if you want to navigate, not just show a modal

// Import images (ensure these paths are correct relative to THIS file)
import rahullll from "../assets/rahullll.jpeg";  // Use relative paths
import amit from "../assets/amit.jpeg";
import priya from "../assets/priya.webp";
import rohan from "../assets/rohan.webp";

// Dummy chat data (for demonstration purposes)
const initialChats = [
  {
    id: 1,
    name: "Rahul",
    status: "Open",
    lastMsg: "Need help with payment",
    profile: rahullll,
    isOnline: true,
  },
  {
    id: 2,
    name: "Priya",
    status: "Closed",
    lastMsg: "Issue resolved",
    profile: priya,
    isOnline: false,
  },
  {
    id: 3,
    name: "Amit",
    status: "Open",
    lastMsg: "Product enquiry",
    profile: amit,
    isOnline: false,
  },
  {
    id: 4,
    name: "Rohan",
    status: "Open",
    lastMsg: "Product Quality",
    profile: rohan,
    isOnline: true,
  },
];

function DataTable({ searchTerm, isDarkMode }) {
  const [chats, setChats] = useState(initialChats); // Use state for the chat data
  const [selectedChat, setSelectedChat] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (chat) => {
    setSelectedChat(chat);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedChat(null); //  Good practice to reset selectedChat when closing.
  }

  const filteredData = chats.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.lastMsg.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div
        className={`flex flex-col rounded-lg shadow overflow-x-auto ${
          isDarkMode ? "dark:bg-gray-800" : "bg-white"
        }`}
      >
        <table className="min-w-[600px] w-full">
          <thead className={isDarkMode ? "dark:bg-gray-700" : "bg-gray-50"}>
            <tr>
              <th className="p-3 text-left text-sm">Customer</th>
              <th className="p-3 text-left text-sm">Status</th>
              <th className="p-3 text-left text-sm">Last Message</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((chat) => (
              <tr
                key={chat.id}
                onClick={() => handleRowClick(chat)}
                className={`cursor-pointer ${
                  isDarkMode
                    ? "dark:border-gray-700 dark:hover:bg-gray-700"
                    : "hover:bg-gray-50"
                }`}
              >
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9">
                      <img
                        src={chat.profile}
                        alt={chat.name}
                        className="w-9 h-9 rounded-full object-cover"
                      />
                      <span
                        className={`absolute bottom-0 right-0 w-2.5 h-2.5 border-2 rounded-full 
                        ${chat.isOnline ? "bg-green-400" : "bg-gray-400"}
                        ${isDarkMode ? "border-gray-800" : "border-white"}
                        `}
                      ></span>
                    </div>
                    <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                      {chat.name}
                    </span>
                  </div>
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      chat.status === "Open"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {chat.status}
                  </span>
                </td>
                <td
                  className={`p-3 ${
                    isDarkMode ? "dark:text-gray-300" : "text-gray-500"
                  }`}
                >
                  {chat.lastMsg}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedChat={selectedChat}
        isDarkMode={isDarkMode}
      />
    </>
  );
}

export default DataTable;