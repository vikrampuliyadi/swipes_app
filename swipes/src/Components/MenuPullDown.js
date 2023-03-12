// // import hamIcon from "../src/imgs/hamburger-icon.png";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const DropdownMenu = ({ options, icon }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div
//       className="dropdown-menu"
//       style={{
//         position: "absolute",
//         top: "10px",
//         right: "10px",
//         backgroundColor: "transparent",
//         backgroundRepeat: "no-repeat",
//         border: "none",
//         cursor: "pointer",
//         overflow: "hidden",
//         textAlign: "center",
//       }}
//     >
//       <button
//         onClick={handleToggle}
//         className="dropdown-menu__toggle"
//         style={{
//           backgroundColor: "transparent",
//           border: "none",
//           cursor: "pointer",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontSize: "1.2rem",
//           color: "#fff",
//           outline: "none",
//           padding: "10px",
//         }}
//       >
//         <span
//           className="dropdown-menu__toggle-label"
//           style={{ marginRight: "10px" }}
//         >
//           Options
//         </span>
//         <img
//           src={hamIcon}
//           alt="Dropdown Menu"
//           className={`dropdown-menu__toggle-icon ${isOpen ? "rotate-180" : ""}`}
//           style={{ height: "50px", width: "50px" }}
//         />
//       </button>
//       {isOpen && (
//         <ul
//           className="dropdown-menu__list"
//           style={{
//             position: "absolute",
//             top: "calc(10px + 100%)",
//             right: "10px",
//             color: "black",
//             backgroundColor: "#fff",
//             boxShadow: "0px 8px 16px rgba(0,0,0,0.1)",
//             borderRadius: "5px",
//             listStyle: "none",
//             margin: 0,
//             padding: 0,
//           }}
//         >
//           <li>
//             <Link to="/Main">
//               <button
//                 className="dropdown ham-list-item"
//                 style={{ width: "100%", padding: "10px 0" }}
//               >
//                 Feed
//               </button>
//             </Link>
//           </li>
//           <li>
//             <Link to="/Create_Requests">
//               <button
//                 className="dropdown ham-list-item"
//                 style={{ width: "100%", padding: "10px 0" }}
//               >
//                 Post
//               </button>
//             </Link>
//           </li>
//           <li>
//             <Link to="/Profile">
//               <button
//                 className="dropdown ham-list-item"
//                 style={{ width: "100%", padding: "10px 0" }}
//               >
//                 Profile
//               </button>
//             </Link>
//           </li>
//           <li>
//             <Link to="/Home">
//               <button
//                 className="dropdown ham-list-item"
//                 style={{ width: "100%", padding: "10px 0" }}
//               >
//                 Sign Out
//               </button>
//             </Link>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default DropdownMenu;
