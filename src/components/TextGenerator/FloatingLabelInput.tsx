import * as React from 'react';
import Input from '@mui/joy/Input';

import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
type InputComponentType = {
    field_value : string;
    handler:(data:string)=> void;
    index:number;
}
export default function InputComponent({handler,field_value,index}:InputComponentType) {
    const [fieldValue,setFieldValue] = React.useState<string>(field_value);
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFieldValue(event.target.value);
    };
    const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        if(field_value!==fieldValue)
            handler(fieldValue);
    }
   

  return (
      <Input
       
        startDecorator={index===1?<BusinessIcon/>:<PersonIcon/>}
        placeholder={index===1?"Company...":"Job Title..."}
        variant="soft"
        onChange={inputHandler}
        onBlur={blurHandler}
        value={fieldValue}
        sx={{
        width:'100%',  
        bgcolor:'black',      
        height:'60px',
          '--Input-radius': '10px',
         borderBottomLeftRadius:0,
         borderBottomRightRadius:0,
          borderColor: 'neutral.outlinedBorder',
          '&:hover': {
            borderColor: 'neutral.outlinedHoverBorder',
          },
          '&::before': {
            border: '1px solid var(--Input-focusedHighlight)',
            transform: 'scaleX(0)',
            left: 0,
            right: 0,
            bottom: '-2px', 
            top: 'unset',
            transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
            borderRadius: 0,
          },
          '&:focus-within::before': {
            transform: 'scaleX(1)',
          },
        }}
      />
    
  );
}