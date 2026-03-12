import { createTheme } from "@mui/material";

const getTheme = (mode) => {
    return createTheme({
        palette: {
            mode: mode,
            primary: {
                main: '#DB4444'
            }
        },
        typography: {
            fontFamily: "Inter"
        }
    })
}


export default getTheme;