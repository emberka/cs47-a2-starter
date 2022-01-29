// JavaScript source code
import { Platform, StyleSheet, Text, View, StatusBar, Image, ImageBackground, TouchableOpacity} from 'react-native';

export default function TopBar() {
	return (
        <View style={styles.topbarWrap}>
            <View style={styles.topbar}>
                <TouchableOpacity>
                    <Image style={styles.topicon} source={require('../assets/Icons/menu_dark.png')}/>
                </TouchableOpacity>
                <Text style={styles.titletext}> 
                    ensom
                </Text>
                <TouchableOpacity>
                    <Image style={styles.topicon} source={require('../assets/Icons/moon.png')}/>
                </TouchableOpacity>
            </View>
        </View>
	);
}

const styles = StyleSheet.create({
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
  topicon: {
    width: Platform.OS === 'android' ? 50 : 38,
    height: Platform.OS === 'android' ? 50 : 38
  },
});