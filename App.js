
import { ThemeProvider } from "@react-navigation/native";
import { BaseNavigator } from "./src/navigations/baseNavigator";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from "./src/designSystem/theme";


export default function App() {
  return (

    <SafeAreaProvider>

        <ThemeProvider theme={theme}>
          <BaseNavigator/>
        </ThemeProvider>

    </SafeAreaProvider>
  );
}

