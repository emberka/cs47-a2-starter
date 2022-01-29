// JavaScript source code
import { Platform, StyleSheet, Text, View, StatusBar, Image, ImageBackground, TouchableOpacity} from 'react-native';

export default function Content() {
	return (
        <View style={styles.middleWrap}>
            <View style={styles.card}>
                <ImageBackground style={styles.profilePic} imageStyle={{borderRadius: 15}} source={require('../assets/Profiles/mtl.jpg')}>
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
                    <Image style={styles.playicon} source={require('../assets/Icons/player_dark.png')}/>
                    <Image style={styles.waveform} source={require('../assets/Icons/audio_waveform_dark.png')}/>
                </View>
            </View>
        </View>
	);
}

const styles = StyleSheet.create({
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
});