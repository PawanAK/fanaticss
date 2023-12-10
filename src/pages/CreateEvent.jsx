import Profile from "../components/Profile";
import pfp from "../assets/images/Profile Picture.png"

const CreateEvent = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="bg-lightGray bg-opacity-10 relative h-96 rounded-t-xl w-full">
      </div>
      <div className="flex flex-col py-20 mx-32">
        {/* Profile Picture */}
        <img src={pfp} className="h-fit  absolute top-72 border-6 border-BaseWhite w-40" alt="Your default profile picture" />
        {/* User Address */}
        <div className="flex gap-2">
          <div className="text-lg text-white font-primary font-medium">Address:</div>
          <div className="text-lg text-drakGray font-primary font-bold">0x09750ad...360fdb7</div>
        </div>
        {/* Line Seprator */}
        <div className="w-full h-[1px] bg-drakGray my-4 "></div>
        <div className="flex flex-col gap-4">
          {/* Events to Manage */}
          <div className="flex justify-between">
            <div className="text-4xl font-secondary text-white">Manage your events</div>
            <button className="flex text-white font-primary bg-white bg-opacity-10 gap-2 rounded-full px-3 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 7H10M10 7C10 8.65685 11.3431 10 13 10H14C15.6569 10 17 8.65685 17 7C17 5.34315 15.6569 4 14 4H13C11.3431 4 10 5.34315 10 7ZM16 17H21M20 7H21M3 17H6M6 17C6 18.6569 7.34315 20 9 20H10C11.6569 20 13 18.6569 13 17C13 15.3431 11.6569 14 10 14H9C7.34315 14 6 15.3431 6 17Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Filter
            </button>
          </div>
          {/* Create Event */}
          <Profile />
        </div>
        
      </div>


    </div>
  )
}

export default CreateEvent;
