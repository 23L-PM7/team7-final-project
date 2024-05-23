import Image from "next/image";
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import { MenuItem } from "@mui/joy";
import { Dropdown } from "@mui/joy"; // Import Dropdown from @mui/joy
import { usePathname, useSearchParams , useRouter } from 'next/navigation';
import * as React from 'react';
import Link from "next/link";

const Map = () =>{
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const search = searchParams.get('map')


  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )
  if(!search){
    return (
      <Dropdown>
      <MenuButton variant="plain"  size="sm">
            <div className="flex flex-col justify-start pr-12">
              <p className="text-sm font-semibold w-1/4">Where</p>
              <p className="text-xs text-gray-400 w-[120px]">Search destinations</p>
            </div>
        </MenuButton>
            <Menu className="w-100% p-8 flex flex-col rounded-xl gap-3">
              <h1 className="text-lg font-semibold">Search by region</h1>
              <div className="grid grid-cols-2 gap-4 ">
              <Link href={pathname + '?' + createQueryString('map', 'Central Mongolia')}>
          <Image
      alt="Airbnb"
      className="hidden rounded-lg cursor-pointer md:block border border-gray-400"
      height={300}
      width={300}
      src="/images/Central Mongolia 1.JPG"
    />
          </Link> 
          <Link href={pathname + '?' + createQueryString('map', 'Eastern Mongolia')}>
          <Image
      alt="Airbnb"
      className="hidden rounded-lg cursor-pointer md:block"
      height={300}
      width={300}
      src="/images/Eastern Mongolia 1.JPG"
    />
          </Link> 
          <Link href={pathname + '?' + createQueryString('map', 'Montane Mongolia')}>
          <Image
      alt="Airbnb"
      className="hidden rounded-lg cursor-pointer md:block"
      height={300}
      width={300}
      src="/images/Montane Mongolia 1.JPG"
    />
          </Link> 
          <Link href={pathname + '?' + createQueryString('map', ' Western Mongolia')}>
          <Image
      alt="Airbnb"
      className="hidden rounded-lg cursor-pointer md:block"
      height={300}
      width={300}
      src="/images/Western Mongolia 1.JPG"
    />
          </Link> 
              </div>
          
      </Menu>
      </Dropdown>
    )
  }else{
    return (
      <Dropdown>
      <MenuButton variant="plain"  size="sm">
            <div className="flex flex-col justify-start pr-12">
              <p className="text-sm font-semibold w-1/4">Where</p>
              <p className="text-xs text-gray-400 w-[120px]">{search}</p>
            </div>
        </MenuButton>
            <Menu className="w-100% p-8 flex flex-col rounded-xl gap-3">
              <h1 className="text-lg font-semibold">Search by region</h1>
              <div className="grid grid-cols-2 gap-4 ">
              <Link href={pathname + '?' + createQueryString('map', 'Central Mongolia')}>
          <Image
      alt="Airbnb"
      className="hidden rounded-lg cursor-pointer md:block border border-gray-400"
      height={300}
      width={300}
      src="/images/Central Mongolia 1.JPG"
    />
          </Link> 
          <Link href={pathname + '?' + createQueryString('map', 'Eastern Mongolia')}>
          <Image
      alt="Airbnb"
      className="hidden rounded-lg cursor-pointer md:block"
      height={300}
      width={300}
      src="/images/Eastern Mongolia 1.JPG"
    />
          </Link> 
          <Link href={pathname + '?' + createQueryString('map', 'Montane Mongolia')}>
          <Image
      alt="Airbnb"
      className="hidden rounded-lg cursor-pointer md:block"
      height={300}
      width={300}
      src="/images/Montane Mongolia 1.JPG"
    />
          </Link> 
          <Link href={pathname + '?' + createQueryString('map', ' Western Mongolia')}>
          <Image
      alt="Airbnb"
      className="hidden rounded-lg cursor-pointer md:block"
      height={300}
      width={300}
      src="/images/Western Mongolia 1.JPG"
    />
          </Link> 
              </div>
          
      </Menu>
      </Dropdown>
    )
  }
}
export default Map