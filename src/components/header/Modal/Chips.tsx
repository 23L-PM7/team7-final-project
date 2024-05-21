'use client'

import Chip from '@mui/joy/Chip';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export const bedroomCounts = [
  1, 2, 3 , 4 , 5, 6, 7 ,8
]


export default function Chips() {

  
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  // const bedroomCounts = searchParams.get('Bedrooms')
  const [bedroomCount, setBedroomsCount] = useState<string | null>(null)

  const createQueryString = useCallback(
    (name: string, value: any) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  );

  const handleBedroomCount = (count: string) => {
    setBedroomsCount(count)
  }

  console.log(bedroomCount);
  
  useEffect(()=> {
    if(bedroomCounts) {
      // setBedroomsCount(bedroomCounts)
    }
  },[])

  return (<div className='flex justify-between w-100%'>
    <div onClick={() => {
                    router.push(pathname + '?' + createQueryString('HowMany', bedroomCount))
                  }} className='cursor-pointer hover:border hover:border-black rounded-2xl py-2 px-3 bg-gray-100'>
      <Chip>Any</Chip>
    </div>
    {bedroomCounts && Array.isArray(bedroomCounts) && bedroomCounts.map((count: number) => (
  <div key={count} onClick={() => handleBedroomCount(count.toString())} className={`flex cursor-pointer hover:border hover:border-black rounded-2xl py-2 px-3 bg-gray-100`}>
      <Chip>{count}</Chip>
    </div>
))}
  </div>
  )
}