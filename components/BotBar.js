// JavaScript source code
import { Platform, StyleSheet, Text, View, StatusBar, Image, ImageBackground, TouchableOpacity} from 'react-native';

export default function BotBar() {
	return (
        <View style={styles.botbarWrap}>
            <View style={styles.botbar}>
                <TouchableOpacity>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <View style={{paddingBottom: 3}}>
                            <Image style={styles.botbarIcons} source={require('../assets/Icons/discover_dark.png')}/>
                        </View>
                        <Text style={styles.botbarText}> Discover </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <View style={{paddingBottom: 3}}>
                            <Image style={styles.botbarIcons} source={require('../assets/Icons/heart_dark.png')}/>
                        </View>
                        <Text style={styles.botbarText}> Matches </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <View style={{paddingBottom: 3}}>
                            <Image style={styles.botbarIcons} source={require('../assets/Icons/messages_dark.png')}/>
                        </View>
                        <Text style={styles.botbarText}> DMs </Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
	);
}

const styles = StyleSheet.create({
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