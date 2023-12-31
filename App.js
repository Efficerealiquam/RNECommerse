import { useFonts } from 'expo-font'
import * as SplashScreeen from 'expo-splash-screen'
import { useCallback } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Cart } from './screens';

const Stack = createNativeStackNavigator()

export default function App() {

  const [fonstLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fonstLoaded) await SplashScreeen.hideAsync();
  }, [fonstLoaded])

  if (!fonstLoaded) return null;


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Bottom Navigation'
          component={BottomTabNavigation}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
