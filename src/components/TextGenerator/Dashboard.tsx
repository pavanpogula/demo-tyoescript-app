import React from 'react'
import { Box, Stack } from '@mui/material';
// import Sheet from '@mui/joy/Sheet';
// import Stack from '@mui/joy/Stack';
// import { styled } from '@mui/joy/styles';
// import TextComponent from './TextStack';
// import TextAreaStack from './TextAreaStack';
import TextStackDemo from './TextDemoStack';





const Dashboard = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const blurHandler = () => {
    if (ref.current) {
      ref.current.style.boxShadow = `6px -2px 11px 3px rgba(0, 0, 0, 0.2),
       -6px 2px 11px 3px rgba(0, 0, 0, 0.2)`;
      ref.current.style.transitionDuration = '0.9s';
      ref.current.style.height = '610px';
      ref.current.style.width = '1010px';

    }
  }
  const clickHanlder = () => {
    if (ref.current) {
      ref.current.style.boxShadow = `6px -2px 11px -8px rgba(0, 0, 0, 0.2),
       -6px 2px 11px -7px rgba(0, 0, 0, 0.2)`;
      ref.current.style.transitionDuration = '0.9s';
      ref.current.style.height = '600px';
      ref.current.style.width = '1000px';

    }
  }

  return (

    <Box
      ref={ref}
      id='main-box-component'

      p={1}
      sx={{
        boxShadow: `6px -2px 11px 3px rgba(0, 0, 0, 0.2),
        -6px 2px 11px 3px rgba(0, 0, 0, 0.2)`,



        minWidth: 800,
        maxWidth: 1200,
        width: 800,
        minHeight: 400,
        height: 600,
        maxHeight: 800,

        my: 10,
        mx: 'auto',
        display: 'flex',
        background: 'black',
         border: '5px solid black'

        // background:'linear-gradient(to right, rgb(59 26 80 / 85%), rgb(16 20 51 / 87%))',

        // bgcolor: 'primary.700',
        // '&:hover': {
        //   bgcolor: 'primary.400',
        // },
      }}

    >
      <Stack sx={{ width: '100%', marginRight: '10px', marginLeft: '10px', my: 10 }} >
        {/* <TextComponent/> */}
        <TextStackDemo/>
        {/* <TextAreaStack/> */}
        {/* <Item>Item 3</Item>
        <Item>Item 3</Item> */}

        


      </Stack>
    </Box>

  )
}


export default Dashboard