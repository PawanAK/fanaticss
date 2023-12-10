import logo from "../assets/images/logo.svg"
import ethindia from "../assets/images/EthIndia 2023.svg"
import { Link } from "react-router-dom";
import X from "../assets/images/icons/faXTwitter.svg"
import Lens from "../assets/images/icons/faLens.svg"
import Discord from "../assets/images/icons/faDiscord.svg"
import Youtube from "../assets/images/icons/faYoutube.svg"

const Footer = () => {
  let ind =0;
  const Socials = [
    {
      logo: X,
    },
    {
      logo: Lens,
    },
    {
      logo: Discord,
    },
    {
      logo: Youtube,
    }
  ]
  return (
    <footer className=" bg-drakGray h-80">
      <div className="flex flex-col mx-10 my-10">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 ">
                <img src={logo} className="h-8 w-fit" />
                <h1 className="text-secondary font-secondary text-3xl">Fanaticks</h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-white font-secondary text-2xl">Built at</h1>
                <img src={ethindia} className="h-8 w-fit" />
              </div>
            </div>
            <div className="flex flex-col items-end gap-1 text-white font-primary text-md font-normal">
              <h1 className="hover:underline ease-in cursor-pointer">About</h1>
              <h1 className="hover:underline ease-in cursor-pointer">Discover</h1>
              <h1 className="hover:underline ease-in cursor-pointer">Create Event</h1>
              <h1 className="hover:underline ease-in cursor-pointer">Connect Wallet</h1>
            </div>
          </div>
          <div className="flex justify-between items-center">
            {/* Follow Us */}
            <div className="flex flex-col gap-2">
              <h1 className="text-md font-primary font-medium text-white">Follow us</h1>
              <div className="flex gap-2 ">
                {Socials.map((social) => (
                  <div key={ind++} className=" items-center p-2 w-10 h-10 bg-white bg-opacity-10 rounded-md cursor-pointer hover:bg-primary duration-100 ease-outf"><img src={social.logo} className="h-6 w-fit" /></div>
                ))}
              </div>
            </div>
            {/* Email */}
            <div className="flex flex-col gap-2">
              {/* Email Input Section */}
              <div className="flex flex-row gap-2 ">
                <input type="text" placeholder="Enter your email" className="w-[427px] h-12 rounded-lg border border-white bg-transparent border-opacity-10 text-white font-primary font-normal px-4" />
                <button className="w-[146px] h-12 rounded-lg bg-gradient-to-t from-primary to-secondary bg-opacity-10 text-white font-primary font-normal">Sign</button>
              </div>
            </div>
          </div>
          <div className="w-full bg-lightGray h-[1px]"></div>
          <div className="flex justify-between text-white font-primary text-sm">
            <h1 >© 2023 Fanaticks</h1>
            <div className="flex gap-3">
              <h1 className="underline cursor-pointer">All Copyrights Reserved</h1>
              <h1 className="underline cursor-pointer">Terms & Condition</h1>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
