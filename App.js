import { StyleSheet, Text, View, Platform } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Device info</Text>
      <Text style={styles.property}>OS: {Platform.OS}</Text>
      <Text style={styles.property}>OS Version: {Platform.Version}</Text>
      { Platform.OS === 'ios' &&
        <Ionicon name="logo-apple" size='40' color='white'></Ionicon>
      }
      { Platform.OS === 'android' &&
        <Ionicon name="logo-android" size='40' color='black'></Ionicon>
      }
      { Platform.OS !== 'ios' && Platform.OS !== 'android' &&
        <Ionicon name="help-circle" size='40' color='#9d53ff'></Ionicon>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: '#b29ef8',
      },
      android: {
        backgroundColor: '#ffb57d',
      },
      default: {
        backgroundColor: '#f8d9c6',
      }
    })
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    ...Platform.select ({
      ios: {
        color: 'white',
      },
      android: {
        color: 'black',
      },
      default: {
        color: '#9d53ff',
      }
    })
  },
  property: {
    fontSize: 18,
    marginBottom: 10,
    ...Platform.select ({
      ios: {
        color: 'white',
      },
      android: {
        color: 'black',
      },
      default: {
        color: '#9d53ff',
      }
    })
  },
});
