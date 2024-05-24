import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import User from "./User";

export function SinglePageHeader() {
  return (
    <div className="container w-[1120px] mx-auto grid gap-6 my-6">
      <div className="py-4 border-b-[1px]">
        <div className="flex mx-auto   items-center justify-between gap-3 md:gap-0">
          <Logo />
          <Search />
          <User />
        </div>
      </div>
    </div>
  );
}
