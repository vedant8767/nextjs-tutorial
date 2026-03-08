 export const metadata = {
  title:"Profile"
 }

function generateRandomNumber(count){
  return Math.floor(Math.random()*count)
}

function page() {
  const random = generateRandomNumber(2)
  if(random === 1){
    throw new Error("Something went wrong")
  }

  return (
    <div className="h-56 bg-blue-500 text-center font-bold text-2xl text-white">Profile</div>
  )
}

export default page