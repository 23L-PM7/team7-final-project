"use client"
import * as React from 'react';
import { usePathname, useSearchParams , useRouter } from 'next/navigation';

export default function TypeOfPlace(){
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const createQueryString = React.useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
      
          return params.toString()
        },
        [searchParams]
      );
    return <div className='flex flex-col'>
<div className='border-b-2'>
    <h1 className='text-xl font-bold mb-4'>Type of places</h1>
    <p>Search rooms, entire homes, or any type of place</p>
    <div className='w-11/12 mx-auto flex mt-4  pb-4'>
      <div  onClick={() => {
router.push(pathname + '?' + createQueryString('type' , 'anyType'))
}} className={`p-6 w-1/3 border hover:border-black cursor-pointer  text-center rounded-l-lg ${searchParams.toString() === 'type=anyType' ? 'bg-black text-white': 'bg-white'}`}>Any type</div>
      <div  onClick={() => {
router.push(pathname + '?' + createQueryString('type' , 'Room'))
}}  className={`p-6 w-1/3 border hover:border-black cursor-pointer text-center ${searchParams.toString() === 'type=Room' ? 'bg-black text-white': 'bg-white'}`}>Room</div>
      <div  onClick={() => {
router.push(pathname + '?' + createQueryString('type' , 'EntireHome'))
}} className={`p-6 w-1/3 border hover:border-black cursor-pointer text-center rounded-r-lg ${searchParams.toString() === 'type=EntireHome' ? 'bg-black text-white': 'bg-white'}`}>Entire home</div>
    </div>
    </div>
    </div>

}