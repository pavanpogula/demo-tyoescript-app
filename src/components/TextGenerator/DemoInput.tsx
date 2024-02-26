
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';

type InputWithIconType = {
    field_value : string;
    handler:(data:string)=> void;
    index:number;
}
const  InputWithIcon = ({handler,field_value,index}:InputWithIconType)=> {
  
    const [fieldValue,setFieldValue] = React.useState<string>(field_value);
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFieldValue(event.target.value);
    };
    const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        if(field_value!==fieldValue)
            handler(fieldValue);
    }
  
    return (
    <Box sx={{ width:'300px' ,'& > :not(style)': { m: 1, } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
    
        {index===1?<BusinessIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />:<PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
        
        <TextField
        onChange={inputHandler}
        onBlur={blurHandler}
        value={fieldValue}
        fullWidth label={index===1?"Company...":"Job Title..."} 
        variant="standard" />
      </Box>
    </Box>
  );
}

export default InputWithIcon