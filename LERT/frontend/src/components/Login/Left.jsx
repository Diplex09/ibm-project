import { Box, Typography, Link } from '@mui/material';

export const Left = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'space-between',
                width: '50%',
                height: '100%',
                p: '50px',
                background: 'var(--blue80)',
                color: 'var(--white)',
            }}
        >
            {/* Head Container */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography
                    component="span"
                    sx={{
                        fontSize: '20px',
                        fontWeight: '300',
                    }}
                >
                    Welcome to,
                </Typography>

                <Typography
                    component="span"
                    variant="h3"
                    sx={{
                        fontSize: '65px',
                        fontWeight: '300',
                        mt: '-5px',
                        mb: '15px',
                    }}
                >
                    IBM{' '}
                    <Typography
                        component="span"
                        variant="h3"
                        sx={{ fontSize: '65px', fontWeight: '500' }}
                    >
                        LERT
                    </Typography>
                </Typography>

                <Typography
                    component="p"
                    sx={{ fontSize: '20px', fontWeight: '400' }}
                >
                    Start using the Labor Expenses Recovery Tool
                </Typography>
            </Box>
            {/* - - - - - -  */}
            {/* Bottom Container */}
            <Box>
                <Typography
                    component="span"
                    sx={{ fontSize: '12px', fontWeight: '300' }}
                >
                    Learn more:
                </Typography>
                <Box sx={{ fontSize: '10px' }}>
                    <Link
                        href="https://www.ibm.com/"
                        target="_blank"
                        sx={{ mr: '10px' }}
                    >
                        Terms of use
                    </Link>
                    <Link
                        href="https://www.ibm.com/"
                        target="_blank"
                        sx={{ mr: '10px' }}
                    >
                        IBM Internal Privacy Statement
                    </Link>
                    <Link
                        href="https://www.ibm.com/"
                        target="_blank"
                        sx={{ mr: '10px' }}
                    >
                        Feedback
                    </Link>
                    <Link
                        href="https://www.ibm.com/"
                        target="_blank"
                        sx={{ mr: '10px' }}
                    >
                        Business Conduct Guidelines
                    </Link>
                    <Link
                        href="https://www.ibm.com/"
                        target="_blank"
                        sx={{ mr: '10px' }}
                    >
                        Support
                    </Link>
                </Box>
            </Box>
            {/* - - - - - -  */}
        </Box>
    );
};
