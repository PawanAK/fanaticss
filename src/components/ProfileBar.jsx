const ProfileBar = (profileData) => {
  return (
    <>
      <div className="profile-bar">
        {/* <div className="profile-bar-image">
          <img src={profileData.img} alt="Profile Image" />
        </div> */}
        <div className="profile-bar-name">
          {<h1>{profileData.name}</h1>}
        </div>
        <div className="profile-bar-address">
          {<h1>{profileData.address}</h1>}
        </div>
      </div>
    </>
  );
};

export default ProfileBar;
