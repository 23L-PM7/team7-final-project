import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';

export default function PriceRange(){
    const [minimum, setMinimum] = useState(10)
    const [maximum, setMaximum] = useState(80)
    const [value, setValue] = React.useState<number[]>([minimum , maximum]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
        setMinimum((newValue as number[])[0]);
        setMaximum((newValue as number[])[1]);
      };
    return <div className="flex flex-col">
        <div className='border-b-2'>
              <h1 className='text-xl font-bold mb-4'>Price range</h1>
              <div className='mx-auto'>
              <Box sx={{ width: 600 }}>
      <Slider
        // getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        // getAriaValueText={valuetext}
      />
    </Box>
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
    <TextField
          label="Minimum"
          value={minimum}
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Maximum"
          value={maximum}
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
    </Box>
              </div>
              </div>
    </div>
}