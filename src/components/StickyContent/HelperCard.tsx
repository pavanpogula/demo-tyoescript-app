import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import { Button, Stack } from '@mui/joy';
import { useAppDispatch } from '../../app/hooks';
import { updateApiKeyModal } from '../../features/userDataSlice';

export default function InteractiveCard() {
    const dispatch = useAppDispatch();
    const openApiKeyModalHandler = ():void =>{
        dispatch(updateApiKeyModal(true));
    }
  return (
    <Card

      variant="outlined"
      orientation="horizontal"
      sx={{
        position:'absolute',
        width: 100,
        
      }}
    >
        <Stack spacing={2}>
     <Button
                        onClick={openApiKeyModalHandler}
                        size="sm"
                        variant="soft"
                        color={ "success"}
                    >
                        Insert API Key
                    </Button>
                    <Button
                        onClick={()=>{}}
                        size="sm"
                        variant="soft"
                        color={ "success"}
                    >
                        Clear API Key
                    </Button>
                    <Button
                        onClick={()=>{}}
                        size="sm"
                        variant="soft"
                        color={ "success"}
                    >
                        Genetrate API Key
                    </Button>
                    </Stack>
      <CardContent>
       
        
      </CardContent>
    </Card>
  );
}
