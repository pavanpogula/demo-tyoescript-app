import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import Input from '@mui/joy/Input';
import SentimentVeryDissatisfiedRoundedIcon from '@mui/icons-material/SentimentVeryDissatisfiedRounded';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import Typography from '@mui/joy/Typography';
import Key from '@mui/icons-material/Key';
import { Divider } from '@mui/joy';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateApiKey, updateApiKeyModal, updateSnackbar } from '../../features/userDataSlice';
import { Cookies } from 'react-cookie';
import { encrypt } from '../utils/customFunctions';


export default function ApiModal() {
    const dispatch = useAppDispatch();
    const cookies = new Cookies();
    const open: boolean = useAppSelector(state => state.userReducer.isOpenApiKeyModal);
    const [value, setValue] = React.useState<string>('');
    const [invalid, setInvalid] = React.useState<boolean>(false);
    const SECRET: string = useAppSelector(state => state.userReducer.SECRET);

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value;

        //input data should only consist  0-9 | _ | - | A-Z,a-z
        const regex = /^[a-zA-Z0-9_-]+$/;
        if (input === '') {
            setValue('');
            invalid && setInvalid(false)
        }
        else if (regex.test(input) && input.length <= 50) {
            setValue(input)
            invalid && setInvalid(false)
        }
        else {
            setInvalid(true)
        }
    };
    const closeHandler = (): void => {

        setValue('');
        setInvalid(false);
        // update redux store to close API Key Input  Modal
        dispatch(updateApiKeyModal(false));
    }
    const saveHandler = async () => {
        if (!invalid && value !== '') {

            const encryptedValue =  encrypt(value,SECRET); //await CryptoJS.AES.encrypt(value, SECRET).toString();
            //save this data to cookis - encrytpion data

            cookies.set('g_token_', encryptedValue, {
                expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),//10 days
                domain: window.location.hostname,
                secure: true, // Only transmit over HTTPS
                path: '/'
            });

            // updating token in redux store
            dispatch(updateApiKey(value));

            //updating snack bar in redux store 
            dispatch(updateSnackbar({
                isError: false,
                isOpen: true,
                message: "API Key Updated Successfully"
            }))
            closeHandler();
        }
    }


    return (
        <React.Fragment>

            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={closeHandler}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: 600,
                        minWidth: 400,
                        borderRadius: 'md',
                        p: 2,
                        boxShadow: 'lg',
                    }}
                >
                    <Stack
                        spacing={0.5}
                        sx={{
                            '--hue': Math.min(value.length * 8, 120),
                            height: 60
                        }}
                    >
                        <Input
                            type="text"
                            placeholder="Enter API Key..."
                            startDecorator={<Key />}
                            value={value}
                            onChange={inputHandler}
                        />

                        <Typography
                            level="body-xs"
                            sx={{ alignSelf: 'flex-end', color: 'hsl(var(--hue) 60% 40%)' }}
                        >
                            {invalid ? (
                                <Typography color="danger" fontSize="10px" startDecorator={<SentimentVeryDissatisfiedRoundedIcon />}>
                                    Invalid Input
                                </Typography>
                            ) : value.length <1  ? (
                                'start typing'
                            ) : (
                                <Typography  fontSize="10px" startDecorator={ value.length <15 ?<SentimentSatisfiedAltOutlinedIcon fontSize='small' /> : <EmojiEmotionsOutlinedIcon fontSize='small'/>}>
                                { value.length <38? 'keep going...':''}
                            </Typography>
                            )}
                        </Typography>

                    </Stack>
                    <Stack direction="row"
                        divider={<Divider orientation="vertical" />}
                        spacing={2}
                        justifyContent="center">
                        <Button onClick={closeHandler} variant='solid'>Close</Button>
                        <Button onClick={saveHandler} variant="solid">
                            Save
                        </Button>
                    </Stack>
                </Sheet>
            </Modal>
        </React.Fragment>
    );
}