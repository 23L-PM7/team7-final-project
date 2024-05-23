import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import Calendar from './Calendar';
import { useDate } from '../../app/globals';
import { usePathname, useSearchParams , useRouter } from 'next/navigation';

const DateRange = () => {
  const { date, setDate }: any = useDate();
  const { formattedDate , getFormattedDate }:any = useDate();
  const searchParams = useSearchParams()
  const start = searchParams.get('date')
  // console.log(getFormattedDate(date[0]));
  // console.log(getFormattedDate(date[1]));
  console.log(formattedDate);
  
  if(!start){
    return <Dropdown>
    <MenuButton variant="plain" size="sm">
      <div className=" border-x-[1px] px-12">
        <p className="pr-5 text-sm font-semibold hidden sm:block flex-1 ">
          check
        </p>
        <p className="text-xs text-center text-gray-400">Add dates</p>
      </div>
    </MenuButton>
    <MenuButton variant="plain" size="sm">
      <div className=" border-r-[1px] px-12">
        <p className="px-3 text-sm font-semibold hidden sm:block flex-1 ">
          check
        </p>
        <p className="text-xs  text-center text-gray-400">Add dates</p>
      </div>
    </MenuButton>
    <Menu>
     <Calendar/>
    </Menu>
  </Dropdown>
  }else{
    return(
      <Dropdown>
      <MenuButton variant="plain" size="sm">
        <div className=" border-x-[1px] px-12">
          <p className="pr-5 text-sm font-semibold hidden sm:block flex-1 ">
            check
          </p>
          <p className="text-xs text-gray-400">{getFormattedDate(date[0])}</p>
        </div>
      </MenuButton>
      <MenuButton variant="plain" size="sm">
        <div className=" border-r-[1px] px-12">
          <p className="px-3 text-sm font-semibold hidden sm:block flex-1 ">
            check
          </p>
          <p className="text-xs text-gray-400">{getFormattedDate(date[1])}</p>
        </div>
      </MenuButton>
      <Menu>
       <Calendar/>
      </Menu>
    </Dropdown>)
    
  }
  
}
export default DateRange