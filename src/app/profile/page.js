// "use client"

// // export const metadata = {
// //   title: "Profile",
// // };

// // function generateRandomNumber(count) {
// //   return Math.floor(Math.random() * count);
// // }

// function page() {
//   // const random = generateRandomNumber(2);
//   // if (random === 1) {
//   //   throw new Error("Something went wrong");
//   // }

//   return (
//     <div className="h-56 bg-blue-500 text-center font-bold text-2xl text-white flex flex-col items-center justify-center gap-4">
//       <div>Profile</div>

//       <button
//         onClick={() => {
//           console.log("dbdbdbn")
//           throw new Error("Something went wrong");
//         }}
//         className="bg-white text-black px-4 py-2 rounded"
//       >
//         Generate Error
//       </button>
//     </div>
//   );
// }

// export default page;

"use client"

import { useState } from "react"

export default function Page() {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    throw new Error("Something went wrong")
  }

  return (
    <div className="h-56 bg-blue-500 text-center font-bold text-2xl text-white flex flex-col items-center justify-center gap-4">
      <div>Profile</div>

      <button
        onClick={() => setHasError(true)}
        className="bg-white text-black px-4 py-2 rounded"
      >
        Generate Error
      </button>
    </div>
  )
}
