import * as React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';
import { MD3DarkTheme, MD3LightTheme, PaperProvider, } from 'react-native-paper';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';

const { theme } = useMaterial3Theme();
const paperTheme ={ ...MD3LightTheme, colors: theme.light };


export default function Main() {
  return (
    <PaperProvider theme={paperTheme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);