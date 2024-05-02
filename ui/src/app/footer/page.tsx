import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { RiGlobalLine } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="bg-slate-100 w-full h-[69px] flex justify-between items-center px-40">
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
  );
}