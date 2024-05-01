import Logo from "./Logo";
import Search from "./Search";
import User from "./User";
import Container from "../Container";
import Filter from "./Filter";


const NavBar = () => {
    return (
      <header className="relative w-full bg-white z-10 shadow-sm">
        <div className="py-4 border-b-[1px]">
          <Container>
            <div className="flex items-center justify-between gap-3 md:gap-0">
              <Logo />
              <Search />
              <User />
            </div>
          </Container>
        </div>
        <Filter/>
      </header>
    );
  };
  
  export default NavBar;
  