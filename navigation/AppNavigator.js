import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import SignInScreen from "../screens/SignInScreen";
import PhoneNumberScreen from "../screens/PhoneNumberScreen";
import VerificationScreen from "../screens/VerificationScreen";
import SelectLocationScreen from "../screens/SelectLocationScreen";
import LogInScreen from "../screens/LogInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";
import ExploreScreen from "../screens/ExploreScreen";
import BeveragesScreen from "../screens/BeveragesScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import SearchScreen from "../screens/SearchScreen";
import CartScreen from "../screens/CartScreen";
import FavouriteScreen from "../screens/FavouriteScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Phone" component={PhoneNumberScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="Location" component={SelectLocationScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="Beverages" component={BeveragesScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Favourite" component={FavouriteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}