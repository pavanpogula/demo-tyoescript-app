import * as React from 'react';
import Button from '@mui/joy/Button';
import Snackbar from '@mui/joy/Snackbar';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { snackbarType } from './types';
import { updateSnackbar } from '../../features/userDataSlice';


export default function SnackbarWithDecorators() {
    const { isOpen, isError, message }: snackbarType = useAppSelector(state => state.userReducer.snackbar);
    const dispatch = useAppDispatch();
    const closeHandler = (): void => {
        dispatch(
            updateSnackbar({
                isError: false,
                isOpen: false,
                message: ''
            }));
    }
    return (
        <React.Fragment>
            <Snackbar
                variant="soft"
                color={ isError?"danger":"success"}
                open={isOpen}
                onClose={() => closeHandler()}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}

                endDecorator={
                    <Button
                        onClick={()=>closeHandler()}
                        size="sm"
                        variant="soft"
                        color={ isError?"danger":"success"}
                    >
                        Dismiss
                    </Button>
                }
            >
                {message}
            </Snackbar>
        </React.Fragment>
    );
}