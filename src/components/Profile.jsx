import { useState } from "react";
import ProfileBar from "./ProfileBar";
import ProfileEvents from "./ProfileEvents";


const Profile = () => {
    const [profileData, setProfileData] = useState({
        name: "John Doe",
        address: "0x1234567890abcdef",
        image: "https://example.com/profile.jpg",
        events: [{
            title: "Event 1",
            description: "Description for Event 1",
            date: "2023-12-10",
            time: "18:00",
            location: "Venue 1",
            price: "$10.00",
            image: "https://example.com/event1.jpg",
            link: "https://example.com/event1",
            tags: ["Tag1", "Tag2"],
        },
        {
            title: "Event 2",
            description: "Description for Event 2",
            date: "2023-12-15",
            time: "19:30",
            location: "Venue 2",
            price: "$15.00",
            image: "https://example.com/event2.jpg",
            link: "https://example.com/event2",
            tags: ["Tag3", "Tag4"],
        },
        {
            title: "Event 3",
            description: "Description for Event 3",
            date: "2023-12-20",
            time: "20:00",
            location: "Venue 3",
            price: "$20.00",
            image: "https://example.com/event3.jpg",
            link: "https://example.com/event3",
            tags: ["Tag5", "Tag6"],
        },
        {
            title: "Event 4",
            description: "Description for Event 4",
            date: "2023-12-25",
            time: "21:00",
            location: "Venue 4",
            price: "$25.00",
            image: "https://example.com/event4.jpg",
        }]
    });
  return (
    <div>
      <ProfileBar profileData={profileData}/>
      <ProfileEvents profileData={profileData} addProfileData={setProfileData}/>
    </div>
  );
};

export default Profile;
