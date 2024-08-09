import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import { useFonts } from 'expo-font';
const tokenCache = {
  async getToken(key) {
    try {
      const item = await SecureStore.getItemAsync(key)
      if (item) {
        console.log(`${key} was used 🔐 \n`)
      } else {
        console.log('No values stored under key: ' + key)
      }
      return item
    } catch (error) {
      console.error('SecureStore get item error: ', error)
      await SecureStore.deleteItemAsync(key)
      return null
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value)
    } catch (err) {
      return
    }
  },
}
export default function App() {
  const [loaded, error] = useFonts({
    'sfpro': require('./assets/fonts/SF-Pro-Display-Regular.ttf'),
    'sfpro-med': require('./assets/fonts/SF-Pro-Display-Medium.ttf'),
    'sfpro-bold': require('./assets/fonts/SF-Pro-Display-Bold.ttf'),
  });
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey='pk_test_bWF4aW11bS1zYWlsZmlzaC0zNS5jbGVyay5hY2NvdW50cy5kZXYk'>
    <View style={styles.container}>
      {/* Sign In Component */}
      <SignedIn>
        <NavigationContainer>
          <TabNavigation/>
        </NavigationContainer>
      </SignedIn>
      {/* Sign Out Component */}
      <SignedOut>
      <Login/>
      </SignedOut>
      <StatusBar style="auto" />
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
});
