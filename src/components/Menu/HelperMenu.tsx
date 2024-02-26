import Box from '@mui/material/Box';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import KeyIcon from '@mui/icons-material/Key';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import HelpIcon from '@mui/icons-material/Help';
import { StyledSpeedDial } from '../utils/resumeStyles';
import { useAppDispatch } from '../../app/hooks';
import { updateApiKeyModal, updateResumeData } from '../../features/userDataSlice';



const actions = [
  { icon: <KeyIcon />, name: 'Add API' , id:1 },
  { icon: <DeleteForeverIcon />, name: 'Clear API' , id:2 },
  { icon: <HelpIcon />, name: 'Help' ,id:3},

];

const  HelperMenu = ()=> {
 const dispatch = useAppDispatch();
  const handleClick = (id:number)=>{
    switch(id){
        case 1:
          dispatch(updateApiKeyModal(true));
          break;
        case 2:
          dispatch(updateResumeData(''));
          break;
        
    }
  }
  
  return (

    <Box sx={{ transform: 'translateZ(-0px)', flexGrow: 1 }}>
    
      
      <Box sx={{ position:'absolute', mt: 3, height: 320 }}>

            <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
        
          icon={<SpeedDialIcon />}
          direction={'down'}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={()=>handleClick(action.id)}
              tooltipPlacement={'right'}
          
            />
          ))}
        </StyledSpeedDial>
 


      </Box>
    </Box>

  );
}

export default HelperMenu
