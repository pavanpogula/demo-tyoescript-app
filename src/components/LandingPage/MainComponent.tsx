import { Box, Stack } from '@mui/material'
import React from 'react'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'

function MainComponent() {
    return (
        <Box>
            <Stack 
            direction="row"
             spacing={1}
             sx={{
                height:'100vh',
                width:'100%',
                minWidth:'900px',
                
             }}
             >
                <LeftComponent />
                <RightComponent />
            </Stack>
        </Box>
    )
}

export default MainComponent