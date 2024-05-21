"use client"
import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Chip from '@mui/joy/Chip';
import { Checkbox } from '@mui/joy';

function valuetext(value: number) {
  return `${value}°C`;
}

export default function BasicModal() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
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
            width:700,
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
              <div className='border-b-2'>
              <h1 className='text-xl font-bold mb-4'>Type of places</h1>
              <p>Search rooms, entire homes, or any type of place</p>
              <div className='w-11/12 mx-auto flex mt-4  pb-4'>
                <div className='p-6 w-1/3 border hover:border-black  text-center rounded-l-lg'>anywhere</div>
                <div className='p-6 w-1/3 border hover:border-black  text-center '>anywhere</div>
                <div className='p-6 w-1/3 border hover:border-black  text-center rounded-r-lg'>anywhere</div>
              </div>
              </div>
              <div className='border-b-2'>
              <h1 className='text-xl font-bold mb-4'>Price range</h1>
              <div className='mx-auto'>
              <Box sx={{ width: 600 }}>
      <Slider
        // getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
    <TextField
          label="Minimum"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">${value}</InputAdornment>,
          }}
        />
        <TextField
          label="Maximum"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">${value}</InputAdornment>,
          }}
        />
    </Box>
              </div>
              </div>
              <div className='flex flex-col mt-4 border-b-2 pb-4'>
                <h1 className='text-xl font-bold mb-'>Rooms and beds</h1>
                <div>
                <p>Bedrooms</p>
                <div className='flex'>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>Any</Chip>
                  </div>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>1</Chip>
                  </div>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>2</Chip>
                  </div>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>3</Chip>
                  </div>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>4</Chip>
                  </div>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>5</Chip>
                  </div>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>6</Chip>
                  </div>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>7</Chip>
                  </div>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>8++</Chip>
                  </div>
                </div>
                
                </div>
                <div>
                  <p>Beds</p>
                  <div className='flex'>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>Any</Chip>
                  </div>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>1</Chip>
                  </div>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>2</Chip>
                  </div>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>3</Chip>
                  </div>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>4</Chip>
                  </div>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>5</Chip>
                  </div>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>6</Chip>
                  </div>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>7</Chip>
                  </div>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>8++</Chip>
                  </div>
                </div>
                </div>
                <div>
                  <p>Bathrooms</p>
                  <div className='flex'>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>Any</Chip>
                  </div>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>1</Chip>
                  </div>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>2</Chip>
                  </div>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>3</Chip>
                  </div>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>4</Chip>
                  </div>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>5</Chip>
                  </div>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>6</Chip>
                  </div>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>7</Chip>
                  </div>
                  <div className='cursor-pointer hover:border hover:border-black rounded-3xl'>
                    <Chip>8++</Chip>
                  </div>
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