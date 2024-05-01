import Logo from "./Logo";
import Search from "./Search";
import User from "./User";
import Container from "../Container";


const NavBar = () => {
    return (
      <header className="w-full bg-white z-10 shadow-sm">
        <div className="py-4 border-b-[1px]">
          <Container>
            <div className="flex items-center justify-between gap-3 md:gap-0">
              <Logo />
              <Search />
              <User />
            </div>
          </Container>
        </div>
      </header>
    );
  };
  
  export default NavBar;
  