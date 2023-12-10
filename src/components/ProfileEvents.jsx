import CustomModal from "./Modal";
import { useState, useEffect } from "react";
import EventCardHolder from "./EventCardHolder";
import Invited from "../assets/images/Invited.png";
import AadhaarProof from "./AadhaarProof";
import {
  LogInWithAnonAadhaar,
  useAnonAadhaar,
  AnonAadhaarProof,
} from "anon-aadhaar-react";

const ProfileEvents = ({ profileData, setProfileData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [anonAadhaar] = useAnonAadhaar();
  const [showProof, setShowProof] = useState(false);

  const [cardData, setCardData] = useState(profileData.events);

  const openModal = (e) => {
    e.preventDefault(); // Add this line to prevent page reload
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
  }, [anonAadhaar]);

  const handleClick = (e) => {
    e.preventDefault();
    setShowProof(true);
  };

  return (
    <>
      <div className="profile-events ">
        <div className="profile-events-container">
          <div
            className="flex flex-col gap-2 items-center justify-center h-[365px] w-[365px] bg-none border border-dashed rounded-md cursor-pointer"
            onClick={openModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none">
              <path
                d="M24 30V24M24 24V18M24 24H18M24 24H30M24 42C18.4087 42 15.6131 42 13.4078 41.0866C10.4675 39.8686 8.13137 37.5325 6.91345 34.5922C6 32.3869 6 29.5913 6 24C6 18.4087 6 15.6131 6.91345 13.4078C8.13137 10.4675 10.4675 8.13137 13.4078 6.91345C15.6131 6 18.4087 6 24 6C29.5913 6 32.3869 6 34.5922 6.91345C37.5325 8.13137 39.8686 10.4675 41.0866 13.4078C42 15.6131 42 18.4087 42 24C42 29.5913 42 32.3869 41.0866 34.5922C39.8686 37.5325 37.5325 39.8686 34.5922 41.0866C32.3869 42 29.5913 42 24 42Z"
                stroke="#71706C"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-white text-sm font-primary font-normal">
              Create a new Event
            </div>
          </div>
          <CustomModal isOpen={isModalOpen} onClose={closeModal}>
            <h1 className="text-white font-secondary text-xl ">
              Upload Event Details
            </h1>
            <form
              onClick={(e) => {
                e.preventDefault();
              }}
              className="flex flex-row justify-between gap-4">
              <div className="flex flex-col gap-4 w-1/2">
                <img
                  src={Invited}
                  className="h-[392px] border border-lightGray rounded-lg"
                  alt="Event Image"
                />

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between ">
                    <h1 className="text-white font-primary">
                      Upload Event Image<span className="text-red-500">*</span>
                    </h1>
                    <input type="file" />
                  </div>
                  <button
                    onClick={handleClick}
                    className="flex justify-center gap-2 text-white bg-none border border-white p-2 rounded-xl font-primary">
                    Link Your Anon Aadhar{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none">
                      <path
                        d="M4.35 17.4V18.75M4.35 18.75V20.1M4.35 18.75H5.7M4.35 18.75H3M12.9 3L13.2202 5.51971C13.6243 8.69877 16.0808 11.2281 19.2467 11.7249L21 12L19.2467 12.2751C16.0808 12.7719 13.6243 15.3012 13.2202 18.4803L12.9 21L12.5798 18.4803C12.1757 15.3012 9.71919 12.7719 6.5533 12.2751L4.8 12L6.5533 11.7249C9.71919 11.2281 12.1757 8.69877 12.5798 5.51971L12.9 3ZM5.7 3L5.76713 3.40758C5.95525 4.54964 6.85036 5.44475 7.99242 5.63286L8.4 5.7L7.99242 5.76713C6.85036 5.95525 5.95525 6.85036 5.76713 7.99242L5.7 8.4L5.63286 7.99242C5.44475 6.85036 4.54964 5.95525 3.40758 5.76713L3 5.7L3.40758 5.63286C4.54964 5.44475 5.44475 4.54964 5.63286 3.40758L5.7 3Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {showProof && (
                    <div>
                      <LogInWithAnonAadhaar />
                      <p>{anonAadhaar?.status}</p>
                      <div>
                        {/* Render the proof if generated and valid */}
                        {anonAadhaar?.status === "logged-in" && (
                          <>
                            <p>✅ Proof is valid</p>
                            <AnonAadhaarProof
                              code={JSON.stringify(anonAadhaar.pcd, null, 2)}
                            />
                          </>
                        )}
                      </div>
                    </div>
                  )}
                  <button className="flex justify-center gap-2 text-black bg-white border border-none p-2 rounded-xl font-primary">
                    Create the Event{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none">
                      <path
                        d="M12 15V12M12 12V9M12 12H9M12 12H15M12 21C9.20435 21 7.80653 21 6.7039 20.5433C5.23373 19.9343 4.06569 18.7663 3.45672 17.2961C3 16.1935 3 14.7956 3 12C3 9.20435 3 7.80653 3.45672 6.7039C4.06569 5.23373 5.23373 4.06569 6.7039 3.45672C7.80653 3 9.20435 3 12 3C14.7956 3 16.1935 3 17.2961 3.45672C18.7663 4.06569 19.9343 5.23373 20.5433 6.7039C21 7.80653 21 9.20435 21 12C21 14.7956 21 16.1935 20.5433 17.2961C19.9343 18.7663 18.7663 19.9343 17.2961 20.5433                         18.7663 19.9343 17.2961 20.5433C16.1935 21 14.7956 21 12 21Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col w-1/2">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <h1 className="text-white font-primary">
                      Enter event name <span className="text-red-500">*</span>
                    </h1>
                    <input type="text" className="bg-lightGray rounded-sm" />
                  </div>
                  <div className="flex justify-between">
                    <h1 className="text-white font-primary">
                      Enter event description{" "}
                      <span className="text-red-500">*</span>
                    </h1>
                    <input type="text" className="bg-lightGray rounded-sm" />
                  </div>
                  <div className="flex justify-between">
                    <h1 className="text-white font-primary">
                      Enter Date <span className="text-red-500">*</span>
                    </h1>
                    <input type="text" className="bg-lightGray rounded-sm" />
                  </div>
                  <div className="flex justify-between">
                    <h1 className="text-white font-primary">
                      Enter Time <span className="text-red-500">*</span>
                    </h1>
                    <input type="text" className="bg-lightGray rounded-sm" />
                  </div>

                  <div className="flex justify-between">
                    <h1 className="text-white font-primary">
                      Enter Price <span className="text-red-500">*</span>
                    </h1>
                    <input type="text" className="bg-lightGray rounded-sm" />
                  </div>
                  <div className="flex justify-between">
                    <h1 className="text-white font-primary">
                      Enter Tags <span className="text-red-500">*</span>
                    </h1>
                    <input type="text" className="bg-lightGray rounded-sm" />
                  </div>
                </div>
              </div>
              {/* update profile Data state*/}
              {/* <button src="x.com">Submit</button> */}
            </form>
          </CustomModal>
          {/* <EventCardHolder cardData={cardData} setCardData={setCardData} /> */}
        </div>
      </div>
    </>
  );
};

export default ProfileEvents;
