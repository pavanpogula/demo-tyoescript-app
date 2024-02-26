import { Box, Stack } from '@mui/material'
import React from 'react'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import gifVideo from "./gifVideo.mp4"; 
function RightComponent() {
    return (
        <Box sx={{
            width: '40%',
        }}>
            <Stack sx={{ width: '100%', marginRight: '10px',  my: 10 }} >
                <Box sx={
                    {
                        border: '5px solid black',
                        width: '312px',
                        height: '194px',
                        marginLeft: '12%',
                        borderRadius: '40px',
                        position: 'absolute',
                        zIndex: '1'
                    }
                }>
                </Box>

                <Box sx={{
                    position: 'absolute',
                    zIndex: '2',
                    width: '412px',
                    height: '300px',
                    marginTop: '2%',
                    marginLeft: '3%',
                    borderRadius: '48px',
                }}>
                    <video
                        autoPlay
                        loop
                        muted
                        poster={gifVideo}
                        style={{ width: '100%', height: '100%', borderRadius: 'inherit', objectFit: 'fill' }}
                    >
                        <source
                            src={gifVideo}
                            type="video/mp4"
                        />
                    </video>
                </Box>
                <Box sx={
                    {
                        position: 'absolute',
                        border: '5px solid black',
                        width: '372px',
                        height: '301px',
                        marginTop: '4%',
                        borderRadius: '48px',
                        zIndex: '1'
                    }
                }>

                </Box>
                <Box sx={{marginTop:'60%'}}>
                    <AutoAwesomeIcon sx={{fontSize:'90px'}}/>
                </Box>

            </Stack>
        </Box>
    )
}

export default RightComponent