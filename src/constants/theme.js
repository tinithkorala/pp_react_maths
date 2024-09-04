import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#0065c6',
        },
    },
    typography: {
        fontFamily: 'var(--font-family-inside) !important', // Define font-family at the root level
    },
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontFamily: 'var(--font-family)',
                    color: 'var(--base-text-color)',
                    fontSize: '24px',
                    fontWeight: 400,
                    lineHeight: '1.2em',
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontFamily: 'var(--font-family)',
                    color: 'var(--base-text-color)',
                    fontSize: 'var(--base-font-size)',
                    fontWeight: 400
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: 'var(--font-family)',
                    color: 'var(--base-text-color)',
                    fontSize: 'var(--small-font-size)',
                    fontWeight: 400
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                root: {
                    '& .MuiPaper-root': {
                        fontFamily: 'var(--font-family)',
                        color: 'var(--light-text-color)',
                        fontSize: 'var(--small-font-size)',
                        fontWeight: 400,
                        background: 'var(--ateneo-blue-500)',
                        '& .MuiListItemText-root, & .MuiListItemIcon-root, & .MuiTypography-root': {
                            color: 'var(--light-text-color)',
                        }
                    },
                    '& .MuiListItemText-root, & .MuiListItemIcon-root, & .MuiTypography-root, & a': {
                        color: 'var(--light-text-color)',
                    },
                    '& .MuiListItem-root': {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '0 15px',
                    },
                    '& .MuiSvgIcon-root': {
                        margin: '0px 15px',
                        height: '80px',
                        width: '80px',
                        padding: '25px',
                        borderRadius: '12px'
                        // background: 'var(--cola-blue-500)',
                    },
                    '& .MuiSvgIcon-root.selected': {
                        backgroundColor: 'var(--cola-blue-500)',
                        transition: 'background-color 0.3s ease',
                        '&:hover': {
                            backgroundColor: 'var(--ateneo-blue-300)',
                        }
                    },
                    '& .MuiList-root': {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        height: "inherit",
                        alignItems: 'center',
                    }

                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    fontFamily: 'var(--font-family)',
                    color: 'var(--base-text-color)'
                },
            },
        },
        MuiButtonBase: {
            styleOverrides: {
                '& .MuiButton-startIcon>*': {
                    fontSize: '50px'
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    padding: '12px 14px',
                },
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    padding: '12px 14px',
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    margin: 0,
                    padding: '10px 40px',
                    display: 'flex',
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems:"center",
                    gap: "30px",
                }
            },
        },
    },
});