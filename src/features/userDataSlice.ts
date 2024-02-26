import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { snackbarType } from '../components/utils/types'
import {Cookies} from "react-cookie"
import { decrypt } from '../components/utils/customFunctions';

const cookie = new Cookies();
const token:string = cookie.get('g_token_') ? cookie.get('g_token_') : '';
const decryptedKey:string = token ? decrypt(token,"Ac0R0dRHLMPqJqPCF56Ny26laIVpWdzl") : '';

type InitialState = { 
  company: string;
  jobTitle: string;
  resumeData: string,
  jobDescription: string;
  snackbar: snackbarType
  isOpenApiKeyModal: boolean,
  API_KEY:string,
  SECRET:string,
  ApiCookie: string,

  
}
const initialState: InitialState = {
  resumeData: '',
  company:'',
  jobTitle: '',
  jobDescription:'',
  snackbar:{
    isOpen: false,
    message:'',
    isError:false
  },
  isOpenApiKeyModal: false,
  ApiCookie: token,
  API_KEY: decryptedKey,
  SECRET: 'Ac0R0dRHLMPqJqPCF56Ny26laIVpWdzl',
  
}

const userDataSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    clearResumeData: state => {
      state.resumeData=''
    },
    updateResumeData: (state, action: PayloadAction<string>) => {
      state.resumeData = action.payload
    },
    updateJobDescription: (state, action: PayloadAction<string>) => {
      state.jobDescription = action.payload
    },
    updateSnackbar : (state, action: PayloadAction<snackbarType>) => {
      state.snackbar = action.payload
    },
    updateApiKeyModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenApiKeyModal = action.payload
    },
    updateApiKey: (state, action: PayloadAction<string>) => {
      state.API_KEY = action.payload
    },
    updateApiCookie: (state, action: PayloadAction<string>) => {
      state.ApiCookie = action.payload
    },
    updateCompany: (state, action: PayloadAction<string>) => {
      state.company = action.payload
    },
    updateJobTitle: (state, action: PayloadAction<string>) => {
      state.jobTitle = action.payload
    }
    

  }
})

export default userDataSlice.reducer
export const { updateJobDescription, updateCompany, updateJobTitle, clearResumeData, updateResumeData, updateSnackbar, updateApiKeyModal, updateApiKey, updateApiCookie } = userDataSlice.actions