import { Box, Stack } from '@mui/joy'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { updateJobDescription, updateResumeData } from '../../features/userDataSlice';
import TextAreaHOC from '../ResumeExtract/TextAreaHOC';
import TextAreaComponent from '../ResumeExtract/TextAreaComponent';

const TextAreaStack = () => {
    const dispatch = useAppDispatch();
    const resumeData:string = useAppSelector(state=> state.userReducer.resumeData);
    const jobDescription:string = useAppSelector(state => state.userReducer.jobDescription);

    const resumeHandler = (data:string):void =>{
        dispatch(updateResumeData(data));
    }

    const jobDescriptionHandler = (data:string):void =>{
        dispatch(updateJobDescription(data));
    }

  return (
   <>
   <Box >    
   <Stack sx={{width:'100%'}} direction="row" spacing={1}>
       
      <TextAreaHOC WrappedComponent={TextAreaComponent} data={resumeData} handler={resumeHandler} componentTitle={'Resume'} key={1}/>
      <TextAreaHOC WrappedComponent={TextAreaComponent} data={jobDescription} handler={jobDescriptionHandler} componentTitle={'Job Description'} key={2}/>
    
    </Stack>
   </Box>
   </>
  )
}
export default TextAreaStack;