import React from 'react';
import { styled } from '@mui/system';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import profile from "./profile.jpeg"
const AppBarStyled = styled(AppBar)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    backgroundColor: '#00000063',
    border: '4px solid black',
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
}));

const Title = styled(Typography)(({ theme }) => ({
    flexGrow: 1,
}));

const Header = () =>
(
    <AppBarStyled position="sticky">
        <Toolbar>
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Pavan Pogula">
              <IconButton href='https://www.linkedin.com/in/pavanreddyp/' target='_blank' sx={{ p: 0 }}>
                <Avatar alt="Pavan Pogula" src={profile} />
              </IconButton>
            </Tooltip>
          </Box>
            <Box sx={{
                margin:'auto'
            }}>
            <Title align='center' sx={{ 
            color: 'black',
            fontWeight: 600,
           
            }} variant="h4">
                {`Summary Generator  `}
            </Title>
            </Box>
        </Toolbar>
    </AppBarStyled>
);

export default Header;