import * as React from 'react';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import {  TextAreaHOCProps } from '../utils/types';



const TextAreaHOC = ({WrappedComponent,handler,data,componentTitle}:TextAreaHOCProps) => {
  const [open, setOpen] = React.useState(false);
  
  return (
    <React.Fragment>
     <WrappedComponent index={1} modalHandler={setOpen} isModalOpen={open} data={data} handler={handler}  componentTitle={componentTitle}/>
     
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="nested-modal-title"
          aria-describedby="nested-modal-description"
          sx={(theme) => ({
            height:'800px',
            [theme.breakpoints.only('xs')]: {
              top: 'unset',
              bottom: 0,
              left: 0,
              right: 0,
              borderRadius: 0,
              transform: 'none',
              maxWidth: 'unset',
            },
          })}
        >
          <WrappedComponent index={2}modalHandler={setOpen} isModalOpen={open} data={data} handler={handler} componentTitle={componentTitle}/>
       
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
export default TextAreaHOC;