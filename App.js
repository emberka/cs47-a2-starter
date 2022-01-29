import AppLoading from 'expo-app-loading';
import { Platform, StyleSheet, Text, View, StatusBar, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import TopBar from './components/TopBar'
import Content from './components/Content'
import BotBar from './components/BotBar'

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <View style={styles.container}>
        <TopBar />
        <Content />
        <BotBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.dark.bg,
  },
});
