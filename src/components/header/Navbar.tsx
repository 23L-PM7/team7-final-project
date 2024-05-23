import Logo from "./Logo";
import Search from "./Search";
import User from "./User";
import Container from "../Container";
import Filter from "./Filter";
import BasicModal from "./Modal";

const NavBar = () => {
  return (
    <header className=" w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        {/* <Container> */}
          <div className="flex mx-auto container items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <User />
          </div>
        {/* </Container> */}
      </div>
      <Filter/>
      {/* <BasicModal/> */}
    </header>
  );
};

export default NavBar;
