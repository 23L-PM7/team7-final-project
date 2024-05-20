import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { RiGlobalLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bottom-0 w-full bg-slate-100">
      <div className=" mx-auto w-[1280px] h-[69px] flex justify-between items-center px-40">
        <div className="flex">
          <h3 className="mr-5">© 2024 Airbnb, Inc.</h3>
          <ul className="flex justify-evenly gap-5">
            <li>Terms</li>
            <li>Sitemap</li>
            <li>Privacy</li>
            <li>Your Privacy Choices</li>
          </ul>
        </div>{" "}
        <div className="relative">
          <div className="fixed left-0 right-0 bottom-0 bg-slate-100 z-10">
            <div className=" mx-auto w-[1280px] h-[69px] flex justify-between items-center px-40">
              <div className="flex">
                <h3 className="mr-5">© 2024 Airbnb, Inc.</h3>
                <ul className="flex justify-evenly gap-5">
                  <li>Terms</li>
                  <li>Sitemap</li>
                  <li>Privacy</li>
                  <li>Your Privacy Choices</li>
                </ul>
              </div>

              <div className="flex justify-between gap-5 font-bold">
                <button className="flex hover:underline">
                  <RiGlobalLine className="w-6 h-6" />
                  <h3>English (US)</h3>
                </button>
                <button className="hover:underline">$ USD</button>
                <FaSquareFacebook className="w-6 h-6" />
                <FaSquareTwitter className="w-6 h-6" />
                <FaSquareInstagram className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
