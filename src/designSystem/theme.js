import { createTheme } from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    primary: 'red',
  },
  darkColors: {
    primary: 'blue',
  },
  components: {
    Button: {
      raised: true,
    },
  },
});


export {theme}
