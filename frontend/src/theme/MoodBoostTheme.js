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
                backgroundColor: "#f7f5ed",
            },
        },
        MuiAlert:{
            filledSuccess:{
                justifyContent:"center",
            },
            filledError:{
                backgroundColor:"#f6866f"
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
            },
            containedPrimary: {
                backgroundColor:"#6b87e3"
            }
        },
    }
});