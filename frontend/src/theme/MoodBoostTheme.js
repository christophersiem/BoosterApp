import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const theme = createMuiTheme({

    typography: {

        subtitle: {
            fontFamily: 'Noto Sans',
            fontSize: "24px",
            letterSpacing: "1.5px",
        },
        subtitle2: {
            fontFamily: 'Noto Sans, sans-serif',
            fontSize: "18px",
            letterSpacing: "1.5px",
            lineHeight: "30px",
        },


    },


    overrides: {
        MuiPaper: {
            root: {
                backgroundColor: "#ffffff",
            },
        },
        MuiAlert:{
            filledSuccess:{
                justifyContent:"center",
            }
        },

        MuiTypography: {
            body1: {
                fontFamily: 'Noto Sans, sans-serif',
            }
        },
        MuiButton: {
            root: {
                fontFamily: 'Noto Sans, sans-serif',
            }
        },
    }
});