import EventCardHolder from "../components/EventCardHolder";
import { useEffect, useState } from "react";

const Discover = () => {
  const [cardData, setCardData] = useState([]);
  // const [cardData, setCardData] = useState([
  //     {
  //         title: "Event 1",
  //         description: "Description for Event 1",
  //         date: "2023-12-10",
  //         time: "18:00",
  //         location: "Venue 1",
  //         price: "$10.00",
  //         image: "https://example.com/event1.jpg",
  //         link: "https://example.com/event1",
  //         tags: ["Tag1", "Tag2"],
  //     },
  //     {
  //         title: "Event 2",
  //         description: "Description for Event 2",
  //         date: "2023-12-15",
  //         time: "19:30",
  //         location: "Venue 2",
  //         price: "$15.00",
  //         image: "https://example.com/event2.jpg",
  //         link: "https://example.com/event2",
  //         tags: ["Tag3", "Tag4"],
  //     },
  //     {
  //         title: "Event 3",
  //         description: "Description for Event 3",
  //         date: "2023-12-20",
  //         time: "20:00",
  //         location: "Venue 3",
  //         price: "$20.00",
  //         image: "https://example.com/event3.jpg",
  //         link: "https://example.com/event3",
  //         tags: ["Tag5", "Tag6"],
  //     },
  //     {
  //         title: "Event 4",
  //         description: "Description for Event 4",
  //         date: "2023-12-25",
  //         time: "21:00",
  //         location: "Venue 4",
  //         price: "$25.00",
  //         image: "https://example.com/event4.jpg",
  //         link: "https://example.com/event4",
  //         tags: ["Tag7", "Tag8"],
  //     },
  // ]);
  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await fetch("http://localhost:8000/getEvents");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        console.log("successful get hogaya", responseData);
        setCardData(responseData);
      } catch (error) {
        console.error("Get fail hogaya", error.message);
      }
    };
    getEvents();
  }, []);

  return (
    <div className="flex flex-col min-h-screen mx-32 mb-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-white text-4xl font-secondary mt-32 font-semibold">
          Explore Different Events
        </h1>
        <h2 className="text-white text-xl font-primary font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          diam justo, varius non sapien id.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vestibulum diam justo, varius non sapien
          id.
        </h2>
      </div>
      <div className="flex flex-col">
        <div className="w-full h-[1px] bg-drakGray my-4 "></div>
        <div className="flex justify-between mb-10">
          <div className="flex gap-2 items-center">
            <h1 className="text-white font-secondary text-2xl font-medium">
              Upcoming Events
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="37"
              viewBox="0 0 36 37"
              fill="none"
            >
              <path
                d="M15 12.7087C17.1928 14.3018 19.1569 16.1694 20.8413 18.2619C21.0529 18.5248 21.0529 18.8927 20.8413 19.1556C19.1569 21.2481 17.1928 23.1157 15 24.7087"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <button className="flex text-white font-primary bg-white bg-opacity-10 gap-2 rounded-full px-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 7H10M10 7C10 8.65685 11.3431 10 13 10H14C15.6569 10 17 8.65685 17 7C17 5.34315 15.6569 4 14 4H13C11.3431 4 10 5.34315 10 7ZM16 17H21M20 7H21M3 17H6M6 17C6 18.6569 7.34315 20 9 20H10C11.6569 20 13 18.6569 13 17C13 15.3431 11.6569 14 10 14H9C7.34315 14 6 15.3431 6 17Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Filter
          </button>
        </div>
        <EventCardHolder cardData={cardData} setCardData={setCardData} />
      </div>
    </div>
  );
};

export default Discover;
