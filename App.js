import AppLoading from 'expo-app-loading';
import { Platform, StyleSheet, Text, View, StatusBar, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';

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
        <View style={styles.topbarWrap}>
            <View style={styles.topbar}>
                <TouchableOpacity>
                    <Image style={styles.topicon} source={require('./assets/Icons/menu_dark.png')}/>
                </TouchableOpacity>
                <Text style={styles.titletext}> 
                    ensom
                </Text>
                <TouchableOpacity>
                    <Image style={styles.topicon} source={require('./assets/Icons/moon.png')}/>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.middleWrap}>
            <View style={styles.card}>
                <ImageBackground style={styles.profilePic} imageStyle={{borderRadius: 15}} source={require('./assets/Profiles/mtl.jpg')}>
                    <View style={styles.profileTextWrap}>
                        <Text style={styles.text}> MTL </Text>
                        <Text style={styles.subtext}>  2 miles away </Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.audioWrap}>
                <View style={styles.audioTextBox}>
                    <Text style={styles.audiotext}> My hottest take </Text>
                </View>
                <View style={styles.audio}>
                    <Image style={styles.playicon} source={require('./assets/Icons/player_dark.png')}/>
                    <Image style={styles.waveform} source={require('./assets/Icons/audio_waveform_dark.png')}/>
                </View>
            </View>
        </View>
        <View style={styles.botbarWrap}>
            <View style={styles.botbar}>
                <TouchableOpacity>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <View style={{paddingBottom: 3}}>
                            <Image style={styles.botbarIcons} source={require('./assets/Icons/discover_dark.png')}/>
                        </View>
                        <Text style={styles.botbarText}> Discover </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <View style={{paddingBottom: 3}}>
                            <Image style={styles.botbarIcons} source={require('./assets/Icons/heart_dark.png')}/>
                        </View>
                        <Text style={styles.botbarText}> Matches </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <View style={{paddingBottom: 3}}>
                            <Image style={styles.botbarIcons} source={require('./assets/Icons/messages_dark.png')}/>
                        </View>
                        <Text style={styles.botbarText}> DMs </Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.dark.bg,
  },
  topbarWrap: {
    height: Platform.OS === 'android' ? 63 : 51,
    top: '2%'
  },
  topbar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 8
  },
  titletext: {
    color: Themes.dark.text,
    fontFamily: 'Sydney-Bold',
    fontSize: 32
  },
  text: {
    color: Themes.dark.text,
    fontFamily: 'Sydney',
    fontSize: 34
  },
  subtext: {
    color: Themes.dark.text,
    fontFamily: 'Sydney',
    fontSize: 16
  },
  audiotext: {
    color: Themes.dark.text,
    fontFamily: 'Sydney',
    fontSize: 24
  },
  topicon: {
    width: Platform.OS === 'android' ? 50 : 38,
    height: Platform.OS === 'android' ? 50 : 38
  },
  middleWrap: {
    height: '77%',
    top: '4%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: 'center'
  },
  card: {
    height: '65%',
    width: '95%',
    borderRadius: 15,
    shadowColor: Themes.dark.shadows.shadowColor,
    shadowOpacity: Themes.dark.shadows.shadowOpacity,
    shadowRadius: Themes.dark.shadows.shadowRadius,
    shadowOffset: Themes.dark.shadows.shadowOffset,
    elevation: 8
  },
  profilePic: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  profileTextWrap: {
    flex: 1, 
    justifyContent: 'space-between',
    paddingBottom: 10
  },
  audioWrap: {
    height: 150, 
    width: '95%',
    backgroundColor: Themes.dark.bgSecondary,
    top: '3.5%',
    borderRadius: 30,
    shadowColor: Themes.dark.shadows.shadowColor,
    shadowOpacity: Themes.dark.shadows.shadowOpacity,
    shadowRadius: Themes.dark.shadows.shadowRadius,
    shadowOffset: Themes.dark.shadows.shadowOffset,
    elevation: 15
  },
  audio: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: '5%'
  },
  audioTextBox: {
    paddingTop: 10,
    paddingLeft: '3%'
  },
  playicon: {
    width: Platform.OS === 'android' ? 53 : 41,
    height: Platform.OS === 'android' ? 53 : 41
  },
  waveform: {
    width: Platform.OS === 'android' ? 251 : 197,
    height: Platform.OS === 'android' ? 48 : 36
  },
  botbarWrap: {
    height: '10%',
    marginTop: 'auto',
    backgroundColor: Themes.dark.navigation
  },
  botbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '3%'
  },
  botbarIcons: {
    width: Platform.OS === 'android' ? 34 : 25, 
    height: Platform.OS === 'android' ? 34 : 25,
    resizeMode: 'contain'
  },
  botbarText: {
    fontFamily: 'Sydney',
    color: Themes.dark.textSecondary,
    fontSize: 16
  },
});
