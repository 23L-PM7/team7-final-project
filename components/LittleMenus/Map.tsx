import Image from "next/image";
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import { MenuItem } from "@mui/joy";

const Map = () =>{
    return <div>
         <MenuButton variant="plain"  size="sm">
            <div className="flex flex-col justify-start pr-12">
              <p className="text-sm font-semibold ">Where</p>
              <p className="text-xs text-gray-400 w-[600px]">Search destinations</p>
            </div>
        </MenuButton>
            <Menu>
                <MenuItem>erere</MenuItem>
                <MenuItem>erere</MenuItem>
                <MenuItem>erere</MenuItem>
                <MenuItem>erere</MenuItem>
            <Image
      alt="Airbnb"
      className="hidden cursor-pointer md:block"
      height={100}
      width={100}
      src="/images/logo.png"
    />
    <Image
      alt="Airbnb"
      className="hidden cursor-pointer md:block"
      height={100}
      width={100}
      src="/images/logo.png"
    />
    <Image
      alt="Airbnb"
      className="hidden cursor-pointer md:block"
      height={100}
      width={100}
      src="/images/logo.png"
    />
    <Image
      alt="Airbnb"
      className="hidden cursor-pointer md:block"
      height={100}
      width={100}
      src="/images/logo.png"
    />
      </Menu>
    </div>
}
export default Map