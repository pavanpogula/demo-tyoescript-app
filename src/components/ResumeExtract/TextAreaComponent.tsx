import * as React from 'react';
import { StyledTextarea, StyledLabel } from "../utils/resumeStyles"
import Textarea from '@mui/joy/Textarea';
import { useAppDispatch } from '../../app/hooks';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import {  updateSnackbar } from '../../features/userDataSlice';
import { TextAreaComponentType } from '../utils/types';

const InnerTextarea = React.forwardRef<
  HTMLTextAreaElement,
  JSX.IntrinsicElements['textarea']>(function InnerTextarea(props, ref) {
    const id = React.useId();
    return (
      <React.Fragment>
        <StyledTextarea minRows={2} {...props} ref={ref} id={id} />
        <StyledLabel htmlFor={id}>{`Type ${props.title} Data`}</StyledLabel>
      </React.Fragment>
    );
  });


const TextAreaComponent = ({
  modalHandler,
  isModalOpen,
  data,
  handler,
  componentTitle,
  index
  
}: TextAreaComponentType) => {
  const dispatch = useAppDispatch();
  
  const [textData, setTextData] = React.useState<string>(data);
  React.useEffect(()=>{
      setTextData(data)
  },[data])
  const textAreaHeight = index===2 ? '600px' : '100px';

  const onClickHandler = (): void => {
    if (!isModalOpen)
      modalHandler(true)
  }
  const saveHandler = (): void => {
    if(textData!==data)
    {handler(textData);
    dispatch(updateSnackbar({ isError: false, isOpen: true, message: `${componentTitle} Data Updated Succesfully` }))
    }
    modalHandler(false);
  }
  const clearHandler = (): void => {
    setTextData('');
  }
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isModalOpen)
        modalHandler(true)
    setTextData(event.target.value);
  };
  return (<>
    <Textarea
      onClick={onClickHandler}
      value={textData}
      onChange={handleTextChange}
      slots={{ textarea: InnerTextarea }}
      slotProps={{ textarea: { placeholder: '..........', title:componentTitle, style: { overflow: 'auto' } } }}
      sx={{
        borderRadius: '6px',
        width: '600px',
        height: textAreaHeight,
        margin: 'auto',
        marginBottom: '40px',
      }
      }
    />
    {
      isModalOpen && <Box
        sx={{
          mt: 1,
          display: 'flex',
          gap: 1,
          flexDirection: { xs: 'column', sm: 'row-reverse' },
        }}
      >
        <Button onClick={saveHandler} variant="soft" >Save</Button>
        <Button onClick={clearHandler} variant="outlined" color="primary" >
          Clear Data
        </Button>
      </Box>
    }
  </>
  );

}
export default TextAreaComponent;