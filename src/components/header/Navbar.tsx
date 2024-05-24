import Logo from "./Logo";
import Search from "./Search";
import User from "./User";
import Container from "../Container";
import Filter from "./Filter";
import BasicModal from "./Modal";
import Header from "../LittleMenus/Header";

const NavBar = () => {
  return (
    <header className="relative flex items-center w-full bg-white z-30 shadow-sm mb-[60px]">
      <div className="py-4 fixed bg-white z-30 left-0 right-0 top-0 border-b-[1px]">
        <Container>
          <div className="flex mx-auto   items-center justify-between gap-3 md:gap-0">
            <Logo/>
            <Search/>
            <User/>
          </div>
        </Container>
      </div>
      <div className="fixed z-30 top-[118px] border-t-2 left-0 right-0 w-100% bg-white">
      <Filter />
      </div>
    
      {/* <BasicModal/> */}
    </header>
  );
};

export default NavBar;
