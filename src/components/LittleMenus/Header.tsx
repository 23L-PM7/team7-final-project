import { BiSearch } from "react-icons/bi";
export default function Header(){
    return  <div>
    <div 
      className=" rounded-full border-[1px] w-full md:w-auto py-2 shadow-sm hover:shadow-md transition cursor-pointer"
    >
      <div className="flex flex-row items-center justify-between">
        <p className="px-6 text-sm font-semibold ">Anywhere</p>
          <p  className="px-6 text-sm font-semibold hidden sm:block flex-1 border-x-[1px]">
            Any week
          </p>
        
        <div   className="flex gap-3 flex-row text-sm text-gray-600 items-center pl-6 pr-2">
          <p className="hidden sm:block font-semibold">Any guest</p>
          <div  className="rounded-full p-2 bg-[#0B6BCB] text-white ">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
    {/* <Menu>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangeCalendar']}>
        <DateRangeCalendar />
      </DemoContainer>
    </LocalizationProvider>
      </Menu> */}
    </div>
}