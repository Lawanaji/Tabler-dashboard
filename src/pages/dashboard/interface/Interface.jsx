// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateStudents } from "../../../redux/features/Students";

// const Interface = () => {
//   const students = useSelector((state) => state.students);
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(false);

//   const formatStudents = () => {
//     if (!students.length) {
//       return (
//         <p className="text-center text-sm text-red-600">No record found</p>
//       );
//     }

//     return (
//       <ul>
//         {students.map((student) => (
//           <li key={student.id} className="mb-2">
//             {student.name}: {student.age}
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   const handleClick = () => {
//     if (loading) {
//       return;
//     }

//     setLoading(true);
//     setTimeout(() => {
//       const fetchedStudents = [
//         {
//           id: 1,
//           name: "John Doe",
//           age: 30,
//           gender: "Male",
//         },
//         {
//           id: 2,
//           name: "Peter Paul",
//           age: 33,
//           gender: "Male",
//         },
//       ];
//       dispatch(updateStudents(fetchedStudents));
//       return setLoading(false);
//     }, 4000);
//   };

//   // console.log(students);

//   return (
//     <div>
//       <div className="flex justify-between items-center gap-4 flex-wrap my-6">
//         <h2 className="mb-4">Students</h2>

//         <button
//           onClick={handleClick}
//           className="bg-blue-600 text-white py-2 px-4 rounded-md flex justify-center items-center gap-1"
//         >
//           {loading ? (
//             <span className="inline-block w-4 h-4 border-2 border-white border-b-transparent rounded-full animate-spin"></span>
//           ) : null}
//           <span>Fetch Students</span>
//         </button>
//       </div>
//       {formatStudents()}
//     </div>
//   );
// };

// export default Interface;

const Interface = () => {
  return <div>Interface</div>;
};

export default Interface;
