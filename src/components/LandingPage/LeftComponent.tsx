import { Button, Stack, Typography } from '@mui/material'
import { Box } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { IconButton } from '@mui/material';
function LeftComponent() {
    return (
        <Box
            sx={{
                width: '60%',

            }}
        >
            <Stack spacing={2}>
                <Box sx={{
                    padding: '40px',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Typography sx={{
                        fontFamily: 'Roboto Mono',
                        fontSize: '40px',
                        fontWeight: '700',

                        textAlign: 'left',
                        color: 'black',

                    }} component="span">
                        {
                            `Craft Your Professional Summary Effortlessly.`
                        }
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Roboto Mono',
                        fontSize: '40px',
                        fontWeight: '700',

                        textAlign: 'left',
                        color: 'black',
                        marginTop: '10px',

                    }} component="span">
                        {
                            ` Let us Help You Make Your Resume Stand Out!...`
                        }
                    </Typography>
                </Box>
                <Box sx={{ paddingLeft: '40px' }}>
                    <Typography component={'span'} sx={{
                        fontFamily: 'Roboto Mono',
                        fontSize: '24px',
                        fontWeight: '700',

                        textAlign: 'left',
                        color: 'black',
                        marginTop: '10px',

                    }} >
                        {`Unlock your career potential with our intuitive resume summary generator by just a click...`}
                    </Typography>
                </Box>
                <Box sx={{ paddingLeft: '40px' }}>

                    <Button sx={{
                        fontFamily: 'cursive',
                        fontSize: '20px',
                        backgroundColor: 'black',
                        padding: '14px',
                        boxShadow: `6px -2px 11px 3px rgba(0, 0, 0, 0.2),
            -6px 2px 11px 3px rgba(0, 0, 0, 0.2)`,
                        textTransform: 'none',
                        borderRadius: '30px',
                        color: 'white',
                        ':hover': {
                            backgroundColor: '#000000cc'
                        }
                    }} endIcon={<AutoAwesomeIcon />}>
                        {'Generate Summary'}
                    </Button>
                </Box>
            </Stack>

        </Box>
    )
}

export default LeftComponent