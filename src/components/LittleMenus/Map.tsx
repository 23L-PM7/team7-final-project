import Image from "next/image";
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import { MenuItem } from "@mui/joy";
import { Dropdown } from "@mui/joy"; // Import Dropdown from @mui/joy
import { usePathname, useSearchParams , useRouter } from 'next/navigation';
import * as React from 'react';
import Link from "next/link";

const Map = () =>{
const [open, setOpen] = React.useState(false) 
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const search = searchParams.get('map')

  const handleOpenChange = React.useCallback(
    (event: React.SyntheticEvent | null, isOpen: boolean) => {
      setOpen(isOpen);
    },
    [],
  );

  React.useEffect(() => {
    setOpen(false);
  }, [search]);


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
      <Dropdown open={open} onOpenChange={handleOpenChange}>
      <MenuButton variant="plain"  size="sm">
            <div className="flex flex-col justify-start pr-12">
              <p className="text-sm font-semibold w-1/4">Where</p>
              <p className="text-xs text-gray-400 w-[120px]">Search destinations</p>
            </div>
        </MenuButton>
            <Menu className="w-100% p-8 flex flex-col rounded-xl gap-3">
              <h1 className="text-lg font-semibold">Search by region</h1>
              <div className="grid grid-cols-3 gap-4 ">
              <Link href={pathname + '?' + createQueryString('map', '')}>
          <Image
      alt="Airbnb"
      className={`hidden rounded-lg cursor-pointer  md:block hover:border hover:border-gray-400 ${searchParams.toString() === 'map=' ? 'border border-gray-400': 'bg-white'}`}
      height={300}
      width={150}
      src="/images/flexible.JPG"
    />
          </Link> 
          <Link href={pathname + '?' + createQueryString('map', 'Ulaanbaatar')}>
          <Image
      alt="Airbnb"
      className={`hidden rounded-lg cursor-pointer  md:block hover:border hover:border-gray-400 ${searchParams.toString() === 'map=Ulaanbaatar' ? 'border border-gray-400': 'bg-white'}`}
      height={300}
      width={150}
      src="/images/Ulaanbaatar Mongolia.JPG"
    />
          </Link> 
          <Link href={pathname + '?' + createQueryString('map', 'Northern Mongolia')}>
          <Image
      alt="Airbnb"
      className={`hidden rounded-lg cursor-pointer  md:block hover:border hover:border-gray-400 ${searchParams.toString() === 'map=Northern+Mongolia' ? 'border border-gray-400': 'bg-white'}`}
      height={300}
      width={150}
      src="/images/Northern Mongolia.JPG"
    />
          </Link> 
          <Link href={pathname + '?' + createQueryString('map', 'Western Mongolia')}>
          <Image
      alt="Airbnb"
      className={`hidden rounded-lg cursor-pointer  md:block hover:border hover:border-gray-400 ${searchParams.toString() === 'map=Western+Mongolia' ? 'border border-gray-400': 'bg-white'}`}
      height={300}
      width={150}
      src="/images/Western Mongolia.JPG"
    />
          </Link> 
          <Link href={pathname + '?' + createQueryString('map', 'Eastern Mongolia')}>
          <Image
      alt="Airbnb"
      className={`hidden rounded-lg cursor-pointer  md:block hover:border hover:border-gray-400 ${searchParams.toString() === 'map=Eastern+Mongolia' ? 'border border-gray-400': 'bg-white'}`}
      height={300}
      width={150}
      src="/images/Eastern Mongolia.JPG"
    />
          </Link> 
          <Link href={pathname + '?' + createQueryString('map', 'Southern Mongolia')}>
          <Image
      alt="Airbnb"
      className={`hidden rounded-lg cursor-pointer  md:block hover:border hover:border-gray-400 ${searchParams.toString() === 'map=Southern+Mongolia' ? 'border border-gray-400': 'bg-white'}`}
      height={300}
      width={150}
      src="/images/Southern Mongolia.JPG"
    />
          </Link> 
              </div>
          
            </Menu>
      </Dropdown>
    )
  }else{
    return (
      <Dropdown open={open} onOpenChange={handleOpenChange}>
      <MenuButton variant="plain"  size="sm">
            <div className="flex flex-col justify-start pr-12">
              <p className="text-sm font-semibold w-1/4">Where</p>
              <p className="text-xs text-start text-gray-400 w-[120px]">{search}</p>
            </div>
        </MenuButton>
        <Menu className="w-100% p-8 flex flex-col rounded-xl gap-3">
              <h1 className="text-lg font-semibold">Search by region</h1>
              <div className="grid grid-cols-3 gap-4 ">
              <Link href={""}>
          <Image
      alt="Airbnb"
      className={`hidden rounded-lg cursor-pointer  md:block hover:border hover:border-gray-400 ${searchParams.toString() === 'map=' ? 'border border-gray-400': 'bg-white'}`}
      height={300}
      width={150}
      src="/images/flexible.JPG"
    />
          </Link> 
          <Link href={pathname + '?' + createQueryString('map', 'Ulaanbaatar')}>
          <Image
      alt="Airbnb"
      className={`hidden rounded-lg cursor-pointer  md:block hover:border hover:border-gray-400 ${searchParams.toString() === 'map=Ulaanbaatar' ? 'border border-gray-400': 'bg-white'}`}
      height={300}
      width={150}
      src="/images/Ulaanbaatar Mongolia.JPG"
    />
          </Link> 
          <Link href={pathname + '?' + createQueryString('map', 'Northern Mongolia')}>
          <Image
      alt="Airbnb"
      className={`hidden rounded-lg cursor-pointer  md:block hover:border hover:border-gray-400 ${searchParams.toString() === 'map=Northern+Mongolia' ? 'border border-gray-400': 'bg-white'}`}
      height={300}
      width={150}
      src="/images/Northern Mongolia.JPG"
    />
          </Link> 
          <Link href={pathname + '?' + createQueryString('map', 'Western Mongolia')}>
          <Image
      alt="Airbnb"
      className={`hidden rounded-lg cursor-pointer  md:block hover:border hover:border-gray-400 ${searchParams.toString() === 'map=Western+Mongolia' ? 'border border-gray-400': 'bg-white'}`}
      height={300}
      width={150}
      src="/images/Western Mongolia.JPG"
    />
          </Link> 
          <Link href={pathname + '?' + createQueryString('map', 'Eastern Mongolia')}>
          <Image
      alt="Airbnb"
      className={`hidden rounded-lg cursor-pointer  md:block hover:border hover:border-gray-400 ${searchParams.toString() === 'map=Eastern+Mongolia' ? 'border border-gray-400': 'bg-white'}`}
      height={300}
      width={150}
      src="/images/Eastern Mongolia.JPG"
    />
          </Link> 
          <Link href={pathname + '?' + createQueryString('map', 'Southern Mongolia')}>
          <Image
      alt="Airbnb"
      className={`hidden rounded-lg cursor-pointer  md:block hover:border hover:border-gray-400 ${searchParams.toString() === 'map=Southern+Mongolia' ? 'border border-gray-400': 'bg-white'}`}
      height={300}
      width={150}
      src="/images/Southern Mongolia.JPG"
    />
          </Link> 
              </div>
          
            </Menu>
      </Dropdown>
    )
  }
}
export default Map