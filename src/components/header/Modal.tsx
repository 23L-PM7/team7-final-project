"use client"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Chip from '@mui/joy/Chip';
import { Checkbox } from '@mui/joy';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import TypeOfPlace from './Modal/TypeOfPlace';
import PriceRange from './Modal/PriceRange';
import Chips from './Modal/Chips';

export default function BasicModal() {
  const [open, setOpen] = React.useState<boolean>(false);

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.append(name, value)

      return params.toString()
    },
    []
  );

  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Filter
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 1000,
            width: 700,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            <div className='w-100% flex justify-center items-center border-b-2'>
              filters
            </div>
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            <div className='flex flex-col'>
              <TypeOfPlace />
              <PriceRange />
              <div className='flex flex-col mt-4 border-b-2 pb-4'>
                <h1 className='text-xl font-bold mb-'>Rooms and beds</h1>
                <div>
                  <p>Bedrooms</p>
                  <div onClick={() => {
                    router.push(pathname + '?' + createQueryString('Category', 'Bedrooms'))
                  }} className=''>
                    <Chips />
                  </div>

                </div>
                <div>
                  <p>Beds</p>
                  <div onClick={() => {
                    router.push(pathname + '?' + createQueryString('Category', 'Beds'))
                  }} className=''>
                    <Chips />
                  </div>
                </div>
                <div>
                  <p>Bathrooms</p>
                  <div onClick={() => {
                    router.push(pathname + '?' + createQueryString('Category', 'Bathrooms'))
                  }} className=''>
                    <Chips />
                  </div>
                </div>
              </div>
              <div className='border-b-2 pb-4'>
                <h1 className='text-xl font-bold mb-4'>Property type</h1>
              </div>
              <div className='border-b-2 pb-4'>
                <h1 className='text-xl font-bold mb-8'>Amenities</h1>
                <p>Essentials</p>
                <div className='grid grid-cols-2 gap-4'>
                  <Checkbox size="lg" label="wifi" variant="solid" defaultChecked />
                  <Checkbox size="lg" label="washer" variant="solid" defaultChecked />
                  <Checkbox size="lg" label="Air condition" variant="solid" defaultChecked />
                  <Checkbox size="lg" label="kitchen" variant="solid" defaultChecked />
                  <Checkbox size="lg" label="dryer" variant="solid" defaultChecked />
                  <Checkbox size="lg" label="heating" variant="solid" defaultChecked />
                </div>
              </div>
            </div>
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}