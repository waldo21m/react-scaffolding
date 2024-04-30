import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { indigo, pink } from '@mui/material/colors';

let theme = createTheme({
	palette: {
		primary: {
			main: indigo[500],
		},
		secondary: {
			main: pink['A200'],
		},
	},
});

theme = responsiveFontSizes(theme);

export default theme;
