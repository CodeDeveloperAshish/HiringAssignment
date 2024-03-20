import "react-native-gesture-handler";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import ProductList from "./Src/Screens/ProductList";
import ProductDetail from "./Src/Screens/ProductDetail";
import BackButton from "./Src/Components/BackButton";
import Colors from "./Src/Utils/Colors";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/Fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/Fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/Fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen
          options={{
            title: "Product List",
            headerTitleStyle: {
              color: "#fff",
              fontFamily: "Poppins-Medium",
            },
            headerStyle: {
              backgroundColor: Colors.Primary,
              borderRadius: 15,
              height: 110,
            },
          }}
          name="ProductList"
          component={ProductList}
        />
        <Stack.Screen
          options={{
            title: "Product List",
            headerTitleStyle: {
              color: "#fff",
              fontFamily: "Poppins-Medium",
            },
            headerStyle: {
              backgroundColor: Colors.Primary,
              borderRadius: 15,
              height: 110,
            },
            headerLeft: () => <BackButton />,
          }}
          name="ProductDetail"
          component={ProductDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
