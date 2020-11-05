import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const theme = createMuiTheme({
  palette: {
    first: {
      color: '#AD6B36',
    },
    second: {
      color: '#43382c',
    },
    third: {
      color: '#f1eded',
    },
  },

  typography: {
    subtitle: {
      fontFamily: 'Lora',
      fontSize: '24px',
      letterSpacing: '1.5px',
    },
    subtitle2: {
      fontFamily: 'Lora',
      fontSize: '18px',
      letterSpacing: '1.5px',
      lineHeight: '30px',
    },
  },

  overrides: {
    MuiSelect: {
      outlined: {
        fontFamily: 'Nora',
      },
    },

    MuiPaper: {
      root: {
        backgroundColor: '#f1eded',
      },
    },
    MuiAlert: {
      filledSuccess: {
        justifyContent: 'center',
        backgroundColor: '#355e25',
        color: '#c4783c',
        fontFamily: 'Lora',
        fontSize: '18px',
      },
      filledError: {
        backgroundColor: '#f6866f',
      },
      outlinedInfo: {
        '& .MuiAlert-icon': {
          color: '#43382c',
        },
        color: '#43382c',
        border: '1.5px solid #AD6B36',
      },
    },

    MuiTypography: {
      body1: {
        fontFamily: 'Lora',
        color: '#43382c',
      },
    },
    MuiButton: {
      root: {
        MuiFocused: {
          color: '#43382c',
        },
        fontFamily: 'Lora',
        borderRadius: '20px',
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: '#43382c',
          '@media (hover: none)': {
            backgroundColor: '#f1eded',
          },
        },
        backgroundColor: '#43382c',
      },
    },

    MuiFormLabel: {
      root: {
        fontFamily: 'Lora',
        color: '#43382c',
        '&$focused': {
          color: '#AD6B36',
        },
      },
    },
    MuiDialog: {
      paperFullScreen: {
        backgroundColor: '#f1eded',
      },
    },
    MuiFormHelperText: {
      color: 'black',
    },
    MuiOutlinedInput: {
      input: {
        fontFamily: 'Nora',
      },
      root: {
        '& $notchedOutline': {
          borderColor: '#43382c',
        },
        '&:hover $notchedOutline': {
          borderColor: '#AD6B36',
        },
        '&$focused $notchedOutline': {
          borderColor: '#AD6B36',
        },
      },
    },
  },
});
